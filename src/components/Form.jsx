import React, {useRef} from 'react'
import {toast} from 'react-toastify'
import { FormContainer , Label, Input,Button} from '../styles/Form';

const Form = () => {


    const ref = useRef();

    const handleSubmit = (event)=>{
      event.preventDefault();

      const book = ref.current;

        if( !book.titulo.value || !book.autor.value || !book.editora.value){
         return toast("Preencher todos os campos do formulario!")
}
    }
    return(
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <Label>Titulo</Label>
           <Input name='titulo'/>
           <Label> Autor (a)</Label>
           <Input name='autor'/>
           <Label> Editora</Label>
           <Input name='editora'/>
           <Button  type='submit'>Adicionar</Button>
        </FormContainer>
    )
}
export default Form ;  