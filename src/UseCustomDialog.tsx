import React, { useState } from "react";
import {
  Button,
  InputLabel,
  TextField,
  Typography,
  Divider
} from "@mui/material";
import CustomDialog from "./CustomDialog";

export const UseCustomDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>

      <CustomDialog
        open={open}
        title="Modal title"
        onClose={handleClose}
        content={
          <>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros. Cras mattis consectetur
              purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
              vestibulum at eros. Cras mattis consectetur purus sit amet
              fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
              eros. Cras mattis consectetur purus sit amet fermentum. Cras justo
              odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Cras mattis
              consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </Typography>

            <InputLabel>label</InputLabel>
            <TextField label="Outlined" variant="outlined" />
            <Divider sx={{ my: 2 }} />

            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Praesent commodo cursus magna, vel scelerisque nisl
              consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum
              faucibus dolor auctor. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
              laoreet rutrum faucibus dolor auctor. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
              vel augue laoreet rutrum faucibus dolor auctor. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Vivamus
              sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </Typography>

            <InputLabel>label</InputLabel>
            <TextField label="Outlined" variant="outlined" />
            <Divider sx={{ my: 2 }} />

            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Praesent commodo cursus magna, vel scelerisque nisl
              consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum
              faucibus dolor auctor. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
              laoreet rutrum faucibus dolor auctor. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
              vel augue laoreet rutrum faucibus dolor auctor. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Vivamus
              sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </Typography>

            <InputLabel>label</InputLabel>
            <TextField label="Outlined" variant="outlined" />
            <Divider sx={{ my: 2 }} />
          </>
        }
        actions={
          <>
            <Button
              autoFocus
              onClick={handleClose}
              color="secondary"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button autoFocus onClick={handleClose} variant="contained">
              Save changes
            </Button>
          </>
        }
      />
    </>
  );
};
