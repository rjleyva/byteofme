import { Link } from 'react-router';

interface HeaderProps {
  logo: string;
}

const Header = ({ logo }: HeaderProps) => {
  return (
    <header>
      <nav>
        <Link to="/">{logo}</Link>
      </nav>
    </header>
  );
};

export default Header;
