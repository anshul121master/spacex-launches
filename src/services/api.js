import endpoints from "./endpoints";

export const getInitData = () => {
  const baseUrl = endpoints.getBaseUrl();
  return fetch(baseUrl).then((response) => response.json());
};

export const getFilteredData = (url) => {
  return fetch(url).then((response) => response.json());
};