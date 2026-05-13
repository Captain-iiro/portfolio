import { useEffect } from "react";
import Plausible from "plausible-tracker";

const plausible = Plausible({
  domain: "abdourahmanabdillahi.com",
  trackLocalhost: true, // Optionnel: à false en production
});

export const Analytics = () => {
  useEffect(() => {
    plausible.enableAutoPageviews();
  }, []);

  return null;
};
