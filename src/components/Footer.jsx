import React from 'react';

const Footer = ({ receive }) => {
  return (
    <div className="bg-blue-500 p-4 items-center justify-center flex text-xl font-semibold  w-[40rem]">
      <h1>{receive} Items in the cart</h1>
    </div>
  );
};

export default Footer;
