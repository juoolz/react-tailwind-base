import { useState } from 'react';
import { Input } from '@base-ui-components/react';
import { Button, Checkbox, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export default function Todo() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Todo App</h1>
      
      <div className="flex mb-4">
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          fullWidth
          size="small"
          className="mr-2"
        />
        <Button 
          variant="contained" 
          onClick={addTodo}
          className="bg-blue-500 hover:bg-blue-600"
        >
          Add
        </Button>
      </div>
      
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li 
            key={todo.id} 
            className={`flex items-center justify-between p-3 border rounded ${
              todo.completed ? 'bg-green-50' : 'bg-gray-50'
            }`}
          >
            <div className="flex items-center">
              <Checkbox
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="mr-2"
              />
              <span className={todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}>
                {todo.text}
              </span>
            </div>
            <Button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
              startIcon={<DeleteIcon />}
              size="small"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
      
      {todos.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          {todos.filter(todo => todo.completed).length} of {todos.length} tasks completed
        </div>
      )}
    </div>
  );
} 