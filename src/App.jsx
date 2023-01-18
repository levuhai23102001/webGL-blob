import React from "react";
import Blob from "./blobs/Blob";
import { Canvas } from "@react-three/fiber";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <Blob />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
