import HeroSection from "./components/HeroSection";
import CssBaseline from '@mui/material/CssBaseline';
import {  ThemeProvider } from "@mui/material";
import { Theme } from "./Theme/Theme";
import About from "./components/About";
import Services from "./components/Service";
import Slider from "./components/Slider";
import Standard from "./components/Standard";
import LatestNews from "./components/LatestNews";
import Footer from "./components/Footer";
function App() {
  return (
      <>
      <ThemeProvider theme={Theme}>
      <CssBaseline />
      <HeroSection />
      <About />
      <Services />
      <Slider />
      <Standard />
      <LatestNews />
      <Footer />
      </ThemeProvider>

      </>
  );
}

export default App;
