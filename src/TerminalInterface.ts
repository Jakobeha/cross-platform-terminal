import { Key } from 'key'

export interface TerminalInterface {
  /** Write text without newline */
  print: (text: string) => void
  /** Write text with newline after */
  println: (text: string) => void
  /** Write query and then read a line of input */
  prompt: (query: string) => Promise<string>
  /** Pause reading user input */
  pause: () => void
  /** Resume reading user input */
  resume: () => void
  /** Listen for key presses */
  on: (event: 'keypress', listener: (str: string, key: Key) => void) => void
  /** Stop the given function from listening to key presses */
  off: (event: 'keypress', listener: (str: string, key: Key) => void) => void
  /** Move the cursor to a fixed position */
  cursorTo: (x: number, y?: number) => Promise<void>
  /** Move the cursor by an offset */
  moveCursor: (dx: number, dy: number) => Promise<void>
  /** Clear the screen below the cursor */
  clearScreenDown: () => Promise<void>
  /** Clear the entire screen */
  clearScreen: () => Promise<void>
  /** Close this terminal interface */
  close: () => void
}
