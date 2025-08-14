// frontend/src/utils/rolesData.js
export const roles = [
  {
    id: "data-analyst",                 // ← unique slug used in the URL
    title: "Data Analyst",
    summary:
      "Analyze data, build dashboards, and turn raw data into business insights.",
    heroImage: "/assets/analyst.jpg",   // put any image you have in /src/assets
    skills: [
      { key: "sql", name: "SQL", description: "Query and join tables." },
      { key: "python", name: "Python", description: "Pandas, NumPy basics." },
      { key: "viz", name: "Visualization", description: "Charts & dashboards." }
    ],
    roadmap: ["sql", "python", "viz"]   // order of learning for the airplane
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    summary:
      "Build predictive models, experiment, and deploy ML solutions.",
    heroImage: "/assets/scientist.jpg",
    skills: [
      { key: "python", name: "Python", description: "Data wrangling + OOP." },
      { key: "ml", name: "ML Basics", description: "Supervised/unsupervised." },
      { key: "deploy", name: "Model Deploy", description: "Serve models." }
    ],
    roadmap: ["python", "ml", "deploy"]
  }
];

// helper used later by the details page
export const getRoleById = (id) => roles.find((r) => r.id === id);
