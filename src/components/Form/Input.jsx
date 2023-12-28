import { useEffect, useState } from "react";

const Input = ({ type, placeholder, setSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const HandleInputChange = (e) => {
    const newTextContent = e.target.value;
    setInputValue(newTextContent);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setUrl();
      setSearch(inputValue);
    }
  };

  const setUrl = () => {
    let param = new URLSearchParams({ search: `${inputValue}` });
    window.history.pushState({}, "", `?${param.toString()}`);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={HandleInputChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Input;
