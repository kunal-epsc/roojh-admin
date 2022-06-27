import { IconButton, Snackbar, SnackbarOrigin } from "@mui/material";
import { useEffect, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

import Slide from "@mui/material/Slide";

import { TransitionProps } from "@mui/material/transitions";

export default function PositionedSnackbar(props: {
  vertical: SnackbarOrigin["vertical"];
  horizontal: SnackbarOrigin["horizontal"];
  open: boolean;
  onClose: () => void;
  message: string;
}) {
  const [showAlert, setShowAlert] = useState(props.open);

  useEffect(() => {
    setShowAlert(props.open);
  }, [props.open]);

  const TransitionUp = (props: TransitionProps) => {
    //@ts-ignore
    return <Slide {...props} direction="up" />;
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: props.vertical, horizontal: props.horizontal }}
      key={props.vertical + props.horizontal}
      open={showAlert}
      autoHideDuration={2000}
      message={props.message}
      TransitionComponent={TransitionUp}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={() => {
            setShowAlert(false);
            props.onClose();
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
}
