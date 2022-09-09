import { BsArrowRightShort } from "../Misc/Icons.collection";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <p className="text-3xl font-bold text-white text-center">Team Members</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">

          <p className="flex flex-row text-slate-300">
              <BsArrowRightShort size="20" />
              <span className="text-white">Tyler Bretthauer</span>
              &nbsp;Software and website
          </p>

          <p className="flex flex-row text-slate-300">
              <BsArrowRightShort size="20" />
              <span className="text-white">Jack Denning</span>
              &nbsp;Hardware, scouting, and mascot apparently
          </p>

          <p className="flex flex-row text-slate-300">
              <BsArrowRightShort size="20" />
              <span className="text-white">Sam Felstad</span>
              &nbsp;Ginger.
          </p>

          <p className="flex flex-row text-slate-300">
              <BsArrowRightShort size="20" />
              <span className="text-white">Joss Kirby</span>
              &nbsp;Engineering notebook/help hardware
          </p>

        <p className="flex flex-row text-slate-300">
          <BsArrowRightShort size="20" />
          <span className="text-white">Ethan McKelley</span>
          &nbsp;Everything hardware
        </p>

      </div>
    </div>
  );
};

export default Skills;
