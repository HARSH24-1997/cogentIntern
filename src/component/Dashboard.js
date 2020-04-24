import React from 'react';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Routes from './Routes';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import "../css/Layout.css"
import { createMuiTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const lam = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#FAD961',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  }
});

// const ImageOverlay = styled.div`

//     @media all and (pointer: coarse) {
//     background:lam.palette.primary.main,   
// }
// `;
// import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  menuButton: {
    // marginRight: theme.spacing(-3),
  },
  edgeEnd:{
    marginLeft:-40,
    '$sizeSmall&': {
      marginLeft: -1,
    },
  },
  title: {
    flexGrow: 1,
    paddingLeft:-25,
    // marginLeft:-20,
    '$sizeSmall&': {
      marginLeft: 4,
    },
  },
  edgeEnd: {
    paddingRight:-12,
    
  },
  toolbarButtons: {
    marginLeft: 'auto',
    marginRight: -20,
    '$sizeSmall&': {
      marginRight: -5,
    },
  },
}));


function Navbar(props) {

  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };


  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      
      <MenuList>
      <div className="py-2"><Divider/></div>
        {/* {Routes.map((prop, index) => (
      <MenuItem spy={true} smooth={true} duration={500} className="pb-1"><h4>{prop.sidebarName}</h4></MenuItem>
        ))} */}
        {Routes.map((prop, index) => {
            return (<div>
              <Link to={prop.path} style={{ textDecoration: 'none',color:"#333333" }} key={index}>
                <MenuItem className="py-2 text-center"><h5 style={{color: "black" }}>{prop.sidebarName}</h5></MenuItem></Link></div>
            )
          }
        )}
      </MenuList>
    </div>
  );

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className="Navbar2">
        <Toolbar>
          {/* <IconButton edge="end" className={classes.menuButton, classes.edgeEnd } color="inherit" aria-label="menu">
            <Button onClick={toggleDrawer('left', true)}><MenuIcon/></Button>
          </IconButton> */}
          <IconButton edge="end" className={classes.menuButton, classes.edgeEnd } color="inherit" aria-label="menu">
            <Button onClick={toggleDrawer('left', true)} style={{padding:"0px"}}><MenuIcon /></Button>
          </IconButton>
          <Drawer anchor="left" open={state.left} onClose={toggleDrawer('left', false)}>
            {sideList('left')}
          </Drawer>
        </Toolbar>
        </div>
    </div>
  );
}

export default Navbar
