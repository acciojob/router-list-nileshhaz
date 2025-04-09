
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/items/:id" element={<ItemDetail/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
