import imgLogo from 'assets/logo.png';
import { ReactComponent as Paw } from 'assets/paw-solid.svg';
export const NavigationBar = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__img" src={imgLogo} alt="logo" />
        <div className="header__title">Puppylog</div>
      </div>
      <nav>
        <ul>
          <li className="header__link">
            <div>
              <Paw className="header__icon" />
              About Us
            </div>
          </li>
          <li className="header__link">
            <div>
              <Paw className="header__icon" />
              Contact
            </div>
          </li>
          <li className="header__link">
            <div>
              <Paw className="header__icon" />
              Sign Up
            </div>
          </li>
          <li className="header__link">
            <div>
              <Paw className="header__icon" />
              Log In
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
