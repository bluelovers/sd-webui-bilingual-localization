# i18n 語法規範 (SYNTAX)

本文件為在地化 JSON key / value 語法。
實作位置：`src/options.ts`（key 分流與載入）、`src/translate.ts`（比對與套用）。

---

## 一、檔案格式

- 純 JSON 物件，頂層攤平；查詢只做 `i18n[source]` 頂層比對，**巢狀物件內的 key 無法命中**。
- 同名 key 後者覆蓋前者（`JSON.parse` 行為）。
- **value 應一律為字串**；非字串值會在 `translation.startsWith(source)` 拋出 `TypeError`。

---

## 二、Key 語法（三種）

### 1. 一般 key — 精確比對

```json
{
  "Save": "儲存",
  "Style Fidelity": "风格仿真度"
}
```

比對規則：

- 原文先 `trim()` 後才比對；**只去頭尾空白**，不處理多行內部空白、不分大小寫。
- 原文命中 `^[\.\d]+$`（純數字 / 點，如 `1.5`、`123`、`.5`）→ **直接略過不翻譯**。
- 翻譯不存在、為空字串、或與原文相同 → 視為無翻譯，還原原文 / 移除既有雙語節點。

### 2. `@@` Regex key — 正則比對

```json
{
  "@@/^t2iadapter_zoedepth_(\\w+)(?: (\\[\\w+\\]))?$/": "t2iadapter_zoedepth_$1 $2 (ZoeDepth 结合相对和绝对深度)",
  "@@/photomaker/i": "PhotoMaker 个性化人像",
  "@@/step \\d+/": "步驟 $&"
}
```

- key 以 `@@` 開頭，其餘部分交由 `getRegex()` 解析成 RegExp（`options.ts`）。
- **兩種形式**：

| 形式 | 範例 | 解析結果 |
|---|---|---|
| `/pattern/flags`（以 `/` 開頭且被 `/` 分隔 ≥3 段） | `"@@/photomaker/i"` | pattern `photomaker`、flags `i` |
| 純字串 | `"@@/step \\d+/"` 以外的一般文字 | 自動跳脫 `.*+-?^${}()|[]\` 成逐字比對（區分大小寫、無 flags） |

- **value 為 `String.replace` 替換字串**，支援 `$&`（整體命中）、`$1`–`$9`（群組）、`` $` ``、`$'`、`$$`。
- 群組編號以**實際擷取群組**計；`(?: )` 非擷取群組不佔編號（上例 `$1` = `(\w+)`、`$2` = `(\[\w+])`）。
- 匹配依 **JSON 檔內鍵的出現順序**，**首個命中即用**；正則建議加上 `^...$` 錨定，避免被較早的通用 pattern 搶先命中。
- 解析失敗（非法 pattern / 非法 flags）→ 靜默丟棄，該 key 既不進 `i18n` 也不進 `i18nRegex`。
- ⚠️ 避免使用 `g` 旗標：`RegExp.test()` 搭配 `g` 會保留 `lastIndex`，造成後續來源字串比對跳過。`i` / `m` / `s` 等安全。

### 3. `##scope##skey` Scope key — 限定範圍比對

```json
{
  "##@.controlnet_control_type_filter_group##Normal": "法线图",
  "##txt2img_controlnet_ControlNet_controlnet_type_filter_radio##Normal": "法线图",
  "##settings_sampler-params##uniform": "均勻",
  "##@#setting_emphasis##Original": "Original (原始強調實作)"
}
```

- 正則 `^##(?<scope>.+)##(?<skey>.+)$`（貪婪，以**最後兩個 `##`** 為界）。
- **scope 標記法**：

| 寫法 | 轉換 | 適用選擇器 |
|---|---|---|
| `##@<selector>##key` | `@` 前綴去除 → scope = `<selector>` | 任意 CSS 選擇器（class、ID、複合） |
| `##name##key` | 自動補 `#` → scope = `#name` | **僅 ID** 選擇器 |
| `##@##key`（`@` 後為空） | 降級為一般 key | — |

- ⚠️ **非 ID 選擇器務必加 `@`**：`##.foo##key` 會補成非法選擇器 `#.foo`，`closest()` 執行期拋 `SyntaxError`。
- 比對方式：由原文反查 `scopedSource[skey]` 取得所有 scope，逐個 `el.parentElement.closest(scope)`，**首個命中者取用**。
- **優先序**：scope 命中 → 直接採用，不查全域；scope 未命中（元素在所有 scope 之外）→ 回落到一般 key → 再回落 regex。
- `@@` 與 scope key 在載入時即從 `i18n` 移除，**不會殘留在全域表**。

