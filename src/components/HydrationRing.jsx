import React from 'react';

export function HydrationRing({ current, goal }) {
    const percentage = Math.min((current / goal) * 100, 100);
    const radius = 80;
    const stroke = 12;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="hydration-ring-container">
            <svg
                height={radius * 2}
                width={radius * 2}
                className="hydration-ring"
            >
                <circle
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth={stroke}
                    fill="transparent"
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    stroke="white"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset }}
                    strokeLinecap="round"
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    className="progress-circle"
                />
            </svg>
            <div className="ring-content">
                <h2>{Math.round(percentage)}%</h2>
                <p>{current} / {goal} ml</p>
            </div>
        </div>
    );
}
