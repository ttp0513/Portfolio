export const caseStudies = {
  "routing-preview": {
    eyebrow: "Routing prototype",
    title: "A reusable analytics case-study route",
    summary:
      "This temporary page validates the portfolio's routing architecture before real project content is introduced.",
    metadata: [
      { label: "Role", value: "Portfolio owner" },
      { label: "Status", value: "Prototype" },
      { label: "Stack", value: "React + React Router" },
    ],
    sections: [
      {
        title: "Requirement",
        body: "A recruiter must be able to open and share a focused case study without searching through a long homepage.",
      },
      {
        title: "Design decision",
        body: "One dynamic route reads a project slug and renders a consistent case-study structure. Future projects can reuse this layout instead of duplicating page code.",
      },
      {
        title: "Validation",
        body: "This prototype confirms direct navigation, browser history, an unknown-route fallback, and a clear path back to the portfolio homepage.",
      },
      {
        title: "Next iteration",
        body: "Replace this dummy record with evidence-backed project data, then add project-specific visuals, results, limitations, and ownership statements.",
      },
    ],
  },
};
