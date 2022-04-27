import HeroSection from "./components/HeroSection";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from "@mui/material";
import { Theme } from "./Theme/Theme";
function App() {
  return (
      <>
      <ThemeProvider theme={Theme}>
      <CssBaseline />
      <HeroSection />
      </ThemeProvider>
      </>
  );
}

export default App;
