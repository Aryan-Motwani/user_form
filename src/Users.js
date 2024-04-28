import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./db";

function Users() {
  const [userArray, setUserArray] = useState([]);
  const [list, setList] = useState();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const usersData = [];
        querySnapshot.forEach((doc) => {
          usersData.push(doc.data());
        });
        setUserArray(usersData);
      } catch (error) {
        console.error("Error getting users: ", error);
      }
    };

    getUsers();
  }, []); // E

  const print = (e) => {
    e.preventDefault();
    let a = [1, 2, 3, 4];
    console.log(userArray[0].name);
    setList(userArray.map((i) => <li>{i.name}</li>));
  };

  return (
    <div>
      <h1>Users</h1>
      {list}
      <p></p>
      <button onClick={print}>Get</button>
    </div>
  );
}

export default Users;
