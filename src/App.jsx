import React from 'react'
import axios from 'axios '
import { Container } from './styles/Container';
import Form from './components/Form'
import Table from './components/Table';
import { toast,ToastContainer } from 'react-toastify';


const getUsers = async() =>{
  try{
const response = await axios.get("http://localhost:3001")
  }catch(error){

  }
}
React.useEffect(()=>{
  getUsers();
}, [setUsers])



const App = () => {
  return (
<>
  <Container>
    <Form/>
    <Table  users={users}/>
  </Container>
  <ToastContainer autoClose={3000} position={'bottom-left'}/>
  </>
  )
}

export default App;