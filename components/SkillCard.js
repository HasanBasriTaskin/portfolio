import React from 'react';

export default function SkillCard({ title, level }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition">
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{level}</p>
    </div>
  );
} 