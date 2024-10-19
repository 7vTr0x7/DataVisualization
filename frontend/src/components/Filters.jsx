import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeFilters, resetFilters } from "../redux/slices/filtersSlice";

import toast, { Toaster } from "react-hot-toast";

const Filters = ({ paramsData }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const url = window.location.href;

  useEffect(() => {
    if (!paramsData?.age && age && gender && startDate && endDate) {
      dispatch(
        changeFilters({
          age,
          gender,
          startDate: startDate ? startDate.valueOf() : null,
          endDate: endDate ? endDate.valueOf() : null,
        })
      );
    }
  }, [age, gender, startDate, endDate]);

  useEffect(() => {
    if (paramsData) {
      setStartDate(paramsData?.startDate ? dayjs(paramsData?.startDate) : null);
      setEndDate(paramsData?.endDate ? dayjs(paramsData?.endDate) : null);
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

    toast.success("URL generated");

    navigate(`?${searchParams.toString()}`);
  };

  const copyUrlHandler = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success("URL copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err);
      });
  };

  const resetHandler = () => {
    navigate("/");

    setAge("");
    setEndDate(null);
    setStartDate(null);
    setGender("");

    dispatch(resetFilters());

    toast.success("Reset successful");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <div>
        <select
          className="border border-black font-semibold px-3 rounded-sm w-full sm:w-auto"
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
          className="border border-black font-semibold px-3 rounded-sm w-full sm:w-auto">
          <option value="">Age</option>
          <option value="15-25">15-25</option>
          <option value=">25">{">25"}</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:space-x-2">
        <input
          type="date"
          value={startDate ? startDate.format("YYYY-MM-DD") : ""}
          onChange={(e) => setStartDate(dayjs(e.target.value))}
          className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          value={endDate ? endDate.format("YYYY-MM-DD") : ""}
          onChange={(e) => setEndDate(dayjs(e.target.value))}
          className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        {url.includes("age") ? (
          <p
            onClick={copyUrlHandler}
            className="border text-black border-black font-semibold px-3 rounded-sm cursor-pointer w-full sm:w-auto text-center">
            Copy URL
          </p>
        ) : (
          <p
            onClick={urlGenerator}
            className="border text-black border-black font-semibold px-3 rounded-sm cursor-pointer w-full sm:w-auto text-center">
            Generate URL
          </p>
        )}
      </div>
      <div>
        <p
          onClick={resetHandler}
          className="border text-black border-black font-semibold px-3 rounded-sm cursor-pointer w-full sm:w-auto text-center">
          Reset
        </p>
      </div>

      <Toaster />
    </div>
  );
};

export default Filters;
