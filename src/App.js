import './App.css';
import Greeter from './components/Greeter';
// import Logo from './components/Logo'
// import Text from './components/Text'
import nameArray from './data';



function App() {
  return (
    <div className="App">
      <h1 className='greeting'>Hello React</h1>
      {
       nameArray.map(n =>  
         <Greeter name={n.name} age={n.age} />
        )
      }
    </div>
  );
}

export default App;
