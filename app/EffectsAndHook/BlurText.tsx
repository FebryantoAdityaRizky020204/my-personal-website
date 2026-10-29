import { Fragment } from "react";

function BlurText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={className}>
      {text.split(" ").map((w, i) => (
        <Fragment key={`${w}-${i}`}>
          <span className="blur-word" style={{ animationDelay: `${i * 90}ms` }}>
            {w}
          </span>{" "}
        </Fragment>
      ))}
    </span>
  );
}

export default BlurText;
