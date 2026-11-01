import Reveal from "./Reveal";
export default function SectionHead({ eyebrow, title, text, className = "" }) {
  return (
    <Reveal as="header" className={`head ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="sub2">{text}</p>}
    </Reveal>
  );
}
