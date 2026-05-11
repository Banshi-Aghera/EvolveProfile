import { useState, useEffect, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './layouts/Layout';
import Preloader from './components/Preloader';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const WhyUs = lazy(() => import('./pages/WhyUs'));
const Products = lazy(() => import('./pages/Products'));
const Industries = lazy(() => import('./pages/Industries'));
const Applications = lazy(() => import('./pages/Applications'));
const Features = lazy(() => import('./pages/Features'));
const Blog = lazy(() => import('./pages/Blog'));
const SingleBlog = lazy(() => import('./pages/SingleBlog'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function RouteContent({ location }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!isLoading && (
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="why-us" element={<WhyUs />} />
            <Route path="products" element={<Products />} />
            <Route path="industries" element={<Industries />} />
            <Route path="applications" element={<Applications />} />
            <Route path="features" element={<Features />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<SingleBlog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

function App() {
  const location = useLocation();

  return <RouteContent key={location.pathname} location={location} />;
}

export default App;
