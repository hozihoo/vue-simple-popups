import { defineConfig, presetWind4 } from "unocss";

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        theme: {
          mode: true,
        },
      },
    }),
  ],
  rules: [],
  shortcuts: {
    btn: "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer",
    "btn-primary":
      "bg-primary text-white hover:bg-primary/90 focus:bg-primary/85 active:bg-primary/80",
    "btn-secondary":
      "bg-secondary text-white hover:bg-secondary/90 focus:bg-secondary/85 active:bg-secondary/80",
    // 功能性按钮
    "btn-success":
      "bg-green-500 text-white hover:bg-green-600 focus:bg-green-400",
    "btn-danger": "bg-red-500 text-white hover:bg-red-600 focus:bg-red-400",
    "btn-warning":
      "bg-yellow-400 text-white hover:bg-yellow-500 focus:bg-yellow-300",
    "btn-info": "bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-400",

    // 状态样式
    "btn-disabled": "opacity-50 cursor-not-allowed pointer-events-none",

    // 加载状态
    "btn-loading": "opacity-75 cursor-wait",
  },
  theme: {
    colors: {
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
        hover: "hsl(var(--accent-hover))",
        lighter: "has(val(--accent-lighter))",
      },
      background: {
        deep: "hsl(var(--background-deep))",
        DEFAULT: "hsl(var(--background))",
      },
      border: {
        DEFAULT: "hsl(var(--border))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
      destructive: {
        ...createColorsPalette("destructive"),
        DEFAULT: "hsl(var(--destructive))",
      },

      foreground: {
        DEFAULT: "hsl(var(--foreground))",
      },

      input: {
        background: "hsl(var(--input-background))",
        DEFAULT: "hsl(var(--input))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      primary: {
        ...createColorsPalette("primary"),
        DEFAULT: "hsl(var(--primary))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        desc: "hsl(var(--secondary-desc))",
        foreground: "hsl(var(--secondary-foreground))",
      },
    },
    shadow: {
      float: `0 6px 16px 0 rgb(0 0 0 / 8%),
          0 3px 6px -4px rgb(0 0 0 / 12%),
          0 9px 28px 8px rgb(0 0 0 / 5%)`,
    },
    animation: {
      durations: {},
      keyframes: {},
    },
  },
  safelist: [],
});

function createColorsPalette(name: string) {
  return {
    50: `hsl(var(--${name}-50))`,
    100: `hsl(var(--${name}-100))`,
    200: `hsl(var(--${name}-200))`,
    300: `hsl(var(--${name}-300))`,
    400: `hsl(var(--${name}-400))`,
    500: `hsl(var(--${name}-500))`,
    600: `hsl(var(--${name}-600))`,
    700: `hsl(var(--${name}-700))`,
    800: `hsl(var(--${name}-800))`,
    900: `hsl(var(--${name}-900))`,
    950: `hsl(var(--${name}-950))`,
    // 激活状态下的颜色，适用于按钮按下时的背景色或边框色。
    active: `hsl(var(--${name}-700))`,
    // 浅色背景，适用于输入框或表单区域的背景。
    "background-light": `hsl(var(--${name}-200))`,
    // 适用于略浅的背景色，通常用于次要背景或略浅的区域。
    "background-lighter": `hsl(var(--${name}-100))`,
    // 最浅的背景色，适用于非常轻微的阴影或卡片的背景。
    "background-lightest": `hsl(var(--${name}-50))`,
    // 适用于普通边框，可能用于按钮或卡片的边框。
    border: `hsl(var(--${name}-400))`,
    // 浅色边框，适用于输入框或卡片的边框。
    "border-light": `hsl(var(--${name}-300))`,
    foreground: `hsl(var(--${name}-foreground))`,
    // 鼠标悬停状态下的颜色，适用于按钮悬停时的背景色或边框色。
    hover: `hsl(var(--${name}-600))`,
    // 主色文本
    text: `hsl(var(--${name}-500))`,
    // 主色文本激活态
    "text-active": `hsl(var(--${name}-700))`,
    // 主色文本悬浮态
    "text-hover": `hsl(var(--${name}-600))`,
  };
}
