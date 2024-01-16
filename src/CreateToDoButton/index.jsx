const CreateToDoButton = ({ setOpenModal }) => {
  return (
    <button
      className="bg-[#61DAFA] border-none rounded-full cursor-pointer text-5xl fixed bottom-6 right-6 font-bold text-[#FAFAFA] flex justify-center items-center h-16 w-16 z-10 transform hover:rotate-[224deg] transition duration-300"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      +
    </button>
  );
};

export default CreateToDoButton;
