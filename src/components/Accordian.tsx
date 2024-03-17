import "./Accordian.css";
import ArrowIcon from "../assets/arrows_icon.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Accordian(props: { title: string; desc: string }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordian">
      <div className="title" onClick={() => setIsActive(!isActive)}>
        <div className="text">
          <h4>{props.title}</h4>
        </div>
        <div className="icon_box">
          <img src={ArrowIcon} alt="" style={isActive ?{rotate: "180deg"}: {rotate: "0deg"}} />
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            className="desc"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto" },
              collapsed: { height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <p>{props.desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
