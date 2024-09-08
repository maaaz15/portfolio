import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactPage = () => {
    return (
        <div className="flex md:gap-24 flex-col lg:grid lg:grid-cols-2 gap-10">
            <div className="md:flex-1 flex flex-col md:gap-10 gap-8">
                <h1 className="lg:text-3xl text-xl font-extrabold text-center lg:text-left dark:text-slate-200">
                    Contact Me
                </h1>
                <p className="md:text-lg text-sm dark:text-slate-400 text-gray-500 text-center lg:text-left font-medium ">
                    Have a question or want to work together? Reach out to me.
                </p>
                <div className="flex gap-6 items-center justify-center lg:items-start lg:justify-start">
                    <Link href={"mailto:maaz.zama15@gmail.com"}>
                        <Button className="font-bold rounded-3xl w-32 hover:scale-105 hover:rounded duration-400 transition-transform">
                            Email Me
                        </Button>
                    </Link>
                    <Link
                        href={
                            "https://ik.imagekit.io/maaz/Maaz%20Resume.pdf?updatedAt=1725805615629"
                        }
                        target="_blank"
                    >
                        <Button className="font-bold rounded-3xl w-32 hover:scale-105 hover:rounded duration-400 transition-transform">
                            Resume
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;