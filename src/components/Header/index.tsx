import { ActiveLink } from './ActiveLink'
import { SignInButton } from './SignInButton'
import style from './styles.module.scss'

export function Header() {

  return (
    <header className={style.headerContainer}>
      <div className={style.headerContent}>
        <img src="/images/logo.svg" alt="ig.news"/>
        <nav>
          <ActiveLink activeClassName={style.activeLink} href='/'>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={style.activeLink} href='/posts'>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton/>
      </div>
    </header>
  )
}
