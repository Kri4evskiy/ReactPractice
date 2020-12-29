import { useCallback } from "react";
import PropTypes from "prop-types";

import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import { DATA_VIEW_MODES } from "../../../constants/dataViewModes";

export const ToggleDataViewMode = ({ dataViewMode, setDataViewMode }) => {
  const handleChangeViewMode = useCallback(
    (_, nextView) => {
      setDataViewMode(nextView);
    },
    [setDataViewMode]
  );

  return (
    <ToggleButtonGroup
      orientation="horizontal"
      value={dataViewMode}
      exclusive
      onChange={handleChangeViewMode}
    >
      <ToggleButton
        value={DATA_VIEW_MODES.TABLE}
        aria-label={DATA_VIEW_MODES.TABLE}
        data-testid="toggle-data-view-mode-table"
      >
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton
        value={DATA_VIEW_MODES.GRID}
        aria-label={DATA_VIEW_MODES.GRID}
        data-testid="toggle-data-view-mode-grid"
      >
        <ViewModuleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

ToggleDataViewMode.propTypes = {
  dataViewMode: PropTypes.oneOf([DATA_VIEW_MODES.TABLE, DATA_VIEW_MODES.GRID])
    .isRequired,
  setDataViewMode: PropTypes.func.isRequired,
};
