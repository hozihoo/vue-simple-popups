# Vue Simple Popups

A lightweight popup component library for Vue 3, providing various popup types such as modals, dialogs, drawers, loading indicators, captchas, and feedback notifications.

::: tip
The animation classes (e.g., **animate\_\_zoomIn**, **animate\_\_slideInRight**) follow the naming convention of `Animate.css`, a popular CSS animation library. To use these animations:
Ensure Animate.css is included in your project (via CDN or package manager)
Use valid class names from Animate.css for enter and leave properties
You can also use custom CSS animations by defining your own classes and passing them to the transition configuration.
:::

## Installation

```bash
# npm
npm install vue-simple-popups

# yarn
yarn add vue-simple-popups

# pnpm
pnpm add vue-simple-popups
```

## Quick Start

```ts
import { useVSPDialog } from "vue-simple-popups";
const { showDialog } = useVSPDialog();

const closeDialog = showDialog(MyDialogComponent, {
  onConfirm() {
    console.log("Confirmed with data:", data);
    close();
  },
  onCancel() {
    console.log("Cancelled");
    close();
  },
});
```

