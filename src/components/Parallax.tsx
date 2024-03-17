import { motion, useScroll, useTransform } from "framer-motion";
import "./Parallax.css";
import { useRef } from "react";
import layer1 from '../assets/level1.png';
import layer2 from '../assets/level2.png';
import layer3 from '../assets/level3.png';
import layer4 from '../assets/level4.png';


export default function Parallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const layer4Y = useTransform(scrollYProgress, [0, 1], ["0%", "75%"]);
  const layer3Y = useTransform(scrollYProgress, [0, 1], ["0%", "65%"]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);


  return (
    <div ref={ref} className="parallax_container">
      <img src={layer1} className="hidden"></img>
      <motion.img src={layer1} className="layer1"></motion.img>
      <motion.img src={layer2} className="layer2" style={{y: layer2Y}}></motion.img>
      <motion.img src={layer3} className="layer3" style={{y: layer3Y}}></motion.img>
      <motion.img src={layer4} className="layer4" style={{y: layer4Y}}></motion.img>
    </div>
  );
}
