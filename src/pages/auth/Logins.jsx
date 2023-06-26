import React from 'react';
import FormComponent from '../../utilities/FormComponent';
import PageTitle from '../../utilities/PageTitle';

const Logins = () => {
  const handleSubmit = (data) => {
    console.log(JSON.stringify(data))
  };

  const cekFile = false
  const method = 'POST';
  const contentType = 'application/json'
  const url = 'http://localhost:3000/login';
  const inputs = [
    { name: 'email', label: 'Email', type: 'text'},
    { name: 'password', label: 'Password', type: 'text' },
  ];

  return (
    <div>
      <PageTitle title="Login" />
      <FormComponent method={method} url={url} inputs={inputs} onSubmit={handleSubmit} cekFile={cekFile} contentType={contentType} />
    </div>
  );
};

export default Logins;
