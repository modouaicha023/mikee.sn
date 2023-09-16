import NavBar from '../../Components/NavBar/NavBar';
import './Header.css';
import logo from '../../assets/images/mikeelogo.png'
export default function Header() {

    return (
        <header>
            <div className='logoContainer'>
                <a id='text-and-logo-container'>
                    <img id='logo' src={logo} alt="logo" />
                    <p id='text-logo'>Miké</p>
                </a>
            </div>
            <NavBar />
            <div className='seach-container'>

                <form action="" method='get' className='form-seach'>
                    <div className="search-design">
                        <span className="material-symbols-outlined" id='iconSearch'>search</span>
                        <input type="search" className="search" placeholder='Search a anime, mangas, webtoon,manhwas....' />
                    </div>
                    <input type="submit" className="submit-btn" />
                </form>
            </div>
        </header>
    )
}