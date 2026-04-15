import { cn } from "../../lib/utils";
import React from "react";
import { motion } from "framer-motion";

export default function GridBackgroundDemo({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative h-[80vh] w-full bg-black dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:60px_60px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
