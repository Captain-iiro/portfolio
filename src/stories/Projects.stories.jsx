import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Projects from "../components/Projects/Projects";

export default {
  title: "Components/Projects",
  component: Projects,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Section des projets avec grille de projets",
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
        story: "Section projets avec projets par défaut",
      },
    },
  },
};

// Story avec projets vides
export const EmptyProjects = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Section projets sans projets (état vide)",
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
        story: "Section projets avec focus sur le titre et l'icône",
      },
    },
  },
};
