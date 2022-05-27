import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormGroup } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const style = {
  position: "absolute",
  top: "40%",
  left: "40%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const modalStyle = {
  marginTop: "10px",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button style={modalStyle} onClick={handleOpen}>
        Order ID
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="md:w-fit lg:w-full"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Button variant="text">Company Name</Button>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <ul className="md:mr-56">
              <li>Item 1 - 11 Bags</li>
              <li>Item 2 - 15 Bags</li>
              <li>Item 3 - 7 Bags</li>
            </ul>
          </Typography>
          <Typography>
            <textarea
              rows="5"
              className="border-2 lg:w-full md:w-fit"
              type="text"
            ></textarea>
            <Button
              className="lg:float-right sm:float-left md:float-left"
              variant="contained"
              endIcon={<SendIcon />}
            />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
