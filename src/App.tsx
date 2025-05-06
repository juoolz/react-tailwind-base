import Todo from './components/features/Todo';
import ButtonDemo from './pages/ButtonDemo';
import CardDemo from './pages/CardDemo';
import { useState } from 'react';

function App() {
  const [activePage, setActivePage] = useState('todo');
  
  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col items-center justify-center p-4">
      <header className="mb-8 text-center">
        <h1 className="text-display font-display font-bold text-neutral-800 mb-2">React + Tailwind + MUI</h1>
        <p className="text-neutral-600">A modern React application with Tailwind CSS and Material UI</p>
      </header>
      
      <div className="mb-6 flex flex-wrap gap-4 justify-center">
        <button 
          onClick={() => setActivePage('todo')}
          className={`px-4 py-2 rounded ${activePage === 'todo' ? 'bg-primary text-white' : 'bg-neutral-200 text-neutral-800'}`}
        >
          Todo App
        </button>
        <button 
          onClick={() => setActivePage('buttons')}
          className={`px-4 py-2 rounded ${activePage === 'buttons' ? 'bg-primary text-white' : 'bg-neutral-200 text-neutral-800'}`}
        >
          Button Demo
        </button>
        <button 
          onClick={() => setActivePage('cards')}
          className={`px-4 py-2 rounded ${activePage === 'cards' ? 'bg-primary text-white' : 'bg-neutral-200 text-neutral-800'}`}
        >
          Card Demo
        </button>
      </div>
      
      <main className="w-full max-w-4xl">
        {activePage === 'todo' && <Todo />}
        {activePage === 'buttons' && <ButtonDemo />}
        {activePage === 'cards' && <CardDemo />}
      </main>
      
      <footer className="mt-8 text-center text-neutral-500 text-sm">
        <p>Built with React, Tailwind CSS, and Material UI</p>
      </footer>
    </div>
  );
}

export default App;
