import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { allBadges, deleteBadge } from "@/store/AddToBadgeSlicer";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";

const emails = ["username@gmail.com", "user02@gmail.com"];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const badgeList = useSelector(allBadges);
  const dispatch = useDispatch();

  const handleClose = () => {
    onClose(selectedValue);
  };
  const handleDelete = (code) => {
    dispatch(deleteBadge(code));
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Your Badge</DialogTitle>

      {badgeList.length === 0 ? (
        <Typography sx={{ p: 5, fontWeight: "bold", opacity: 0.5 }}>
          your badge is empty
        </Typography>
      ) : (
        <List sx={{ pt: 0 }}>
          {badgeList.map((badge) => (
            <ListItem
              key={badge.code}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography>{badge.code}:</Typography>
                <Typography>{badge.price}</Typography>
              </Box>
              <Button
                onClick={() => handleDelete(badge.code)}
                startIcon={<DeleteIcon />}
                color='error'
              />
            </ListItem>
          ))}
        </List>
      )}
      <Button color='error' onClick={handleClose}>
        Close
      </Button>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function MyBadgeList({ open, setOpen }) {
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
