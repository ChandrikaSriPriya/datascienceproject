import React, { useEffect, useState } from 'react';
import { getUserProgress } from '../utils/api';
import ProgressBar from '../components/ProgressBar';
import RoleCard from '../components/RoleCard';

const Dashboard = () => {
    const [progressData, setProgressData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProgressData = async () => {
            try {
                const data = await getUserProgress();
                setProgressData(data);
            } catch (error) {
                console.error("Error fetching progress data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProgressData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dashboard">
            <h1>Your Dashboard</h1>
            <div className="progress-section">
                {progressData.map((progress) => (
                    <ProgressBar key={progress.skillId} skill={progress.skill} percentage={progress.percentage} />
                ))}
            </div>
            <div className="roles-section">
                <h2>Your Roles</h2>
                {progressData.map((progress) => (
                    <RoleCard key={progress.roleId} role={progress.role} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;