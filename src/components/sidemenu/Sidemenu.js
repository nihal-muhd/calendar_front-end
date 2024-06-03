import React, { useState } from "react";
import "./Sidemenu.scss";
import sidemenuList from "../../constants/sidemenu-list";

const Sidemenu = () => {
  const [isOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <>
      <div className={`sidemenu-wrap ${isOpen ? 'open' : ''}`}>
        {sidemenuList.map((list, i) => (
          <div className="sidemenu-item" key={i}>
            <div className="sidemnu-icon" style={{ backgroundImage: `url(${require('../../assets/' + list.icon)})` }}></div>
            <div className="sidemnu-name">{list.displayName}</div>
          </div>
        ))}
      </div>
      {/* <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div> */}
    </>
  )
};

export default Sidemenu;
