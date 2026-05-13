import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Footer from "../components/Footer/Footer";

export default {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Pied de page avec logo, copyright et liens sociaux",
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
        story: "Footer complet avec tous les éléments",
      },
    },
  },
};

// Story avec focus sur le logo
export const LogoFocus = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Footer avec focus sur le logo et le copyright",
      },
    },
  },
};

// Story avec focus sur les liens sociaux
export const SocialLinksFocus = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Footer avec focus sur les liens de réseaux sociaux",
      },
    },
  },
};
