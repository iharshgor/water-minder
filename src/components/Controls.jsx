import React from 'react';

export function Controls({ onAdd }) {
    return (
        <div className="controls">
            <button onClick={() => onAdd(150)} className="btn-glass">
                💧 150ml
            </button>
            <button onClick={() => onAdd(250)} className="btn-glass btn-primary">
                🥛 250ml
            </button>
            <button onClick={() => onAdd(500)} className="btn-glass">
                🧴 500ml
            </button>
        </div>
    );
}
