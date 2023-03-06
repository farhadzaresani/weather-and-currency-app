import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addBadge } from "@/store/AddToBadgeSlicer";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function BuyCurrency({ open, setOpen, currency }) {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const inputRef = React.useRef();
  const calcCurency = (event) => {
    const res = event * currency.price;
    setValue(res);
  };

  const handleSubmit = (price) => {
    if (price === 0) return;
    dispatch(addBadge({ code: currency.code, price: price }));
    setValue(0);
    console.log(inputRef.current.value);
    inputRef.current.value = 0;
    console.log("test");
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setValue(0);
  }, [open]);

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>Buy {currency?.code}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            {currency?.code}: {currency?.price}
          </DialogContentText>
          <TextField
            inputRef={inputRef}
            onChange={(e) => calcCurency(e.target.value)}
            type={"number"}
          />
          <DialogContentText id='alert-dialog-slide-description'>
            {value}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color='error' onClick={handleClose}>
            Cancel
          </Button>
          <Button color='success' onClick={() => handleSubmit(value)}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
