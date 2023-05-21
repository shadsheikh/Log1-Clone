import './App.css';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import Options from './components/Options';
import Dropdown from './components/Dropdown';
import Insights from './components/Insights';
import Details from './components/Details';

function App() {
  return (
    <div>
      <Header/>
      <div className='screen'>
        <NavigationBar/>
        <Options/>
        <Dropdown/>
        <Insights/>
        <Details/>
      </div>
    </div>
  );
}

export default App;
