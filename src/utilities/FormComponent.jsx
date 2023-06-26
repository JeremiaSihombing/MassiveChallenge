import React, { useState } from 'react';

const FormComponent = ({ gambar, dataEdit, method, url, inputs, onSubmit, cekFile, contentType, token }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
  };

  const uploadImageToImageBB = async (file) => {
    const imageData = new FormData();
    imageData.append('image', file);

    const requestOptions = {
      method: 'POST',
      body: imageData,
    };

    const response = await fetch('https://api.imgbb.com/1/upload?key=0cc61493cbf363a64718706827b5ec29', requestOptions);
    const data = await response.json();
    console.log('image url : ' + data.data.url)
    return data.data.url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let requestOptions;

    if (cekFile === true) {
    const formDataToSend = new FormData();
console.log('ada file selain gambar')
    for (const key in formData) {
      const value = formData[key];

      if (value instanceof File && value.type.startsWith('image/')) {
        const imageUrl = await uploadImageToImageBB(value);
        formDataToSend.append(key, imageUrl);
        console.log(imageUrl);
      } else {
        formDataToSend.append(key, value);
      }
    }

    requestOptions = {
      method: method,
      body: formDataToSend,
    };
    } 
    else {
      if(gambar === true){
      console.log('ksnsns');
      for (const key in formData) {
      const value = formData[key];

      if (value instanceof File && value.type.startsWith('image/')) {
        const imageUrl = await uploadImageToImageBB(value);
        console.log(imageUrl);
        formData[key] = imageUrl
        
      }
    }
      console.log(formData);
      
    }
 
      
      console.log('file gambar/tanpa file')
      
      requestOptions = {
        method: method,
        headers: {
          'Content-Type': contentType,
           authorization: token ? `${token}` : '', // Menambahkan token akses ke header jika tersedia
        },
        body: JSON.stringify(formData),
      };
    }
  

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        onSubmit(data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
      
      console.log('sukses')
      
  };

  return (
    <form onSubmit={handleSubmit} encType={cekFile === true ? 'multipart/form-data' : undefined} className="bg-white table p-6">
            {inputs.map((input) => (
        <div key={input.name} className="mb-4">
          <label htmlFor={input.name} className="block text-sm font-medium text-gray-700">
            {input.label}
          </label>
          {input.type === 'file' ? (
            <input accept={input.accept}
              type="file"
              name={input.name}
              id={input.name}
              onChange={handleFileChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          ) : (
            <input defaultValue={dataEdit ? dataEdit[input.name] : ''}
              type={input.type}
              name={input.name}
              id={input.name}
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1"
            />
          )}
        </div>
      ))}
      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 border border-transparent rounded-md shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
