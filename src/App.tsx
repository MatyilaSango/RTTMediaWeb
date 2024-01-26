import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './Pages/Home/Home';
import Products from './Pages/products/Products';
import SignIn from './Pages/sign-in/SignIn';
import SignUp from './Pages/sign-up/SignUp';
import { useState } from 'react';
import Layout from './Components/Layout/Layout';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  const [isSignInSinUp, setIsSignInSinUp] = useState<boolean>(false)

  return (
    <div className="App">
      <Layout isSignInSinUp={isSignInSinUp}>
        <Routes>
          <Route path='/' element={<Home setIsSignInSinUp={setIsSignInSinUp} />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-in' element={<SignIn setIsSignInSinUp={setIsSignInSinUp} />} />
          <Route path='/sign-up' element={<SignUp setIsSignInSinUp={setIsSignInSinUp} />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
