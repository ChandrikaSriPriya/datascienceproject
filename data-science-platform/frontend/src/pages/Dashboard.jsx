import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState('overview');
  const [userProgress, setUserProgress] = useState({
    completed: 42,
    total: 100,
    lastActivity: 'Machine Learning Fundamentals',
    streak: 18
  });
  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [stats, setStats] = useState({
    hoursLearned: 56,
    skillsMastered: 12,
    projectsCompleted: 7
  });

  useEffect(() => {
    // Simulate API calls
    setRecommendedCourses([
      {
        id: 1,
        title: "Advanced Python for Data Science",
        progress: 65,
        category: "Programming",
        icon: "🐍",
        color: "#3b82f6"
      },
      {
        id: 2,
        title: "Deep Learning Specialization",
        progress: 30,
        category: "Machine Learning",
        icon: "🧠",
        color: "#8b5cf6"
      },
      {
        id: 3,
        title: "SQL for Data Analysis",
        progress: 85,
        category: "Databases",
        icon: "🗃️",
        color: "#06b6d4"
      }
    ]);

    setRecentActivity([
      {
        id: 1,
        type: "course",
        title: "Completed: Data Visualization with Matplotlib",
        time: "2 hours ago",
        icon: "📊"
      },
      {
        id: 2,
        type: "project",
        title: "Submitted: Customer Segmentation Project",
        time: "1 day ago",
        icon: "📈"
      },
      {
        id: 3,
        type: "quiz",
        title: "Passed: Statistics Fundamentals Quiz (92%)",
        time: "3 days ago",
        icon: "🧮"
      },
      {
        id: 4,
        type: "course",
        title: "Started: Time Series Analysis",
        time: "5 days ago",
        icon: "⏳"
      }
    ]);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99]
      } 
    }
  };

  const goToCourse = (courseId) => {
    history.push(`/courses/${courseId}`);
  };

  const goToSkills = () => {
    history.push('/skills');
  };

  return (
    <div className="dashboard-container">
      {/* Dashboard Header */}
      <header className="dashboard-header">
        <motion.div 
          className="header-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="welcome-message">
            <h1>Welcome back, <span>Alex</span></h1>
            <p>Continue your data science journey</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="user-profile">
            <div className="profile-image">
              <span>AD</span>
            </div>
            <div className="profile-streak">
              <span className="streak-count">{userProgress.streak}</span>
              <span className="streak-label">day streak</span>
            </div>
          </motion.div>
        </motion.div>
      </header>

      {/* Dashboard Navigation */}
      <nav className="dashboard-nav">
        <ul>
          <li 
            className={activeTab === 'overview' ? 'active' : ''}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </li>
          <li 
            className={activeTab === 'courses' ? 'active' : ''}
            onClick={() => setActiveTab('courses')}
          >
            My Courses
          </li>
          <li 
            className={activeTab === 'projects' ? 'active' : ''}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </li>
          <li 
            className={activeTab === 'skills' ? 'active' : ''}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </li>
        </ul>
      </nav>

      {/* Main Dashboard Content */}
      <main className="dashboard-content">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div 
            className="overview-grid"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Progress Card */}
            <motion.div 
              className="dashboard-card progress-card"
              variants={itemVariants}
            >
              <h3>Your Learning Progress</h3>
              <div className="progress-circle">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path className="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path className="circle-fill"
                    strokeDasharray={`${userProgress.completed}, 100`}
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.5" className="percentage">{userProgress.completed}%</text>
                </svg>
              </div>
              <div className="progress-details">
                <p>Last activity: <span>{userProgress.lastActivity}</span></p>
                <button 
                  className="continue-button"
                  onClick={() => goToCourse(1)}
                >
                  Continue Learning
                </button>
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div 
              className="dashboard-card stats-card"
              variants={itemVariants}
            >
              <h3>Your Learning Stats</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-icon">⏱️</div>
                  <div className="stat-value">{stats.hoursLearned}</div>
                  <div className="stat-label">Hours Learned</div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">🏆</div>
                  <div className="stat-value">{stats.skillsMastered}</div>
                  <div className="stat-label">Skills Mastered</div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">📂</div>
                  <div className="stat-value">{stats.projectsCompleted}</div>
                  <div className="stat-label">Projects</div>
                </div>
              </div>
            </motion.div>

            {/* Recommended Courses */}
            <motion.div 
              className="dashboard-card courses-card"
              variants={itemVariants}
            >
              <div className="card-header">
                <h3>Recommended Courses</h3>
                <button className="view-all" onClick={() => setActiveTab('courses')}>
                  View All
                </button>
              </div>
              <div className="courses-list">
                {recommendedCourses.map(course => (
                  <div 
                    key={course.id} 
                    className="course-item"
                    onClick={() => goToCourse(course.id)}
                  >
                    <div className="course-icon" style={{ backgroundColor: course.color }}>
                      {course.icon}
                    </div>
                    <div className="course-info">
                      <h4>{course.title}</h4>
                      <p>{course.category}</p>
                    </div>
                    <div className="course-progress">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ 
                            width: `${course.progress}%`,
                            backgroundColor: course.color
                          }}
                        ></div>
                      </div>
                      <span>{course.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div 
              className="dashboard-card activity-card"
              variants={itemVariants}
            >
              <h3>Recent Activity</h3>
              <div className="activity-list">
                {recentActivity.map(activity => (
                  <div key={activity.id} className="activity-item">
                    <div className="activity-icon">
                      {activity.icon}
                    </div>
                    <div className="activity-details">
                      <p className="activity-title">{activity.title}</p>
                      <p className="activity-time">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills Card */}
            <motion.div 
              className="dashboard-card skills-card"
              variants={itemVariants}
              onClick={goToSkills}
            >
              <h3>Your Skill Profile</h3>
              <div className="skills-visualization">
                <div className="radar-chart">
                  {/* This would be replaced with an actual chart component */}
                  <div className="radar-lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                  </div>
                  <div className="radar-skills">
                    <div className="skill-point" style={{ top: '20%', left: '50%' }}>Python</div>
                    <div className="skill-point" style={{ top: '60%', left: '20%' }}>SQL</div>
                    <div className="skill-point" style={{ top: '40%', left: '70%' }}>ML</div>
                    <div className="skill-point" style={{ top: '70%', left: '60%' }}>Stats</div>
                    <div className="skill-point" style={{ top: '30%', left: '30%' }}>Viz</div>
                  </div>
                </div>
                <button className="view-skills-btn">
                  View Full Skill Profile
                </button>
              </div>
            </motion.div>

            {/* Community Card */}
            <motion.div 
              className="dashboard-card community-card"
              variants={itemVariants}
            >
              <h3>Community Activity</h3>
              <div className="community-stats">
                <div className="community-stat">
                  <div className="stat-value">24</div>
                  <div className="stat-label">New Discussions</div>
                </div>
                <div className="community-stat">
                  <div className="stat-value">5</div>
                  <div className="stat-label">Peer Reviews</div>
                </div>
              </div>
              <div className="community-cta">
                <p>Join the conversation with other learners</p>
                <button className="community-button">
                  Visit Community
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Courses Tab */}
        {activeTab === 'courses' && (
          <motion.div 
            className="courses-tab"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2>My Courses</h2>
            <div className="courses-filter">
              <button className="filter-btn active">All</button>
              <button className="filter-btn">In Progress</button>
              <button className="filter-btn">Completed</button>
              <button className="filter-btn">Saved</button>
            </div>
            <div className="courses-grid">
              {[...recommendedCourses, 
                {
                  id: 4,
                  title: "Data Engineering Fundamentals",
                  progress: 10,
                  category: "Big Data",
                  icon: "⚙️",
                  color: "#f59e0b"
                },
                {
                  id: 5,
                  title: "Business Intelligence",
                  progress: 0,
                  category: "Analytics",
                  icon: "📊",
                  color: "#10b981"
                },
                {
                  id: 6,
                  title: "Natural Language Processing",
                  progress: 100,
                  category: "AI",
                  icon: "🗣️",
                  color: "#ec4899"
                }
              ].map(course => (
                <div 
                  key={course.id} 
                  className="course-card"
                  onClick={() => goToCourse(course.id)}
                >
                  <div 
                    className="course-card-header"
                    style={{ backgroundColor: course.color }}
                  >
                    <div className="course-icon">{course.icon}</div>
                    <h4>{course.title}</h4>
                    <p>{course.category}</p>
                  </div>
                  <div className="course-card-progress">
                    <div className="progress-container">
                      <div 
                        className="progress-bar"
                        style={{ width: `${course.progress}%`, backgroundColor: course.color }}
                      ></div>
                    </div>
                    <span>{course.progress}% Complete</span>
                  </div>
                  <div className="course-card-actions">
                    <button className="action-btn continue-btn">
                      {course.progress === 0 ? 'Start' : course.progress === 100 ? 'Review' : 'Continue'}
                    </button>
                    <button className="action-btn options-btn">···</button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <motion.div 
            className="projects-tab"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2>My Projects</h2>
            <div className="projects-grid">
              {[
                {
                  id: 1,
                  title: "Customer Segmentation Analysis",
                  status: "completed",
                  date: "May 2023",
                  skills: ["Clustering", "PCA", "Visualization"],
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                },
                {
                  id: 2,
                  title: "Time Series Forecasting",
                  status: "in-progress",
                  date: "June 2023",
                  skills: ["ARIMA", "Prophet", "LSTM"],
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                },
                {
                  id: 3,
                  title: "Sentiment Analysis",
                  status: "planned",
                  date: "Coming Soon",
                  skills: ["NLP", "BERT", "Text Classification"],
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                }
              ].map(project => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className={`project-status ${project.status}`}>
                      {project.status.replace('-', ' ')}
                    </div>
                  </div>
                  <div className="project-details">
                    <h3>{project.title}</h3>
                    <p className="project-date">{project.date}</p>
                    <div className="project-skills">
                      {project.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                    <div className="project-actions">
                      <button className="project-btn view-btn">
                        {project.status === 'completed' ? 'View' : project.status === 'in-progress' ? 'Continue' : 'Plan'}
                      </button>
                      <button className="project-btn share-btn">Share</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <motion.div 
            className="skills-tab"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2>My Skills Assessment</h2>
            <div className="skills-overview">
              <div className="skills-summary">
                <h3>Your Current Skill Level</h3>
                <p>Based on your completed courses, projects, and assessments</p>
                <div className="skill-level">
                  <div className="level-circle">
                    <span>Intermediate</span>
                  </div>
                  <div className="level-description">
                    <p>You've mastered foundational concepts and are working on advanced topics.</p>
                    <button className="level-btn">Take Assessment</button>
                  </div>
                </div>
              </div>
              <div className="skills-details">
                <h3>Skill Breakdown</h3>
                <div className="skills-list">
                  {[
                    { name: "Python", level: 75, category: "Programming" },
                    { name: "SQL", level: 65, category: "Databases" },
                    { name: "Machine Learning", level: 60, category: "AI" },
                    { name: "Data Visualization", level: 55, category: "Analytics" },
                    { name: "Statistics", level: 70, category: "Math" },
                    { name: "Data Wrangling", level: 50, category: "ETL" }
                  ].map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-category">{skill.category}</span>
                      </div>
                      <div className="skill-meter">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;