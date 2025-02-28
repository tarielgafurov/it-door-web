import AdminApplication from './admin/AdminApplication';
import BigCallRoutes from './admin/BigCallRoutes';
import './App.css';
import Adress from './components/Adress';
import AdminMentor from './components/LearCraft/AdminMentor';

function App() {
  return (
    <div className="App">
      <Adress/>
      <BigCallRoutes/>
    </div>
  );
}

export default App;
