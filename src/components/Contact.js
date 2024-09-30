const Contact = () => {
  return (
    <div className="m-4 font-bold">
      <h1 className="m-4 p-2">Email: lokeshpandita01@gmail.com</h1>
      {/* <h1 className="m-4 p-2">Contact no: 9149858166</h1>
      <h1 className="m-4 p-2">We would love to hear from you</h1> */}
      <input
        className="m-4 p-2 border-2	w-4/12 rounded-xl"
        placeholder="Name"
      ></input>
      <br></br>
      <textarea
        className="border-2 m-4 p-2 w-4/12 rounded-xl"
        placeholder="Message"
        type="textarea"
      ></textarea>
      <br></br>
      <button
        className="bg-black text-white m-4 p-2 border-2	w-4/12 rounded-xl"
        type="submit"
      >
        SUBMIT
      </button>
    </div>
  );
};

export default Contact;
