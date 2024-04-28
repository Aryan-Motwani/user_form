import React from "react";
import "./styles.css";
import Form from "./Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Second from "./Second";
import IMgg from "./ImgProp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Form />}> */}
        {/* <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />  */}
        <Route path="/" element={<Form />} />
        <Route path="card" element={<Second />} />
        <Route path="img" element={<IMgg />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
