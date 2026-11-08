import { cn } from "../../utils/cn";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function Header({ children, className }: Props) {
  return (
    <header
      className={cn(
        "relative flex items-center bg-white/90 justify-between z-50 sm:px-[110px] px-5 py-4 sm:py-6 border-b border-black w-full",
        className
      )}
    >
      {children}
    </header>
  );
}
