import { motion } from "motion/react";
import { cn } from "../../utils/cn";
import ALine from "../ui/ALine";
import Title from "../ui/Title";

interface Props {
  className?: string;
}

const AnimateJobName = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      delay: 1,
    },
  },
};

export default function LeftSide({ className }: Props) {
  return (
    <div className={cn("  flex  gap-4 flex-col px-5", className)}>
      <div className="flex items-center gap-4">
        <ALine />
        <p className=" font-manrope text-lg">Hi, I am Bassem Samaali</p>
      </div>
      <Title className=" font-[500]  md:text-7xl lg:text-8xl xl:text-9xl text-6xl">
        <motion.div
          variants={AnimateJobName}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={AnimateJobName}>AI Engineer</motion.div>
        </motion.div>
      </Title>
    </div>
  );
}
