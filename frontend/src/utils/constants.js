import data from "./data.json";

const categories = ["a", "b", "c", "d", "e", "f"];

export const barData = (params) => {
  const filteredData = data.filter((item) => {
    const itemDate = new Date(item.day.slice(0, 10));
    if (
      item.age === params.age &&
      item.gender.toLowerCase() === params.gender &&
      itemDate >= new Date(params.startDate) &&
      itemDate <= new Date(params.endDate)
    ) {
      return item;
    }
  });

  const newData = categories.map((cat) => {
    const total = filteredData
      .slice(0, 10)
      .reduce((acc, curr) => acc + curr[cat], 0);

    return { category: cat.toUpperCase(), value: total };
  });
  return newData;
};

export const selectedBar = (index) => categories.reverse()[index];

export const lineData = (bar) =>
  data.slice(0, 10).map((line) => ({ value: line[bar], date: line.day }));
