import React from "react";

const Navbar = () => {
  const navLinks = [
    { id: "home", name: "Home" },
    { id: "menu", name: "Menu" },
    { id: "about", name: "About Us" },
    { id: "story", name: "Our Story" },
    { id: "blog", name: "Blog" },
    { id: "contact", name: "Contact" },
  ];

  return (
    <nav>
      <ul className="flex flex-row gap-16 text-lg text-white py-6 px-32 bg-[#19161B]">
        <h1 className="font-bold">Sweeteria</h1>
        {navLinks.map((items) => (
          <li key={items.id}>{items.name}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
