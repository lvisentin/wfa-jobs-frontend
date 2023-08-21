const fadeUpTransitions: any = {
  transition: { duration: 0.6, ease: "easeInOut" },
  variants: {
    hidden: { opacity: 0, x: 0, y: 40 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  },
};

export default fadeUpTransitions;
