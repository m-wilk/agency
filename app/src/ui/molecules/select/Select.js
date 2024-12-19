import { useEffect, useRef, useState } from "react";

const Select = ({
  options,
  label,
  onOptionChange,
  defaultOption = null,
  labelClassName = "bg-black border rounded",
  optionsClassName="bg-black border"

}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const selectRef = useRef(null);

  const showClassName = isOpen ? " visible" : " invisible";

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log("to odala sie w dziecku");
    
    setSelectedOption(option);
    onOptionChange(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative " ref={selectRef}>
      <button
        type="button"
        onClick={toggleSelect}
        className={`w-full relative z-20 p-2  text-left flex justify-between items-center ${labelClassName}`}
      >
        {selectedOption?.label || label}
        <i className={`icon-arrow-${isOpen ? "up" : "down"} `}></i>
      </button>
      <ul
        className={`absolute z-30 w-full mt-1 bg-black border rounded transition-all duration-200 ease-in-out${showClassName} ${optionsClassName}`}
      >
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => handleOptionClick(option)}
            className="p-2 hover:bg-gray-700 cursor-pointer"
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
