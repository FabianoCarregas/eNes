
import {ReactComponent as GithubIcon} from '../../assets/img/github.svg';
import '../styles.css';

function Navbar() {
    
    return(
          <header>
            <nav className='container'>
              <div className='egames-nav-content'>
                <h1>e-Games</h1>
                <a href="https://github.com/FabianoCarregas">
                  <div className='egame-contact-container'>
                    <GithubIcon />
                    <p className='egame-contact-link'>/FabianoCarregas</p>
                  </div>
                </a>
              </div>
            </nav>
          </header>
        );   
}

export default Navbar;