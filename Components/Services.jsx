import images from "../Images/index";
import Image from "next/image";
import React from "react";

export default ({
  setOpenProfile,
  setCompleteModal,
  setGetModel,
  setStartModal,
}) => {
  const team = [
    { avatar: images.compShipment },
    { avatar: images.getShipment },
    { avatar: images.startShipment },
    { avatar: images.userProfile },
    // { avatar: images.shipCount },
    // { avatar: images.send },
  ];

  const openModelBox = (text) => {
    if (text === 1) {
      setCompleteModal(true);
    } else if (text === 2) {
      setGetModel(true);
    } else if (text === 3) {
      setStartModal(true);
    } else if (text === 4) {
      setOpenProfile(true);
    }
  };

  return (
    <section className="py-0 pb-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap gap-8 justify-center">
          {team.map((item, i) => (
            <div
              key={i}
              onClick={() => openModelBox(i + 1)}
              className="flex-none w-1/3 h-60 sm:h-52 md:h-56 cursor-pointer"
            >
              <Image
                src={item.avatar}
                className="w-full h-full object-cover object-center shadow-md rounded-xl"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
