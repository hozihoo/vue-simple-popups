import type { Component } from "vue";
import type {
  VSPCaptchaConfig,
  VSPCaptchaOptions,
  VSPCaptchaPropsData,
} from "./definition";
import { useVSPModal } from "./vsp-modal";

export const useVSPCaptcha = (_config?: Partial<VSPCaptchaConfig>) => {
  const config: VSPCaptchaConfig = {
    zIndex: 9996,
    namespace: "CAPTCHA",
    ..._config,
  };

  const { showModal } = useVSPModal(config);

  const showCaptcha = <T>(
    component: Component,
    props?: VSPCaptchaPropsData<T>,
    _options?: VSPCaptchaOptions
  ) => {
    const options: VSPCaptchaOptions = {
      transition: {
        enter: "animate__zoomIn",
        leave: "animate__zoomOut",
        speed: "faster",
      },
      closeOnClickMask: false,
      closeOnPressEscape: false,
      maskBackground: "rgba(0,0,0,.3)",
      justifyContent: "center",
      alignItems: "center",
      ..._options,
    };
    const closeModal = showModal(component, props, options);

    const closeCaptcha = () => {
      closeModal();
    };
    return closeCaptcha;
  };
  return { showCaptcha };
};
