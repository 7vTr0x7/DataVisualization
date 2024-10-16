import data from "./data.json";

const categories = ["a", "b", "c", "d", "e", "f"];

export const barData = categories.map((cat) => {
  const total = data.slice(0, 10).reduce((acc, curr) => acc + curr[cat], 0);

  return { category: cat.toUpperCase(), value: total };
});

const selected = "a";

export const lineData = data
  .slice(0, 10)
  .map((line) => ({ value: line[selected], date: line.day }));
