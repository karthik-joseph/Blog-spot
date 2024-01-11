import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import BlogSpot from './components/screens/BlogSpot';
import SinglePageBlog from './components/screens/SinglePageBlog';
import Blog from './components/screens/Blog';
import PageNotFound from './components/screens/PageNotFound';

function App() {
  return (
     <Router>
      <Header />
      <Routes>
          <Route index path='/' element={<BlogSpot />} /> 
          <Route path='/blog' element={<Blog />} />
          <Route path='/singlepageblog' element={<SinglePageBlog />} />
          <Route path='singlepageblog/:id' element={<SinglePageBlog />} />
          <Route path='*' element={<PageNotFound />} />
      </Routes>
     </Router>  
  );
}

export default App;
