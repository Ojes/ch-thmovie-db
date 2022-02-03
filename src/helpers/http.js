export const getRequest = async (resource, searchParams = {}) => {
  const queryParams = new URLSearchParams({
    sort_by: 'popularity',
    api_key: process.env.REACT_APP_THEMOVIEDB_API_KEY,
    ...searchParams,
  });
  const url = `${process.env.REACT_APP_THEMOVIEDB_API_BASE_URL}/${resource}?${queryParams}`;
  const response = await fetch(url, {
    method: 'GET',
  });
  return response;
};
