const Appointment = () => {
  return (
    <>
      <h1 className="flex items-center justify-center sm:text-6xl text-4xl font-semibold text-center mt-14 mb-8 sm:mt-24 sm:mb-12 w-full  text-black py-5">
        Book an Appointment
      </h1>
      <div className="flex justify-center items-center flex-col mb-8">
        <form
          action="https://formspree.io/f/movaqnew"
          method="POST"
          className="flex flex-col gap-4 sm:w-[750px]"
        >
          <input
            type="text"
            placeholder="Name"
            name="Name"
            required
            autoComplete="off"
            className=" rounded-md p-2 shadow-lg border-[1px] border-black"
          />
          <input
            type="email"
            placeholder="Email"
            name="Email"
            required
            autoComplete="off"
            className="rounded-md p-2 shadow-lg border-[1px] border-black"
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            required
            autoComplete="off"
            placeholder="Enter Your Message"
            className="rounded-md p-2 shadow-lg border-[1px] border-black"
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="bg-black text-white rounded-md p-2 shadow-xl"
          />
        </form>
      </div>
    </>
  );
};

export default Appointment;
