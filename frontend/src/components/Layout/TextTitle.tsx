type TextTitleProps = {
  title: string;
  subtitle?: string;
};

import "./TexTitle.css";

export default function TextTitle({ title, subtitle }: TextTitleProps) {
  return (
    <div className="text-title-container">
      <h2 className="text-title">{title}</h2>
      {subtitle && <p className="text-subtitle">{subtitle}</p>}
    </div>
  );
}