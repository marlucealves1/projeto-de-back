import React from 'react'
import { TableContainer, Th,Thead, Tr,Td, } from '../styles/Table'

const Table = ({users}) => {
  return (
<TableContainer>
    <Thead>
       <Tr>
<Th>Título</Th>
<Th>Autor(a)</Th>
<Th>Editora</Th>
       </Tr>
    </Thead>
    <tbody>
      {
        users.map((item)=>(
          <Tr>
            <Td>{item.titulo}</Td>
            <Td>{item.autor}</Td>
            <Td>{item.editora}</Td>
          </Tr>
        ))
      }
    </tbody>
</TableContainer>
  )
}

export default Table; 