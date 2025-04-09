import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Item List</h1>
      <ul>
        <li><Link to="/items/1">Item 1</Link></li>
        <li><Link to="/items/2">Item 2</Link></li>
        <li><Link to="/items/3">Item 3</Link></li>
      </ul>
    </>
  );
}

export default Home;
