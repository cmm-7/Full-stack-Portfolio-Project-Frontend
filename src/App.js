import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Edit from "./Pages/Edit";
import Four0Four from "./Pages/Four0Four";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";


import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Index />} />
            <Route path="/products/new" element={<New />} />
            <Route exact path="/products/:id" element={<Show />} />
            <Route path="/products/:id/edit" element={<Edit />} />
            <Route path="*" element={<Four0Four />} />
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

