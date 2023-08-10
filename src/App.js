import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './cmp/home';
import About from './cmp/about';
import Contact from './cmp/contact';
import Blog from './cmp/blog';
import Errpage from './cmp/errpage';
import 'animate.css';

const App =() => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/*' element={<Errpage />} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;
