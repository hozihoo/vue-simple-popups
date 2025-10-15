import type { Component } from "vue";
import type {
  VSPDrawerConfig,
  VSPDrawerOptions,
  VSPDrawerPropsData,
} from "./definition";
import { useVSPModal } from "./vsp-modal";

export const useVSPDrawer = (_config?: Partial<VSPDrawerConfig>) => {
  const config: VSPDrawerConfig = {
    zIndex: 9998,
    namespace: "DRAWER",
    ..._config,
  };
  const { showModal } = useVSPModal(config);

  const showDrawer = <T>(
    component: Component,
    props?: VSPDrawerPropsData<T>,
    _options?: Partial<VSPDrawerOptions>
  ) => {
    const options: VSPDrawerOptions = {
      transition: {
        enter: "animate__slideInRight",
        leave: "animate__slideOutRight",
        speed: "faster",
      },
      closeOnClickMask: true,
      closeOnPressEscape: true,
      maskBackground: "rgba(0,0,0,.3)",
      justifyContent: "end",
      alignItems: "center",
      ..._options,
    };
    const closeModal = showModal(component, props, options);
    const closeDrawer = () => {
      closeModal();
    };
    return closeDrawer;
  };

  return { showDrawer };
};
