const white = "#FFFFFF";
const red = "#B64164";
const purpleDark = "#B829EB";
const purple = "#B829EB";
const linkPurple = "#c780ff";
const green = "#128227";
const orange = "#C48A3D";
const grayLight = "#888";
const gray = "#F5F5F5";
const blackMedium = "#333333";
const blackLight = "#555555";
const black = "#000000";
const darkGray = "#222222";
const codeBg = "#000000";
const mediumGray = "#444";
const bg = "#1a191c";

export default {
  hideDownloadButton: true,
  scrollYOffset: 65,
  menuToggle: true,
  requiredPropsFirst: true,
  theme: {
    spacing: {
      unit: 8,
      sectionHorizontal: 24,
      sectionVertical: 24,
    },
    breakpoints: {
      small: "50rem",
      medium: "75rem",
      large: "105rem",
    },
    colors: {
      primary: {
        main: black,
        light: purple,
        dark: purple,
        contrastText: white,
      },
      success: {
        main: white,
        light: white,
        dark: white,
        contrastText: white,
      },
      warning: {
        main: white,
        light: white,
        dark: white,
        contrastText: white,
      },
      error: {
        main: white,
        light: white,
        dark: white,
        contrastText: white,
      },
      gray: {
        50: grayLight,
        100: gray,
      },
      text: {
        primary: white,
        secondary: white,
      },
      border: {
        dark: white,
        light: white,
      },
      responses: {
        success: {
          color: white,
          backgroundColor: darkGray,
        },
        error: {
          color: white,
          backgroundColor: darkGray,
        },
        redirect: {
          color: white,
          backgroundColor: darkGray,
        },
        info: {
          color: white,
          backgroundColor: grayLight,
        },
      },
      http: {
        get: purple,
        // TODO customize the following colors
        post: "#248fb2",
        put: "#9b708b",
        options: "#d3ca12",
        patch: "#e09d43",
        delete: "#e27a7a",
        basic: "#999",
        link: "#31bbb6",
        head: "#c167e4",
      },
    },
    schema: {
      linesColor: blackLight,
      defaultDetailsWidth: "75%",
      typeNameColor: grayLight,
      typeTitleColor: grayLight,
      requireLabelColor: red,
      labelsTextSize: "0.9em",
      nestingSpacing: "1em",
      nestedBackground: blackLight,
      arrow: {
        size: "1.1em",
        color: blackLight,
      },
    },
    typography: {
      fontSize: "17px",
      lineHeight: "1.6em",
      fontWeightRegular: "400",
      fontWeightBold: "500",
      fontWeightLight: "300",
      fontFamily: "Barlow, sans-serif",
      smoothing: "auto",
      optimizeSpeed: false,
      headings: {
        fontFamily: "Barlow, sans-serif",
        fontWeight: "500",
        lineHeight: "1.6em",
      },
      code: {
        fontSize: "13px",
        fontFamily: "Roboto Mono, monospace",
        lineHeight: "1.6em",
        fontWeight: "400",
        color: white,
        backgroundColor: mediumGray,
        wrap: true,
      },
      links: {
        color: linkPurple,
        visited: linkPurple,
        hover: linkPurple,
      },
    },
    sidebar: {
      width: "320px",
      backgroundColor: bg,
      textColor: white,
      activeTextColor: white,
      groupItems: {
        textTransform: "uppercase",
      },
      level1Items: {
        textTransform: "none",
      },
      arrow: {
        size: "1.5em",
        color: blackMedium,
      },
    },
    logo: {
      maxHeight: "15%",
      maxWidth: "15%",
      gutter: "2px",
    },
    rightPanel: {
      backgroundColor: "rgba(0,0,0,.1)",
      width: "45%",
      textColor: white,
    },
    codeBlock: {
      backgroundColor: codeBg,
    },
  },
};
