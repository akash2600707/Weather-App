import React from "react";
function Footer() {
  return (
    <footer className="bg-purple-800 p-1 text-white text-center">
      <div className="flex justify-center items-center">
        <img
          src={"https://i.ibb.co/kgzS0cv/logo.jpg"} 
          alt="Logo"
          className="mr-1 w-6 h-6"
        />
        <span className="font-bold">Weather-App</span>
      </div>
      <div className="mt-2">
        <a href="https://akashr.me" className="mx-2">
          Contact Us
        </a>
      </div>
    </footer>
  );
}

export default Footer;




