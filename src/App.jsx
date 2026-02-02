import React from 'react';
import { useHydration } from './hooks/useHydration';
import { HydrationRing } from './components/HydrationRing';
import { Controls } from './components/Controls';
import { FactCard } from './components/FactCard';
import { Settings } from './components/Settings';
import './index.css';

function App() {
  const { log, streak, fact, loading, addWater, settings, updateSettings, nextAlert } = useHydration();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="app-container">
      <div className="header">
        <h1>WaterMinder</h1>
        <p className="subtitle">Hydration Companion</p>
        {streak.count > 0 && (
          <div className="streak-badge">
            🔥 {streak.count} Day Streak
          </div>
        )}
      </div>

      <HydrationRing current={log?.amount || 0} goal={log?.goal || 2500} />

      <Settings settings={settings} onUpdate={updateSettings} nextAlert={nextAlert} />

      <Controls onAdd={addWater} />

      <FactCard fact={fact} />
    </div>
  );
}

export default App;
