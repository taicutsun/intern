import React, { useState } from 'react';
import '../App.css';

interface HeaderProps {
  labels: string[];
}

function Header({ labels }: HeaderProps) {
  const [menu, setMenu] = useState<number | null>(null);
  const [hamb, setHamb] = useState(false);

  const handleDropdownClick = (index: number) => {
    setMenu(menu === index ? null : index);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={require('./logo.png')} alt="Spring Logo" />
        </div>

        <ul className="navBar">
          {labels.map((label, index) => (
            <li key={index} className="dropBtn" onClick={() => handleDropdownClick(index)}>
              <a href="#">{label}</a>
              <div className="content" style={{ display: menu === index ? 'block' : 'none' }}>
                <a href="#">Microservices</a>
                <a href="#">Reactive</a>
                <a href="#">Event Driven</a>
              </div>
            </li>
          ))}
        </ul>

        <div className="hamburger" onClick={() => setHamb(!hamb)}>
          <img src={require('./hamb.png')} alt="Hamburger Menu" style={{ maxHeight: 40 }} />
      

        <ul id="hamb" className="navBar" style={{ display: hamb ? 'block' : 'none' }}>
          {labels.map((label, index) => (
            <li key={index} className="hambContent">
              <a href="#">{label}</a>
            </li>
          ))}
        </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
