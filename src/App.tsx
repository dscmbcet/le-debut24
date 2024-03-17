import "./App.css";
import Accordian from "./components/Accordian";
import Button from "./components/Button";
import CountDownTimer from "./components/CountDownTimer";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Parallax from "./components/Parallax";
import ReviewCard from "./components/ReviewCard";
import SpeakerCard from "./components/SpeakerCard";
import VideoPlayer from "./components/VideoPlayer";
import { useDragScroll } from "./hooks/useDragScroll";

function App() {
  const ref = useDragScroll();
  return (
    <>
      <NavBar />
      <section className="home_landing">
        <h1>
          Be the <span className="neon-text">glitch</span> you want to see in
          the matrix
        </h1>
        <p className="body-large">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          venenatis quis massa vel fermentum. Proin ipsum mauris, auctor sit
          amet posuere vel, tincidunt.
        </p>
        <Button>GRAB YOUR SPOT</Button>
        <h3 className="text-gradient">
          Starts <b>23rd March</b>
        </h3>
        <Parallax />
      </section>
      <section className="promo" id="overview">
        <div className="text_container text-gradient">
          <h2>The future’s calling, and it's yours</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis quis massa vel fermentum. Proin ipsum mauris, auctor sit
            amet posuere vel, tincidunt.
          </p>
        </div>
        <VideoPlayer />
      </section>
      <section className="speakers" id="speakers">
        <h2 className="text-gradient">Our Speakers</h2>
        <div className="speakers_container">
          <SpeakerCard
            props={{
              imgSrc: "speakers/adwaith.png",
            }}
          />
          <SpeakerCard
            props={{
              imgSrc: "speakers/adwaith.png",
            }}
          />
          <SpeakerCard
            props={{
              imgSrc: "speakers/adwaith.png",
            }}
          />
          <SpeakerCard
            props={{
              imgSrc: "speakers/adwaith.png",
            }}
          />
          <SpeakerCard
            props={{
              imgSrc: "speakers/adwaith.png",
            }}
          />
          <SpeakerCard
            props={{
              imgSrc: "speakers/adwaith.png",
            }}
          />
        </div>
      </section>
      <section className="past_commentary" id="reviews">
        <h2 className="text-gradient">How it went last time</h2>
        <div ref={ref} className="reviews_container">
          <ReviewCard rating={5} />
          <ReviewCard rating={5} />
          <ReviewCard rating={5} />
          <ReviewCard rating={5} />
          <ReviewCard rating={5} />
        </div>
      </section>
      <section className="faqs" id="faqs">
        <h2 className="text-gradient">FAQs</h2>
        <div className="faq_container">
          <Accordian
            title="How many people can I bring with me?"
            desc="They say opportunities don't knock twice. Such a chance was the LeDebut, which helped me learn a lot, and connect and socialize with many people. Moreover, it helped me discover my passion for engineering and build a solid foundation for its development."
          />
          <Accordian
            title="How many people can I bring with me?"
            desc="They say opportunities don't knock twice. Such a chance was the LeDebut, which helped me learn a lot, and connect and socialize with many people. Moreover, it helped me discover my passion for engineering and build a solid foundation for its development."
          />
          <Accordian
            title="How many people can I bring with me?"
            desc="They say opportunities don't knock twice. Such a chance was the LeDebut, which helped me learn a lot, and connect and socialize with many people. Moreover, it helped me discover my passion for engineering and build a solid foundation for its development."
          />
          <Accordian
            title="How many people can I bring with me?"
            desc="They say opportunities don't knock twice. Such a chance was the LeDebut, which helped me learn a lot, and connect and socialize with many people. Moreover, it helped me discover my passion for engineering and build a solid foundation for its development."
          />
        </div>
      </section>
      <section className="cta_footer">
        <CountDownTimer />
        <div className="cta">
          <h1>
            Be the <span className="neon-text">glitch</span> you want to see in
            the matrix
          </h1>
          <p className="body-large">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis quis massa vel fermentum. Proin ipsum mauris, auctor sit
            amet posuere vel, tincidunt.
          </p>
          <Button>GRAB YOUR SPOT</Button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
