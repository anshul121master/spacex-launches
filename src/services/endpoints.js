const baseUrl = "https://api.spacexdata.com/v3/launches?limit=100";

const endpoints = {
    getBaseUrl: () => baseUrl,
    setSingleFilter: (filterName, filterValue) => `${baseUrl}&${filterName}=${filterValue}`,
    setTwoFilters: (firstFilterName, firstFilterValue, secondFilterName, secondFilterValue) => `${baseUrl}&${firstFilterName}=${firstFilterValue}&${secondFilterName}=${secondFilterValue}`,
    setAllFilters: (firstFilterName, firstFilterValue, secondFilterName, secondFilterValue, thirdFilterName, thirdFilterValue) => `${baseUrl}&${firstFilterName}=${firstFilterValue}&${secondFilterName}=${secondFilterValue}&${thirdFilterName}=${thirdFilterValue}`
}
export default endpoints