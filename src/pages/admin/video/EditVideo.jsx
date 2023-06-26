import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import FormComponent from '../../../utilities/FormComponent';

const EditVideo = () => {
  
  // const { id } = useParams();
  
  const id = '-NYMsTxJAM0K9qvWNOed'
  
  const cekFile = false
  
  const handleSubmit = (data) => {
    console.log(JSON.stringify(data))
  };
  
  const contentType = 'application/json'
  
  const url = `http://localhost:3000/video/${id}`
  
  const method = 'PUT'
  
  const [ dataFetch, setDataFetch ] = useState()
  
  useEffect(()=>{
      fetchDataEdit()
    }, [])
    
    useEffect(() => {
    console.log(dataFetch);
  }, [dataFetch]);
  
  
  
  const fetchDataEdit = async () => {
    console.log('Sedang Fetch')
    
    const res = await fetch(`http://localhost:3000/video/${id}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          // authorization: token ? `${token}` : '',
        }
    })
    .then((response) => response.json())
        .then((resData) => {
          setDataFetch(resData);
          // console.log({data:dataFetch});
        })
        .catch((error) => {
          console.error('Error Fetch:', error);
        });
  }
  
  const inputs = [
    { name: 'tes', label: 'Judul', type: 'text' }
  ]
  
  return (
    <>
      <FormComponent method={method} url={url} contentType={contentType} cekFile={cekFile} onSubmit={handleSubmit}  dataEdit={dataFetch} inputs={inputs} />
    </>
  )
}

export default EditVideo