import React from "react";
import { BsChevronLeft } from "react-icons/bs";
const ModalChat = ({ setToggleChat }) => {
  return (
    <>
      <div className="bg-white w-[543px] h-[550px]">
        <div className="sticky top-0 flex shadow-md p-3 justify-between bg-white">
          <div className="flex items-center gap-3">
            <BsChevronLeft
              className="cursor-pointer"
              onClick={() => setToggleChat(false)}
            />
            <p className="text-sm">Customer 1</p>
          </div>
          <p className="cursor-pointer text-primary-900">Hapus</p>
        </div>
        {/* Content Chat */}
        <div className="h-[87%] overflow-y-scroll p-3 flex flex-col gap-3">
          <div className="w-1/2 flex flex-col gap-3 bg-primary-600 p-3 rounded-tr-lg rounded-br-lg rounded-bl-lg">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              facere autem possimus eaque enim ex aliquam! Tempora, quasi vero
              itaque nulla, vitae numquam sapiente ad hic minus placeat esse
              aliquam!
            </p>
            <p className="text-white ml-auto">18.02</p>
          </div>
          <div className="w-1/2 flex flex-col gap-3 bg-orange-900 p-3 rounded-tl-lg rounded-br-lg rounded-bl-lg ml-auto">
            <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
              libero nemo dolore eos laudantium saepe, nisi sit doloremque
              excepturi modi sapiente quaerat ea eius nostrum nesciunt
              cupiditate impedit ad aliquam.
            </p>
            <p className="text-white ml-auto">18.02</p>
          </div>
          <div className="w-1/2 flex flex-col gap-3 bg-orange-900 p-3 rounded-tl-lg rounded-br-lg rounded-bl-lg ml-auto">
            <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
              libero nemo dolore eos laudantium saepe, nisi sit doloremque
              excepturi modi sapiente quaerat ea eius nostrum nesciunt
              cupiditate impedit ad aliquam.
            </p>
            <p className="text-white ml-auto">18.02</p>
          </div>
          <div className="w-1/2 flex flex-col gap-3 bg-primary-600 p-3 rounded-tr-lg rounded-br-lg rounded-bl-lg">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              facere autem possimus eaque enim ex aliquam! Tempora, quasi vero
              itaque nulla, vitae numquam sapiente ad hic minus placeat esse
              aliquam!
            </p>
            <p className="text-white ml-auto">18.02</p>
          </div>
        </div>
        <div className="bg-white p-3 border border-t">asd</div>
      </div>
    </>
  );
};

export default ModalChat;
