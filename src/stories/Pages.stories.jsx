import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "../pages/Home";
import About from "../pages/About";

export default {
  title: "Pages",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Pages complètes du portfolio",
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

// Story pour la page d'accueil
export const HomePage = {
  render: () => <Home />,
  parameters: {
    docs: {
      description: {
        story: "Page d'accueil complète avec toutes les sections",
      },
    },
  },
};

// Story pour la page About
export const AboutPage = {
  render: () => <About />,
  parameters: {
    docs: {
      description: {
        story: "Page About avec informations personnelles",
      },
    },
  },
};
