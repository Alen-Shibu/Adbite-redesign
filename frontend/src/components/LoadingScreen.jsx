import React, { useState, useEffect } from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen = ({ message = "Please wait" }) => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setElapsedSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgressPercentage = () => {
    return Math.min((elapsedSeconds / 45) * 100, 95);
  };

  return (
    <div className="loading-screen">
      <div className="loading-container">
        {/* Animated dots pattern */}
        <div className="loading-dots-pattern"></div>
        
        {/* Logo/Brand */}
        <div className="loading-brand">
          AD<span>BITE</span>
        </div>

        {/* Spinner */}
        <div className="spinner-container">
          <div className="spinner">
            <div className="spinner-ring ring-outer"></div>
            <div className="spinner-ring ring-middle"></div>
            <div className="spinner-ring ring-inner"></div>
          </div>
        </div>

        {/* Main message */}
        <h1 className="loading-title">
          {message}
          <span className="loading-ellipsis">
            <span>.</span><span>.</span><span>.</span>
          </span>
        </h1>

        {/* Info card */}
        <div className="loading-info-card">
          <div className="info-row">
            <span className="info-icon">⏳</span>
            <div className="info-content">
              <p className="info-heading">Server Spin-Up</p>
              <p className="info-text">
                We're on Render's free tier — initial load may take up to 
                <strong> 45 seconds</strong> while the server wakes from idle.
              </p>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="progress-section">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
          <div className="progress-stats">
            <span className="stat-label">Elapsed</span>
            <span className="stat-value">{formatTime(elapsedSeconds)}</span>
            <span className="stat-separator">/</span>
            <span className="stat-label">Est.</span>
            <span className="stat-value">0:45</span>
          </div>
        </div>

        {/* Tip */}
        <div className="loading-tip">
          <span className="tip-icon">💡</span>
          <p>Once loaded, the server stays warm for faster access</p>
        </div>

        {/* Footer */}
        <p className="loading-footer-text">
          Thank you for your patience <span className="footer-accent">—</span> Alen Shibu ;)
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;