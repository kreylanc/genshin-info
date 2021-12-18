import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import CharacterScreen from "./Screens/Character/CharacterScreen";
import CharacterDetails from "./Screens/Character/CharacterDetails";
import ScrollToTop from "./ScrollToTop";
import ArtifactScreen from "./Screens/Artifacts/ArtifactScreen";

function App() {
  return (
    <div className="bg-gray-dark pb-4">
      <Navbar />

      <Routes>
        <Route path="/" element={<CharacterScreen />} />

        <Route path="characters" element={<CharacterScreen />}></Route>
        <Route path="/characters/:id" element={<CharacterDetails />}></Route>

        <Route path="artifacts" elements={<ArtifactScreen />}></Route>
      </Routes>
    </div>
  );
}

export default App;