---

## 三、Value 語法

| 值 | 行為 |
|---|---|
| 一般字串 | 正常翻譯 |
| 替換字串（僅 `@@` key） | `String.replace` 語法：`$&`、`$1`–`$9`、`` $` ``、`$'`、`$$` |
| `""` 空字串 | falsy → **視為無翻譯**，走還原 / 移除分支 |
| `\n` | JSON 轉義 → 實際換行（用於 title / placeholder 組合格式） |
| `\"` 等轉義 | 標準 JSON 轉義 |
| 非字串（數字等） | ❌ 會在 `startsWith` 拋 `TypeError`，應避免 |

- element 型別的譯文與原文皆經 `htmlEncode()` 轉義 `& < > " '` 後才進 DOM。

---

## 四、查找順序（`doTranslate`）

```text
1. source = source.trim()；為空 或命中 ^[\.\d]+$            → 略過
2. scope 比對：scopedSource[source] → 首個 closest(scope) 命中 → 採用 scope 譯文
3. i18n[source] || checkRegex(source)（正則首命中）          → 採用全域譯文
4. 無翻譯 或 source === translation                          → 還原原文 / 移除雙語節點
5. config.order === "Original First"                         → 原文與譯文位置互換
6. translation.startsWith(source)                            → 簡化輸出（見下節）
7. 依 type 輸出
```

---

## 五、輸出格式（依 `EnumTranslateType`）

| type | 套用對象 | 格式 |
|---|---|---|
| `text` | rich 模式文字節點（`.output-html` 等） | 只放譯文 |
| `element` | 預設（label、按鈕、div…） | `<div class="bilingual__trans_wrapper">譯文<em class="bilingual__trans_source">原文</em></div>`；文字節點或純文字元素只放譯文 |
| `option` | `<option>` | `譯文 (原文)` |
| `title` | `title` 屬性 | `譯文\n原文` |
| `placeholder` | `placeholder` 屬性 | `譯文\n\n原文` |

### 兩個刻意設計

1. **`Original First` 互換**：`config.order === "Original First"` 時，上表「譯文 / 原文」位置對調（例如 element 變成 `原文 + em(譯文)`、title 變成 `原文\n譯文`）。
2. **譯文以原文開頭 → 只顯示譯文、不產生雙語 wrapper**（刻意設計）：`translation.startsWith(source)` 為真時，element / option / title / placeholder 一律只輸出譯文本身，不加 `<div>`/`<em>`、不附原文。

---

## 六、綜合應用範例

```json
{
  "Save": "儲存",

  "##@.controlnet_control_type_filter_group##Normal": "法线图",
  "##txt2img_controlnet_ControlNet_controlnet_type_filter_radio##Normal": "法线图",
  "##@#setting_emphasis##Original": "Original (原始強調實作)",

  "@@/^t2iadapter_zoedepth_(\\w+)(?: (\\[\\w+\\]))?$/": "t2iadapter_zoedepth_$1 $2 (ZoeDepth 结合相对和绝对深度)",
  "@@/photomaker/i": "PhotoMaker 个性化人像",

  "Style Fidelity (only for \"Balanced\" mode)": "风格仿真度 (仅用于 \"平衡\" 模式)",

  "IP-Adapter": "IP-Adapter (图像提示适配器)"
}
```

對應行為：

- `Save` → 命中一般 key，顯示 `儲存 + em(Save)`。
- 元素位於 `.controlnet_control_type_filter_group` 內的 `Normal` → 採 scope 譯文 `法线图`；不在任何 scope 內則回落全域（此例無全域 `Normal`）→ 不翻譯。
- 原文 `t2iadapter_zoedepth_absolute ( [sd15] )` → 正則命中，`$1`/`$2` 展開。
- `IP-Adapter (图像提示适配器)` 以原文 `IP-Adapter` 開頭 → **只顯示譯文，不產生雙語 wrapper**（刻意設計）。
- `1.5`、`.5` 等純數字原文 → 永不翻譯。

---

## 七、限制清單

- 不支援巢狀 key（僅頂層比對）。
- 純數字 / 點原文（`^[\.\d]+$`）不翻譯。
- 空字串 value = 無翻譯；value 必須為字串。
- `@@` 正則首命中即用，建議 `^...$` 錨定；避免 `g` 旗標。
- 非法正則 / flags 靜默丟棄。
- 非 ID 的 scope 選擇器必須加 `@` 前綴。
- `$n` 替換語義只存在於 `@@` key；一般 key 的 value 出現 `$1` 是字面字元。
