import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";
import {BsArrowRightShort} from "react-icons/bs";

const About: NextComponentType = () => {
  return (
      <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
              <div>
                  <p className="text-3xl font-bold text-white">FTC Team Dolphines 9357</p>
                  <p className="mt-1 text-lg text-white">
                      First Tech Robotics team Dolphines
                  </p>

                  <p className="mt-4 text-white">
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      We're a First Tech Challenge team located at <a href="https://www.wlwv.k12.or.us/wlhs" className="hover:ml-2 duration-100 font-extrabold" target="_blank" rel="noopener noreferrer">West Linn High School</a><br/>I don't know what else to put here lmao
                      </p>

              </div>

              <div className="hidden custom:block">
                  <Image
                      src="/assests/avatar.png"
                      width="220"
                      height="220"
                      className="rounded-full"
                      alt="avatar"/>
              </div>
          </div>
      </>
  );
};

export default About;
