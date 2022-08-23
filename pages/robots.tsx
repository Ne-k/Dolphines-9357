import Link from "next/link";
import {BsArrowRightShort} from "react-icons/bs";

import {
    Header
} from "../components";

const Skills = () => {
    return (
        <>
                <style jsx global>{`
            body {
              background-color: #5d9bc2;
            }
          `}</style>
            <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
                <Header/>

            </div>
            <div className="my-16 px-3 font-sen text-white" id="robots">
                <p className="text-3xl font-bold text-white flex flex-row items-center border-b-[0.1px] border-white-500 py-1 text-slate-300 text-center">Robot Showcase</p>

                <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
                    <p className="flex flex-row text-slate-300">
                        <Link href="/2021JC1" passHref>

                            <a
                                className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-white-400 duration-100 hover:ml-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BsArrowRightShort size="20" />
                                2021 Jim Carrey (1)
                            </a>
                        </Link>
                    </p>
                    <p className="flex flex-row text-slate-300">
                        <Link href="/2021JC2" passHref>
                            <a
                                className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-white-400 duration-100 hover:ml-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BsArrowRightShort size="20" />
                                2021 Jim Carrey (2)
                            </a>
                        </Link>
                    </p>
                    <p className="flex flex-row text-slate-300">
                        <Link href="/2022JC1" passHref>
                            <a
                                className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-white-400 duration-100 hover:ml-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BsArrowRightShort size="20" />
                                2022 Jim Carrey (1)
                            </a>
                        </Link>
                    </p>
                    <p className="flex flex-row text-slate-300">
                        <Link href="/2022JC2" passHref>
                            <a
                                className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-white-400 duration-100 hover:ml-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BsArrowRightShort size="20" />
                                2022 Jim Carrey (2)
                            </a>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Skills;
