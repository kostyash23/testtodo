import React, { useRef, useState } from "react";
import classnames from "classnames";


const TodoList = ({ todos, toggleTodo, deleteTodo, setTodos }) => {
  const [hoveredTodo, setHoveredTodo] = useState(null);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleDragStart = (index) => {
    dragItem.current = index;
  };

  const handleDragEnter = (index) => {
    dragOverItem.current = index;
  };

  const handleDragEnd = () => {
    if (
      dragItem.current !== null &&
      dragOverItem.current !== null &&
      dragItem.current !== dragOverItem.current
    ) {
      const newItems = [...todos];
      const draggedItem = newItems[dragItem.current];
      newItems.splice(dragItem.current, 1);
      newItems.splice(dragOverItem.current, 0, draggedItem);
      setTodos(newItems);
    }
    dragItem.current = null;
    dragOverItem.current = null;
  };

  return (
    <div className="bg-white dark:bg-dark-bg rounded-md shadow-xl overflow-hidden">
      <ul>
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            className="border-b border-light-item dark:border-dark-item relative"
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragEnd={handleDragEnd}
            onDragOver={(e) => e.preventDefault()}
            onMouseEnter={() => setHoveredTodo(todo.id)}
            onMouseLeave={() => setHoveredTodo(null)}
          >
            <div className="px-4 py-4 flex items-center">
              <div
                onClick={() => toggleTodo(todo.id)}
                className="cursor-pointer flex items-center justify-center w-8 h-8"
              >
                <div
                  className={classnames(
                    "w-5 h-5 rounded-full flex items-center justify-center",
                    todo.completed
                      ? "bg-gradient-to-br from-blue-400 to-purple-500"
                      : "border-2 border-light-item dark:border-dark-item"
                  )}
                >
                  {todo.completed && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" /></svg>
                  )}
                </div>
              </div>

              <div className=" font-sans flex-1 cursor-grab active:cursor-grabbing">
                <span
                  className={classnames(
                    "text-light-text dark:text-dark-text",
                    todo.completed && "line-through text-light-text-muted dark:text-dark-text-muted"
                  )}
                >
                  {todo.text}
                </span>
              </div>

              {hoveredTodo === todo.id && (
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-light-text-muted hover:text-light-text dark:hover:text-dark-text-muted"
                  aria-label="Delete todo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default TodoList;
