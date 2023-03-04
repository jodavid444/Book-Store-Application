import {Routes, Route} from "react-router-dom"
import Navigation from "./component/Navigation";
import Categories from "./pages/Categories"
import Home from "./pages/Home"

const App = () => (
  <>
  <Navigation />
  <Routes>
    <Route path="/" element={<Home />} />
      <Route path="categories" element={<Categories />} />
  </Routes>
  
  
  </>
);



export default App;