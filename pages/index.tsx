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
              background-color: #5c83ad;
            }
          `}</style>
          <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
              <Header/>
              <About/>
              <Members/>
              <Contact/>

          </div>
      </>
  );
};

export default Home;
