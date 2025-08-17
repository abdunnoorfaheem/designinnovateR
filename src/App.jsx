import RootLayout from "./components/layouts/RootLayout";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import {Routes ,Route} from "react-router-dom";
import Service from "./components/pages/Service";
import Portfolio from "./components/pages/Portfolio";
import Price from "./components/pages/Price";
import Blog from "./components/pages/Blog";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout/>}>
          <Route index  element={<Home/>}/>  
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/price" element={<Price/>}/>
        <Route path="/blog" element={<Blog/>}/>
        </Route>
        
       
      </Routes>
    </>
  );
}

export default App;
