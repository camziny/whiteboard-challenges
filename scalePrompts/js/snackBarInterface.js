import React, { useState, useEffect, useRef } from "react";
import MuiSnackbar, { SnackbarProps } from "@mui/material/Snackbar";
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

export interface SnackBarProps extends SnackbarProps {
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

export const Snackbar = ({
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
  const [message, setMessage] = useState(text);
  const snackbarRef = useRef(null);

  useEffect(() => {
    if (autoHideDuration) {
      const timeout = setTimeout(() => {
        onClose();
      }, autoHideDuration);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [autoHideDuration]);

  return (
    <MuiSnackbar
      open={open}
      anchorOrigin={anchorOrigin}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      rootRef={snackbarRef}
      className={className}
      sx={sx}
    >
      <Box sx={{ backgroundColor: "#000", padding: 16 }}>
        <Typography variant="h6" sx={{ paddingLeft: 6 }}>
          {message}
        </Typography>
        {action && (
          <StyledClickableCard
            onClick={action.onClick}
            className={`clickable-card--${action.text}`}
          >
            <Typography variant="subtitle1">{action.text}</Typography>
            {action.icon}
          </StyledClickableCard>
        )}
      </Box>
    </MuiSnackbar>
  );
};

export default Snackbar;
