import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

import logoLipaum from '../../../assets/logo-lipao.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoLipaum} alt="logo-lipaum" />
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sheets">Sheets</NavLink>
      </nav>
    </HeaderContainer>
  )
}
