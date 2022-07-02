import { makeAutoObservable } from "mobx";

class MainStore {
  topNav = true;
  sideNav = false;

  name = "John doe";
  test2 = "main store var";

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  addNote(note) {
    let send_note = { note };

    // check if name is available on userstore
    if (this.rootStore.userStore.name) {
      send_note.username = this.rootStore.userStore.name;
    }

    this.notes.push(send_note);
  }
}

export default MainStore;
