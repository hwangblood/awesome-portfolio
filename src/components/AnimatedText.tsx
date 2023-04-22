import React from "react";

import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08, // delay each of children by 0.08 seconds
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

type Props = {
  text: string;
  className?: string;
};

const AnimatedText = (props: Props) => {
  return (
    <div
      className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden ${props.className}`}
    >
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl ${props.className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {props.text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
            // don't need these, because we're using staggerChildren
            // initial="initial"
            // animate="animate"
          >
            {word} &nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
