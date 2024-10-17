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
    return paramsData?.age ? paramsData : {};
  }, [paramsData]);
  return (
    <div className="flex justify-center mt-10 h-[50vh]">
      <div>
        <Filters
          paramsData={memoizedParamsData ? memoizedParamsData : filters}
        />
        <div className="flex w-full gap-5 mt-5 lg:flex md-flex-col sm-flex-col">
          <BarChart
            paramsData={memoizedParamsData?.age ? memoizedParamsData : filters}
          />
          <LineChart
            paramsData={memoizedParamsData?.age ? memoizedParamsData : filters}
          />
        </div>
      </div>
    </div>
  );
};

export default Charts;
