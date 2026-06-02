import { useState, useEffect } from 'react';
import api from '../services/api';
import Sidebar from '../components/Sidebar';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const load = () => api.get('/tasks').then(res => setTasks(res.data));
  useEffect(() => { load(); }, []);

  const add = async (e) => {
    e.preventDefault();
    await api.post('/tasks', { title });
    setTitle('');
    load();
  };

  const del = async (id) => {
    await api.delete(`/tasks/${id}`);
    load();
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <h2>Tasks</h2>
        <form onSubmit={add} style={{display: 'flex', gap: '10px'}}>
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Task title" required />
          <button style={{width: '150px'}}>Add</button>
        </form>
        {tasks.map(t => (
          <div key={t._id} className={`card priority-${t.priority}`} style={{display: 'flex', justifyContent: 'space-between'}}>
            <span>{t.title}</span>
            <button onClick={() => del(t._id)} style={{width: '80px', background: '#ef4444'}}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;