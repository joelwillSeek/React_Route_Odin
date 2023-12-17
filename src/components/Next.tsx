import { Link, Outlet } from "react-router-dom";

let Next = () => {
  return (
    <>
      <h1>Next</h1>
      <ul>
        <li>
          <Link to="/next/1">1</Link>
        </li>
        <li>
          <Link to="/next/2">2</Link>
        </li>
        <li>
          <Link to="/next/3">3</Link>
        </li>
      </ul>
      <div>Some Childern</div>
      <Outlet></Outlet>
    </>
  );
};

export default Next;
