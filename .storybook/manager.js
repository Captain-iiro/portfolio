import { addons } from "storybook/manager-api";
import { themes } from "storybook/theming";

// Configuration du thème
addons.setConfig({
  theme: themes.dark,
  selectedPanel: "storybook/controls/panel",
  initialActive: "sidebar",
  showNav: true,
  showPanel: true,
  panelPosition: "bottom",
  enableShortcuts: true,
  showToolbar: true,
  selectedAddon: undefined,
  sidebar: {
    showRoots: true,
    collapsedRoots: ["other"],
  },
});
