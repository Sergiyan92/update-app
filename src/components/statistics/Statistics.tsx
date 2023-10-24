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
    <section>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(({ id, label, percentage }) => (
          <li key={id}>
            <span className="label">{label} </span>
            <span className="percentage">{percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
