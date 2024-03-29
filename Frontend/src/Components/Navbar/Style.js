import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  navContainer: {
    backgroundColor: "#0e141e",
  },
  textColor: {
    color: "white !important",
  },
  burgerBtn: {
    backgroundColor: "#979faf",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    order: "5",
    marginLeft: "8px",
    fontSize: "18px",
    padding: "4px 2px",
    width: "45px",
    "&:hover": {
      // backgroundColor: "white",
    },
  },
  Overlay: {
    marginTop: "13px",
    borderRadius: "5px",
    boxShadow: "2px 2px 4px 2px rgba(0, 0, 0, 0.2)",
    overflow: "auto",
    maxHeight: "480px",
    "&::-webkit-scrollbar": {
      width: "6px",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#888",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#eee",
      borderRadius: "10px",
    },
  },
  OverlayTitle: {
    backgroundColor: "#0e141e",
    minWidth: "350px",
    color: "white",
    padding: "10px 10px",
    textAlign: "center",
  },
  OverlayContent: {
    minWidth: "350px",
    maxWidth: "350px",
    backgroundColor: "white",
    padding: "3px 10px",
    paddingTop: "10px",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
  },
  notificationItem: {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#f5f5f5",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    order: 4,
    "&:hover": {
      backgroundColor: "#dddddd",
    },
  },
  notificationText: {
    fontSize: "14px",
    color: "#333",
    userSelect: "none",
  },
  notificationTime: {
    fontSize: "12px",
    color: "#999",
    display: "flex",
    justifyContent: "end",
    userSelect: "none",
  },
  line: {
    marginLeft: "-10px",
    marginRight: "-10px",
    margin: "2px 2px",
    order: 29,
  },
  notificationLink: {
    textAlign: "center",
    fontSize: "18px",
    color: "#576871",
    cursor: "pointer",
    zIndex: 2000,
    order: 30,
    "&:hover": {
      fontWeight: "bold",
      textDecoration: "underline",
    },
  },
  messageItem: {
    padding: "10px",
    backgroundColor: "#ffffff",
    marginBottom: "12px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    width: "100%",
    cursor: "pointer",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#dddddd",
    },
  },
  messageSender: {
    fontWeight: "bold",
    color: "#333",
    fontSize: "16px",
  },
  messageTime: {
    marginLeft: "10px",
    color: "#777",
    fontSize: "0.9rem",
  },
  messageContent: {
    width: "80%",
  },
  iconContainer: {
    width: "40px",
    height: "40px",
    backgroundColor: "#e7eeef",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  },
  userChoicesContainer: {
    minWidth: "200px",
    maxWidth: "200px",
    backgroundColor: "white",
    padding: "15px 10px",
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    boxShadow: "-2px 2px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  choiceItem: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    width: "100%",
    cursor: "pointer",
  },
  messages: {
    paddingRight: "2px",
  },
  choiceLink: {
    margin: "5px 10px !important",
    textDecoration: "none",
    display: "flex",
    fontSize: "1.1rem",
    transition: "0.1s",
    "&:hover": {
      fontWeight: "bold",
      // backgroundColor: "#F5F5F5",
    },
  },
  hoveringColor: {
    fontSize: "1.1rem",
    color: "#b2b8bc !important",
    "&:hover": {
      color: "white !important",
    },
  },
  clickedBtn: {
    color: "white !important",
  },
  "@media (max-width: 600px)": {
    Overlay: {
      boxShadow: "none",
      position: "fixed",
      width: "100%",
      maxWidth: "100%",
      minWidth: "100%",
      zIndex: 1000,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "visible",
    },
    OverlayContent: {
      position: "fixed",
      top: 50,
      left: 0,
      maxWidth: "100%",
      minWidth: "100%",
      width: "100%",
      backgroundColor: "white",
    },
    OverlayTitle: {
      position: "fixed",
      top: 1,
      maxWidth: "100%",
      minWidth: "100%",
      width: "100%",
    },
  },
  logo: {
    cursor: "pointer",
  },
  userChoiceLarge: {
    display: "block",
  },
  navCollapse: {
    order: 0,
  },
  userChoicesSmall: {
    display: "none",
  },
  customInputGroup: {
    display: "block",
  },
  "@media (max-width: 991px)": {
    userChoicesSmall: {
      display: "block",
    },
    navCollapse: {
      order: 8,
    },
    userChoiceLarge: {
      display: "none",
    },
    customInputGroup: {
      display: "none",
    },
    messages: {
      paddingRight: "10px",
    },
  },
  activeTab: {
    color: "white !important",
    "&::after": {
      content: '""',
      display: "block",
      height: "3px",
      backgroundColor: "green",
      width: "60px",
      marginTop: "6px",
      marginBottom: "0",
      paddingBottom: "0",
    },
  },
});
export default useStyle;
