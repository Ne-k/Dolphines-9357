import type { NextPage } from "next";

import {
  Header,
  About,
  Members,
  Contact,
} from "../components";

const Home: NextPage = () => {
  return (
      <>
          <style jsx global>{`
            body {
              background-color: #4162b0;
            }
          `}</style>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
              <Header/>
              <About/>
              <Members/>
              <Contact/>
              <footer>
                  <div className="flex flex-col justify-center items-center text-center p-5 bg-white" style={{backgroundColor: "#4162b0"}}>
                      <h1 className=" text-white font-semibold">
                          Copyright © 2022 {" "}
                            <span className="hover:text-blue-600 font-semibold cursor-pointer">
                                9357 Dolphines{" "}
                            </span>
                        </h1>
                  </div>
              </footer>

          </div>
      </>
  );
};

export default Home;
