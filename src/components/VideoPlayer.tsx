import "./VideoPlayer.css";
import borderLeft from "../assets/video_border_left.svg";
import accentTop from "../assets/video_border_top.svg";
import accentBottom from "../assets/video_border_bottom.svg";
import borderRight from "../assets/video_border_right.svg";
// import videoThumbnail from "../assets/thumbnail.png";
import { motion } from "framer-motion";

export default function VideoPlayer() {
  const pulse = {
    play_button_lit: {
      fill: "#E57373",
      filter: "drop-shadow(0 0 2px #E57373)"
    },
    play_button: {
      fill: "#666666",
      filter: "drop-shadow(0 0 0 #E57373)"
    },
  };

  const pulseRing = {
    ring_lit: {
      borderColor: "#E57373",
    },
    ring: {
      borderColor: "#000000",
    },
  };

  const pulseRingOuter = {
    ring_lit: {
      borderColor: "#E57373",
      filter: "drop-shadow(0 0 10px #E57373)"
    },
    ring: {
      borderColor: "#666666",
      filter: "drop-shadow(0 0 0 #E57373)"
    },
  };
  // const variants = {
  //   visible: {
  //     fill: ["#E57373", "#666666"],
  //   },
  //   hidden: { fill: "#666666" },
  // };
  return (
    <div className="video_wrapper">
      <motion.div
        className="playbutton"
        animate="ring_lit"
        initial="ring"
        variants={pulseRingOuter}
        transition={{
          type: "spring",
          ease: "easeInOut",
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <motion.div
          variants={pulseRing}
          className="inner_ring"
          transition={{
            type: "spring",
            ease: "easeInOut",
            duration: 1,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          animate="ring_lit"
          initial="ring"
        >
          <svg
            className="play_triangle"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <motion.path
              animate="play_button_lit"
              initial="play_button"
              variants={pulse}
              transition={{
                type: "spring",
                ease: "easeInOut",
                duration: 1,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              d="M26 13L6.5 24.2583L6.5 1.74167L26 13Z"
              fill="#666666"
            />
          </svg>

          {/* <svg
            className="play_triangle"
            width="20"
            height="20"
            viewBox="0 0 20 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              animate="play_button_lit"
              initial="play_button"
              variants={pulse}
              transition={{
                type: "spring",
                ease: "easeInOut",
                duration: 1,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              d="M20 12L0.499999 23.2583L0.5 0.741669L20 12Z"
            />
          </svg> */}
        </motion.div>
      </motion.div>
      {/* <img className="thumbnail" src={videoThumbnail} alt="" /> */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/GJn4lFZi5cw?si=yl5R9c3uiN-Z_fmI"
        frameBorder={0}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        id="player"
      ></iframe>
      <img src={accentTop} className="border-top" alt="" />
      <img src={borderLeft} className="border-left" alt="" />
      <img src={borderRight} className="border-right" alt="" />
      <img src={accentBottom} className="border-bottom" alt="" />
    </div>
  );
}
