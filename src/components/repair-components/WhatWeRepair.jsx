import RepairLeftImgComp from "../common-components/RepairLeftImgComp";
import RepairRightImgComp from "../common-components/RepairRightImgComp";

export default function WhatWeRepair() {
  return (
    <>
      <h1 className="flex items-center justify-center sm:text-6xl text-4xl font-semibold text-center mt-14 mb-8 sm:mt-24 sm:mb-12 w-full  text-black py-5">
        What We Repair
      </h1>
      {/* Screen Repair */}

      <RepairLeftImgComp
        img={<img src="./assets/Screen.jpg" alt="" className="w-full" />}
        title="Screen Replacement"
        description="Smartphone screens are our portal to the whole digital world.
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
              seamless."
      />
      {/* MotherBoard Repair */}

      <RepairRightImgComp
        title="Motherboard Repair"
        description="Mobile phones draw their performance and power from the
              motherboards. The motherboard is an important component of a
              mobile phone. When there is an error in the motherboard, it can be
              quite frustrating to the user. Your phone may frequently hang,
              develop glitches, the buttons stop working, and sometimes can
              entirely black out. Our team of technicians - trained to handle
              situations like this - can help you revive your device. The
              technician will inspect your device to understand the root cause
              of the problem. Due to their rigorous training and years of
              experience, our technicians can identify the trouble quickly and
              will suggest the remedy."
        img={<img src="./assets/1r.jpg" alt="" className="w-full" />}
      />
      {/* Battery Repair */}
      <RepairLeftImgComp
        img={<img src="./assets/2r.jpg" alt="" className="w-full" />}
        title="Battery Replacement"
        description="It is common for smartphone batteries to deteriorate over time.
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
              genuine and 100% compatible with your device."
      />
      {/* Water Damage and Many More */}

      <RepairRightImgComp
        title="Water Damage Repair and Many more.."
        description=" Water damage is quite common, especially if the season is monsoon.
              Our smartphones accompany us everywhere, and it will not be
              shocking if they get spilled with water, coffee, or cold drinks.
              As we already know, electronics and water are not meant to meet
              each other. In the unfortunate event that it happens, your
              smartphone might start acting up. We understand the stress and
              frustration that comes with water damage to your phone. Whether
              it's dropping your phone in a pool, toilet, or any other body
              of water, our expert technicians have seen and solved every
              possible water damage problem. Our technicians are professionally
              trained and tested to handle damages caused by liquids to your
              smartphones. The technician will recommend the necessary repair
              solutions. Our services are quick and cost-effective. We guarantee
              a hassle-free experience, so you don't have to worry about
              anything. Trust us for all your phone repair needs, and our
              technicians will ensure your device runs smoothly again."
        img={<img src="./assets/3r.jpg" alt="" className="w-full" />}
      />
    </>
  );
}
