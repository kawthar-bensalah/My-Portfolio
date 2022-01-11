import React from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#000",
    margin: 0,
    paddingTop: '0.2rem',
  },
  arrow: {
    color: "#FF004D",
  },
  title: {
    color: "snow",
  },
  menuSliderContainer: {
    width: 250,
    background: "#C4053E",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.3rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "snow",
    margin: theme.spacing(1),
  },
  listItemIcon: {
    color: "snow",
  },
  list: {
      display: 'flex',
      flexDirection: 'row',
      padding: 0,
  },
  listtext: {
       '&': {
        borderBottom : '1px solid white',
       },
       '&:hover': {
        opacity: '1',
        transform: 'scale(1.1)',
        transition: 'opacity 0.35s, transform 0.35s',
        borderBottom : '0',
      }
  }
}));

const menuItems = [
  { listText: "Home", listPath: "/" },
  { listText: "Experience", listPath: "/resume" },
  { listText: "Tools", listPath: "/skills" },
  { listText: "Projects", listPath: "/portfolio" },
  { listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <List className={classes.list}>
            {menuItems.map((item, i) => (
          <ListItem
            key={i}
            className={classes.listItem}
            component={Link}
            to={item.listPath}
          >
            <ListItemText primary={item.listText} className={classes.listtext} />
          </ListItem>
        ))}
            </List>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
