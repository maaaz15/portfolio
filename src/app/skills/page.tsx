import { FadeUp } from "@/components/FadeUp";
import Skills from "@/components/skills/Skills";

const SkillsPage = () => {
    return (
        <div className="flex md:gap-24 flex-col lg:grid lg:grid-cols-2 gap-10">
            <div className="md:flex-1 flex flex-col lg:gap-10 gap-4">
                <FadeUp delay={0.2} duration={0.7}>
                    <h1 className="lg:text-3xl text-xl font-extrabold text-center lg:text-left dark:text-slate-200 tracking-wider">
                        Skills
                    </h1>
                </FadeUp>
                <FadeUp delay={0.3} duration={0.8}>
                    <p className="md:text-lg text-sm dark:text-slate-400 text-gray-500 text-center lg:text-left font-medium">
                        My journey into web development began during my college
                        years, where I discovered a deep fascination for
                        crafting digital experiences. From mastering{" "}
                        <a className="dark:text-slate-200 text-black dark:hover:text-teal-300 cursor-pointer">
                            HTML
                        </a>
                        ,{" "}
                        <a className="dark:text-slate-200 text-black dark:hover:text-teal-300 cursor-pointer">
                            CSS
                        </a>
                        , and{" "}
                        <a className="dark:text-slate-200 text-black dark:hover:text-teal-300 cursor-pointer">
                            JavaScript
                        </a>
                        , to exploring server-side languages like Node.js, I
                        have honed my skills to create responsive and dynamic
                        websites.
                    </p>
                </FadeUp>
                <FadeUp delay={0.4} duration={0.9}>
                    <p className="md:text-lg text-sm dark:text-slate-400 text-gray-500 text-center lg:text-left font-medium tracking-wider">
                        In addition to coding, I advocate for user-centric
                        design with proficiency in UI/UX tools like Figma. My
                        tech knowledge includes Git, and cloud platforms,
                        ensuring a well-rounded skill set. My approach strikes a
                        balance between cutting-edge technology and creating
                        user-friendly digital experiences.
                    </p>
                </FadeUp>
            </div>
            <div className="relative flex-1 flex justify-center lg:mt-10 flex-col mx-2">
                <FadeUp delay={0.5} duration={1}>
                    <Skills />
                </FadeUp>
            </div>
        </div>
    );
};

export default SkillsPage;
