# Vue Simple Popups

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

[![npm version](https://badge.fury.io/js/vue-simple-popups.svg)](https://www.npmjs.com/package/vue-simple-popups)

Lightweight & Efficient Vue 3 Popup Component Library. Easily implement various interaction scenarios such as modals, dialogs, drawers, loading indicators, etc.

## Features

- **Diverse Popup Types**: Built-in components including modals, dialogs, drawers, loading indicators, captcha popups, feedback notifications, etc.

- **Flexible Configuration**: Supports custom animation effects, positioning methods, mask styles, etc.

- **Lightweight & Dependency-free**: Minimal bundle size without unnecessary dependencies.

- **TypeScript Support**: Full type definitions for better development experience.

- **Easy Integration**: Simple API that integrates seamlessly with Vue 3 projects.

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

### Basic Usage

```vue
<template>
  <button @click="showBasicModal">Open Modal</button>
</template>

<script setup lang="ts">
import { useVSPModal } from "vue-simple-popups";
import ModalContent from "./ModalContent.vue";

const { showModal } = useVSPModal();

const showBasicModal = () => {
  showModal(
    ModalContent,
    {
      // Component props
      title: "Hello World",
    },
    {
      // Popup options
      closeOnClickMask: true,
      transition: {
        enter: "animate__zoomIn",
        leave: "animate__zoomOut",
        speed: "fast",
      },
    }
  );
};
</script>
```

### Using Built-in Templates

```vue
<template>
  <button @click="showDialog">Open Dialog</button>
</template>

<script setup lang="ts">
import { useVSPDialog } from "vue-simple-popups";
import { VSPDialogTemplate } from "vue-simple-popups/templates";

const { showDialog } = useVSPDialog();

const showDialog = () => {
  const close = handleShowDialog(VSPDialogTemplate, {
    title: "Confirm Action",
    content: "Are you sure you want to proceed?",
    onConfirm: () => {
      console.log("Confirmed");
      close();
    },
    onCancel: () => {
      console.log("Cancelled");
      close();
    },
  });
};
</script>
```

## Components

| Component | Description                 | Usage              |
| --------- | --------------------------- | ------------------ |
| Modal     | Basic modal dialog          | `useVSPModal()`    |
| Dialog    | Confirmation dialog         | `useVSPDialog()`   |
| Drawer    | Slide-in side panel         | `useVSPDrawer()`   |
| Loading   | Loading indicator           | `useVSPLoading()`  |
| Captcha   | Slide captcha verification  | `useVSPCaptcha()`  |
| Feedback  | Toast/notification messages | `useVSPFeedback()` |

## Animation

The component library uses animation classes following the naming convention of [Animate.css](https://animate.style/). To use these animations:

1. Include Animate.css in your project (via CDN or package manager)

2. Use valid class names from Animate.css for `enter` and `leave` transition properties

3. You can also use custom CSS animations by defining your own classes

## Development

```bash
# Clone repository
git clone https://github.com/hozihoo/vue-simple-popups.git
cd vue-simple-popups

# Install dependencies
pnpm install

# Start development server (components + docs)
pnpm start

# Build component library
pnpm build

# Build documentation
pnpm docs:build
```

## Contributing

1. Fork the repository

2. Create your feature branch (`git checkout -b feature/amazing-feature`)

3. Commit your changes (`git commit -m 'Add some amazing feature'`)

4. Push to the branch (`git push origin feature/amazing-feature`)

5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- [hozihoo](https://github.com/hozihoo)
