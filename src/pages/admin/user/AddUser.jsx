import React from 'react';
import FormComponent from '../../../utilities/FormComponent';
import PageTitle from '../../../utilities/PageTitle';

const AddUser = () => {
  const handleSubmit = (data) => {
    console.log(JSON.stringify(data))
  };

  const cekFile = false
  const method = 'POST';
  const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTY4NzYwOTI0MywiZXhwIjoxNjg3NjEyODQzLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1kZXlmN0BleGxlc3MtNDU1ZjQuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzdWIiOiJmaXJlYmFzZS1hZG1pbnNkay1kZXlmN0BleGxlc3MtNDU1ZjQuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJ1aWQiOiJ5U3B1UGdzRTVLVGJlTGtDd0lCMG9mSXk5MzgzIn0.k47_WBfgutopk0sSEyDnRrTHk8R8NSOQxcY1Cwtw7860IF0p23-n6OL0OQE4JryZ0SC8_VR21T8v77WeEmAGAjkZihjpbiyq-u9o4wRIhsBdsrZFCPT8kgcwUbM8LW4PEpZl6lFRX9IBqFD4peEsCzNMMFAqGvf4sh-rU3rdWvQKocuzn3S-DgSQ3j-j_PsLed9YpE8EHzhVnATUSKD9wAqEizJHXJpXymE3128z4-yL6zff6d02_-fsSPN-Uet04isqN9JWiYHzPAAEN4pjBKiodmGDzOzx43r4OHM5-x10sMUBWZyP9V5gW2XmyKU2vIttIgZcLOXx95w68Ju25g'
  const contentType = 'application/json'
  const url = 'http://localhost:3000/user';
  const inputs = [
    { name: 'email', label: 'Email', type: 'text'},
    { name: 'password', label: 'Password', type: 'text' },
    { name: 'role', type: 'hidden' }
  ];
  const dataEdit = {role : 'user'}

  return (
    <div>
      <PageTitle title="Add User" />
      <FormComponent method={method} url={url} inputs={inputs} onSubmit={handleSubmit} cekFile={cekFile} contentType={contentType} token={token} dataEdit={dataEdit} />
    </div>
  );
};

export default AddUser;
