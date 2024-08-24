import './App.css';
//import Form from './Form'
import ResponseForm from './ResponseForm';
import Form1 from './Form1'
import Success from './Success'
import { createContext,useState } from 'react';
export const context = createContext()
function App() {
  let [form,setform]=useState(false)
  let [res,setres]=useState(false)
  let [success,setsuccess]=useState(false)
  let [FormData,setformdata]=useState({
    Name:"",
    Gender:"",
    Category:"",
    Interests:[],
    Terms_and_conditions:false
  })

function updatecontent(data)
{
setformdata({data})
}
let handleform=()=>{
setform(false)
setsuccess(true)
}

//console.log(FormData)
  return (
  <div className='main'>
    <context.Provider value={FormData}>
    <div className='btn'>
    <button onClick={()=>{setform(true)
    setres(false)
    
    
    }} >Open A Form</button>
    
    <button onClick={()=>{setres(true)
      setsuccess(false)
      setform(false)
    }}
    >Go To Response</button>
    </div>

    <div className='frm'>
    {
    form && <Form1 update={updatecontent} handle={handleform}/>
    }
    
    </div>
    {
    success && <Success/>
    }
    <div className='frm'>
        {
        res && <ResponseForm/>
      }
    </div>
    </context.Provider>
    
  </div>
  );
}

export default App;
