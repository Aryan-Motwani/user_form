import logo from "./logo.svg";
import "./App.css";
import { SimpleRegistrationForm } from "./Formm";
// import { app, getUsers, imp } from "./db";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./db";

function App() {
  const fetchAll = async () => {
    // getUsers();
    const doc = await addDoc(collection(db, "users"), {
      name: "jryan",
    });
    console.log("done", doc);
  };

  const getUsers = async () => {
    const qs = await getDocs(collection(db, "users"));
    qs.forEach((doc) => {
      console.log(doc.data());
    });
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={fetchAll}>Hello</button>
      {/* <SimpleRegistrationForm /> */}
    </div>
  );
}

export default App;
