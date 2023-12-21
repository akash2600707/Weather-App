import { MantineProvider,} from "@mantine/core";
import "./App.css";
import "@mantine/core/styles.css";
import Home from "./Components/Home";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import PreLoader from "./Components/PreLoader";
import {BrowserRouter ,Routes , Route,} from "react-router-dom";
import Converter from "./Components/Converter";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="">
      {isLoading ? (
        <PreLoader />
      ) : (
        <MantineProvider>
        <Toaster />
        <BrowserRouter>
        <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/converter' element={<Converter/>} />
      </Routes>
      </BrowserRouter>
      </MantineProvider>
      )}
      
    </div>
  );
}

export default App;
