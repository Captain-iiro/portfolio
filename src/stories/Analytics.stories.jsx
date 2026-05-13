import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "../components/Analytics";

export default {
  title: "Components/Analytics",
  component: Analytics,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Composant d'analytics invisible pour le tracking",
      },
    },
  },
  decorators: [
    (Story) => (
      <HelmetProvider>
        <Story />
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
        story: "Composant analytics invisible qui initialise le tracking",
      },
    },
  },
};
