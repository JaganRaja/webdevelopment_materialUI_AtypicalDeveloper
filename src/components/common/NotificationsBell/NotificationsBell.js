import React from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import BasicMenu from "../BasicMenu/BasicMenu";

const NotificationsBell = ({ iconColor, onClick }) => {
  const notifications = [
    {
      id: 0,
      label: "First Notification",
    },
    {
      id: 1,
      label: "Second Notification",
    },
  ];
  const newNotifications = `you have ${notifications.length} new notifications!`;
  const noNotifications = "No new notifications!";
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip
        title={notifications.length ? newNotifications : noNotifications}
      >
        <IconButton
          color={iconColor}
          onClick={notifications.length ? handleOpen : null}
        >
          <Badge badgeContent={notifications.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        menuItems={notifications}
      />
    </div>
  );
};

export default NotificationsBell;
