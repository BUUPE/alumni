import { Firebase as FirebaseSuper } from "@buupe/react-components";

const config = {
  apiKey: "AIzaSyBxBIbTYbRuqP1np-ri4YaJ0H6OYK4L46g",
  authDomain: "upe-website-fa07a.firebaseapp.com",
  databaseURL: "https://upe-website-fa07a.firebaseio.com",
  projectId: "upe-website-fa07a",
  storageBucket: "upe-website-fa07a.appspot.com",
  messagingSenderId: "896060764020",
  appId: "1:896060764020:web:331114a396e41adfa30621",
  measurementId: "G-BV6VQMMSQ5",
};

class Firebase extends FirebaseSuper {
  constructor(app) {
    super(app, config);

    this.functions = app.functions();

    // *** Functions API ***
    this.createUser = this.functions.httpsCallable("alumniPortalCreateUser");
    this.getUser = this.functions.httpsCallable("alumniPortalGetUser");
    this.getUsers = this.functions.httpsCallable("alumniPortalGetUsers");
  }
}

export default Firebase;
