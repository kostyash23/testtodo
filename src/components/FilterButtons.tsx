import React from "react";
import classnames from 'classnames';


const FilterButtons = ({ filter, setFilter, isMobile }) => {
    const buttons = [
      { label: "All", value: "all" },
      { label: "Active", value: "active" },
      { label: "Completed", value: "completed" },
    ];
  
    return (
      <div
        className={classnames(
          "flex justify-center space-x-4 rounded-md text-sm text-gray-500 dark:text-gray-400",
          isMobile ? "bg-white dark:bg-[#25273c] py-3 mt-4" : ""
        )}
      >
        {buttons.map((btn) => (
          <button
            key={btn.value}
            onClick={() => setFilter(btn.value as "all" | "active" | "completed")}
            className={classnames(
              "hover:text-gray-700 dark:hover:text-gray-300",
              filter === btn.value ? "text-blue-500 font-bold" : ""
            )}
          >
            {btn.label}
          </button>
        ))}
      </div>
    );
  };

export default FilterButtons;
