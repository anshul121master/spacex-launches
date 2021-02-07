import React, { Component } from "react";
import MuiButton from "../components/Button";
import Button from "@material-ui/core/Button";

export default class FilterComponent extends Component {
  state = {
    filtersApplied: {},
    selectedYearIndex: -1,
    selectedLaunchIndex: -1,
    selectedLandIndex: -1
  };

  style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  selectedYear = (year, index) => {
    this.setState((prevState) => ({
      ...prevState,
      filtersApplied: {
        ...prevState.filtersApplied,
        launch_year: year,
      },
      selectedYearIndex: index,
    }));
  };

  selectedLaunch = (status, index) => {
    this.setState((prevState) => ({
      ...prevState,
      filtersApplied: {
        ...prevState.filtersApplied,
        launch_success: status,
      },
      selectedLaunchIndex: index,
    }));
  };

  selectedLand = (status, index) => {
    this.setState((prevState) => ({
      ...prevState,
      filtersApplied: {
        ...prevState.filtersApplied,
        land_success: status,
      },
      selectedLandIndex: index,
    }));
  };
  render() {
    const { launchYears, applyFilters } = this.props;
    const {
      selectedYearIndex,
      selectedLandIndex,
      selectedLaunchIndex,
      filtersApplied,
    } = this.state;
    return (
      <div className="filter-panel" style={this.style}>
        <h4>Launch Year</h4>
        <div className="launch_year_filter panel-grid">
          {launchYears.map((year, index) => (
            <MuiButton
              key={year}
              value={year}
              index={index}
              selectedValue={this.selectedYear}
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
              selectedValue={this.selectedLaunch}
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
              selectedValue={this.selectedLand}
              selectedValueIndex={selectedLandIndex}
            />
          ))}
        </div>
        <Button
          style={{ margin: 10 }}
          variant="contained"
          color="secondary"
          onClick={() => applyFilters(filtersApplied)}
        >
          Apply Filters
        </Button>
      </div>
    );
  }
}
