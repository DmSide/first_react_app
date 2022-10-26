import React from 'react';
import {Route, Routes} from "react-router-dom";
import {ProductsPage} from "./pages/ProductsPage";
import {Navigation} from "./components/Navigation"
import {AboutPage} from "./pages/AboutPages";

function App() {
   return (
       <>
            <Navigation></Navigation>
           <Routes>
               <Route path="/" element={<ProductsPage/>}/>
               <Route path="/about" element={<AboutPage/>}/>
           </Routes>
       </>

   )
}

export default App;
