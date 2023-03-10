import { Provider } from 'react-redux';

import { Routes, Route } from 'react-router-dom';
import Navigation from './component/Navigation';
import Categories from './pages/Categories';
import Home from './pages/Home';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="categories" element={<Categories />} />
    </Routes>
  </Provider>

);

export default App;
