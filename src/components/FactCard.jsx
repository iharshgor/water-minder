import React from 'react';

export function FactCard({ fact }) {
    if (!fact) return null;

    return (
        <div className="fact-card">
            <div className="fact-header">
                <span>💡 Daily Insight</span>
            </div>
            <p className="fact-text">{fact.text}</p>
        </div>
    );
}
