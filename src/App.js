
import './App.css';
import Header from './Components/Header'
import MainCard from './Components/MainCard';
import SubCard from './Components/SubCard';
function App() {
  return (
    <div className="text-white">
      <Header />
      <div className='flex md:flex-row justify-around my-10'>
        <MainCard />
        <MainCard />
        <MainCard />
      </div>
      <div className='flex md:flex-row justify-around my-10'>
        <SubCard/>
        <SubCard/>
        <SubCard/>
        <SubCard/>
      </div>
      
    </div>
  );
}

export default App;
