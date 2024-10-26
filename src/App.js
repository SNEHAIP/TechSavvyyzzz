import logo from './logo.svg';
import './App.css';
import UserLogin from './components/UserLogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserSignup from './components/UserSignup';
import AdminLogin from './components/AdminLogin';
import Home from './components/Home';
import AdminHome from './components/AdminHome';
import Food from './components/Food';
import AddFood from './components/AddFood';
import Adminviewfood from './components/AdminViewfood';
import UserProfile from './components/UserProfile';
import UserCart from './components/UserCart';
import Wishlist from './components/Wishlist';
import Feedback from './components/Feedback';
import AdminViewfeedback from './components/AdminViewfeedback';
import About from './components/About';
import AdminViewprofile from './components/AdminViewprofile';
import FoodPayment from './components/FoodPayment';
import OrderReport from './components/OrderReport';


function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLogin/>}/>
        <Route path='/userSignUp' element={<UserSignup/>}/>
        <Route path='/AdminLogin' element={<AdminLogin/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/adminhome' element={<AdminHome/>}/>
       
        <Route path='/AddFood' element={<AddFood/>}/>
        <Route path='/userfood' element={<Food/>}/>
        <Route path='/viewfood' element={<AddFood/>}/>
        <Route path='/adminviewfood' element={<Adminviewfood/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/usercart' element={<UserCart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/feedbackmanagement' element={<AdminViewfeedback/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profilemanagement' element={<AdminViewprofile/>}/>
        <Route path='/foodpayment' element={<FoodPayment/>}/>
        <Route path='/orderreport' element={<OrderReport/>}/>
        
        
        

        </Routes>
        </BrowserRouter>
  
  );
}

export default App;
