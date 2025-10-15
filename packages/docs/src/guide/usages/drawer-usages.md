# Drawer

A slide-in drawer component, typically used for additional content/forms.

## useVSPDrawer(config)

Creates a drawer controller.

- ### Parameters:
  - config (optional): Partial \<VSPDrawerConfig\> (extends VSPModalConfig)
    - zIndex: number | string (default: 9998)
    - namespace: string (default: "DRAWER")
  - ### Returns: \{ showDrawer \}
    - showDrawer\<T\>(component, props, options): Function to display the drawer
      - component: Vue Component - Drawer content component
      - props (optional): \<VSPDrawerPropsData\<T\>\> (extends VSPModalPropsData)
        - onClose: () => void - Close callback
        - onCancel: () => void - Cancel action callback
        - onConfirm: (data?: T | null) => void - Confirm action callback
      - options (optional): Partial \<VSPDrawerOptions\> (extends VSPModalOptions)
      - **Returns**: closeDrawer - Function to close the drawer

## Examples

<DemoPreview dir="demos/drawer" />
