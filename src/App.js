import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/Profile/ProfilePage";
import CustomCarousel from "./components/CustomCarousel/CustomCarousel";
import CarouselRecipe from "./components/CustomCarousel/CarouselRecipe";
import CollapsibleCard from "./components/CollapsibleCard/CollapsibleCard";
import MainLayout from "./components/Layout/MainLayout";
import MealPlanner from "./components/MealPlanner/MealPlanner";
import Footer from "./Footer";
import ProfileRecipeCard from "./components/ProfileRecipe";
import RecipeForm from "./components/RecipeForm/RecipeForm";
import TestPlanner from "./components/TestPlanner";
import RecipePage from "./components/SingleRecipe";
import RecipeCard from "./components/RecipeCard";
import AddRecipeToPlannerButton from "./components/AddRecipeToPlanner";

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <div className="App">
        <Routes>
          <Route
            element={<CollapsibleCard propsTitle={"Recipes"} />}
            path="/recipes"
          />

          <Route element={<RecipePage />} path="/recipe/:recipeId" />
          {/* <Route element={<AddRecipeToPlannerButton />} path="/test" /> */}
          {/* <Route element={<RecipeCard />} path="/" /> */}
          <Route element={<RecipeForm />} path="/recipeform" />
          <Route element={<TestPlanner />} path="/planner" />
          <Route element={<MainLayout />} path="/" />
          {/* <Route element={<ProfileRecipeCard />} path="/recipeCard" /> */}
          {/* <Route element={<MealPlanner />} path="/planner" /> */}
          <Route element={<ProfilePage />} path="/profile" />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
// <GridFeatures /> */}
// {/* <Route<SignInModal /> */}
// {/* <ProfilePage recipes={recipes} /> */}
// {/* <Route element={<NotFound />} path="*" /> */}
// {/* <RecipeForm /> */}
// {/* <TestCounter /> */}
// {/* <CollapsibleCard /> */}
