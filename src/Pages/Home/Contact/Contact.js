import React from "react";
import backgroundcover from "../../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section
      className="mt-16"
      style={{
        background: `url(${backgroundcover})`,
      }}
    >
      <div className="text-center p-20">
        <h5 className="text-2xl text-white">Contact Us</h5>
        <h2 className="text-3xl text-white">Stay connected with us</h2>
        <form className="p-10 w-full">
          <input
            className=" rounded lg:px-10 p-2"
            type="text  "
            placeholder="Email Address"
          />
          <br />
          <input
            className="mt-5  lg:px-10  p-2 rounded"
            type="text "
            placeholder="Subject"
          />
          <br />
          <input
            className="mt-5 lg:px-10 p-10 rounded"
            type="text"
            placeholder="Your Message"
          />{" "}
          <br />
          <button className="btn mt-5 mb-10 btn-active btn-primary">
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
