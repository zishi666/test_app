import "./App.css";
import Footer from "./pages/footer/footer";
import LandingPage from "./pages/landingPage/LandingPage";
import LowerPage from "./pages/lowerSection/lowerPage";
import MidleSection from "./pages/secondSection/midleSection";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <MidleSection />
      <LowerPage />
      <Footer />
    </div>
  );
}

export default App;
