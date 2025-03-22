import React from "react";



const TodoFilters = ({ filter, setFilter, clearCompleted, activeCount }) => {
  return (
    <>
      <div className="bg-white font-sans dark:bg-dark-bg rounded-md shadow-xl px-4 py-5 text-sm text-light-text dark:text-dark-text flex justify-between items-center border-t border-light-item dark:border-dark-item">
        <span>{activeCount} items left</span>

        <div className="hidden md:flex gap-3">
          {["all", "active", "completed"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={filter === type ? "text-primary font-bold" : "hover:text-light-text dark:hover:text-dark-text"}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <button onClick={clearCompleted} className="hover:text-light-text dark:hover:text-dark-text">
          Clear Completed
        </button>
      </div>

      <div>
        <div className="flex font-sans my-3 justify-center p-5 gap-2 bg-white shadow-xl dark:bg-dark-bg rounded-md md:hidden">
          {["all", "active", "completed"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={filter === type ? "text-primary font-bold" : "hover:text-light-text dark:hover:text-dark-text"}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
export default TodoFilters;
