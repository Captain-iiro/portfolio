import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "../components/Navbar/Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Barre de navigation principale avec menu hamburger responsive",
      },
    },
  },
  decorators: [
    (Story) => (
      <HelmetProvider>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </HelmetProvider>
    ),
  ],
};

// Story par défaut
export const Default = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Navigation par défaut avec tous les liens",
      },
    },
  },
};

// Story avec menu ouvert
export const MenuOpen = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Navigation avec le menu mobile ouvert",
      },
    },
  },
};

// Story sur page About
export const OnAboutPage = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Navigation sur la page About avec le lien actif",
      },
    },
  },
  decorators: [
    (Story) => (
      <HelmetProvider>
        <BrowserRouter initialEntries={["/about"]}>
          <Story />
        </BrowserRouter>
      </HelmetProvider>
    ),
  ],
};
