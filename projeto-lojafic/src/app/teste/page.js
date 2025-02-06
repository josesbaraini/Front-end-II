'use client'
import { useState, useRef } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  function handleMouseEnter() {
    setIsOpen(true);
  }

  function handleMouseLeave(event) {
    // Se o próximo elemento ainda está dentro do dropdown, não feche
    if (dropdownRef.current && dropdownRef.current.contains(event.relatedTarget)) {
      return;
    }
    setIsOpen(false);
  }

  return (
    <div
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", display: "inline-block" }}
    >
      <button>Menu</button>
      {isOpen && (
        <div style={{ position: "absolute", top: "100%", left: 0, background: "lightgray", padding: "10px" }}>
          <p>Opção 1</p>
          <p>Opção 2</p>
          <p>Opção 3</p>
        </div>
      )}
    </div>
  );
}


