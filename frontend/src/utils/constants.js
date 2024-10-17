import data from "./data.json";

const categories = ["a", "b", "c", "d", "e", "f"];

const returnFiltered = (params) => {
  const filteredData = data.filter((item) => {
    const itemDate = new Date(item.day);

    if (
      item.age === params?.age &&
      item.gender.toLowerCase() === params?.gender.toLowerCase() &&
      itemDate >= new Date(params?.startDate) &&
      itemDate <= new Date(params?.endDate)
    ) {
      return item;
    }
  });

  return filteredData;
};

export const barData = (params) => {
  if (params?.age) {
    const newData = categories.map((cat) => {
      const total = returnFiltered(params).reduce(
        (acc, curr) => acc + curr[cat],
        0
      );

      return { category: cat.toUpperCase(), value: total };
    });
    return newData;
  } else {
    const newData = categories.map((cat) => {
      const total = data.reduce((acc, curr) => acc + curr[cat], 0);

      return { category: cat.toUpperCase(), value: total };
    });
    return newData;
  }
};

export const selectedBar = (index) => {
  return [...categories]?.reverse()[index];
};

export const lineData = (bar, params) => {
  if (params?.age) {
    return returnFiltered(params).map((line) => ({
      value: line[bar],
      date: line.day,
    }));
  } else {
    return data.map((line) => ({
      value: line[bar],
      date: line.day,
    }));
  }
};
