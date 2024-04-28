import React, { useState } from "react";
import "./form.css";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./db";

function Form() {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();

    return;
    const doc = await addDoc(collection(db, "users"), {
      name: name,
      number: num,
    });
    console.log("done", doc);
    window.location = "/card";
  };

  return (
    <div class="container">
      <div class="card">
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="number"
            name="number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
            placeholder="Number"
            required
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
