import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RoleDetails = () => {
    const { roleId } = useParams();
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRoleDetails = async () => {
            try {
                const response = await axios.get(`/api/roles/${roleId}`);
                setRole(response.data);
            } catch (err) {
                setError('Error fetching role details');
            } finally {
                setLoading(false);
            }
        };

        fetchRoleDetails();
    }, [roleId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>{role.name}</h1>
            <p>{role.description}</p>
            <h2>Permissions</h2>
            <ul>
                {role.permissions.map((permission) => (
                    <li key={permission}>{permission}</li>
                ))}
            </ul>
        </div>
    );
};

export default RoleDetails;