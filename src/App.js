import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharacterScreen from "./Screens/Character/CharacterScreen";
import CharacterDetails from "./Screens/Character/CharacterDetails";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="bg-gray-dark pb-4">
      <Router>
        <Navbar />
        //when changing routes the scroll position doesnt revert to top
        <ScrollToTop />
        <Switch>
          <Route exact path="/characters">
            <CharacterScreen />
          </Route>
          //need to pass the component throught Route param inorder to access
          the 'match' variable
          <Route path="/characters/:id" component={CharacterDetails}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
