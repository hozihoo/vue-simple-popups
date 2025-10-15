export enum VSPAnimationEnum {
  faster = 500,
  fast = 800,
  slower = 3000,
  slow = 2000,
}

export type VSPPropsData = Record<string, unknown>;
export type VSPAnimationSpeedType = "faster" | "fast" | "slower" | "slow";
export type VSPTransitionType = {
  enter: string;
  leave: string;
  speed: VSPAnimationSpeedType;
};

// Modal
export type VSPModalConfig = {
  zIndex: number | string;
  namespace: string;
};
export type VSPModalOptions = {
  transition: VSPTransitionType;
  closeOnClickMask: boolean;
  closeOnPressEscape: boolean;
  maskBackground: string;
  alignItems: string;
  justifyContent: string;
};
export type VSPModalPropsData = {
  onClosed?: () => void;
  onAnimationEnd?: () => void;
} & VSPPropsData;

// Dialog
export type VSPDialogOptions = {} & VSPModalOptions;
export type VSPDialogConfig = {} & VSPModalConfig;
export type VSPDialogPropsData<T> = {
  onClose?: () => void;
  onCancel?: () => void;
  onConfirm?: (data?: T | null) => void;
} & VSPModalPropsData;

// Drawer
export type VSPDrawerOptions = {} & VSPModalOptions;
export type VSPDrawerConfig = {} & VSPModalConfig;
export type VSPDrawerPropsData<T> = {
  onClose?: () => void;
  onCancel?: () => void;
  onConfirm?: (data?: T | null) => void;
} & VSPModalPropsData;

// Loading
export type VSPLoadingOptions = {} & VSPModalOptions;
export type VSPLoadingConfig = {} & VSPModalConfig;
export type VSPLoadingPropsData = {} & VSPModalPropsData;

// Captcha
export type VSPCaptchaOptions = {} & VSPModalOptions;
export type VSPCaptchaConfig = {} & VSPModalConfig;
export type VSPCaptchaPropsData<T> = {
  onCancel?: () => void;
  onRefresh?: () => void;
  onFinished?: (data?: T | null) => void;
} & VSPModalPropsData;

// Feedback
export type VSPFeedbackConfig = {
  zIndex: number | string;
  namespace: string;
  vertical: "top" | "bottom";
  horizontal: "start" | "center" | "end";
  gap: string;
  verticalPadding: string;
  horizontalPadding: string;
};
export type VSPFeedbackOptions = {
  transition: VSPTransitionType;
  duration: number;
};
export type VSPFeedbackPropsData = {
  onClosed?: () => void;
  onAnimationEnd?: () => void;
} & VSPPropsData;
