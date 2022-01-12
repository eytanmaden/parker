import './App.css';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { createMuiTheme, ThemeProvider } from '@mui/material';
import { typography } from '@mui/system';
import Loggs from './components/Loggs';
import Menu from './components/Menu';
import Map from './components/Map';
import SimpleMap from './components/Map';


const theme = createMuiTheme({
  palette:{
    type: 'dark',
    secondary: {
      main: "#bdbdbd"
    },
    typography: {
      fontFamily: 'Poppins'

    }
  }
}) 



function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Loggs />
        <Menu />
        <SimpleMap />
      </div>
    </ThemeProvider>
  );
}

export default App;
