import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
       <h3 className="flex gap-1 font-medium text-xl font-titleFont text-textGreen tracking-wide">
        NextJS
      </h3>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          My proficiency in Next.js extends to a diverse range of projects, both client-facing and internal tools, showcasing its adaptability across various applications.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Beyond Next.js, I seamlessly integrate it with an array of languages like  Typescript, platforms, and frameworks, creating a robust and comprehensive tech stack for optimum efficiency.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Demonstrating growth in my portfolio, I innovate with Next.js, pushing web development boundaries with dynamic and cutting-edge applications.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;