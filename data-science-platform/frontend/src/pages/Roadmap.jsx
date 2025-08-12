import React, { useEffect, useState } from 'react';
import axios from '../utils/api';
import RoadmapAirplane from '../components/RoadmapAirplane';
import ProgressBar from '../components/ProgressBar';

const Roadmap = () => {
    const [roadmapData, setRoadmapData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRoadmap = async () => {
            try {
                const response = await axios.get('/api/roadmap');
                setRoadmapData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRoadmap();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="roadmap-container">
            <h1>Learning Roadmap</h1>
            <RoadmapAirplane data={roadmapData} />
            <div className="progress-section">
                {roadmapData.map((stage) => (
                    <div key={stage.id} className="stage">
                        <h2>{stage.title}</h2>
                        <ProgressBar progress={stage.progress} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Roadmap;