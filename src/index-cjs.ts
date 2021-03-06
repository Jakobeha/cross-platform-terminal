import { PLATFORM } from 'platform'
import type { TerminalInterface } from 'TerminalInterface'

export let createTerminalInterface: () => TerminalInterface
/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-var-requires */
try {
  if (PLATFORM === 'web') {
    createTerminalInterface = require('terminal-web').createTerminalInterface
  } else if (PLATFORM === 'cli') {
    const module = require('terminal-cli')
    module.initModule({ readline: require('readline') })
    createTerminalInterface = module.createTerminalInterface
  } else {
    // noinspection ExceptionCaughtLocallyJS
    throw new Error(`Unsupported platform: ${PLATFORM}`)
  }
} catch (error) {
  // Try block is needed to suppress esbuild warning
  throw error
}
/* eslint-enable no-useless-catch */
/* eslint-enable @typescript-eslint/restrict-template-expressions */
/* eslint-enable @typescript-eslint/no-var-requires */

export type { TerminalInterface }
