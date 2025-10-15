import type { Component } from "vue";
import type {
  VSPLoadingConfig,
  VSPLoadingOptions,
  VSPLoadingPropsData,
} from "./definition";
import { useVSPModal } from "./vsp-modal";

export const useVSPLoading = (_config?: Partial<VSPLoadingConfig>) => {
  const config: VSPLoadingConfig = {
    zIndex: 9999,
    namespace: "LOADING",
    ..._config,
  };
  const { showModal } = useVSPModal(config);
  const showLoading = (
    component: Component,
    props?: VSPLoadingPropsData,
    _options?: Partial<VSPLoadingOptions>
  ) => {
    const options: VSPLoadingOptions = {
      transition: {
        enter: "animate__fadeIn",
        leave: "animate__fadeOut",
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
    const hideLoading = () => {
      closeModal();
    };
    return hideLoading;
  };

  return { showLoading };
};
