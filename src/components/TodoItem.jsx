import classnames from "classnames";

const TodoItem = ({ todo, toggleTodo, deleteTodo, index, dragItem, dragOverItem, handleDragEnd }) => {
  return (
    <li
      className="border-b border-gray-200 dark:border-gray-700 relative"
      draggable
      onDragStart={() => (dragItem.current = index)}
      onDragEnter={() => (dragOverItem.current = index)}
      onDragEnd={handleDragEnd}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="px-4 py-4 flex items-center">
        <div
          onClick={() => toggleTodo(todo.id)}
          className={classnames("w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer", {
            "bg-gradient-to-br from-blue-400 to-purple-500": todo.completed,
            "border-gray-300 dark:border-gray-600": !todo.completed,
          })}
        >
          {todo.completed && <span className="text-white text-lg">✔</span>}
        </div>
        <span className={classnames("ml-4 flex-1", { "line-through text-gray-400": todo.completed })}>
          {todo.text}
        </span>
        <button onClick={() => deleteTodo(todo.id)} className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
          ✖
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
