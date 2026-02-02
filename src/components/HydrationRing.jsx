import React from 'react';

export function HydrationRing({ current, goal }) {
    const rawPercentage = Math.round((current / goal) * 100);
    const visualPercentage = Math.min(rawPercentage, 100);

    const radius = 80;
    const stroke = 12;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (visualPercentage / 100) * circumference;

    return (
        <div className="hydration-ring-container">
            <svg
                height={radius * 2}
                width={radius * 2}
                className="hydration-ring"
            >
                <circle
                    className="ring-track"
                    strokeWidth={stroke}
                    fill="transparent"
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    className="progress-circle"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset }}
                    strokeLinecap="round"
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
            </svg>
            <div className="ring-content">
                <h2>{rawPercentage}%</h2>
                <div className="ring-stats">
                    <span className="current">{current} ml</span>
                    <span className="goal">of {goal} ml</span>
                </div>
            </div>
        </div>
    );
}
