import "./Button.css";
import border from "../assets/border.svg";
import accentTop from "../assets/button_top.svg";
import accentBottom from "../assets/button_bottom.svg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="btn">
      {children}
      <img src={border} className="border-l" />
      <img src={border} className="border-r" />
      <img className="accent-t" src={accentTop} />
      <img className="accent-b" src={accentBottom} />
    </button>
  );
}
