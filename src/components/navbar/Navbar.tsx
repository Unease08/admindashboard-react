import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Softminds </span>
      </div>
      <div className="icons">
        <img src="/search.svg" className="icon" alt="" />
        <img src="/app.svg" className="icon" alt="" />
        <img src="/expand.svg" className="icon" alt="" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/19936793/pexels-photo-19936793/free-photo-of-vicmary.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <span>Mary Jane</span>
        </div>
        <img src="/setting.svg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
