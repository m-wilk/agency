import Image from "../../atoms/image/Image";
import DotLeft from "../../../assets/img/dot-left.png";
import DotRight from "../../../assets/img/dot-right.png";
import Select from "../../molecules/select/Select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [stelectedOption, setSelectedOption] = useState();
  const [message, setMessage] = useState("");
  const [massageErrors, setMassageErrors] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      stelectedOption,
      message
    };
    axios.post("http://localhost:7010/api/v1/contact-form", formData).then((response) => {
      console.log("ok wysłane", response.data);
      navigate("/")
    })
    .catch((error) => {
      if(error.response) {
        setMassageErrors(error.response.data.error);
      }
    })
  }

  const subjectOptions = [
    {
      value: "branding",
      label: "Branding",
    },
    {
      value: "design",
      label: "Design",
    },
    {
      value: "ecommerce",
      label: "Ecommerce",
    },
    {
      value: "marketing",
      label: "Marketing",
    },
  ];

  const onOptionChange = (option) => {
    console.log("to odpala sie w rodzicu");
    setSelectedOption(option);
  };
  return (
    <div className="bg-strong-dark-gray text-white">
      <div className="py-80 bg-triangles-black bg-cover">
        <div className="container flex flex-col items-center gap-8 relative">
          <h1 className="text-6xl font-bold">Contact Contact Us</h1>
          <div className="uppercase text-primary">
            <a herf="#">Home</a> &nbsp;
            <span className="icon-arrow-up-right2"></span> &nbsp;
            <a herf="#">Contact us</a>
          </div>
          <Image className="absolute  left-0 top-20" src={DotLeft} />
          <Image className="absolute  right-0 top-0" src={DotRight} />
        </div>
      </div>
      <div className="container py-24 flex justify-between">
        <div className="flex flex-col items-center gap-2 p-10 bg-black">
          <span className="icon-phone1 text-primary text-6xl"></span>
          <h5 className="text-2xl font-bold my-4">Phone & Fax</h5>
          <span>Mobile : +197 -90 - 56 - 780</span>
          <span>Fax : +44-208-1234567</span>
        </div>
        <div className="flex flex-col items-center gap-2 p-10 bg-black">
          <span className="icon-phone1 text-primary text-6xl"></span>
          <h5 className="text-2xl font-bold my-4">Phone & Fax</h5>
          <span>Mobile : +197 -90 - 56 - 780</span>
          <span>Fax : +44-208-1234567</span>
        </div>
        <div className="flex flex-col items-center gap-2 p-10 bg-black">
          <span className="icon-phone1 text-primary text-6xl"></span>
          <h5 className="text-2xl font-bold my-4">Phone & Fax</h5>
          <span>Mobile : +197 -90 - 56 - 780</span>
          <span>Fax : +44-208-1234567</span>
        </div>
        <div className="flex flex-col items-center gap-2 p-10 bg-black">
          <span className="icon-phone1 text-primary text-6xl"></span>
          <h5 className="text-2xl font-bold my-4">Phone & Fax</h5>
          <span>Mobile : +197 -90 - 56 - 780</span>
          <span>Fax : +44-208-1234567</span>
        </div>
      </div>
      <div className="container py-24 flex gap-10">
        <iframe
          className="w-1/2"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52816169.558200695!2d-161.49265223136007!3d36.102185713814805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1711689726724!5m2!1sen!2sbd"
        ></iframe>
        <form onSubmit={onSubmitHandler} className="w-1/2 space-y-4">
          <div className="flex gap-10">
            <input
              placeholder="Name"
              className="focus:outline-none bg-none bg-transparent border-b border-gray-600 pb-2 w-full"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              placeholder="Email"
              className="focus:outline-none bg-none bg-transparent border-b border-gray-600 pb-2 w-full"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <Select
            options={subjectOptions}
            label="-Subject-"
            // defaultOption={subjectOptions[0]}
            onOptionChange={onOptionChange}
            labelClassName="border-b border-gray-600"
            optionsClassName="border-none bg-strong-dark-gray"
          />
          <textarea
            className="text-gray-400 focus:outline-none bg-none bg-transparent w-full border-b border-gray-600 h-52"
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          >
            Massage
          </textarea>
          {massageErrors ? (<p className="text-red-400">{massageErrors}</p>) : null}
          <button className="px-28 py-3 border border-gray-600 rounded-full">
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
