import React from 'react';
import FormComponent from '../../../utilities/FormComponent';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../../utilities/PageTitle';

const AddVideo = () => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    console.log('Form Data:', data);
   // navigate(`/dashboard/video`, { replace: true });
  };

  const method = 'POST';
  const cekFile = true
  const url = 'http://localhost:3000/video';
  const inputs = [
    { name: 'title', label: 'Judul', type: 'text' },
    { name: 'description', label: 'Deskripsi', type: 'text' },
    { name: 'video', label: 'Video', type: 'file' },
    { name: 'thumbnail', label: 'Thumbnail', type: 'file' },
  ];

  return (
    <div>
      <PageTitle title="Add Video" />
      <FormComponent method={method} url={url} inputs={inputs} onSubmit={handleSubmit} cekFile={cekFile} />
    </div>
  );
};

export default AddVideo;
