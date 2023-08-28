import Tabs from "./Tabs/tabs";

const Features = () => {
  return (
    <div className=" w-[80vw] m-auto px-4 md:px-8  mb-9">
      <h2 className="text-center text-[1.5rem] font-bold text-very-dark-blue md:text-[2rem]">
        Features
      </h2>
      <p className="mx-auto mt-[1.25rem] mb-[2.875rem] max-w-[47ch] text-center text-very-dark-blue/50 md:text-normal">
      Our aim is to deliver hyper-interactive lessons, accessible to all students, complemented by round-the-clock tech support and guidance.
      </p>
      <Tabs />
    </div>
  );
};

export default Features;