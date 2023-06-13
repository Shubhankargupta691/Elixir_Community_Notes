import { BrowserRouter } from "react-router-dom";

import {Contact,  Hero, Navbar,Notes, StarsCanvas } from "./components";


const App = () =>  {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Notes />
        <div className="relative z-0">
     
        
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
