import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filters = ({ paramsData }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (paramsData) {
      setStartDate(paramsData.startDate);
      setEndDate(paramsData.endDate);
      setGender(paramsData.gender);
    }
    setAge(paramsData.age);
  }, [paramsData]);

  return (
    <div className="flex gap-4 justify-center">
      <div>
        <select
          className="border border-black font-semibold px-3 rounded-sm"
          disabled={paramsData}
          value={gender}
          onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border border-black font-semibold px-3 rounded-sm"
          disabled={paramsData}>
          <option value="15-25">15-25</option>
          <option value=">25">{">25"}</option>
        </select>
      </div>
      <div>
        <DatePicker
          disabled={paramsData}
          className="border text-black border-black font-semibold px-3 rounded-sm"
          selected={startDate}
          onChange={(dates) => {
            const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
          }}
          selectsRange
          startDate={startDate}
          endDate={endDate}
          isClearable
          placeholderText="Select a date range"
        />
      </div>
    </div>
  );
};

export default Filters;
