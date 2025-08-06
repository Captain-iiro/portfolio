import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";

export default {
  title: "States",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "États différents des composants",
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

// État de chargement pour les projets
export const ProjectsLoading = {
  render: () => <Projects />,
  parameters: {
    docs: {
      description: {
        story: "Section projets en état de chargement",
      },
    },
  },
};

// État vide pour les projets
export const ProjectsEmpty = {
  render: () => <Projects />,
  parameters: {
    docs: {
      description: {
        story: "Section projets sans projets (état vide)",
      },
    },
  },
};

// État avec erreur pour les compétences
export const SkillsError = {
  render: () => <Skills />,
  parameters: {
    docs: {
      description: {
        story: "Section compétences avec erreur de chargement",
      },
    },
  },
};

// État de succès pour le contact
export const ContactSuccess = {
  render: () => <Contact />,
  parameters: {
    docs: {
      description: {
        story: "Section contact avec message envoyé avec succès",
      },
    },
  },
};
