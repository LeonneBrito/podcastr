import styles from './styles.module.scss';

interface UserGitHub {
  name: string;
  avatar_url: string;
}

export function Profile (user: UserGitHub) {
  return (
    <div className={styles.profileContainer}>
        <div>
          <span>{user?.name}</span>
        </div>
        <img src={user?.avatar_url} alt={user?.name} />
    </div>
  )
}