import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile/*"
              element={
                <Profile />
              }
            />
            <Route
              path="/dialogs/*"
              element={<DialogsContainer />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
