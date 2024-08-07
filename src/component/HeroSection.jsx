import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto pt-12 px-6 ">
      <div className="flex flex-col items-centermt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-6xl text-center tracking-wide mx-24 ">
          Al World We Provide Tools{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text font-bold ">
            For Developers
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 lg:mx-40">
          Our company offers cutting-edge tools for developers, boosting
          productivity and efficiency, streamlining workflows, and enhancing
          coding experiences.
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3  px-2 rounded-md "
          >
            Start For Free
          </a>
          <a href="#" className="py-3 px-4 rounded-md border mx-4">
            {" "}
            Documentation
          </a>
        </div>
        <div className="flex mt-10 justify-center">
          <video
            loop
            autoPlay
            muted
            className="rounded-lg border border-orange-700 w-1/2 mx-4"
          >
            <source src={video1} type="video/mp4" />
          </video>
          <video
            loop
            autoPlay
            muted
            className="rounded-lg border border-orange-700 w-1/2"
          >
            <source src={video2} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
