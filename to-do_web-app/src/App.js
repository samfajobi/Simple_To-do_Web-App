import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserAuth from "./components/UserAuth/UserAuth";
import SignUp from "./components/UserAuth/SignUp";
import Tasks from "./components/Tasks/Tasks";


function App() {
  return (
    <div>
     <Tasks />
     {/* <UserAuth /> */}
     <Router>
      <Routes>
        {/* <Route exact path="/signup" element={<SignUp />}/>
        <Route exact path="/login" element={<UserAuth />}/> */}
      </Routes>
     </Router>
     
    </div>
  );
}

export default App;
