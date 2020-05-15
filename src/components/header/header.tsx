import * as React from 'react';

export const Header = (props) => {
    const {isAuthorizationRequired, user} = props;
    return <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <a className={`header__logo-link ${!isAuthorizationRequired ? `header__logo-link--active` : ``}`}>            
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />            
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <a className="header__nav-link header__nav-link--profile" href="#">
                <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage:user.avatar_url}}>
                </div>
                {!isAuthorizationRequired 
                ? <span className="header__user-name user__name">{user.email}</span>
                : <span className="header__login">Sign in</span>                
                }
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
}