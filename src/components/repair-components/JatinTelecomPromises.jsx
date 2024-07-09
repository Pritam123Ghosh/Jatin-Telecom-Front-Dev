import { Cog, IndianRupee, SearchCheck, ThumbsUp } from "lucide-react";
import Promises from "../common-components/Promises";

const JatinTelecomPromises = () => {
  return (
    <>
      <h1 className="flex items-center justify-center sm:text-6xl text-4xl font-semibold text-center mt-14 mb-8 sm:mt-24 sm:mb-12 w-full  text-black py-5">
        Jatin Telecom Promises
      </h1>
      <div className="grid gap-4 sm:grid-cols-12  sm:mx-96 sm:mb-20 mb-12 mx-20">
        <Promises
          icon={<IndianRupee size={48} strokeWidth={3} color="white" />}
          text="Lowest Price"
        />

        <Promises
          icon={<Cog size={48} strokeWidth={3} color="white" />}
          text="Quality Repairing"
        />

        <Promises
          icon={<SearchCheck size={48} strokeWidth={3} color="white" />}
          text="100% Satisfaction"
        />

        <Promises
          icon={<ThumbsUp size={48} strokeWidth={3} color="white" />}
          text="Skilled Worker"
        />
      </div>
    </>
  );
};

export default JatinTelecomPromises;
