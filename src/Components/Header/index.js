import styles from './header.module.css';
import { Navbar } from 'Components/Share';
import { useSelector } from 'react-redux';

function Header() {
  const { role, authenticated } = useSelector((state) => state.auth);
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a className={styles.logoRR} href="/">
          <img src={`${process.env.PUBLIC_URL}/assets/images/logo-RR.svg`} />
          <img src={`${process.env.PUBLIC_URL}/assets/images/sub-logo-RR.svg`} />
        </a>
        {authenticated && role === 'super-admin' && (
          <Navbar
            navOptions={['admins', 'employees', 'projects', 'time-sheets', 'tasks', 'profile']}
          />
        )}
        {authenticated && role === 'admin' && (
          <Navbar navOptions={['employees', 'projects', 'time-sheets', 'profile']} />
        )}
        {authenticated && role === 'employee' && (
          <Navbar navOptions={['time-sheets', 'projects', 'profile']} />
        )}
        {!authenticated && <Navbar navOptions={[]} />}
      </nav>
    </header>
  );
}

export default Header;
