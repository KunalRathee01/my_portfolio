import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Javascript from "./works/Javascript";
import NextJS from './works/NextJS'
import ReactJS from "./works/ReactJS";
import { ImPower } from "react-icons/im";
import MongoDB from "./works/MongoDB";

const Experience = () => {
  const [workReactJS, setWorkReactJS] = useState(true);
  const [workNextJS, setWorkNextJS] = useState(false);
  const [workJavascript, setWorkJavascript] = useState(false);
  const [workMongoDB, setWorkMongoDB] = useState(false);


  const handleReactJS = () => {
    setWorkReactJS(true);
    setWorkNextJS(false);
    setWorkJavascript(false);
    setWorkMongoDB(false);

  };

  const handleNextJS = () => {
    setWorkReactJS(false);
    setWorkNextJS(true);
    setWorkJavascript(false);
    setWorkMongoDB(false);
    
  };

  const handleJavascript = () => {
    setWorkReactJS(false);
    setWorkNextJS(false);
    setWorkJavascript(true);
    setWorkMongoDB(false);

  };
  const handleMongoDB = () => {
    setWorkReactJS(false);
    setWorkNextJS(false);
    setWorkJavascript(false);
    setWorkMongoDB(true);

  };
  const handleAmazon = () => {
    setWorkReactJS(false);
    setWorkNextJS(false);
    setWorkJavascript(false);
    setWorkMongoDB(false);

  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title=" Tech Palette: Frameworks and Technologies in My Arsenal" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
        <li
            onClick={handleNextJS}
            className={`${
              workNextJS
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            NextJS
          </li>

          <li
            onClick={handleReactJS}
            className={`${
              workReactJS
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            ReactJS
          </li>
          
          <li
            onClick={handleJavascript}
            className={`${
              workJavascript
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Languages 
          </li>
          <li
            onClick={handleMongoDB}
            className={`${
              workMongoDB
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            MongoDB
          </li>
        </ul>
        {workNextJS && <NextJS />}
        {workReactJS && <ReactJS/>}
        {workJavascript && <Javascript />}
        {workMongoDB && <MongoDB />}
      </div>
    </section>
  );
};

export default Experience;