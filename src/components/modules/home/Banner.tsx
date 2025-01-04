import avatar from "@/assets/mostafejur.png";
import Image from "next/image";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
const Banner = () => {
  return (
    <div
      id="banner"
      className="space-xy flex lg:flex-row flex-col justify-between items-center bg-black lg:h-[90vh] gap-y-10"
    >
      <div className="">
        <h1 className="lg:text-5xl text-3xl">
          I&apos;m <span className="text-primary"> Mostafejur Rahman</span>
        </h1>
        <h2 className="lg:text-3xl text-2xl font-bold my-3">Software Developer</h2>
        <h3 className="lg:text-xl text-lg font-medium mb-4">
          Passionate about crafting impactful Software experiences.
        </h3>
        <div className="flex items-center gap-2 text-3xl">
          <a
            href="https://www.linkedin.com/in/mostafejur21"
            target="_blank"
            className="text-primary hover:text-primary-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/mostafejur21"
            target="_blank"
            className="text-primary hover:text-primary-600"
          >
            <FaGithubSquare />
          </a>
        </div>
        <div className="mt-7">
          <a
            href="#contact"
            className="text-primary border-2 border-primary hover:border-primary-600 px-6 py-2 font-semibold"
          >
            Contact me
          </a>
        </div>
      </div>
      <div className="flex justify-end">
        <Image
          height={350}
          width={350}
          src={avatar}
          alt="Avatar-Mostafejur-Rahman"
          className="rounded-full object-cover size-[350px]"
        />
      </div>
    </div>
  );
};

export default Banner;