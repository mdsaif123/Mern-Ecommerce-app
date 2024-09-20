import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Contact from './pages/Contact';
import Cart from './pages/CartPages';
import AboutUs from './pages/AboutUs';
import Pop from './pages/Pop';
import Service from './pages/Service';
import Register from './auth/Register';
import Login from './auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './Components/Routes/PrivateRoute';
import ForgotPassword from './auth/ForgotPassword';
import AdminPrivateRoute from './Components/Routes/AdminPrivateRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import Products from './pages/Admin/Products';
import Updateproduc from './pages/Admin/Updateproduc';
import Search from './pages/Search';
import ProductDetail from './pages/ProductDetail';
import CartPages from './pages/CartPages';




function App() {
  return (
     <>
  
    <Router>
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<CartPages/>} />
        <Route path="/product/:slug" element={<ProductDetail/>} />
        
        
        
        <Route path="/dashboard" element={<AdminPrivateRoute/>}>
        <Route path="admin" element={<AdminDashboard/>} />
        <Route path="admin/create-category" element={<CreateCategory/>} />
        <Route path="admin/create-product" element={<CreateProduct/>} />
        <Route path="admin/product/:slug" element={<Updateproduc/>} />
        <Route path="admin/products" element={<Products/>} />
        <Route path="admin/users" element={<Users/>} />
        </Route>
 
        <Route path="/dashboard" element={<PrivateRoute/>}>
        <Route path="user" element={<Dashboard/>} />
        <Route path="user/orders" element={<Orders/>} />
        <Route path="user/profile" element={<Profile/>} />
        </Route>


    
       
        <Route path="//forgot-password" element={<ForgotPassword />} />
        <Route path="/category" element={<Category />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Pop />} />
      </Routes>
    </Router>
    </>
  );
 
}

export default App;
