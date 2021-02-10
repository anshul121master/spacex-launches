import React, { useState, useEffect, useRef } from "react";
import FilterComponent from "./container/FilterComponent";
import MissionDetails from "./container/MissionDetails";
import Loader from "./components/Loader";
import { getInitData, getFilteredData } from "./services/api";
import Header from "./components/Header";
import endpoints from './services/endpoints'

export default () => {
  const [state, setState] = useState({
    missions: [],
    launchYears: [],
    selectedYearIndex: -1,
    selectedLaunchIndex: -1,
    selectedLandIndex: -1,
    loading: true,
  });

  useEffect(() => {
    getInitData().then((missions) => {
      let years = missions.map((mission) => mission.launch_year);
      years = years.filter((year, index) => years.indexOf(year) === index);
      setState({
        missions,
        launchYears: years,
        loading: false,
      });
    });
  }, []);

  const filtersRef = useRef({});
  const applyFilters = (panel, panelIndexName, value, index) => {
    filtersRef.current = {
      ...filtersRef.current,
      [panel]:value
    }

    setState(prevState => ({
      ...prevState,
      loading: true
    }))

    let filtersApplied = filtersRef.current;
    console.log("filtersApplied", filtersApplied)

    const filters = Object.keys(filtersApplied);
    let url = null
    if(filters.length === 1){
      const filterName = filters[0];
      const filterValue = filtersApplied[filterName];
      url = endpoints.setSingleFilter(filterName, filterValue)
      console.log(url)
    }
    else if(filters.length === 2){
      const firstFilterName = filters[0];
      const secondFilterName = filters[1];
      const firstFilterValue = filtersApplied[firstFilterName];
      const secondFilterValue = filtersApplied[secondFilterName];
      url = endpoints.setTwoFilters(firstFilterName, firstFilterValue, secondFilterName, secondFilterValue)
      console.log(url)
    }
    else{
      const firstFilterName = filters[0];
      const secondFilterName = filters[1];
      const thirdFilterName = filters[2];
      const firstFilterValue = filtersApplied[firstFilterName];
      const secondFilterValue = filtersApplied[secondFilterName];
      const thirdFilterValue = filtersApplied[thirdFilterName];
      url = endpoints.setAllFilters(firstFilterName, firstFilterValue, secondFilterName, secondFilterValue, thirdFilterName, thirdFilterValue);
      console.log(url)
    }

    getFilteredData(url).then(
      (filteredMissions) => {
        setState((prevState) => ({
          ...prevState,
          missions: filteredMissions,
          [panelIndexName]:index,
          loading: false,
        }));
      }
    );
  };
  const { missions, launchYears, loading, selectedYearIndex, selectedLaunchIndex, selectedLandIndex } = state;
  return loading ? (
    <Loader />
  ) : (
    <React.Fragment>
      <Header />
      <FilterComponent
        launchYears={launchYears}
        applyFilters={applyFilters}
        selectedYearIndex={selectedYearIndex}
        selectedLaunchIndex={selectedLaunchIndex}
        selectedLandIndex={selectedLandIndex}
      />
      <MissionDetails missions={missions} />
    </React.Fragment>
  );
};
