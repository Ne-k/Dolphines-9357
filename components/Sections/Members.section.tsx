import { BsArrowRightShort } from "../Misc/Icons.collection";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <p className="text-3xl font-bold text-white text-center">Team Members</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Name</span>
          &nbsp;Some description idk
        </p>
      </div>
    </div>
  );
};

export default Skills;
