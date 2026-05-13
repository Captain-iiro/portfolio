import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Hero from "../components/Hero/Hero";

export default {
  title: "Components/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Section héro principale avec présentation et illustration",
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
        story: "Section héro complète avec texte et illustration",
      },
    },
  },
};

// Story avec focus sur le texte
export const TextFocus = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Section héro avec focus sur le contenu textuel",
      },
    },
  },
};

// Story avec focus sur l'illustration
export const IllustrationFocus = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Section héro avec focus sur l'illustration et la photo",
      },
    },
  },
};
