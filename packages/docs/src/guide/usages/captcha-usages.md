# Captcha

A popup for captcha verification.

## useVSPCaptcha(config)

Creates a captcha controller.

- ### Parameters:
  - config (optional): Partial \<VSPCaptchaConfig\> (extends VSPModalConfig)
    - zIndex: number | string (default: 9998)
    - namespace: string (default: "CAPTCHA")
  - ### Returns: \{ showCaptcha \}
    - showCaptcha\<T\>(component, props, options): Function to display the captcha
      - component: Vue Component - Captcha component
      - props (optional): \<VSPCaptchaPropsData\<T\>\> (extends VSPModalPropsData)
        - onCancel: () => void - Cancel callback
        - onRefresh: () => void - Captcha refresh callback
        - onFinished: (data?: T | null) => void - Captcha completion callback
      - options (optional): Partial \<VSPCaptchaOptions\> (extends VSPModalOptions)
      - **Returns**: closeCaptcha - Function to close the captcha

## Examples

<DemoPreview dir="demos/captcha" />
