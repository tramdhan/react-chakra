import React from "react";
import { observer } from "mobx-react-lite";
import { FiHome, FiCalendar } from "react-icons/fi";
import { useStores } from "../../store";
import style from "./Sidenav.module.css";

const navitems = [
  { id: 1, icon: <FiCalendar />, label: "Top Nav" },
  { id: 2, icon: <FiHome />, label: "Events" },
];

const SideNav = observer(() => {
  const { mainStore, userStore } = useStores();

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
              <li key={item.id} className={style.iconstyle} onClick={toggleNav}>
                {item.icon} <p className={style.label}>{item.label}</p>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
});

export default SideNav;
