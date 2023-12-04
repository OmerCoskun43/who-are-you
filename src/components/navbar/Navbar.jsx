import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="maded">
        <img src="./images/logo.png" alt="" />
        <h2>CREATED BY CSKN</h2>
      </div>
      <div className="links">
        <a href="#horoscope">HOROSCOPE</a>
        <a href="#daily">DAILY</a>
        <a href="#tarot">TAROT</a>
        <a href="#article">ARTICLE</a>
        <a href="#contact">CONTACT</a>
      </div>
    </div>
  );
};

export default Navbar;
