# Vue Simple Popups

The `vue-simple-popups` is a commonly used popup component library developed based on Vue 3, which provides various easy-to-use popup types like alert, confirm and prompt.

## Installation

```bash
# or pnpm or yarn
npm install vue-simple-popups
```

## Usages

```ts
import { useVSPFeedback } from "vue-simple-popups";
const { showFeedback } = useVSPFeedback(config);

const closeFeedback = showFeedback(YourComponent, props, options);
```
