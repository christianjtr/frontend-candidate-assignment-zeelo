import { useNavigate } from 'react-router-dom';
import BookImage from '@assets/book.png';
import { StyledHeader } from './Header.styled';

export function Header() {
  const navigate = useNavigate();

  const handleOnClickBrandLogo = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <StyledHeader>
      <header className="header">
        <nav>
          <a href="#" onClick={handleOnClickBrandLogo} role="button" className="link-to-home" aria-label="Link to home">
            <img src={BookImage} alt="Brand logo" className="logo" />
            <span>My Library</span>
          </a>
        </nav>
      </header>
    </StyledHeader>
  );
}
