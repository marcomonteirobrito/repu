import React from "react";

export default function Input({ type, icon, placeholder, onChange }) {
  return (
    <div>
      {icon && <div className="icon">{icon}</div>}

      <input type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  );
}
