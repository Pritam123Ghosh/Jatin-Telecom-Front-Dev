import { Cog, IndianRupee, SearchCheck, ThumbsUp } from "lucide-react";

export default function WhatWeRepair() {
  return (
    <>
      <h1 className="flex items-center justify-center sm:text-6xl text-4xl font-semibold text-center mt-14 mb-8 sm:mt-24 sm:mb-12 w-full  text-black py-5">
        What We Repair
      </h1>
      {/* Screen Repair */}
      <div className="">
        <div className="grid gap-4 sm:grid-cols-2 sm:m-20 m-8">
          <div className="flex items-center justify-center rounded ">
            <img src="./assets/Screen.jpg" alt="" className="w-full" />
          </div>
          <div className="min-h-[400px] rounded p-4">
            <h1 className="text-3xl font-semibold lg:text-5xl text-black">
              Screen Replacement
            </h1>
            <br />
            <p className="text-gray-700 leading-relaxed sm:text-2xl">
              Smartphone screens are our portal to the whole digital world.
              While they are efficient, they are also very brittle. Smartphone
              screens are easily susceptible to damage such as scratches and
              cracks. All the smartphones come with a touchscreen control. If
              the screen is damaged, using the phone can be a difficult task.
              Our professional technicians are trained to repair your mobile
              screen to its former glory. Your mobile will be as good as new and
              in good working condition all under 30 minutes. If the damage has
              spread to the internal units of the phone and replacing the screen
              did not fix it, our technicians have a solution there as well. The
              technician will bring your device to the service center to fix the
              issue. Once it is ready, he will deliver it back to you for no
              additional cost. You can move on with life with your smartphone
              back where it belongs. Our services are quick, cost-effective, and
              seamless.
            </p>
          </div>
        </div>
      </div>
      {/* MotherBoard Repair */}
      <div className="">
        <div className="grid gap-4 sm:grid-cols-2 sm:m-20 m-8">
          <div className="min-h-[400px] rounded p-4">
            <h1 className="text-3xl font-semibold lg:text-5xl text-black">
              Motherboard Repair
            </h1>
            <br />
            <p className="text-gray-700 leading-relaxed sm:text-2xl">
              Mobile phones draw their performance and power from the
              motherboards. The motherboard is an important component of a
              mobile phone. When there is an error in the motherboard, it can be
              quite frustrating to the user. Your phone may frequently hang,
              develop glitches, the buttons stop working, and sometimes can
              entirely black out. Our team of technicians - trained to handle
              situations like this - can help you revive your device. The
              technician will inspect your device to understand the root cause
              of the problem. Due to their rigorous training and years of
              experience, our technicians can identify the trouble quickly and
              will suggest the remedy.
            </p>
          </div>
          <div className="flex items-center justify-center rounded ">
            <img src="./assets/1r.jpg" alt="" className="w-full" />
          </div>
        </div>
      </div>
      {/* Battery Repair */}
      <div className="">
        <div className="grid gap-4 sm:grid-cols-2 sm:m-20 m-8">
          <div className="flex items-center justify-center rounded ">
            <img src="./assets/2r.jpg" alt="" className="w-full" />
          </div>
          <div className="min-h-[400px] rounded p-4">
            <h1 className="text-3xl font-semibold lg:text-5xl text-black">
              Battery Replacement
            </h1>
            <br />
            <p className="text-gray-700 leading-relaxed sm:text-2xl">
              It is common for smartphone batteries to deteriorate over time.
              Over the years, smartphone batteries fail to hold charge for as
              long as they did when they were new. The most significant sign of
              a weak smartphone battery is the quick draining of power in your
              smartphone. When this starts happening, you might not be able to
              leave home without the charger. Or you might even be stranded in
              the middle of your day with a dead phone in your hand. We have the
              best solution to avoid such situations. Our technicians have your
              smartphone battery replaced with a new one in no time at all! He
              will inspect the device thoroughly to identify the reason for your
              battery drain. Once identified, if needed, the technician may
              recommend you change the battery, and he will do it for you at
              your doorstep. The spare parts offered by technicians are always
              genuine and 100% compatible with your device.
            </p>
          </div>
        </div>
      </div>
      {/* Water Damage and Many More */}
      <div className="">
        <div className="grid gap-4 sm:grid-cols-2 sm:m-20 m-8">
          <div className="min-h-[400px] rounded p-4">
            <h1 className="text-3xl font-semibold lg:text-5xl text-black">
              Water Damage Repair and Many more..
            </h1>
            <br />
            <p className="text-gray-700 leading-relaxed sm:text-2xl">
              Water damage is quite common, especially if the season is monsoon.
              Our smartphones accompany us everywhere, and it will not be
              shocking if they get spilled with water, coffee, or cold drinks.
              As we already know, electronics and water are not meant to meet
              each other. In the unfortunate event that it happens, your
              smartphone might start acting up. We understand the stress and
              frustration that comes with water damage to your phone. Whether
              it&apos;s dropping your phone in a pool, toilet, or any other body
              of water, our expert technicians have seen and solved every
              possible water damage problem. Our technicians are professionally
              trained and tested to handle damages caused by liquids to your
              smartphones. The technician will recommend the necessary repair
              solutions. Our services are quick and cost-effective. We guarantee
              a hassle-free experience, so you don&apos;t have to worry about
              anything. Trust us for all your phone repair needs, and our
              technicians will ensure your device runs smoothly again.
            </p>
          </div>
          <div className="flex items-center justify-center rounded ">
            <img src="./assets/3r.jpg" alt="" className="w-full" />
          </div>
        </div>
      </div>
      <h1 className="flex items-center justify-center sm:text-6xl text-4xl font-semibold text-center mt-14 mb-8 sm:mt-24 sm:mb-12 w-full  text-black py-5">
        Jatin Telecom Promises
      </h1>
      <div className="grid gap-4 sm:grid-cols-12  sm:mx-96 sm:mb-20 mb-12 mx-20">
        <div className="min-h-[200px] sm:col-span-3">
          <div className="flex flex-col h-1/2 border-b-2 justify-center items-center rounded-tl-2xl rounded-tr-2xl bg-black">
            <IndianRupee size={48} strokeWidth={3} color="white" />
          </div>
          <div className="flex justify-center items-center h-1/2 font-semibold text-xl border-black border-l-2 border-r-2 border-b-2 rounded-bl-2xl rounded-br-2xl">
            Lowest Price
          </div>
        </div>
        <div className="min-h-[200px] sm:col-span-3">
          <div className="flex flex-col h-1/2 border-b-2 justify-center items-center rounded-tl-2xl rounded-tr-2xl bg-black">
            <Cog size={48} strokeWidth={3} color="white" />
          </div>
          <div className="flex justify-center items-center h-1/2 font-semibold text-xl border-black border-l-2 border-r-2 border-b-2 rounded-bl-2xl rounded-br-2xl">
            Quality Repairing
          </div>
        </div>
        <div className="min-h-[200px] sm:col-span-3">
          <div className="flex flex-col h-1/2 border-b-2 justify-center items-center rounded-tl-2xl rounded-tr-2xl bg-black">
            <SearchCheck size={48} strokeWidth={3} color="white" />
          </div>
          <div className="flex justify-center items-center h-1/2 font-semibold text-xl border-black border-l-2 border-r-2 border-b-2 rounded-bl-2xl rounded-br-2xl">
            100% Satisfaction
          </div>
        </div>
        <div className="min-h-[200px] sm:col-span-3">
          <div className="flex flex-col h-1/2 border-b-2 justify-center items-center rounded-tl-2xl rounded-tr-2xl bg-black">
            <ThumbsUp size={48} strokeWidth={3} color="white" />
          </div>
          <div className="flex justify-center items-center h-1/2 font-semibold text-xl border-black border-l-2 border-r-2 border-b-2 rounded-bl-2xl rounded-br-2xl">
            Skilled Worker
          </div>
        </div>
      </div>
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
}
