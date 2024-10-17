import Chart from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";
import React from "react";
import BarChart from "../components/BarChart";
import Filters from "../components/Filters";
import LineChart from "../components/LineChart";
import { useSearchParams } from "react-router-dom";

Chart.register(zoomPlugin);

const Charts = () => {
  const [searchParams] = useSearchParams();

  const age = searchParams.get("age");
  const gender = searchParams.get("gender");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  const paramsData = {
    age,
    gender,
    startDate,
    endDate,
  };

  return (
    <div className="flex  justify-center mt-10 h-[50vh]">
      <div>
        <Filters />
        <div className="flex w-full  gap-5 mt-5 lg:flex md-flex-col sm-flex-col">
          <BarChart paramsData={paramsData} />
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Charts;
