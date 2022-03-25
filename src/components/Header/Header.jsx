import { useContext } from 'react';

import ThemeContext  from '../../context/ThemeContext';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import UseSwitchesCustom from '../ControlledSwitches/ControlledSwitches.jsx';

const Header = () => {
  const {theme} = useContext(ThemeContext);
    return ( 
        <AppBar
         position="static"
          color={(theme == "light") ? "primary" : "secondary" }
          >
        <Toolbar>
          <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
              What pet do you prefer?
          </Typography>
          <UseSwitchesCustom />
        </Toolbar>
      </AppBar>
     );
}
 
export default Header;