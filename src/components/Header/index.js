import React from "react";
import { observer } from "mobx-react-lite";
import { FiHome, FiCalendar } from "react-icons/fi";
import { ReactComponent as AppLogo } from "../../assets/circuitlogo.svg";
import { useStores } from "../../store";
import style from "./Topnav.module.css";

const navitems = [
  { id: 1, icon: <AppLogo />, label: "" },
  { id: 2, icon: <FiCalendar />, label: "Top Nav" },
  { id: 3, icon: <FiHome />, label: "Events" },
];

const Header = observer(() => {
  const { mainStore, userStore } = useStores();

  const handleNavClick = (id) => {
    console.log("click nav: ", id);
    switch (id) {
      case 1:
        console.log("nothing here");
        break;
      case 2:
        toggleNav();
        break;
      case 3:
        console.log("clicked 2");
        break;
      default:
        console.log("default nav, " + id);
    }
  };
  const toggleNav = () => {
    mainStore.topNav = !mainStore.topNav;
    mainStore.sideNav = !mainStore.sideNav;
  };

  return (
    <div className={style.sidenav}>
      <ul>
        {navitems.map((item) => {
          return (
            <>
              <li id={item.id} key={item.id} className={style.iconstyle} onClick={() => handleNavClick(item.id)}>
                {item.icon} <p className={style.label}>{item.label}</p>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
});

export default Header;
