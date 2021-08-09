
import UserNavbar from "./userComponents/UserNavbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
      <Router>
          {/* <UserNavbar /> */}
          <Switch>

              <Route exact path="/user">
                  <UserNavbar />
                  <h2>Tour</h2>
              </Route>

              <Route exact path="/user/travel_history">
                  <UserNavbar />
                  <h2>Travel History</h2>
              </Route>

              <Route exact path="/user/guideline">
                  <UserNavbar />
                  <h2>Travel Guideline</h2>
              </Route>

              <Route exact path="/user/notification">
                  <UserNavbar />
                  <h2>Notification</h2>
              </Route>

              <Route exact path="/user/give_review">
                  <UserNavbar />
                  <h2>Review</h2>
              </Route>

              <Route exact path="/user/profile">
                  <UserNavbar />
                  <h2>Profile</h2>
              </Route>

              <Route exact path="/project-login">
                  <UserNavbar />
                  <h2>Logout</h2>
              </Route>
              
          </Switch>
      </Router>
    );
}





export default App;
