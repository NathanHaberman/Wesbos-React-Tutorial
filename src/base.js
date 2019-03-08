import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDQ7AoIuM9ogROXMoxxYEG8RERWq6RTMA8",
  authDomain: "catch-of-the-day-nathan-h.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-nathan-h.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// Named Export
export { firebaseApp };

// Default Export
export default base;
