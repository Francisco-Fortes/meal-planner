import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import CustomCarousel from "./components/CustomCarousel/CustomCarousel.jsx";
import GridFeatures from "./components/GridFeatures/GridFeatures.jsx";
import SignInModal from "./components/SignInModal/SignInModal.jsx";
import LoginForm from "./components/Login/LoginForm";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <LoginForm />
      {/* <Hero />  */}
      {/* <CustomCarousel />
      <GridFeatures /> */}
      <SignInModal />
    </div>
  );
}

export default App;
