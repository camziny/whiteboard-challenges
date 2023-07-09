import React, { FC, useState, useEffect } from "react";
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
  type: string;
}

export interface SnackBarProps extends MuiSnackbarProps {
  autoHideDuration?: number;
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

const Snackbar: FC = ({
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
  const [isVisible, setVisible] = useState(open);

  useEffect(() => {
    if (autoHideDuration !== undefined) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, autoHideDuration);

      setVisible(true);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [autoHideDuration]);

  return (
    <MuiSnackbar
      open={isVisible}
      anchorOrigin={anchorOrigin}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      className={className}
      sx={sx}
    >
      <Box>
        <StatusCircle color={circleColor} />
        <Typography variant="h6">{text}</Typography>
        {action && (
          <StyledClickableCard
            className="clickable-card-snackbar"
            onClick={action.onClick}
          >
            {action.text}
            {action.icon}
          </StyledClickableCard>
        )}
      </Box>
    </MuiSnackbar>
  );
};

export default Snackbar;
