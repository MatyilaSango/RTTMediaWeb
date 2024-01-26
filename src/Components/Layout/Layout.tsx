import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { ILayout } from '../../types/types'
import { BrowserRouter } from 'react-router-dom'

export default function Layout({ isSignInSinUp, children }: ILayout) {
  return (
    <BrowserRouter>
      <Header isSignInSinUp={isSignInSinUp} />
      {children}
      <Footer />
    </BrowserRouter>
  )
}
