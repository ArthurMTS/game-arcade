import FlagIcon from "@/assets/icons/flag.svg";

interface SurrenderFlagProps {
  onGameEnd: () => void;
}

export function SurrenderFlag({ onGameEnd }: SurrenderFlagProps) {
  const onFlagIconClick = () => {
    if (confirm("Surrender?")) {
      onGameEnd();
    }
  };

  return (
    <img
      className="absolute top-4 right-4 cursor-pointer bg-slate-900 p-1 transition-colors rounded-lg hover:bg-slate-800"
      src={FlagIcon}
      alt="surrender flag"
      onClick={onFlagIconClick}
    />
  );
}
