// Import Assets
import profile from '../assets/mike_profile_pic.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Mike West" />

            <div className='header__content'>
                <h1>Hi, I'm Mike</h1>
                <p>Blockchain Developer</p>
                <a href = "mailto:micwes@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;