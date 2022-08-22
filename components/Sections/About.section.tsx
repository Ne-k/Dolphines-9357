import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

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
                      I don't know what information to put here about the team lmao
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
