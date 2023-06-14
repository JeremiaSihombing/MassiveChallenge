import React, { useState } from "react";

const Contact = () => {
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
    <div className="bg-[#FAF3EC]">
      <div data-aos="fade-up bg-[#FAF3EC]">
        <div id="contact" className="text-[#020556] text-center font-bold text-[35px] pt-10">Contact Us</div>
        <div className="text-center mt-2 text-[#667085]">We’d love to hear from you. Please fill out this form.</div>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mb-4" data-aos="fade-left" data-aos-duration="1500">
        <div className="mb-4 mt-3">
          <label htmlFor="firstName" className="block mb-2 font-medium text-[#344054]">
            First Name
          </label>
          <input type="text" id="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2 font-medium text-[#344054]">
            Last Name
          </label>
          <input type="text" id="lastName" placeholder=" Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium text-[#344054]">
            Email
          </label>
          <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 font-medium text-[#344054]">
            Phone Number
          </label>
          <input type="tel" id="phone" placeholder=" Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-medium text-[#344054]">
            Message
          </label>
          <textarea id="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded"></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="accept" className="flex items-center text-[#344054]">
            <input type="checkbox" id="accept" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} className="mr-2" />
            You agree to our friendly privacy policy.
          </label>
        </div>
        <button type="submit" className="bg-[#f48c06]  hover:bg-blue-600 text-white font-medium py-2 px-4 rounded cursor-pointer block mx-auto">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
