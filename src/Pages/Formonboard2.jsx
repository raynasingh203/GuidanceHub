import Card3form from '../Components/Card3form';

const Formonboard2 = () => {
  return (
    <>
      <div>
        {/* Header Text */}
        <div className="absolute font-pixeloidmono text-9xl mt-1 ml-[-4rem]">g'h</div>
        <div className="absolute font-pixeloidmono text-2xl mt-[10rem] ml-[-4rem]">
          Guidance Studio by SMI
        </div>

        {/* Vertical Line */}
        <div className="flex ml-[21rem] h-screen">
          <div className="w-[1rem] h-[68rem] mt-[-3rem] bg-sunset-50"></div>
        </div>

        {/* Background Image */}
        <div className="mr-10 mt-[-60rem]">
          <img
            src="/Images/imageback.png"
            alt="Description"
            className="w-[300px] h-auto"
          />
        </div>
      </div>

      {/* Card and Background Circle */}
      <div className="relative">
        <div className="relative z-10">
          <Card3form />
        </div>

        <div className="absolute w-[56rem] h-[77rem] rounded-full rounded-br-none bg-white shadow-xl  mt-[-70rem] ml-[33rem] z-0"></div>
      </div>

   

    </>
  );
}

export default Formonboard2