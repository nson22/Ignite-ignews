import { SignInButton } from './SignInButton'
import style from './styles.module.scss'

export function Header() {
  return (
    <header className={style.headerContainer}>
      <div className={style.headerContent}>
        <img src="/images/logo.svg" alt="ig.news"/>
        <nav>
          <a className={style.activeLink} href="">Home</a>
          <a href="">Posts</a>
        </nav>
        <SignInButton/>
      </div>
    </header>
  )
}