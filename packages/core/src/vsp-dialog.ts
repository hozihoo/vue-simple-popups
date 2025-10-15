import type { Component } from "vue";
import type {
  VSPDialogPropsData,
  VSPDialogConfig,
  VSPDialogOptions,
} from "./definition";
import { useVSPModal } from "./vsp-modal";

export const useVSPDialog = (_config?: Partial<VSPDialogConfig>) => {
  const config: VSPDialogConfig = {
    zIndex: 9998,
    namespace: "DIALOG",
    ..._config,
  };
  const { showModal } = useVSPModal(config);
  const showDialog = <T = any>(
    component: Component,
    props?: VSPDialogPropsData<T>,
    _options?: Partial<VSPDialogOptions>
  ) => {
    const options: VSPDialogOptions = {
      transition: {
        enter: "animate__zoomIn",
        leave: "animate__zoomOut",
        speed: "faster",
      },
      closeOnClickMask: true,
      closeOnPressEscape: true,
      maskBackground: "rgba(0,0,0,.3)",
      justifyContent: "center",
      alignItems: "center",
      ..._options,
    };

    const closeModal = showModal(component, props, options);

    const closeDialog = () => {
      closeModal();
    };
    return closeDialog;
  };
  return { showDialog };
};
