import { PropTypes } from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import { Box, Grid } from "@mui/material";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ modalOpen, setModalOpen }) {
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={modalOpen}>
          <Box sx={style}>
            <Grid container justifyContent="center" alignItems="center">
              <CheckCircleIcon color="primary" sx={{ fontSize: 40 }} />
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Submitted
              </Typography>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

TransitionsModal.propTypes = {
  setModalOpen: PropTypes.func,
  modalOpen: PropTypes.bool,
};
