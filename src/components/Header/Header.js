import React from "react";
import CommonButton from "../../components/common/CommonButton/CommonButton";
import NotificationsBell from "../../components/common/NotificationsBell/NotificationsBell";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import HelpIcon from "@mui/icons-material/Help";
import Box from "@mui/material/Box";

const Header = ({ title }) => {
  const headerStyles = {
    wrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      backgroundColor: "#009be5",
    },
    topRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "end",
      alignItems: "center",
      marginBottom: "20px",
      "*": {
        marginRight: "5px",
      },
    },
    middleRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "20px",
      marginLeft: "320px",
    },
    link: {
      fontWeight: 500,
      color: "rgba(255, 255, 255, 0.7)",
      "&:hover": {
        color: "#fff",
        cursor: "pointer",
      },
    },
    webButton: {
      marginRight: "5px",
    },
  };
  return (
    <Box sx={headerStyles.wrapper}>
      <Box sx={headerStyles.topRow}>
        <Typography sx={headerStyles.link}>Go to docs</Typography>
        <NotificationsBell iconColor="white" />
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/4.jpg"
        />
      </Box>

      {/* Second row */}
      <Box sx={headerStyles.middleRow}>
        <Typography variant="h1" color="white">
          {title}
        </Typography>
        <Box>
          <CommonButton sx={headerStyles.webButton} variant="outlined">
            Web setup
          </CommonButton>
          <Tooltip title="help">
            <IconButton color="white">
              <HelpIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
