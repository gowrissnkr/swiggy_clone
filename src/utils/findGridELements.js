export const findGridElements = (obj, value) => {
  const fetchData = new Promise((resolve, reject) => {
    for (const key in obj) {
      if (key === value) {
        resolve(obj[key]);
        break;
      } else if (typeof obj[key] === "object") {
        findGridElements(obj[key], value).then((result) => {
          if (result) {
            resolve(result);
          }
        });
      }
    }
  });
  return fetchData;
};
