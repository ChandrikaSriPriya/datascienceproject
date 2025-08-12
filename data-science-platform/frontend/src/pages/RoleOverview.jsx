import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import './RoleOverview.css';

const TABS = ['Courses', 'Projects', 'Quizzes', 'Articles'];

const mockItems = (type) => Array.from({ length: 8 }).map((_, i) => ({
  id: `${type}-${i + 1}`,
  title: `${type} ${i + 1}`,
  description: `A great ${type.toLowerCase()} to learn by doing.`,
}));

const Carousel = ({ items }) => {
  return (
    <div className="carousel">
      {items.map((it) => (
        <div key={it.id} className="carousel-card">
          <h4>{it.title}</h4>
          <p>{it.description}</p>
          <button className="btn-sm">See More</button>
        </div>
      ))}
    </div>
  );
};

const RoleOverview = () => {
  const { slug } = useParams();
  const [active, setActive] = useState('Courses');

  const title = useMemo(() => slug.replace(/-/g, ' ').replace(/^./, (s) => s.toUpperCase()), [slug]);

  return (
    <div className="role-overview">
      <header className="role-hero">
        <h1>{title}</h1>
        <p>Personalized roadmap and resources for the {title} path.</p>
      </header>

      <div className="tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`tab ${active === tab ? 'active' : ''}`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <section className="tab-content">
        {active === 'Courses' && <Carousel items={mockItems('Course')} />}
        {active === 'Projects' && <Carousel items={mockItems('Project')} />}
        {active === 'Quizzes' && <Carousel items={mockItems('Quiz')} />}
        {active === 'Articles' && <Carousel items={mockItems('Article')} />}
      </section>
    </div>
  );
};

export default RoleOverview;
