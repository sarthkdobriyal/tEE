import { useState } from "react";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import Canvas from "./canvas";
import state from "./store";
import { useSnapshot } from "valtio";

function App() {
  const snap = useSnapshot(state);

  return (
    <main className="app transition-all ease-in bg-slate-300 ">
      {snap.intro ?
       <Home /> :
       <>
       <Customizer />
       <Canvas />
       </>
       }
    </main>
  );
}

export default App;
