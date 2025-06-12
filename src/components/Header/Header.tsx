import { Link } from 'react-router';
import styles from './header.module.css';

interface HeaderProps {
  logo: string;
}

const Header = ({ logo }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">{logo}</Link>
      </nav>
    </header>
  );
};

export default Header;
