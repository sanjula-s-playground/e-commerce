
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCatergory from './Pages/ShopCatergory'
import Product from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'
import Cart from './Pages/Cart'
import men_banner from './Components/Assests/banner_mens.png'
import women_banner from './Components/Assests/banner_mens.png'
import kid_banner from './Components/Assests/banner_kids.png'



function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<shop/>}/>
        <Route path='/mens' element={<ShopCatergory banner={men banner} catergory="men"/>}/>
        <Route path='/womens' element={<ShopCatergory banner={women_banner} catergory="women"/>}/>
        <Route path='/kids' element={<ShopCatergory banner={kid_banner} catergory="kids"/>}/>
        <Route path='/product' element={<product/>}/>
         <Route path=':productId' elemet={<product/>}>

        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
