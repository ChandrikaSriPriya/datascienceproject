import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCurrentUser, authAPI } from '../utils/auth';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    bio: '',
    location: '',
    website: '',
    phone: ''
  });

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const currentUser = getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
          setFormData({
            username: currentUser.username || '',
            email: currentUser.email || '',
            firstName: currentUser.firstName || '',
            lastName: currentUser.lastName || '',
            bio: currentUser.bio || '',
            location: currentUser.location || '',
            website: currentUser.website || '',
            phone: currentUser.phone || ''
          });
        }
        
        // Try to get additional profile data from server
        try {
          const response = await authAPI.getProfile();
          if (response.success && response.user) {
            setUser(response.user);
            setFormData(prev => ({
              ...prev,
              ...response.user
            }));
          }
        } catch (error) {
          console.log('Could not fetch additional profile data');
        }
      } catch (error) {
        console.error('Error loading profile:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // Here you would typically make an API call to update the profile
      // For now, we'll just update the local state
      setUser(prev => ({
        ...prev,
        ...formData
      }));
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      username: user?.username || '',
      email: user?.email || '',
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      bio: user?.bio || '',
      location: user?.location || '',
      website: user?.website || '',
      phone: user?.phone || ''
    });
    setIsEditing(false);
  };

  if (isLoading) {
    return (
      <div className="profile-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-background">
        <div className="gradient-circle blue"></div>
        <div className="gradient-circle teal"></div>
        <div className="gradient-circle purple"></div>
      </div>

      <div className="profile-content">
        <motion.div 
          className="profile-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="profile-avatar-large">
            {user?.username ? user.username.charAt(0).toUpperCase() : 'U'}
          </div>
          <div className="profile-header-info">
            <h1>{user?.firstName && user?.lastName ? `${user.firstName} ${user.lastName}` : user?.username || 'User'}</h1>
            <p className="profile-email">{user?.email}</p>
            <p className="profile-join-date">Member since {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Recently'}</p>
          </div>
          <div className="profile-actions">
            {!isEditing ? (
              <button 
                className="edit-profile-btn"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            ) : (
              <div className="edit-actions">
                <button 
                  className="save-btn"
                  onClick={handleSave}
                  disabled={isLoading}
                >
                  {isLoading ? 'Saving...' : 'Save Changes'}
                </button>
                <button 
                  className="cancel-btn"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </motion.div>

        <div className="profile-sections">
          {/* Personal Information */}
          <motion.div 
            className="profile-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2>Personal Information</h2>
            <div className="profile-grid">
              <div className="form-group">
                <label>Username</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Enter username"
                  />
                ) : (
                  <p className="profile-value">{user?.username || 'Not set'}</p>
                )}
              </div>

              <div className="form-group">
                <label>Email</label>
                <p className="profile-value">{user?.email || 'Not set'}</p>
              </div>

              <div className="form-group">
                <label>First Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter first name"
                  />
                ) : (
                  <p className="profile-value">{user?.firstName || 'Not set'}</p>
                )}
              </div>

              <div className="form-group">
                <label>Last Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter last name"
                  />
                ) : (
                  <p className="profile-value">{user?.lastName || 'Not set'}</p>
                )}
              </div>

              <div className="form-group">
                <label>Phone</label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                  />
                ) : (
                  <p className="profile-value">{user?.phone || 'Not set'}</p>
                )}
              </div>

              <div className="form-group">
                <label>Location</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Enter location"
                  />
                ) : (
                  <p className="profile-value">{user?.location || 'Not set'}</p>
                )}
              </div>

              <div className="form-group full-width">
                <label>Website</label>
                {isEditing ? (
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="Enter website URL"
                  />
                ) : (
                  <p className="profile-value">{user?.website || 'Not set'}</p>
                )}
              </div>

              <div className="form-group full-width">
                <label>Bio</label>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="Tell us about yourself..."
                    rows="4"
                  />
                ) : (
                  <p className="profile-value">{user?.bio || 'No bio added yet'}</p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Learning Progress */}
          <motion.div 
            className="profile-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Learning Progress</h2>
            <div className="progress-cards">
              <div className="progress-card">
                <div className="progress-icon">📚</div>
                <div className="progress-info">
                  <h3>Courses Completed</h3>
                  <p className="progress-number">0</p>
                  <p className="progress-label">out of 12 courses</p>
                </div>
              </div>

              <div className="progress-card">
                <div className="progress-icon">🎯</div>
                <div className="progress-info">
                  <h3>Skills Mastered</h3>
                  <p className="progress-number">0</p>
                  <p className="progress-label">out of 25 skills</p>
                </div>
              </div>

              <div className="progress-card">
                <div className="progress-icon">🏆</div>
                <div className="progress-info">
                  <h3>Certificates</h3>
                  <p className="progress-number">0</p>
                  <p className="progress-label">certificates earned</p>
                </div>
              </div>

              <div className="progress-card">
                <div className="progress-icon">⏱️</div>
                <div className="progress-info">
                  <h3>Study Time</h3>
                  <p className="progress-number">0h</p>
                  <p className="progress-label">total study time</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Account Settings */}
          <motion.div 
            className="profile-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2>Account Settings</h2>
            <div className="settings-grid">
              <div className="setting-item">
                <div className="setting-info">
                  <h3>Change Password</h3>
                  <p>Update your account password</p>
                </div>
                <button className="setting-btn">Change</button>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <h3>Email Notifications</h3>
                  <p>Manage your email preferences</p>
                </div>
                <button className="setting-btn">Configure</button>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <h3>Privacy Settings</h3>
                  <p>Control your privacy and data</p>
                </div>
                <button className="setting-btn">Manage</button>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <h3>Delete Account</h3>
                  <p>Permanently delete your account</p>
                </div>
                <button className="setting-btn danger">Delete</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
