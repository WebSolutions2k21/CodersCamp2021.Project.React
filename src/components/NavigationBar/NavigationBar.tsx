import imgLogo from 'assets/logo.png';

export const NavigationBar = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__img" src={imgLogo} alt="logo" />
        <div className="header__title">Puppylog</div>
      </div>
      <nav>
        <ul>
          <li className="header__icon">
            <div className="header__link">About Us</div>
          </li>
          <li className="header__icon">
            <div className="header__link">Contact</div>
          </li>
          <li className="header__icon">
            <div className="header__link">Sign Up</div>
          </li>
          <li className="header__icon">
            <div className="header__link">Log In</div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
