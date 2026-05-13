import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Skills from "../components/Skills/Skills";

export default {
  title: "Components/Skills",
  component: Skills,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Section des compétences techniques avec liste des technologies",
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
        story: "Section compétences avec toutes les technologies",
      },
    },
  },
};

// Story avec compétences réduites
export const FewSkills = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Section compétences avec moins de technologies",
      },
    },
  },
};

// Story avec focus sur les compétences
export const SkillsFocus = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Section compétences avec focus sur les badges de compétences",
      },
    },
  },
};
