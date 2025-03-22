import React from "react";



const TodoForm = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <form onSubmit={addTodo} className="mb-6">
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-gray-300" />
        <input
          type="text"
          placeholder="Currently typing"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="w-full py-4 pl-14 pr-4 rounded-md shadow-md text-gray-700 dark:text-gray-300 dark:bg-[#25273c] focus:outline-none"
        />
      </div>
    </form>
  );
};

export default TodoForm;
