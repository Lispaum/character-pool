import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

import logoLipaum from '../../../assets/logo-lipao.png'
import logoGitHub from '../../../assets/github-mark/github-mark.png'
import { useContext } from 'react'
import { GlobalContext } from '../../../App'

export function Header() {
  const { toggleTheme } = useContext(GlobalContext)
  return (
    <HeaderContainer>
      <a
        href="https://youtu.be/LDU_Txk06tM?t=65"
        target="_blank"
        rel="noreferrer"
      >
        <img src={logoLipaum} alt="logo-lipaum"></img>
      </a>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sheets">Sheets</NavLink>
        <NavLink to="/new-sheet">New Sheet</NavLink>
        <NavLink to="/guide">Guide</NavLink>
      </nav>
      <div className="headerRight">
        <div className="buttons">
          <button onClick={toggleTheme}></button>
          <a
            href="https://github.com/Lispaum/character-pool/tree/main/src"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logoGitHub} alt="logo-github"></img>
          </a>
        </div>
        <span>(Under Construction)</span>
      </div>
    </HeaderContainer>
  )
}
