import Todo from './components/features/Todo';
import ButtonDemo from './pages/ButtonDemo';
import { useState } from 'react';

function App() {
  const [showButtonDemo, setShowButtonDemo] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">React + Tailwind + MUI</h1>
        <p className="text-gray-600">A modern React application with Tailwind CSS and Material UI</p>
      </header>
      
      <div className="mb-6 flex gap-4">
        <button 
          onClick={() => setShowButtonDemo(false)}
          className={`px-4 py-2 rounded ${!showButtonDemo ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          Todo App
        </button>
        <button 
          onClick={() => setShowButtonDemo(true)}
          className={`px-4 py-2 rounded ${showButtonDemo ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          Button Demo
        </button>
      </div>
      
      <main className="w-full max-w-lg">
        {showButtonDemo ? <ButtonDemo /> : <Todo />}
      </main>
      
      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>Built with React, Tailwind CSS, and Material UI</p>
      </footer>
    </div>
  );
}

export default App;
