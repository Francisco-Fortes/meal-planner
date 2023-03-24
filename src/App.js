import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/Profile/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <div className="App">
        <Routes>
          <Route element={<Hero />} path="/" />
          <Route element={<ProfilePage />} path="/profile" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
// {/* <CustomCarousel />
// <GridFeatures /> */}
// {/* <Route<SignInModal /> */}
// {/* <ProfilePage recipes={recipes} /> */}
// {/* <Route element={<NotFound />} path="*" /> */}
// {/* <RecipeForm /> */}
// {/* <TestCounter /> */}
// {/* <CollapsiveCard /> */}
