// import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import CartContainer from './components/CartContainer';
import { calculateTotals } from './features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './components/Modal';

function App() {
  const { cartItems } =useSelector((store) => store.cart);
  const { isOpen } =useSelector((store) => store.modal)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <main>
      { isOpen && <Modal /> }
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
