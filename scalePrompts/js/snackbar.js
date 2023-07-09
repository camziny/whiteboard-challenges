import React, { FC, memo } from "react";
import MuiSnackbar, {
  SnackbarProps as MuiSnackbarProps,
} from "@mui/material/Snackbar";
import { styled, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@sj-ab/component-library.ui.typography";
import StatusCircle, {
  StatusCircleColor,
} from "@sj-ab/component-library.ui.status-circle";

import { ClickableCard } from "@sj-ab/component-library.ui.card";

export interface SnackbarAction {
  text: string;
  icon: JSX.Element;
  onClick: () => void;
}

export interface SnackBarProps extends MuiSnackbarProps {
  text: string;
  circleColor: StatusCircleColor;
  autoHideDuration?: number;
  className?: string;
  action?: SnackbarAction;
  customAttribute?: { attribute: string, value: string | number };
}

const StyledClickableCard = styled(ClickableCard)({
  backgroundColor: "inherit",
  color: "inherit",
  boxShadow: "none !important",
  "& svg": {
    filter: "invert(1)",
    verticalAlign: "middle",
    display: "inline-block",
  },
});

const Snackbar = memo(
  ({
    open,
    onClose,
    anchorOrigin = {
      vertical: "bottom",
      horizontal: "left",
    },
    autoHideDuration,
    text,
    circleColor,
    action,
    className = "",
    sx,
    customAttribute,
  }) => {
    const theme = useTheme();

    return (
      <MuiSnackbar
        anchorOrigin={anchorOrigin}
        autoHideDuration={autoHideDuration}
        open={open}
        onClose={onClose}
        message={
          <Box sx={sx}>
            {text}
            {action !== undefined && (
              <Box>
                {action.text}
                {action.icon}
              </Box>
            )}
          </Box>
        }
      />
    );
  }
);

export default Snackbar;
