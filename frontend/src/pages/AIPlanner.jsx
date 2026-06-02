import { useState } from 'react';
import api from '../services/api';
import Sidebar from '../components/Sidebar';

const AIPlanner = () => {
  const [goal, setGoal] = useState('');
  const [plan, setPlan] = useState(null);

  const generate = async () => {
    const res = await api.post('/ai/plan', { goal });
    setPlan(res.data);
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <h2>AI Planner</h2>
        <div className="card">
          <input value={goal} onChange={e => setGoal(e.target.value)} placeholder="Enter a goal (e.g. Master React)" />
          <button onClick={generate}>Generate Roadmap</button>
        </div>
        {plan && (
          <div className="card">
            <h3>Plan for: {plan.goal}</h3>
            {plan.steps.map((s, i) => <p key={i}>- {s}</p>)}
            <strong>Productivity Score: {plan.score}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIPlanner;