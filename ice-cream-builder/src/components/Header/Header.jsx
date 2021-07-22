import React from 'react'

function Header() {
    return (
        <header>
        <div className="container react" id="header">
          <div>
            <img className="logo" src="images/logo.svg" alt="Logo" />
          </div>
          <div className="textRight">
            <img src="images/react.svg" alt="React" className="reactLogo" /><strong
              >React</strong
            >
          </div>
        </div>
      </header>
    )
}

export default Header
