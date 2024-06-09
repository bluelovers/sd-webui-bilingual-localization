
function createLogger()
{
	const loggerTimerMap = new Map()
	const loggerConf = {
		badge: true,
		label: 'Logger',
		enable: false
	}
	return new Proxy(console, {
		get: (target, propKey) =>
		{
			if (propKey === 'init')
			{
				return (label: string, enable?: boolean) =>
				{
					loggerConf.label = label
					loggerConf.enable = enable ?? true
				}
			}
			else if (propKey === 'enable')
			{
				return (enable?: boolean) =>
				{
					return loggerConf.enable = enable ?? loggerConf.enable ?? true
				}
			}

			if (!(propKey in target)) return undefined

			return (...args) =>
			{
				if (!loggerConf.enable && propKey !== 'error') return

				let color = ['#39cfe1', '#006cab']

				let label, start
				switch (propKey)
				{
					case 'error':
						color = ['#f70000', '#a70000']
						break;
					case 'warn':
						color = ['#f7b500', '#b58400']
						break;
					case 'time':
						label = args[0]
						if (loggerTimerMap.has(label))
						{
							logger.warn(`Timer '${label}' already exisits`)
						}
						else
						{
							loggerTimerMap.set(label, performance.now())
						}
						return
					case 'timeEnd':
						label = args[0];
						start = loggerTimerMap.get(label)
						if (start === undefined)
						{
							logger.warn(`Timer '${label}' does not exist`)
						}
						else
						{
							loggerTimerMap.delete(label)
							logger.log(`${label}: ${performance.now() - start} ms`)
						}
						return
					case 'groupEnd':
						loggerConf.badge = true
						break
				}

				const badge = loggerConf.badge ? [
					`%c${loggerConf.label}`,
					`color: #fff; background: linear-gradient(180deg, ${color[0]}, ${color[1]}); text-shadow: 0px 0px 1px #0003; padding: 3px 5px; border-radius: 4px;`
				] : []

				target[propKey](...badge, ...args)

				if (propKey === 'group' || propKey === 'groupCollapsed')
				{
					loggerConf.badge = false
				}
			}
		}
	}) as typeof console & {
		init(label: string, enable?: boolean): void,
		enable(enable?: boolean): boolean,
	}
}

export const logger = createLogger()
export const loggerShow = createLogger()

export function consoleDebug(...argv)
{
	loggerShow.debug(...argv)
}

export function consoleLog(...argv)
{
	loggerShow.log(...argv)
}

export function consoleInfo(...argv)
{
	loggerShow.info(...argv)
}

export function consoleError(...argv)
{
	loggerShow.error(...argv)
}
