import { createApp, type Component } from "vue";
import {
  VSPAnimationEnum,
  type VSPFeedbackConfig,
  type VSPFeedbackOptions,
  type VSPFeedbackPropsData,
} from "./definition";

export const useVSPFeedback = (_config?: Partial<VSPFeedbackConfig>) => {
  const config: VSPFeedbackConfig = {
    zIndex: 9999,
    namespace: "FEEDBACK",
    vertical: "top",
    horizontal: "end",
    gap: "12px",
    verticalPadding: "12px",
    horizontalPadding: "12px",
    ..._config,
  };
  const VSP_FEEDBACK_ID = `VSP_${config.namespace}_ID:${config.vertical}:${config.horizontal}`;
  let container = document.getElementById(VSP_FEEDBACK_ID);

  if (!container) {
    container = document.createElement("div");
    container.id = VSP_FEEDBACK_ID;
    container.style.width = "0";
    container.style.height = "0";
    container.style.position = "fixed";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.justifyContent = config.vertical;
    container.style.alignItems = config.horizontal;
    container.style.gap = config.gap;
    if (config.vertical === "top") {
      container.style.top = "0";
      container.style.paddingTop = config.verticalPadding;
    } else if (config.vertical === "bottom") {
      container.style.bottom = "0";
      container.style.paddingBottom = config.verticalPadding;
      container.style.justifyContent = "flex-end";
    }
    if (config.horizontal === "start") {
      container.style.left = "0";
      container.style.paddingLeft = config.horizontalPadding;
    } else if (config.horizontal === "center") {
      container.style.left = "50%";
    } else if (config.horizontal === "end") {
      container.style.right = "0";
      container.style.paddingRight = config.horizontalPadding;
    }

    document.body.appendChild(container);
    container.style.zIndex = config.zIndex.toString();
  }

  const showFeedback = (
    component: Component,
    props?: VSPFeedbackPropsData,
    _options?: Partial<VSPFeedbackOptions>
  ) => {
    const instance = createApp(component, props);
    const options: VSPFeedbackOptions = {
      transition: {
        enter: "animate__bounceInRight",
        leave: "animate__bounceOutRight",
        speed: "faster",
      },
      duration: 3000,
      ..._options,
    };
    const el = document.createElement("div");
    el.className = `animate__animated animate__${options.transition.speed} ${options.transition.enter}`;
    container.appendChild(el);
    instance.mount(el);

    const closeFeedback = () => {
      instance.onUnmount(() => {
        if (props?.onAnimationEnd) {
          props.onAnimationEnd();
        }
        container.removeChild(el);
      });

      if (
        options.transition &&
        options.transition.enter &&
        options.transition.leave
      ) {
        el.classList.remove(options.transition.enter);
        el.classList.add(options.transition.leave);
      }

      setTimeout(() => {
        instance.unmount();
      }, VSPAnimationEnum[options.transition.speed || 0]);
    };

    if (options.duration >= 1000) {
      setTimeout(() => {
        closeFeedback();
      }, options.duration);
    }

    return closeFeedback;
  };
  return { showFeedback };
};
