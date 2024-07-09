import Appointment from "../components/repair-components/Appointment";
import JatinTelecomPromises from "../components/repair-components/JatinTelecomPromises";
import WhatWeRepair from "../components/repair-components/WhatWeRepair";

const Repairing = () => {
  return (
    <>
      <WhatWeRepair />
      <JatinTelecomPromises />
      <Appointment />
    </>
  );
};

export default Repairing;
