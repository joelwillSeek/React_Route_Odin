import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Next from "./components/Next";
import Previous from "./components/Previous";
import Childern from "./components/Childern";

function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "Red",
                  }
                : {}
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <Link to="/next">Next</Link>
        </li>
        <li>
          <Link to="/previous">Previous</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home name="eyoel"></Home>}></Route>
        <Route path="/next" element={<Next></Next>}>
          <Route path=":id" element={<Childern></Childern>}></Route>
          <Route index element={<Childern></Childern>}></Route>
        </Route>
        <Route path="/previous" element={<Previous></Previous>}></Route>
      </Routes>
    </>
  );
}

export default App;
