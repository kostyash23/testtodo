
import { useEffect, useState } from 'react';
import './App.css';
import { MoonIcon, SunIcon } from './components/Icons';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';


function App() {
  const [todos, setTodos] = useState([{ id: "1", text: "Complete online JavaScript course", completed: true },
  { id: "2", text: "Jog around the park 3x", completed: false },
  { id: "3", text: "10 minutes meditation", completed: false },
  { id: "4", text: "Read for 1 hour", completed: false },
  { id: "5", text: "Pick up groceries", completed: false },
  { id: "6", text: "Complete Todo App on Frontend Mentor", completed: false },
  ])
  const [newTodo, setNewTodo] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("all");

  const addTodo = (e) => {
    e.preventDefault()
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          text: newTodo,
          completed: false,
        },
      ])
      setNewTodo("")
    }
  }
  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed
    if (filter === "completed") return todo.completed
    return true
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])


  return (
    <div className="min-h-screen bg-white dark:bg-[#25273c]">
      <div className="absolute bg-custom top-0 left-0 right-0 h-[300px] bg-gradient-to-r from-purple-500 to-blue-500 z-0" />

      <div className="relative z-10 w-full max-w-md mx-auto pt-16 px-4">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-white text-3xl font-bold tracking-[0.3em]">TODO</h1>
          <button onClick={() => setDarkMode(!darkMode)} className="text-white" aria-label="Toggle dark mode">
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </header>
        <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
        <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} setTodos={setTodos} />
        <TodoFilters filter={filter} setFilter={setFilter} clearCompleted={clearCompleted} activeCount={todos.filter(todo => !todo.completed).length} />

        <p className="text-center text-gray-500 dark:text-gray-400 mt-10">Drag and drop to reorder list</p>
      </div>
    </div>
  )
}

export default App;
