import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './Pages/Home/Home';
import Products from './Pages/products/Products';
import SignIn from './Pages/sign-in/SignIn';
import SignUp from './Pages/sign-up/SignUp';
import { useEffect, useReducer, useState } from 'react';
import Layout from './Components/Layout/Layout';
import NotFound from './Pages/NotFound/NotFound';
import { ACCOUNT } from './enums/enum';
import { IAction, IState } from './types/types';
import Account from './Pages/Account/Account';
import PersonalDetails from './Pages/Account/PersonalDetails/PersonalDetails';
import SubscriptionDetails from './Pages/Account/SubscriptionDetails/SubscriptionDetails';
import axios from 'axios';
import HowToUse from './Pages/How-to-use/HowToUse';

const reducer = (appState: IState, action: IAction) => {
  switch (action.type) {
    case ACCOUNT.SignIn_Or_SignUp:
      return { ...appState, isSignInSinUp: action.payload as boolean }

    case ACCOUNT.SignIn:
      return {...appState, userAccount: action.payload.account, isUserSignedIn: true}

    case ACCOUNT.signOut:
      return {...appState, userAccount: {}, isUserSignedIn: false}

    case ACCOUNT.Updated:
      return {...appState, userAccount: action.payload.account}

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
  const [isAppRefresh, setIsAppRefresh] = useState<boolean>(false)

  useEffect(() => {
    if(!isAppRefresh){
      const abortController = new AbortController()
      const signal = abortController.signal
      axios.get("https://rrt-media-server-api.vercel.app/api/v1/user/refresh", {signal: signal, withCredentials: true})
      .then(promise => promise.data)
      .then(response => {
        if(response.ok){
          dispatch({type: ACCOUNT.SignIn, payload: {account: response.data}})
          setIsAppRefresh(prev => prev = true)
        }
        return () => {
          abortController.abort()
        }
      })
      .catch(error => {})
    }
  }, [isAppRefresh])

  return (
    <div className="App">
      <Layout isSignInSinUp={appState.isSignInSinUp} isUserSignedIn={appState.isUserSignedIn}>
        <Routes>
          <Route path='/' element={<Home dispatch={dispatch} />} />
          <Route path='/products' element={<Products dispatch={dispatch} />} />
          <Route path='/how-to-use-reddderdownloader' element={<HowToUse name="ReddderDownloader" bgColor='#FF0000'/>} />
          <Route path='/how-to-use-twimedia' element={<HowToUse name="TwiMedia" bgColor='#1A8CD8'/>} />
          <Route path='/how-to-use-tummedia' element={<HowToUse name="TumMedia" bgColor='#2600A1'/>} />
          <Route path='/sign-in' element={<SignIn dispatch={dispatch} />} />
          <Route path='/sign-up' element={<SignUp dispatch={dispatch} />} />
          <Route path='/account' element={<Account dispatch={dispatch} userAccount={appState.userAccount}/>}>
            <Route path="/account/personal-details" element={<PersonalDetails object={appState.userAccount} dispatch={dispatch}/>}/>
            <Route path="/account/subscription-details" element={<SubscriptionDetails object={appState.userAccount} dispatch={dispatch}/>} />
          </Route>
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
