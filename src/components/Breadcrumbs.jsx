import React from "react";

const Breadcrumbs = ({ categories, currentCategory, onCategoryClick }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex space-x-2">
        {categories.map((category, index) => (
          <li key={index}>
            <button
              onClick={() => onCategoryClick(category)}
              className={`${
                currentCategory === category ? "font-semibold" : "text-gray-500"
              } hover:text-gray-700`}
            >
              {category}
            </button>
            {index < categories.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
