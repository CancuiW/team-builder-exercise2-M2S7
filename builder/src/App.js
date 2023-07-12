import React,{ useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [members,setMembers]=useState([])
  const [values, setValues] = useState({ name: '', email: '', role: '' })

  const onSubmit=()=>{
    setMembers([values,...members])
    setValues({ name: '', email: '', role: '' })
  }
  const onChange=(inputName,inputValue)=>{
    setValues({...values,[inputName]:inputValue})
  }


  return (
    <div className="App">
     <h1>Team builder</h1>
     <Form  values={values} submit={onSubmit} update={onChange}/>
     {members.map((x,idx)=>{
      return <p key={idx}>{x.name}'s email is {x.email} and the role is {x.role}</p>
     }
      
     )
     }
    </div>
  );
}

export default App;
