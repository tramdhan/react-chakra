import React from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { GrTechnology } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import { FiUploadCloud } from "react-icons/fi";
import { ReactComponent as AppLogo } from "../../assets/circuitlogo.svg";
import { useStores } from "../../store";
import style from "./Sidenav.module.css";

const navitems = [
  { id: 1, icon: <AppLogo />, label: "" },
  { id: 2, icon: <FcAbout />, label: "About" },
  { id: 3, icon: <GrTechnology />, label: "DataTable" },
  { id: 4, icon: <FiUploadCloud />, label: "Upload" },
];

const SideNav = observer(() => {
  const { mainStore, userStore } = useStores();

  let navigate = useNavigate();

  const handleNavClick = (id) => {
    console.log("click nav: ", id);
    switch (id) {
      case 1:
        navigate("./", { replace: true });
        break;
      case 2:
        navigate("./about", { replace: true });
        break;
      case 3:
        navigate("./datatable", { replace: true });
        break;
      case 4:
        navigate("./fileupload", { replace: true });
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

export default SideNav;
