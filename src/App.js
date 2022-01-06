import SideBar from "./Components/SideBar/SideBar";
import Topbar from "./Components/Topbar/Topbar";
import Home from "./Pages/Home/Home";
import UserList from "./Pages/UserList/UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter className="App">
      <Topbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-3">
            <SideBar />
          </div>
          <div className="col-md-9 col-sm-9 col-xs-9">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/user" element={<UserList />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
