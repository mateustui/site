import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, HiveAI, Home, Projects } from "./pages";

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/site' element={<Home key={Date.now()}/>} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                <Route path='/site/AI' element={<HiveAI />} />
                  <Route path='/site/about' element={<About />} />
                  <Route path='/site/projects' element={<Projects />} />
                  <Route path='/site/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
