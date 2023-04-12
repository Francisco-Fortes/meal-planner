import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/Profile/ProfilePage";
import MainLayout from "./components/Layout/MainLayout";
import Footer from "./Footer";
import RecipeForm from "./components/RecipeForm/RecipeForm";
import TestPlanner from "./components/TestPlanner";
import RecipePage from "./components/SingleRecipe";
import MiniCard from "./components/MiniCard/MiniCard";

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <div className="App">
        <Routes>
          <Route
            element={<MiniCard propsTitle={"Recipes"} />}
            path="/recipes"
          />

          <Route element={<RecipePage />} path="/recipe/:recipeId" />

          <Route element={<RecipeForm />} path="/recipeform" />
          <Route element={<TestPlanner />} path="/planner" />
          <Route element={<MainLayout />} path="/" />
          <Route element={<ProfilePage />} path="/profile" />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
