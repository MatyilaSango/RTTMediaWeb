import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { ILayout } from '../../types/types'
import { BrowserRouter } from 'react-router-dom'
import CookiesDisclaimer from '../CookiesDisclaimer/CookiesDisclaimer'

export default function Layout({isSignInSinUp, isUserSignedIn, children }: ILayout) {
  return (
    <BrowserRouter>
      <Header isSignInSinUp={isSignInSinUp} isUserSignedIn={isUserSignedIn}/>
      {children}
      <CookiesDisclaimer />
      <Footer />
    </BrowserRouter>
  )
}
