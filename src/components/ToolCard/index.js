import React from "react";

const ToolCard = ({
  icon,
  title,
  description,
  author,
  comingSoon,
  onClick,
}) => {
  return (
    <div
      className="bg-gray-800 rounded-lg p-6 text-white text-center cursor-pointer transition-transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm opacity-80 mb-4">{description}</p>
      {author && <p className="text-sm text-yellow-400">By: {author}</p>}
      {comingSoon && (
        <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded mt-2">
          Coming Soon
        </span>
      )}
    </div>
  );
};

export default ToolCard;
