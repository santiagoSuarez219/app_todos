const ToDosLoading = () => {
  return (
    <div className="animate-pulse h-24 relative flex justify-center items-center mt-6 shadow-2xl rounded-lg ">
      <div className=" w-full flex my-7 ml-6 mr-6 gap-6 items-center">
        <div className="w-8 h-8 rounded-full bg-slate-200"></div>
        <div className="w-10/12 flex flex-col gap-3">
          <div className="w-full rounded-lg h-4 bg-slate-200"></div>
          <div className="w-full rounded-lg h-4 bg-slate-200"></div>
        </div>
      </div>
    </div>
  );
};

export default ToDosLoading;
