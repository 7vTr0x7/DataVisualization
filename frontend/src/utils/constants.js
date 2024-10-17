import data from "./data.json";

const categories = ["a", "b", "c", "d", "e", "f"];

export const barData = () =>
  categories.map((cat) => {
    const total = data.slice(0, 10).reduce((acc, curr) => acc + curr[cat], 0);

    return { category: cat.toUpperCase(), value: total };
  });

export const selectedBar = (index) => categories.reverse()[index];

export const lineData = (bar) =>
  data.slice(0, 10).map((line) => ({ value: line[bar], date: line.day }));
