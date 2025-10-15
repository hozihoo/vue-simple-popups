# Vue Simple Toast

The `VSPToast` provides a `flexible` interface for creating and managing toast notifications in your application. It offers a hook to initialize toast configurations and a method to dynamically display toast notifications with custom components, props, and animation options.

::: info
If you have highly customized requirements, secondary packaging is recommended.
:::

::: tip
`VSPToast` is developed based on `tailwindcss` and `animate.css`. Please make sure that the relevant styles are already in your project. If you use `unocss`, make sure that the relevant styles are loaded. If you are not sure, please use `safelist` in `uno.config.ts`.
:::

## useVSPToast

A custom hook to initialize and manage the VSP Toast system. It accepts optional global configuration and returns a method to display toasts.

### Return Value

An object containing the showToast method (see below for details).

## showToast

A method returned by `useVSPToast` to dynamically display a toast notification. It accepts a custom component, component props, and toast options, then returns a function to manually close the toast.

### Return Value

A function that, when called, immediately closes the displayed toast.

## Examples

This example demonstrates initializing the VSP Toast system, displaying a custom toast component, and controlling its lifecycle.

<!-- <DemoPreview dir="demos/vsp-toast" /> -->

## Type Definitions

This section outlines all TypeScript type definitions used by the VSP Toast system, including their properties, value types, and purposes.

### VSPToastConfig

A type for defining **global configuration** when initializing the VSP Toast via the `useVSPToast` hook. It controls the overall layout and styling behavior of all toasts.

```ts
export type VSPToastConfig = {
  alignment: "start" | "center" | "end";
  zIndex: number | string;
  gap: number | string;
  padding: number | string;
  namespace: string;
};
```

| Property  |             Type             |                                                                                     Description |
| --------- | :--------------------------: | ----------------------------------------------------------------------------------------------: |
| alignment | "start" \| "center" \| "end" |                            Specifies the horizontal alignment of toasts within their container. |
| zIndex    |       number \| string       |                  Defines the stack order of toasts (higher values appear above other elements). |
| gap       |       number \| string       | Sets the spacing between multiple stacked toasts (supports CSS units when using string values). |
| padding   |       number \| string       | Defines the internal padding of toast components (supports CSS units when using string values). |
| namespace |            string            |                              A CSS class namespace for scoping toast styles to avoid conflicts. |

#### Example

```ts
// Global toast configuration
const toastConfig: VSPToastConfig = {
  alignment: "end",
  zIndex: 1000,
  gap: 8,
  padding: "12px 16px",
  namespace: "vsp-toast",
};
```

### VSPToastOptions

A type for defining per-toast options when displaying a toast (via showToast). It controls behavior specific to individual toast instances.

```ts
export type VSPToastOptions = {
  duration: number;
  speed: "faster" | "fast" | "slower" | "slow";
  enterClass: string;
  leaveClass: string;
};
```

| Property   |                   Type                   |                                                        Description |
| ---------- | :--------------------------------------: | -----------------------------------------------------------------: |
| duration   |                  number                  |  Auto-hide delay in milliseconds (set to 0 for persistent toasts). |
| speed      | "faster" \| "fast" \| "slower" \| "slow" | Controls the animation speed for toast entry and exit transitions. |
| enterClass |                  string                  |   Custom CSS class applied when the toast **enters** the viewport. |
| leaveClass |                  string                  |   Custom CSS class applied when the toast **leaves** the viewport. |

#### Example

```ts
// Options for a transient success toast
const toastOptions: VSPToastOptions = {
  duration: 3000,
  speed: "fast",
  enterClass: "animate__flipInY",
  leaveClass: "animate__flipOutX",
};
```
