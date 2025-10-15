# Loading

A loading indicator overlay to block user interaction during processes.

## useVSPLoading(config)

Creates a loading controller.

- ### Parameters:
  - config (optional): Partial \<VSPLoadingConfig\> (extends VSPModalConfig)
    - zIndex: number | string (default: 9999)
    - namespace: string (default: "LOADING")
  - ### Returns: \{ showLoading \}
    - showLoading\<T\>(component, props, options): Function to display loading
      - component: Vue Component - Loading indicator component
      - props (optional): \<VSPLoadingPropsData\<T\>\> (extends VSPModalPropsData)
      - options (optional): Partial \<VSPLoadingOptions\> (extends VSPModalOptions)
          - Default transition: \{ enter: "animate__fadeIn", leave: "animate__fadeOut", speed: "faster" \}
          - Default closeOnClickMask: false
          - Default closeOnPressEscape: false
      - **Returns**: hideLoading - Function to hide the loading indicator

## Examples

<DemoPreview dir="demos/loading" />
