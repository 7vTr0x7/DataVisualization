import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeFilters } from "../redux/slices/filtersSlice";

const Filters = ({ paramsData }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("15-25");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!paramsData?.age && age && gender && startDate && endDate) {
      dispatch(
        changeFilters({
          age,
          gender,
          startDate: startDate ? startDate.getTime() : null,
          endDate: endDate ? endDate.getTime() : null,
        })
      );
    }
  }, [age, gender, startDate, endDate]);

  useEffect(() => {
    if (paramsData) {
      setStartDate(
        paramsData?.startDate ? new Date(paramsData?.startDate) : ""
      );
      setEndDate(paramsData?.endDate ? new Date(paramsData?.endDate) : "");
      setGender(paramsData?.gender || "");
      setAge(paramsData?.age || "");
    }
  }, [paramsData]);

  const urlGenerator = () => {
    const searchParams = new URLSearchParams();

    if (age) searchParams.set("age", age);
    if (gender) searchParams.set("gender", gender);
    if (startDate) searchParams.set("startDate", startDate.toISOString());
    if (endDate) searchParams.set("endDate", endDate.toISOString());

    navigate(`?${searchParams.toString()}`);
  };

  return (
    <div className="flex gap-4 justify-center">
      <div>
        <select
          className="border border-black font-semibold px-3 rounded-sm"
          disabled={paramsData?.gender}
          value={gender}
          onChange={(e) => setGender(e.target.value)}>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border border-black font-semibold px-3 rounded-sm"
          disabled={paramsData?.age}>
          <option value="">Age</option>

          <option value="15-25">15-25</option>
          <option value=">25">{">25"}</option>
        </select>
      </div>
      <div>
        <DatePicker
          disabled={paramsData?.startDate}
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
      <div>
        <p
          onClick={urlGenerator}
          className="border text-black border-black font-semibold px-3 rounded-sm cursor-pointer">
          Generate URL
        </p>
      </div>
    </div>
  );
};

export default Filters;
