import React from "react";

interface Stat {
  id: string;
  label: string;
  percentage: number;
}

interface StatisticsProps {
  title?: string;
  stats: Stat[];
}

const Statistics: React.FC<StatisticsProps> = ({ title, stats }) => {
  return (
    <section className="container p-5 rounded mb-5 mt-10">
      {title && (
        <h2 className="font-bold text-2xl mb-4 text-center">{title}</h2>
      )}
      <ul className="flex justify-center">
        {stats.map(({ id, label, percentage }) => (
          <li
            className="flex  text-white  bg-purple-700 border  p-2 flex-col justify-between mb-2"
            key={id}
          >
            <span className="">{label} </span>
            <span className="percentage">{percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
