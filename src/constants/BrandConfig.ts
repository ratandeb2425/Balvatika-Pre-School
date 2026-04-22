/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const BrandConfig = {
  name: "BalVatika Pre-School",
  colors: {
    amber: {
      soft: "#FFF7ED",
      primary: "#F97316", // Professional Orange-500
      dark: "#EA580C",
    },
    sky: {
      soft: "#E0F2FE", // sky-100
      primary: "#0EA5E9", // sky-500
      dark: "#0284C7",
    },
    leaf: {
      soft: "#DCFCE7", // green-100
      primary: "#22C55E", // green-500
      dark: "#16A34A",
    },
    text: {
      main: "#111827",
      muted: "#4B5563",
    }
  },
  typography: {
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  },
  cta: {
    primary: "Apply for 2026-27",
    secondary: "Watch Virtual Tour",
    tour: "Book a Tour",
  },
  levels: [
    {
      id: "balvatika-1",
      name: "Balvatika 1",
      age: "3-4 Years",
      focus: "Sensory exploration & social learning",
      outcomes: ["Communication skills", "Fine motor development", "Emotional awareness"],
      color: "sky", // Match design: B1 is Sky
    },
    {
      id: "balvatika-2",
      name: "Balvatika 2",
      age: "4-5 Years",
      focus: "Phonics, numeracy, and collaboration",
      outcomes: ["Early literacy", "Math logic", "Creative expression"],
      color: "leaf", // Match design: B2 is Green
    },
    {
      id: "balvatika-3",
      name: "Balvatika 3",
      age: "5-6 Years",
      focus: "Primary readiness & creative arts",
      outcomes: ["Complex problem solving", "Critical thinking", "Self-regulation"],
      color: "amber", // Match design: B3 is Orange
    }
  ]
};
