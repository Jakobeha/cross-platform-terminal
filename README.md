[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# cross-platform-terminal: emulates a lightweight terminal when run in the browser

cross-platform-terminal allows you to make terminal applications which also work when embedded into websites via `<script>`.

It's main use case it to allow limited terminal support in otherwise cross-platform (isomorphic) modules. The terminal in the browser is fairly basic, e.g. it won't support ANSI escapes.

Example:

```ts
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
```

## Installing (with pnpm)

```bash
# if you don't have pnpm installed, uncomment the next line
# curl -fsSL https://get.pnpm.io/install.sh | sh -
pnpm add @raycenity/cross-platform-terminal
```

### Repository info

cross-platform-terminal is built using [esbuild](https://esbuild.org/). The package manager used is [pnpm](https://pnpm.io/). Linting is done by [standard](https://standardjs.com/), however we use a slightly modified version removing some warnings (`ts-standardx.mjs`). Feel free to submit issues / pull requests on the [Github](https://github.com/Jakobeha/cross-platform-terminal).
