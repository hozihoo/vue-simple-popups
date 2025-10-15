import {
  VSPAnimationEnum,
  type VSPModalConfig,
  type VSPModalOptions,
  type VSPModalPropsData,
} from "./definition";
import { createApp, type Component } from "vue";

export const useVSPModal = (_config?: Partial<VSPModalConfig>) => {
  const config: VSPModalConfig = {
    zIndex: 9998,
    namespace: "MODAL",
    ..._config,
  };
  const VSP_MODAL_ID = `VSP_${config.namespace}_ID`;
  let container = document.getElementById(VSP_MODAL_ID);
  if (!container) {
    container = document.createElement("div");
    container.id = VSP_MODAL_ID;
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    document.body.appendChild(container);
    container.style.zIndex = config.zIndex.toString();
  }
  const showModal = (
    component: Component,
    props?: VSPModalPropsData | null,
    _options?: Partial<VSPModalOptions>
  ) => {
    const instance = createApp(component, props);
    const options: VSPModalOptions = {
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
    const mask = document.createElement("div");
    mask.className = `animate__animated animate__faster animate__fadeIn`;
    mask.style.backgroundColor = options.maskBackground;
    mask.style.width = "100vw";
    mask.style.height = "100vh";
    mask.style.position = "fixed";
    mask.style.top = "0";
    mask.style.left = "0";
    mask.style.display = "flex";
    mask.style.justifyContent = options.justifyContent;
    mask.style.alignItems = options.alignItems;
    container.appendChild(mask);
    const el = document.createElement("div");
    el.className = `animate__animated animate__${options.transition.speed} ${options.transition.enter}`;
    el.addEventListener(
      "click",
      (event: MouseEvent) => {
        event.stopPropagation();
      },
      false
    );
    mask.appendChild(el);
    instance.mount(el);

    const pressEscapeToClose = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    const closeModal = () => {
      mask.removeEventListener("click", closeModal, false);
      window.removeEventListener("keyup", pressEscapeToClose, false);
      if (props?.onClosed) {
        props.onClosed();
      }
      instance.onUnmount(() => {
        if (props?.onAnimationEnd) {
          props.onAnimationEnd();
        }
        container.removeChild(mask);
      });
      if (
        options.transition &&
        options.transition.enter &&
        options.transition.leave
      ) {
        el.classList.remove(options.transition.enter);
        el.classList.add(options.transition.leave);
      }
      mask.classList.remove("animate__fadeIn");
      mask.classList.add("animate__fadeOut");
      setTimeout(() => {
        instance.unmount();
      }, VSPAnimationEnum[options.transition.speed || 0]);
    };

    if (options.closeOnClickMask) {
      mask.addEventListener("click", closeModal, false);
    }

    if (options.closeOnPressEscape) {
      window.addEventListener("keyup", pressEscapeToClose, false);
    }

    return closeModal;
  };
  return { showModal };
};
