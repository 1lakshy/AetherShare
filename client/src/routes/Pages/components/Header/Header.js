import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Menu, X, Github } from 'preact-feather';
import { Link } from 'preact-router/match';

import logo from '../../../../assets/images/logo.svg';
import Pill from '../../../../components/Pill/Pill';
import { useOnHistoryPush } from '../../../../hooks';

import './Header.scss';
import pkg from '../../../../../package.json';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useOnHistoryPush(() => setMenuOpen(false));

  return (
    <header class="page-header" style={{display:"flex",justifyContent:"space-between"}}>
      <a class="brand" href="/">
        <img src={logo} alt="Flash" style={{width:'120px'}} />
        {/* <Pill>v{1.1}</Pill> */}
      </a>

      {/* <button
        class="btn thin icon mobile-menu"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button> */}
        <a class="brand" href="https://www.linkedin.com/in/lakshy-sharma-bab28424b/?originalSubdomain=in">
        Connect With Me
        {/* <Pill>v{1.1}</Pill> */}
      </a>
    </header>
  );
}

export default Header;
