import './App.css';
import { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loggs from './components/Loggs';
import Menu from './components/Menu';
import MapContainer from './components/MapContainer';
import PossibleParkingPage from './components/parking-options-component/PossibleParkingPage';


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
  const [signedIn, setSignedIn] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Loggs setSignedIn={setSignedIn} />} />
            <Route path="/menu" element={<Menu signedIn={signedIn} />} />
            <Route path="/map" element={<MapContainer signedIn={signedIn} />} />
            <Route path="/park-options" element={<PossibleParkingPage signedIn={signedIn} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
