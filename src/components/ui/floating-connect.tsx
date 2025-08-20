import { Link } from "react-router-dom";
import CircularText from "@/components/ui/circular-text";

interface FloatingConnectProps {
  to?: string; // target url
  text?: string; // circular text content
  className?: string;
}

export function FloatingConnect({
  to = "/contact",
  text = "LET'S*CONNECT*",
  className = "",
}: FloatingConnectProps) {
  return (
    <div className={`fixed right-4 bottom-4 z-50 ${className}`}>
      <Link to={to} aria-label="Let's connect" className="block group">
        <CircularText
          text={text}
          spinDuration={18}
          onHover="speedUp"
          className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] [&>span]:text-base sm:[&>span]:text-lg text-slate-900 dark:text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] group-hover:scale-[1.03] transition-transform"
        />
      </Link>
    </div>
  );
}

export default FloatingConnect;
