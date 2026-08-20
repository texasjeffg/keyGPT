# keyGPT

<p align="center">
  <img src="icons/icon128.png" width="128" alt="keyGPT icon">
</p>

**keyGPT** is a tiny Chrome extension that adds keyboard-first navigation to ChatGPT.

It is designed to make long ChatGPT conversations easier to navigate without repeatedly reaching for a mouse or scroll wheel.

The extension has two simple modes: **Input Mode** and **Navigation Mode**. Press `Esc` to switch between them.

## Input Mode

Input Mode is the normal ChatGPT experience.

* The ChatGPT prompt has focus.
* The text cursor is visible.
* Typing works normally.
* Speech-to-text and dictation work normally.

Press `Esc` to enter Navigation Mode.

## Navigation Mode

Navigation Mode removes focus from the ChatGPT prompt and enables single-key navigation.

The blinking text cursor disappears, providing a simple visual indication that Navigation Mode is active.

### Keyboard controls

The navigation keys are intentionally based on the familiar Vim-style controls used by extensions such as Vimium: j/k for smaller movements and d/u for larger page movements. This makes navigation quick and comfortable with one hand on the keyboard.

| Key   | Action                                          |
| ----- | ----------------------------------------------- |
| `d`   | Scroll down approximately half a page           |
| `u`   | Scroll up approximately half a page             |
| `j`   | Scroll down a smaller amount                    |
| `k`   | Scroll up a smaller amount                      |
| `End` | Jump directly to the bottom of the conversation |
| `Esc` | Return to Input Mode                            |

When you press `Esc` to leave Navigation Mode, keyGPT explicitly restores focus to the ChatGPT prompt so you can immediately type or dictate again.

## Installation

keyGPT is currently intended to be installed as an unpacked Chrome extension.

1. Download or clone this repository.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the root directory of this repository.
6. Open ChatGPT at `https://chatgpt.com`.
7. Reload the ChatGPT tab if it was already open.

The extension will automatically run on ChatGPT pages.

### Using keyGPT in Incognito

Chrome disables extensions in Incognito by default.

To enable keyGPT:

1. Open `chrome://extensions`.
2. Find **keyGPT**.
3. Click **Details**.
4. Enable **Allow in Incognito**.

keyGPT will then work normally in Incognito ChatGPT windows.

## How it works

keyGPT is intentionally small. It uses a Manifest V3 content script that runs on `chatgpt.com`.

The content script:

* listens for keyboard events
* explicitly focuses and blurs the ChatGPT prompt when changing modes
* locates ChatGPT's conversation scroll container
* performs the requested scrolling when navigation keys are pressed

There is no backend, framework, account, tracking, or external service.

## Project structure

```text
keyGPT/
├── icons/
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
├── content.js
├── manifest.json
└── README.md
```

## Compatibility

keyGPT currently targets the DOM structure used by `chatgpt.com`.

ChatGPT's frontend can change over time, so future changes to its DOM may require small selector updates in keyGPT.

This extension is actively maintained against the current ChatGPT interface. Because the developer uses keyGPT regularly, changes to ChatGPT's DOM that break navigation should be noticed and addressed as the interface evolves.

## Development

After changing the extension code:

1. Open `chrome://extensions`.
2. Reload keyGPT.
3. Reload the ChatGPT tab.
4. Test the changes.

## Disclaimer

keyGPT is an independent utility and is not affiliated with, endorsed by, or maintained by OpenAI.
