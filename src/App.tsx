import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './Pages/Home/Home';
import Products from './Pages/products/Products';
import SignIn from './Pages/sign-in/SignIn';
import SignUp from './Pages/sign-up/SignUp';
import { useReducer } from 'react';
import Layout from './Components/Layout/Layout';
import NotFound from './Pages/NotFound/NotFound';
import { ACCOUNT } from './enums/enum';
import { IAction, IState } from './types/types';
import Account from './Pages/Account/Account';

const reducer = (appState: IState, action: IAction) => {
  switch (action.type) {
    case ACCOUNT.SignIn_Or_SignUp:
      return { ...appState, isSignInSinUp: action.payload as boolean }

    case ACCOUNT.SignIn:
      return {...appState, userAccount: action.payload.account, isUserSignedIn: true}

    default:
      return appState
  }
}

const STATE: IState = { 
  isSignInSinUp: false, 
  userAccount: {}, 
  isUserSignedIn: false 
}

function App() {
  const [appState, dispatch] = useReducer(reducer, STATE)

  return (
    <div className="App">
      <Layout isSignInSinUp={appState.isSignInSinUp} isUserSignedIn={appState.isUserSignedIn}>
        <Routes>
          <Route path='/' element={<Home dispatch={dispatch} />} />
          <Route path='/products' element={<Products dispatch={dispatch} />} />
          <Route path='/sign-in' element={<SignIn dispatch={dispatch} />} />
          <Route path='/sign-up' element={<SignUp dispatch={dispatch} />} />
          <Route path='/account' element={<Account dispatch={dispatch} />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
