import { useEffect, useState } from "react";

const RoadmapAirplane = () => {
  // default list
  const [skills, setSkills] = useState([
    { id: 1, name: "HTML", completed: true },
    { id: 2, name: "CSS", completed: true },
    { id: 3, name: "SQL", completed: false },
    { id: 4, name: "Excel", completed: false },
    { id: 5, name: "Python", completed: false },
  ]);

  // 1) load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("skillsProgress");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setSkills(parsed);
      } catch {}
    }
  }, []);

  // 2) save on change
  useEffect(() => {
    localStorage.setItem("skillsProgress", JSON.stringify(skills));
  }, [skills]);

  // mark as done and suggest next
  const completeSkill = (skillId) => {
    const updated = skills.map((s) =>
      s.id === skillId ? { ...s, completed: true } : s
    );
    setSkills(updated);

    // find next incomplete AFTER the current index (use updated array!)
    const idx = updated.findIndex((s) => s.id === skillId);
    const next = updated.slice(idx + 1).find((s) => !s.completed);
    if (next) {
      setTimeout(() => {
        alert(
          `Great job completing ${updated[idx].name}! Let's get started with ${next.name}!`
        );
      }, 300);
    }
  };

  // plane position from progress
  const completedCount = skills.filter((s) => s.completed).length;
  const airplanePosition =
    completedCount > 0 ? (completedCount / skills.length) * 100 : 5;

  return (
    <div className="roadmap-container" style={{ padding: 24 }}>
      <h2 className="text-2xl font-bold mb-6">My Learning Journey</h2>

      <div
        className="relative mx-auto"
        style={{ height: 260, width: "100%", maxWidth: 900 }}
      >
        {/* Road */}
        <div
          className="absolute left-0 rounded-full"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            width: "100%",
            height: 8,
            background: "#94a3b8", // gray-400
          }}
        />

        {/* Airplane (emoji bubble) */}
        <div
          className="absolute transition-all duration-700 ease-in-out"
          style={{
            top: "50%",
            left: `${airplanePosition}%`,
            transform: "translate(-50%, -110%)",
            width: 44,
            height: 44,
            borderRadius: 9999,
            background: "white",
            boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
          }}
        >
          ✈️
        </div>

        {/* Houses (skills) */}
        {skills.map((skill, index) => {
          const left = (index / (skills.length - 1)) * 100;
          const isDone = skill.completed;
          return (
            <div
              key={skill.id}
              className="absolute"
              style={{
                top: "50%",
                left: `${left}%`,
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              {/* body */}
              <div
                role="button"
                onClick={() => !isDone && completeSkill(skill.id)}
                style={{
                  width: 56, // fallback if Tailwind not active
                  height: 36,
                  margin: "0 auto",
                  borderRadius: "8px 8px 0 0",
                  position: "relative",
                  cursor: isDone ? "default" : "pointer",
                  background: isDone ? "#86efac" : "#fb923c", // green-300 / orange-400
                }}
                title={isDone ? "Completed" : "Click to complete"}
              >
                {/* roof */}
                <div
                  style={{
                    position: "absolute",
                    top: -14,
                    left: 0,
                    width: 0,
                    height: 0,
                    borderLeft: "28px solid transparent",
                    borderRight: "28px solid transparent",
                    borderBottom: `18px solid ${
                      isDone ? "#16a34a" : "#c2410c"
                    }`, // green-600 / orange-700
                  }}
                />
              </div>
              <span
                style={{ display: "block", marginTop: 8, fontWeight: 600 }}
              >
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoadmapAirplane;
