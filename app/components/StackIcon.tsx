import React from "react";
import ReactIcon from "./icons/ReactIcon";
import TailwindIcon from "./icons/TailwindIcon";

const StackIcon = ({ stack }: { stack: string }) => {
  const iconMap: { [key: string]: React.ComponentType<{ size: number }> } = {
    react: ReactIcon,
    tailwind: TailwindIcon,
    // Ajoutez d'autres mappings ici
  };

  const IconComponent = iconMap[stack.toLowerCase()] || ReactIcon;

  return (
    <div className="bg-accent flex items-center p-1 rounded-md">
      <IconComponent size={16} />
      <h6 className="text-text-high ml-2">{stack}</h6>
    </div>
  );
};

export default StackIcon;
