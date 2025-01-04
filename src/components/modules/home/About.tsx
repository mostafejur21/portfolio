import { fetchApi } from "@/actions/fetchApi";
import avatar from "@/assets/mostafejur.png";
import { TTechnology } from "@/types";
import Image from "next/image";
const About = async () => {
    const technologies = await fetchApi("technology");
    return (
        <div id="about" className="bg-black-300 space-y">
            <div className="lg:ps-24 lg:p-0 p-4 flex lg:flex-row flex-col justify-between gap-10">
                <div className="flex-1">
                    <h2 className="heading">About Me</h2>
                    <div className="space-y-3 mt-5">
                        <h6 className="text-lg font-semibold">Who I Am</h6>
                        <p>
                            I’m Mostafejur Rahman, a Software Engineer with a
                            strong foundation in application development and problem-solving.
                            I specialize in crafting efficient, scalable, and robust software
                            solutions using modern tools and technologies like Flutter,
                            Firebase, and TypeScript.
                        </p>
                        <h6 className="text-lg font-semibold">What I Do</h6>
                        <p>
                            I excel in designing and developing user-centric mobile applications,
                            integrating seamless backend integration, and ensuring high-quality,
                            maintainable code. My expertise spans across mobile and web platforms,
                            enabling me to deliver impactful solutions tailored to business needs.
                        </p>
                        <h6 className="text-lg font-semibold">What Drives Me</h6>
                        <p>
                            I’m passionate about embracing new technologies, tackling challenging problems,
                            and contributing to projects that make a difference. With a collaborative mindset,
                            I constantly strive to learn and grow while delivering exceptional value to users and clients.
                        </p>
                        <h6 className="text-lg font-semibold">Educational Background</h6>
                        <p className="">BSc in Computer Science & Engineering (Graduated in 2024).</p>
                    </div>
                </div>
                <div className="">
                    <div className="bg-primary lg:ps-10 flex justify-center rounded-s-xl lg:rounded-e-none rounded-e-xl w-full z-0">
                        <Image
                            src={avatar}
                            alt="sudipta-das-shiningsudipto-web-developer-avatar"
                            height={400}
                            width={400}
                            className="w-[250px]"
                        />
                    </div>
                </div>
            </div>
            <div className="space-x grid lg:grid-cols-2 grid-cols-1 gap-5 mt-10">
                <div>
                    <h3 className="text-xl font-bold mb-5">
                        Key Technologies I Work With:
                    </h3>
                    <div className="space-y-2">
                        {technologies?.data.map((tech: TTechnology) => (
                            <p key={tech?._id}>
                                <span className="text-lg font-semibold me-2 text-primary">
                                    {tech?.category}:
                                </span>
                                {tech?.items}
                            </p>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-5">
                        Courses and Certifications:
                    </h3>
                    <ul className="list-disc space-y-3 lg:ms-0 ms-4 mt-5">
                        <li>Complete Android Application Development With Ostad</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
