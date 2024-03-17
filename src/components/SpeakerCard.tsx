import imageOutline from "../assets/speaker_border_red.svg";
import "./SpeakerCard.css";

export default function SpeakerCard({ props }: { props: { imgSrc: string } }) {
  return (
    <div className="speaker_card">
      <div className="img_container">
        <img src={imageOutline} alt="" />
        <svg
          className="speaker_image"
          width="237"
          height="242"
          viewBox="0 0 237 242"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="img1"
              patternUnits="userSpaceOnUse"
              width="237"
              height="242"
            >
              <image
                href={props.imgSrc}
                x="0"
                y="0"
                width="237"
                height="242"
              />
            </pattern>
          </defs>
          <path
            d="M1.7751 0H0.000168204V1.77493V232.516L0 241.095H27.8072L31.6223 236.066H223.05H223.771L224.288 235.562L235.529 224.617L236.066 224.094V223.345V186.959V186.156L235.462 185.626L226.304 177.577V50.1557L234.34 42.3961L234.882 41.8727V41.1192V1.77493V0H233.108H1.7751ZM34.3153 232.516H222.328L232.516 222.596V187.762L223.357 179.714L222.754 179.184V178.38V49.4022V48.6487L223.296 48.1253L231.333 40.3657V3.54986H3.55003V232.516H34.3153Z"
            fill="url(#img1)"
          />
          <g id="Outer Border">
            <path
              id="Union"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.7751 0H0.000168204V1.77493V232.516H0V241.095H27.8072L31.6223 236.066H223.05H223.771L224.288 235.562L235.529 224.617L236.066 224.094V223.345V186.959V186.156L235.462 185.626L226.304 177.577V50.1557L234.34 42.3961L234.882 41.8727V41.1192V1.77493V0H233.108H1.7751ZM34.3153 232.516L222.328 232.516L232.516 222.596V187.762L223.357 179.714L222.754 179.184V178.38V49.4022V48.6487L223.296 48.1253L231.333 40.3657V3.54986H3.55003V232.516L34.3153 232.516Z"
              fill="#B2C5CD"
            />
          </g>
        </svg>
      </div>
      <div className="card_body">
        <div className="nametag">
          <p>Advaith U</p>
          <small>Prev. Regional Lead Figma</small>
        </div>
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="16.0654"
              cy="16.3357"
              r="15.0356"
              fill="#0D1119"
              stroke="#B2C5CD"
              stroke-width="1.92885"
              stroke-linecap="square"
              stroke-linejoin="round"
              stroke-dasharray="3.86 7.72 11.57 15.43"
            />
            <path
              className="fill_lit"
              d="M18.6742 11.4111C18.6742 10.1841 17.6795 9.18945 16.4526 9.18945C15.2256 9.18945 14.231 10.1841 14.231 11.4111V15.8543C14.231 17.0813 15.2256 18.0759 16.4526 18.0759C17.6795 18.0759 18.6742 17.0813 18.6742 15.8543V11.4111Z"
              fill="#B2C5CD"
            />
            <path
              className="stroke_lit"
              d="M11.2686 15.1139V15.8544C11.2686 18.7174 13.5894 21.0382 16.4523 21.0382C19.3153 21.0382 21.6361 18.7174 21.6361 15.8544V15.1139"
              stroke="#B2C5CD"
              stroke-width="1.21614"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              className="stroke_lit"
              d="M16.4526 21.0381V24.0002M16.4526 24.0002H14.231M16.4526 24.0002H18.6742"
              stroke="#B2C5CD"
              stroke-width="1.21614"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
      </div>
    </div>
  );
}
