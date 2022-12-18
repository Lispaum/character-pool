import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

import logoLipaum from '../../../assets/logo-lipao.png'
import logoGitHub from '../../../assets/github-mark/github-mark.png'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <a
          href="https://youtu.be/LDU_Txk06tM?t=65"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logoLipaum} alt="logo-lipaum"></img>
        </a>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sheets">Sheets</NavLink>
        <NavLink to="/new-sheet">New Sheet</NavLink>
        <NavLink to="/guide">Guide</NavLink>
      </nav>
      <span>
        (Under Construction)
        <a
          href="https://github.com/Lispaum/character-pool/tree/main/src"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logoGitHub} alt="logo-github"></img>
        </a>
      </span>
    </HeaderContainer>
  )
}
