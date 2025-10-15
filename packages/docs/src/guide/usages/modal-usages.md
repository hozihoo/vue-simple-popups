# Modal

The base modal component that other popup components extend from. It provides core functionality for overlay, transitions, and positioning.

## useVSPModal(config)

Creates a modal controller.

- ### Parameters
  - config (optional): Partial \<VSPModalConfig\>
    - zIndex: number | string (default: 9998) - Z-index for the modal
    - namespace: string (default: "MODAL") - Unique namespace for the modal

- ### Returns: \{ showModal \}
  - showModal(component, props, options): Function to display the modal
    - component: Vue Component - The content component to display
    - props (optional): \<VSPModalPropsData\>
      - onClosed: () => void - Callback when modal is closed
      - onAnimationEnd: () => void - Callback when transition ends
    - options (optional): Partial \<VSPModalOptions\>
      - transition: \<VSPTransitionType\> (default: { enter: "animate__zoomIn", leave: "animate__zoomOut", speed: "faster" })
      - closeOnClickMask: boolean (default: true) - Close on mask click
      - closeOnPressEscape: boolean (default: true) - Close on Escape key
      - maskBackground: string (default: "rgba(0,0,0,.3)") - Overlay background
      - alignItems: string (default: "center") - Flex align-items for positioning
      - justifyContent: string (default: "center") - Flex justify-content for positioning
    - **Returns**: closeModal - Function to close the modal

## Examples

<DemoPreview dir="demos/modal" />
