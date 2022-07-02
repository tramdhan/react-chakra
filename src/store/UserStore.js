import { makeAutoObservable } from "mobx";

class UserStore {
  users = [];
  test = "user store var";

  constructor() {
    makeAutoObservable(this);
  }

  addUser(user) {
    let send_user = { user };

    this.users.push(send_user);
  }
}

export default UserStore;
