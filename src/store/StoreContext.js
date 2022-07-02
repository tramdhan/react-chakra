import React from "react";
import MainStore from "./MainStore";

const mainStore = new MainStore();

export const StoreContext = React.createContext(mainStore);
