import React from "react";



const TodoFilters = ({ filter, setFilter, clearCompleted, activeCount }) => {
  return (
    <>
      <div className=" bg-white dark:bg-[#25273c] rounded-md shadow-xl px-4 py-5 text-sm text-gray-500 dark:text-gray-400 flex justify-between items-center border-t border-gray-200 dark:border-gray-700">
        <span>{activeCount} items left</span>

        <div className="hidden md:flex gap-3">
          {["all", "active", "completed"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={filter === type ? "text-blue-500 font-bold" : "hover:text-gray-700 dark:hover:text-gray-300"}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <button onClick={clearCompleted} className="hover:text-gray-700 dark:hover:text-gray-300">
          Clear Completed
        </button>
      </div>

      <div>
        <div className="flex my-3 justify-center p-5 gap-2 bg-white shadow-xl dark:bg-[#25273c]  rounded-md  md:hidden">
          {["all", "active", "completed"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={filter === type ? "text-blue-500 font-bold" : "hover:text-gray-700 dark:hover:text-gray-300"}
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
