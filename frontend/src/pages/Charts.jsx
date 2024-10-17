import Chart from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";
import React, { useEffect, useState, useMemo } from "react";
import BarChart from "../components/BarChart";
import Filters from "../components/Filters";
import LineChart from "../components/LineChart";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

Chart.register(zoomPlugin);

const Charts = () => {
  const [paramsData, setParamsData] = useState({});
  const [searchParams] = useSearchParams();

  const filters = useSelector((state) => state.filters.filters);

  const age = searchParams.get("age");
  const gender = searchParams.get("gender");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  useEffect(() => {
    if (age && gender && startDate && endDate) {
      const data = {
        age,
        gender,
        startDate,
        endDate,
      };
      setParamsData(data);
    }
  }, [age, gender, startDate, endDate, filters]);

  const memoizedParamsData = useMemo(() => {
    return paramsData?.age ? paramsData : filters;
  }, [paramsData, filters]);

  return (
    <div className="flex justify-center mt-10 h-auto px-4">
      <div className="w-full max-w-7xl">
        <Filters paramsData={memoizedParamsData} />
        <div className="flex flex-col lg:flex-row lg:gap-5 gap-4 mt-5">
          <div className="flex-1 w-full h-[400px] md:h-[300px] sm:h-[250px]">
            <BarChart paramsData={memoizedParamsData} />
          </div>
          <div className="flex-1 w-full h-[400px] md:h-[300px] sm:h-[250px]">
            <LineChart paramsData={memoizedParamsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
