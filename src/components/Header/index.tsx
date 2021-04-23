import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './styles.module.scss';
import { FiLogOut } from 'react-icons/fi';

import { Profile } from '../Profile';
import { signIn, signOut, useSession } from 'next-auth/client'

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  });

  const [ session, loading ] = useSession()

  return <>
  {!session && <>
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr"/>
      <p>O melhor para você ouvir, sempre</p>

      <span className={styles.signDate}>{currentDate}</span>
      <button 
        onClick={() => signIn('github')}
        className={styles.signButton}
      >
        Sign in
      </button>
    </header>
  </>}
  {session && <>
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr"/>
      <p>O melhor para você ouvir, sempre</p>

      <span className={styles.signDate}>{currentDate}</span>
      <Profile 
        name={session.user.name}
        avatar_url={session.user.image}
      />
      <a onClick={() => signOut({ redirect: false })}><FiLogOut size={24} /></a>
    </header>
  </>}
  </>
}