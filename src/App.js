import formJSON from './timeSeries.json';
import {useState, useEffect } from 'react';
import Element from './components/Elements'

function App() {

  const [elements,setElements] = useState(null);
  useEffect(() => {
    setElements(formJSON[0])
   
  }, [])

  const {data_labels, GCP} = elements ?? {}
  return (
    <div className="App container">
       <form>
       {data_labels? data_labels.map((field,i) =><Element key={i} field={data_labels}/>) :null}
  
  
  

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
  );
}   

export default App;
