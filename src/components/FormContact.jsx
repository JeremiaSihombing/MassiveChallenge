import React, { useState } from "react";

const FormContact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lakukan sesuatu dengan data form yang disubmit
    console.log({
      firstName,
      lastName,
      email,
      phone,
      message,
      accepted,
    });

    // Reset nilai input setelah submit
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setAccepted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="firstName" className="block mb-2 font-bold">
          Nama Depan
        </label>
        <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block mb-2 font-bold">
          Nama Belakang
        </label>
        <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-bold">
          Email
        </label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-2 font-bold">
          No Handphone
        </label>
        <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 font-bold">
          Pesan
        </label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded"></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="accept" className="flex items-center">
          <input type="checkbox" id="accept" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} className="mr-2" />
          Saya setuju dengan syarat dan ketentuan
        </label>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default FormContact;
