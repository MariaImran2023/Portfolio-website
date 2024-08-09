import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Technology from './components/Technology';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Contactinfo from './components/Contactinfo';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div className="overflow-x-hidden text-neutral-100 antialiased selection:bg-blue-500 selection:text-white">
      <div className="relative min-h-screen bg-slate-950 ">
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>
        <div className="relative z-10">
          <LoadingBar  style={{ height: '4px' }} color='cyan'  progress={progress}  onLoaderFinished={() => setProgress(0)}  />          
          <Navbar/>
          <Intro/>
          <About id="About"/>
          <Technology id="Technology"/>
          <Experience id="Experience"/>
          <Projects id="Projects"/>
          <Contact id="Contact" setProgress={setProgress} />
          <Contactinfo/>
        </div>
      </div>
    </div>
  );
};

export default App;
