const get = (key, defaultData) => {
  const localStorageData = localStorage.getItem(key);
  if (localStorageData === null) {
    return defaultData;
  } else {
    return JSON.parse(localStorageData);
  }
};

const set = (key, value) => {
  const localStorageData = JSON.stringify(value);
  localStorage.setItem(key, localStorageData);
};

const objToExport = {
  get: get,
  set: set,
};
export default objToExport;
