import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Menu as MenuIcon, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../../utils/cn";

interface NavLinkItem {
  label: string;
  path: string;
}

const navLinks: NavLinkItem[] = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Education", path: "/education" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close mobile menu when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-10">
        {navLinks.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "font-manrope text-base lg:text-lg transition-all relative py-1",
                active
                  ? "text-black font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black"
                  : "text-neutral-600 hover:text-black font-medium"
              )}
            >
              {item.label}
            </Link>
          );
        })}

        <a
          href="https://github.com/samaalibassem123"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-sm lg:text-base font-manrope text-neutral-600 hover:text-black border border-black/20 hover:border-black rounded-full px-3.5 py-1 transition-all"
        >
          <Github className="size-4" />
          <span>GitHub</span>
        </a>
      </nav>

      {/* Mobile Hamburger Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="md:hidden p-2 text-black hover:text-neutral-600 transition-colors cursor-pointer flex items-center justify-center rounded-md"
        aria-label="Toggle Navigation Menu"
      >
        {isOpen ? <X className="size-6" /> : <MenuIcon className="size-6" />}
      </button>

      {/* Mobile Slide-Down Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-black shadow-lg py-5 px-6 flex flex-col gap-3 z-50"
          >
            {navLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "font-manrope text-lg py-2 border-b border-neutral-100 transition-colors flex items-center justify-between",
                    active
                      ? "text-black font-bold"
                      : "text-neutral-600 hover:text-black font-medium"
                  )}
                >
                  <span>{item.label}</span>
                  {active && <span className="size-2 rounded-full bg-black" />}
                </Link>
              );
            })}

            {/* Mobile Contact & Social Links */}
            <div className="pt-3 flex flex-col gap-2 text-sm text-neutral-600 font-manrope">
              <a
                href="https://github.com/samaalibassem123"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-black transition-colors py-1"
              >
                <Github className="size-4" />
                <span>github.com/samaalibassem123</span>
              </a>
              <a
                href="https://www.linkedin.com/in/bassem-samaali/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black transition-colors py-1"
              >
                LinkedIn: in/bassem-samaali
              </a>
              <a
                href="mailto:samaalibassem123@gmail.com"
                className="hover:text-black transition-colors py-1"
              >
                Email: samaalibassem123@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
