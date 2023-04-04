import './App.css';
import LeftNav from './Components/LeftNav/LeftNav';
import Navbar from './Components/Navbar/Navbar';
import Card from './Components/Card/Card';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <div className='box'>
     <LeftNav/>
      <div className='card-box-con'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
     </div>

    </div>
  );
}

export default App;
