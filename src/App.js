import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import Login from "./pages/Login";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import PurchaseTicket from "./pages/PurchaseTicket";

const App = () => {
  return (
    <>
    <AuthContextProvider>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element = {<SignUp />} />
      <Route path='/purchaseticket' element = {<PurchaseTicket />} />
      <Route path='/account' element = {<ProtectedRoute><Account /></ProtectedRoute>} />
    </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
