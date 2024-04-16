import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from "./components/home/Home";
import Aboutus from './components/aboutus/Aboutus';
import Cakes from './components/cakes/Cakes';
import Desserts from './components/desserts/Desserts';
import PageNotFound from "./components/pageNotFound/PageNotFound";
import BoxesFilter from './components/boxesfilter/BoxesFilter';
import Delivery from './components/delivery/Delivery';
import CorporateEvents from './components/corporateEvents/CorporateEvents';
import Contact from './components/contact/Contact';
import Product from './components/product/Product';
import { cakesData, dessertsData, boxesData } from './data';
import Basket from './components/basket/Basket';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cookies" element={<Cakes />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cupcakeboxes" element={<BoxesFilter />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/corporate" element={<CorporateEvents />} />
          <Route path="/cookies/:id" element={<Product data={cakesData} />} />
          <Route path="/desserts/:id" element={<Product data={dessertsData} />} />
          <Route path="/cupcakeboxes/:id" element={<Product data={boxesData} />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;




