# Feedback

A temporary notification component for system feedback (success, error, etc.).

## useVSPFeedback(config)

Creates a feedback controller.

- ### Parameters:
  - config (optional): Partial \<VSPFeedbackConfig \>
    - zIndex: number | string (default: 9999)
    - namespace: string (default: "FEEDBACK")
    - vertical: "top" | "bottom" (default: "top") - Vertical position
    - horizontal: "start" | "center" | "end" (default: "end") - Horizontal position
    - gap: string (default: "12px") - Gap between feedback items
    - verticalPadding: string (default: "12px") - Vertical padding from edge
    - horizontalPadding: string (default: "12px") - Horizontal padding from edge
- ### Returns: \{ showFeedback \}
  - showFeedback(component, props, options): Function to display feedback
    - component: Vue Component - Feedback content component
    - props (optional): \<VSPFeedbackPropsData\> (extends VSPPropsData)
      - onClosed: () => void - Close callback
      - onAnimationEnd: () => void - Transition end callback
      - options (optional): Partial \<VSPFeedbackOptions\>
      - transition: \<VSPTransitionType\> (default: \{ enter: "animate**bounceInRight", leave: "animate**bounceOutRight", speed: "faster" \})
      - duration: number (default: 3000) - Auto-close delay in ms (≥1000)
    - **Returns**: closeFeedback - Function to manually close the feedback

## Examples

<DemoPreview dir="demos/feedback" />
