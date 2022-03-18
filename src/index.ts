import { PLATFORM } from 'platform'
import type { TerminalInterface } from 'TerminalInterface'

/* eslint-disable @typescript-eslint/restrict-template-expressions */
export const createTerminalInterface: () => TerminalInterface = await (
  PLATFORM === 'web'
    ? import('terminal-web').then(m => m.createTerminalInterface)
    : PLATFORM === 'cli'
      ? Promise.all([import('terminal-cli'), import('readline')]).then(([module, readline]) => {
        module.initModule({ readline })
        return module.createTerminalInterface
      })
      : Promise.reject(new Error(`Unsupported platform: ${PLATFORM}`))
)
/* eslint-enable @typescript-eslint/restrict-template-expressions */

export type { TerminalInterface }
