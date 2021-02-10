import React from "react";
import MuiButton from "../components/Button";

export default (props) => {
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20
  };
  const selectedYear = (year, index) => {
    props.applyFilters("launch_year", "selectedYearIndex", year, index);
  };

  const selectedLaunch = (status, index) => {
    props.applyFilters("launch_success", "selectedLaunchIndex", status, index);
  };

  const selectedLand = (status, index) => {
    props.applyFilters("land_success", "selectedLandIndex", status, index);
  };
  const {
    launchYears,
    selectedYearIndex,
    selectedLandIndex,
    selectedLaunchIndex,
  } = props;
  return (
    <aside className="filter-panel" style={style}>
      <h4>Launch Year</h4>
      <div className="launch_year_filter panel-grid">
        {launchYears.map((year, index) => (
          <MuiButton
            key={year}
            value={year}
            index={index}
            selectedValue={selectedYear}
            selectedValueIndex={selectedYearIndex}
          />
        ))}
      </div>
      <h4>Launch Success</h4>
      <div className="launch_success_filter panel-grid">
        {["true", "false"].map((status, index) => (
          <MuiButton
            key={status}
            value={status}
            index={index}
            selectedValue={selectedLaunch}
            selectedValueIndex={selectedLaunchIndex}
          />
        ))}
      </div>
      <h4>Land Success</h4>
      <div className="land_success_filter panel-grid">
        {["true", "false"].map((status, index) => (
          <MuiButton
            key={status}
            value={status}
            index={index}
            selectedValue={selectedLand}
            selectedValueIndex={selectedLandIndex}
          />
        ))}
      </div>
    </aside>
  );
};
