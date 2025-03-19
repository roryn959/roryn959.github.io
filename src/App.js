import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavComponent from './Components/NavComponent';
import MainPage from './Components/MainPage';
import SketchApp from './Components/SketchApp';
import Knifefish from './Components/Knifefish';

function App() {
  console.log('hi');
  console.log(process.env.REACT_APP_OPENAI_API_KEY);
  return (
    <Router>
      <div className="App">
          <NavComponent/>
          <Routes>
            <Route path='knifefish' element={<Knifefish/>} />
            <Route path='sketchApp' element={<SketchApp/>}/>
            <Route path='*' element={<MainPage/>}/>
          </Routes>
      </div>
      </Router>
  );
}

export default App;
