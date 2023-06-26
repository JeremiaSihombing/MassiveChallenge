import React, { useEffect, useState } from 'react';

const Yt = () => {
  const [authUrl, setAuthUrl] = useState('');

  useEffect(() => {
    const getAuthUrl = async () => {
      try {
        const response = await fetch('http://localhost:3000/auth/url');
        const data = await response.json();
        setAuthUrl(data.url);
        console.log(authUrl)
      } catch (error) {
        console.error('Gagal mendapatkan URL otorisasi:', error);
      }
    };

    getAuthUrl();
  }, []);

  return (
    <div>
      <a href={authUrl}>Otorisasi YouTube</a>
    </div>
  );
};

export default Yt;
