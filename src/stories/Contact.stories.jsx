import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Contact from "../components/Contact/Contact";

export default {
  title: "Components/Contact",
  component: Contact,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Section de contact avec formulaire et informations",
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
        story: "Section contact complète avec bouton d'action",
      },
    },
  },
};

// Story avec focus sur le titre
export const TitleFocus = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Section contact avec focus sur le titre et la description",
      },
    },
  },
};

// Story avec focus sur le bouton
export const ButtonFocus = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Section contact avec focus sur le bouton d'action",
      },
    },
  },
};
