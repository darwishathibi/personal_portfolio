import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 py-10",
        className
      )}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {items.map((item, idx) => (
        <motion.div key={item?.link} variants={itemVariants}>
          <div
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-indigo-500 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>{item.title}</CardTitle>
            </Card>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-zinc-800 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 flex items-center justify-center",
        className
      )}
    >
      <div className="relative z-50">
        <div>{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn("text-zinc-100 font-bold tracking-widest p-2", className)}
    >
      {children}
    </h4>
  );
};
