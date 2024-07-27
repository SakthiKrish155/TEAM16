import React, { useState, useEffect } from 'react';
import '../.././assets/css/carouselhome.css';

const Carouselhome = () => {
  const cards = [
    { name: 'Prioritization:', description: 'Helps individuals and teams prioritize tasks, ensuring that the most important and urgent tasks are completed first.', href: '#', background: 'black' },
    { name: 'Optimization:', description: 'Organizes tasks in a logical sequence, preventing bottlenecks and ensuring a smooth workflow.', href: '#', background: 'black' },
    { name: 'Task Assignment:', description: 'Assigns specific tasks to individuals, making it clear who is responsible for what.', href: '#', background: 'black' },
    { name: 'Collaboration', description: 'Using task management tools enables team members to collaborate more effectively by sharing updates, files, and comments.', href: '#', background: 'black' },
    { name: 'Chaos Reduction', description: 'Reduces the chaos and stress associated with disorganized work by providing a clear structure and plan.', href: '#', background: 'black' },
    { name: 'Data-Driven Decisions', description: 'Provides data on task completion times, bottlenecks, and resource usage, which can inform better decision-making and process improvements.', href: '#', background: 'black' }
  ];

  return (
    <div className="carousel-container bg-black text-white p-4 rounded-lg">
      <div className="carousel-grid">
        {cards.concat(cards).map((card, index) => (
          <div
            key={index}
            className="card hover:scale-105 transition-transform duration-400 p-4 border border-gray-500"
            style={{ background: card.background }}
          >
            <h3 className="text-xl font-bold text-green-600 pb-3">{card.name}</h3>
            <p>{card.description}</p>
            {/* <a href={card.href} className="text-blue-500 underline">Learn More</a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carouselhome;
