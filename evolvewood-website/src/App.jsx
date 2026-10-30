import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './layouts/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const WhyUs = lazy(() => import('./pages/WhyUs'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Industries = lazy(() => import('./pages/Industries'));
const Applications = lazy(() => import('./pages/Applications'));
const Features = lazy(() => import('./pages/Features'));
const Blog = lazy(() => import('./pages/Blog'));
const SingleBlog = lazy(() => import('./pages/SingleBlog'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={
      <div className="h-screen flex items-center justify-center bg-evolve-cream">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-full border-4 border-evolve-green/30 border-t-evolve-green animate-spin" />
          <span className="text-evolve-brown/50 text-sm font-bold uppercase tracking-widest">Loading…</span>
        </div>
      </div>
    }>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="why-us" element={<WhyUs />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<ProductDetail />} />
          <Route path="industries" element={<Industries />} />
          <Route path="applications" element={<Applications />} />
          <Route path="features" element={<Features />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<SingleBlog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
