import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Scanqr from './pages/Scanqr/Scanqr';
import Location from './pages/Location/Location';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Splash from './pages/Splash/Splash';
import Admin from './pages/Admin/Admin';
import NewProduct from './pages/Admin/NewProduct';
import EditProduct from './pages/Admin/EditProduct';
import AllProducts from './pages/Home/AllProducts';
import DeliverdProducts from './pages/Home/DeliverdProducts';

function App() {
  return (
    <>

      <div className='fixed top-0 inset-x-0 z-40'> <Navbar /> </div>

      {/* <div className='fixed bottom-0 inset-x-0 z-50'> <Footer /> </div> */}

      <div className='mt-16 flex flex-col justify-start w-full h-screen overflow-y-scroll sm:items-center sm:p-5'>

        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/scan" element={<Scanqr />} />
          <Route path="/product/:id/location" element={<Location />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/editproduct/:id" element={<EditProduct />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/deliverdproducts" element={<DeliverdProducts />} />

        </Routes>

      </div> 
    </>
  );
}

export default App;
