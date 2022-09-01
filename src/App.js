import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function AppStore() {

  var [appNameList,setAppNameList] = useState(["Whatapp", "Youtube","Amazon"]);

  const addApp = () =>{
    let appName = prompt("Please enter app name", "Jigs");

    var newAppNameList = [... appNameList] ; 
    newAppNameList.push(appName);

    setAppNameList(newAppNameList);

  }

  const deleteApp = (index) => {
    var newAppNameList = [... appNameList] ;
    newAppNameList.splice(index,1);
    setAppNameList(newAppNameList);
  }
  return (
    <div className="App">
      <h1>JIGS App Store</h1>

      <button onClick={addApp}>Add</button>

      {
        appNameList.map((name, index) => 
        
        <p>
          
          {index} {name}
          <button onClick={e => deleteApp(index)}> Delete </button>
         </p>)
      }
    </div>
  );
}


function App(){

  return (
    <div>
      <AppStore/>
    </div>
  );
}

export default App;
