import React from "react";
import Statistics from "../components/statistics/Statistics";
import data from "../data/data.json";

const StatisticsPage = () => {
  return <Statistics title="Upload" stats={data} />;
};

export default StatisticsPage;
