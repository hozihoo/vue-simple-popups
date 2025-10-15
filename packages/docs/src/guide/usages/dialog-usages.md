# Dialog

A standard dialog popup for confirmations, alerts, etc.

## useVSPDialog(config)
Creates a dialog controller.

- ### Parameters:
  - config (optional): Partial \<VSPDialogConfig\> (extends VSPModalConfig)
    - zIndex: number | string (default: 9998)
    - namespace: string (default: "DIALOG")
  - ### Returns: \{ showDialog \}
    - showDialog\<T\>(component, props, options): Function to display the dialog
      - component: Vue Component - Dialog content component
      - props (optional): \<VSPDialogPropsData\<T\>\> (extends VSPModalPropsData)
        - onClose: () => void - Close callback
        - onCancel: () => void - Cancel action callback
        - onConfirm: (data?: T | null) => void - Confirm action callback
      - options (optional): Partial \<VSPDialogOptions\> (extends VSPModalOptions)
      - **Returns**: closeDialog - Function to close the dialog

## Examples

<DemoPreview dir="demos/dialog" />
