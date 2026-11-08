import { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";
import SmallLabel from "../ui/SmallLabel";

type TechStack = {
  label: string;
  url: string;
};
type Language = {
  label: string;
  url: string;
};
type LanguageSkill = {
  label: string;
  level: string;
};

const Menu: string[] = ["Technologies", "programming language", "Languages"];

const techStack: TechStack[] = [
  // Data, AI & ML (placed first)
  { label: "PyTorch", url: "https://pytorch.org/" },
  { label: "Pandas", url: "https://pandas.pydata.org/" },
  { label: "Scikit-learn", url: "https://scikit-learn.org/" },
  { label: "LangGraph", url: "https://langchain-ai.github.io/langgraph/" },
  { label: "LangChain", url: "https://www.langchain.com/" },
  { label: "Ollama", url: "https://ollama.ai/" },
  { label: "Streamlit", url: "https://streamlit.io/" },
  { label: "Power BI", url: "https://powerbi.microsoft.com/" },
  {
    label: "SSIS",
    url: "https://learn.microsoft.com/en-us/sql/integration-services/sql-server-integration-services",
  },
  // Backend & Databases
  { label: "FastAPI", url: "https://fastapi.tiangolo.com/" },
  { label: "Node.js", url: "https://nodejs.org/" },
  { label: "PostgreSQL", url: "https://www.postgresql.org/" },
  { label: "MySQL", url: "https://www.mysql.com" },
  { label: "SQL Server", url: "https://www.microsoft.com/en-us/sql-server" },
  { label: "MongoDB", url: "https://www.mongodb.com/" },
  { label: "Oracle Database", url: "https://www.oracle.com/database/" },
  { label: "Supabase", url: "https://supabase.com" },
  { label: "SQLAlchemy", url: "https://www.sqlalchemy.org/" },
  { label: "Alembic", url: "https://alembic.sqlalchemy.org/" },
  { label: "Prisma", url: "https://www.prisma.io/" },
  // Frontend
  { label: "React", url: "https://react.dev" },
  { label: "Next.js", url: "https://nextjs.org" },
  { label: "TailwindCSS", url: "https://tailwindcss.com" },
  { label: "Shadcn/UI", url: "https://ui.shadcn.com" },
  { label: "Angular", url: "https://angular.dev" },
  { label: "PrimeNG", url: "https://primeng.org" },
  { label: "Zustand", url: "https://zustand-demo.vercel.app/" },
  { label: "RxJS", url: "https://rxjs.dev/" },
  { label: "Framer Motion", url: "https://motion.dev/" },
  { label: "GSAP", url: "https://gsap.com/" },
  { label: "TanStack Query", url: "https://tanstack.com/query/latest" },
  { label: "TanStack Table", url: "https://tanstack.com/table/latest" },
  // DevOps & Tools
  { label: "Docker", url: "https://www.docker.com/" },
  { label: "Git", url: "https://git-scm.com" },
  { label: "GitHub", url: "https://github.com" },
  { label: "GitLab", url: "https://gitlab.com" },
  { label: "Figma", url: "https://www.figma.com/" },
];

const languages: Language[] = [
  { label: "C", url: "https://en.cppreference.com/w/c" },
  { label: "Java", url: "https://dev.java" },
  {
    label: "PL/SQL",
    url: "https://docs.oracle.com/en/database/oracle/oracle-database/21/lnpls/index.html",
  },
  {
    label: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { label: "TypeScript", url: "https://www.typescriptlang.org" },
  { label: "PHP", url: "https://www.php.net" },
  { label: "Python", url: "https://www.python.org" },
];

const languageSkills: LanguageSkill[] = [
  { label: "Arabic", level: "Native" },
  { label: "English", level: "Intermediate (B2)" },
  { label: "French", level: "Intermediate (B1/B2)" },
];

const repeatToLength = <T,>(arr: T[], target = 35): T[] => {
  if (arr.length === 0) return [];
  const times = Math.ceil(target / arr.length);
  const repeated: T[] = [];
  for (let i = 0; i < times; i++) {
    repeated.push(...arr);
  }
  return repeated;
};

export default function Footer() {
  const [selectedMenu, setSelectedMenu] = useState<string>("Technologies");
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const lastClientXRef = useRef(0);
  const startXRef = useRef(0);
  const hasMovedRef = useRef(false);

  const techItems = repeatToLength(techStack, 35).map((tech) => ({
    label: tech.label,
    url: tech.url,
  }));
  const displayTechItems = [...techItems, ...techItems, ...techItems];

  useEffect(() => {
    if (selectedMenu !== "Technologies") return;

    const container = containerRef.current;
    if (!container) return;

    // Place initial scroll position in the middle set (singleSetWidth)
    const initScroll = () => {
      const singleWidth = container.scrollWidth / 3;
      if (singleWidth > 0) {
        container.scrollLeft = singleWidth;
      }
    };

    const timeoutId = setTimeout(initScroll, 50);

    let animationFrameId: number;
    let lastTime = performance.now();
    const speed = 40; // pixels per second

    const step = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (container) {
        const singleWidth = container.scrollWidth / 3;
        if (singleWidth > 0) {
          if (!isDraggingRef.current && !isHoveredRef.current) {
            container.scrollLeft += speed * delta;
          }

          // Seamless loop bounds
          if (container.scrollLeft >= 2 * singleWidth) {
            container.scrollLeft -= singleWidth;
          } else if (container.scrollLeft < singleWidth) {
            container.scrollLeft += singleWidth;
          }
        }
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [selectedMenu]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return; // Only primary mouse button
    const container = containerRef.current;
    if (!container) return;

    isDraggingRef.current = true;
    setIsDragging(true);
    hasMovedRef.current = false;
    startXRef.current = e.clientX;
    lastClientXRef.current = e.clientX;

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignored if capture unsupported
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const container = containerRef.current;
    if (!container) return;

    const totalDx = e.clientX - startXRef.current;
    if (Math.abs(totalDx) > 4) {
      hasMovedRef.current = true;
    }

    const movementX = e.clientX - lastClientXRef.current;
    lastClientXRef.current = e.clientX;

    container.scrollLeft -= movementX;

    const singleWidth = container.scrollWidth / 3;
    if (singleWidth > 0) {
      if (container.scrollLeft >= 2 * singleWidth) {
        container.scrollLeft -= singleWidth;
      } else if (container.scrollLeft < singleWidth) {
        container.scrollLeft += singleWidth;
      }
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignored if already released
    }
  };

  const handlePointerCancel = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  const handleClickCapture = (e: React.MouseEvent) => {
    // If the user was dragging horizontally, prevent triggering link click
    if (hasMovedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className="flex flex-col sm:h-[150px] w-full overflow-hidden">
      <NavMenu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      {selectedMenu === "Technologies" ? (
        <div className="marquee-container py-7">
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onMouseEnter={() => {
              isHoveredRef.current = true;
            }}
            onMouseLeave={() => {
              isHoveredRef.current = false;
            }}
            onDragStart={(e) => e.preventDefault()}
            onClickCapture={handleClickCapture}
            className={cn(
              "overflow-x-auto no-scrollbar flex w-full touch-pan-y",
              isDragging ? "cursor-grabbing select-none" : "cursor-grab"
            )}
          >
            <div className="flex gap-3 items-center w-max">
              {displayTechItems.map((item, index) => (
                <SmallLabel
                  key={`${item.label}-${index}`}
                  url={item.url}
                  className="shrink-0 select-none pointer-events-auto"
                >
                  {item.label}
                </SmallLabel>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center gap-3 py-7 px-4 w-full">
          {selectedMenu === "programming language" &&
            languages.map((l) => (
              <SmallLabel
                key={l.url}
                url={l.url}
                className="motion-preset-focus"
              >
                {l.label}
              </SmallLabel>
            ))}
          {selectedMenu === "Languages" &&
            languageSkills.map((l) => (
              <SmallLabel
                key={l.label}
                className="motion-preset-focus"
              >
                {l.label} : {l.level}
              </SmallLabel>
            ))}
        </div>
      )}
    </div>
  );
}

const NavMenu = ({
  selectedMenu,
  setSelectedMenu,
}: {
  selectedMenu: string;
  setSelectedMenu: (v: string) => void;
}) => {
  return (
    <div className="flex sm:flex-row flex-col justify-center sm:gap-[100px] w-full">
      {Menu.map((m) => (
        <button
          onClick={() => setSelectedMenu(m)}
          key={m}
          className={cn(
            "sm:text-center text-start font-manrope cursor-pointer h-fit px-[18px] py-[16px] motion-translate-x-in-[-1%] motion-translate-y-in-[-38%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-delay-1000",
            selectedMenu === m && "border-b border-black"
          )}
        >
          {m}
        </button>
      ))}
    </div>
  );
};
