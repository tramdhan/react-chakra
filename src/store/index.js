import React from "react";
import MainStore from "./MainStore";
import UserStore from "./UserStore";

class RootStore {
  constructor() {
    this.mainStore = new MainStore(this);
    this.userStore = new UserStore(this);
  }
}

const StoresContext = React.createContext(new RootStore());

// function for the app to connect to the stores
export const useStores = () => React.useContext(StoresContext);
