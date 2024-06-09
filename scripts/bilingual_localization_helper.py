# This helper script loads the list of localization files and
# exposes the current localization file name and path to the javascript side

import os
import gradio as gr
from pathlib import Path
from modules import script_callbacks, shared
import json

localizations = {}

# Webui root path
ROOT_DIR = Path().absolute()

# The localization files
I18N_DIRS = ""


def list_localizations():
    dirname = getattr(shared.cmd_opts, "localizations_dir", None) or "localizations"
    if dirname is None or dirname == "":
        dirname = "localizations"

    localizations.clear()

    print("dirname: ", dirname)

    def set_entry(key: str, value: Path or str):
        localizations[key] = str(Path(value).relative_to(ROOT_DIR).as_posix())

    if dirname:
        for file in os.listdir(dirname):
            fn, ext = os.path.splitext(file)
            if ext.lower() != ".json":
                continue

            set_entry(fn, os.path.join(dirname, file))

    from modules import scripts
    for file in scripts.list_scripts("localizations", ".json"):
        fn, ext = os.path.splitext(file.filename)
        set_entry(fn, file.path)

    print("localizations: ", localizations)

    # I18N_DIRS = {k: str(Path(v).relative_to(ROOT_DIR).as_posix()) for k, v in localizations.items()}
    I18N_DIRS = json.dumps(localizations)

    print("I18N_DIRS: ", I18N_DIRS)


def refresh_list_localizations(node=None):
    list_localizations()

    if hasattr(shared.opts.data, "bilingual_localization_dirs") or node is not None:

        shared.opts.data["bilingual_localization_dirs"] = I18N_DIRS
        shared.opts.set("bilingual_localization_dirs", I18N_DIRS)
        if node is not None:
            node.value = I18N_DIRS


# Register extension options
def on_ui_settings():
    refresh_list_localizations()

    BL_SECTION = ("bl", "Bilingual Localization")
    # enable in settings
    shared.opts.add_option("bilingual_localization_enabled",
                           shared.OptionInfo(True, "Enable Bilingual Localization", section=BL_SECTION))

    # enable devtools log
    shared.opts.add_option("bilingual_localization_logger",
                           shared.OptionInfo(False, "Enable Devtools Log", section=BL_SECTION))

    # all localization files path in hidden option
    bilingual_localization_dirs = shared.opts.add_option("bilingual_localization_dirs",
                                                         shared.OptionInfo(I18N_DIRS, "Localization dirs",
                                                                           section=BL_SECTION,
                                                                           component_args={"visible": True, "interactive": False}))

    # current localization file
    shared.opts.add_option("bilingual_localization_file", shared.OptionInfo("None",
                                                                            "Localization file (Please leave `User interface` - `Localization` as None)",
                                                                            gr.Dropdown, lambda: {
            "choices": ["None"] + list(localizations.keys())}, refresh=lambda: refresh_list_localizations(
            bilingual_localization_dirs),
                                                                            section=BL_SECTION))

    # translation order
    shared.opts.add_option("bilingual_localization_order",
                           shared.OptionInfo("Translation First", "Translation display order", gr.Radio,
                                             {"choices": ["Translation First", "Original First"]}, section=BL_SECTION))


script_callbacks.on_ui_settings(on_ui_settings)
