import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/Contact/Contact";

export default {
  title: "Interactive/Components",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Composants avec interactions et tests",
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

// Story interactive pour la navbar
export const NavbarInteractive = {
  render: () => <Navbar />,
  parameters: {
    docs: {
      description: {
        story: "Test interactif de la navbar avec ouverture du menu",
      },
    },
  },
};

// Story interactive pour le contact
export const ContactInteractive = {
  render: () => <Contact />,
  parameters: {
    docs: {
      description: {
        story:
          "Test interactif du composant Contact avec vérification du bouton",
      },
    },
  },
};
