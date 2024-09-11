import defaultColors from "../util/default-colors.json"
import darkColors from "../util/dark-theme-colors.json"
import { lightness } from "@theme-ui/color"
const theme = {
  colors: {
    ...defaultColors,
    text: "#000",
    background: "#fff",
    primary: "#5C2941",
    accent: "#fff",
    muted: "rgba(0, 0, 0, 0.7)",
    cardBg: "#fff",
    borderColor: "#540229",
    labelText: "#777",
    inputBorder: "#aaa",
    inputBackground: "#fff",
    socialIcons: lightness("siteColor", 0.4),
    socialIconsHover: lightness("siteColor", 0.3),
    buttonColor: lightness("siteColor", 0.9),
    buttonHoverBg: lightness("siteColor", 0.4),
    buttonHoverColor: lightness("siteColor", 0.8),
    modes: {
      dark: {
        text: "#000",
        background: "#fff",
        primary: "#5C2941",
        accent: "#fff",
        muted: "rgba(0, 0, 0, 0.7)",
        cardBg: "#fff",
        borderColor: "#540229",
        labelText: "#777",
        inputBorder: "#aaa",
        inputBackground: "#fff",
        socialIcons: lightness("siteColor", 0.5),
        socialIconsHover: lightness("siteColor", 0.9),
        buttonColor: lightness("siteColor", 0.7),
        buttonHoverBg: lightness("siteColor", 0.3),
        buttonHoverColor: lightness("siteColor", 0.9),
        ...darkColors,
      },
    },
  },
  links: {
    postLink: {
      color: "muted",
      "&:hover": {
        color: "text",
      },
    },
  },
  variants: {
    button: {
      bg: "siteColor",
      color: "buttonColor",
      "&:hover": {
        bg: "buttonHoverBg",
        color: "buttonHoverColor",
      },
    },
    socialIcons: {
      a: {
        color: "socialIcons",
        ":hover": {
          color: "socialIconsHover",
        },
      },
    },
  },
}

export default theme
