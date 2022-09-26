import './App.css';
import { Routes, Route } from 'react-router';
import Home from './components/home';
import LandingPage from './components/landingPage';
import RecipeDetail from './components/recipeDetail';
import NewRecipe from './components/newRecipe';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<RecipeDetail/>}/>
        <Route path='/createNewRecipe' element={<NewRecipe/>}/>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>      
    </div>
  );
}

export default App;
