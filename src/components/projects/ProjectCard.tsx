import type { Project } from "../../types/projects";
import { cn } from "../../utils/cn";
import SmallLabel from "../ui/SmallLabel";
import Title from "../ui/Title";

interface Props {
  project: Project;
}
export default function ProjectCard({ project }: Props) {
  return (
    <div className=" border font-manrope  sm:w-md w-full motion-translate-y-in-[0%]  motion-blur-in-[5px] motion-blur-out-0 motion-ease-spring-smooth motion-delay-1600 will-change-[transform,filter] backface-hidden translate-z-0 ">
      <div
        className={cn(
          "mask-alpha h-[250px] cursor-pointer bg-black backdrop-blur-3xl overflow-hidden  border-b group"
        )}
      >
        {project.img ? (
          <img
            src={project.img}
            className=" w-full h-full group-hover:scale-105 transition-all grayscale group-hover:grayscale-0    duration-300 ease-in-out"
            alt=""
          />
        ) : (
          <video
            src={"/" + project.vd}
            className=" w-full h-full "
            controls
          ></video>
        )}
      </div>
      <div className=" flex flex-col p-4 space-y-3">
        <Title className="text-lg ">{project.name}</Title>
        <div>
          <span className=" underline font-bold">Description: </span>
          <p>{project.desc}</p>
        </div>
        <a
          href={project.github}
          target="_blank"
          className=" hover:font-extrabold transition-all underline "
        >
          Github
        </a>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            className="  hover:font-extrabold transition-all underline"
          >
            Website Link
          </a>
        )}
        <div>
          <span>stack:</span>
          <div className=" overflow-auto py-4 space-x-1">
            {project.stacks.map((s) => (
              <SmallLabel key={s}>{s}</SmallLabel>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
