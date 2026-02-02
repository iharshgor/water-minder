import React from 'react';

export function Settings({ settings, onUpdate, nextAlert }) {
  const intervals = [20, 30, 45, 60];

  const formatNextAlert = (timestamp) => {
    if (!timestamp) return 'off';
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="settings-panel">
      <div className="settings-group">
        <label>Remind me every</label>
        <div className="interval-options">
          {intervals.map(min => (
            <button
              key={min}
              className={`interval-btn ${settings.interval === min ? 'active' : ''}`}
              onClick={() => onUpdate({ ...settings, interval: min, notifications: true })}
            >
              {min}m
            </button>
          ))}
        </div>
      </div>
      
      {nextAlert && (
        <div className="next-alert-info">
          🔔 Next alert at {formatNextAlert(nextAlert)}
        </div>
      )}
    </div>
  );
}
