import SplitText from "./SplitText";

const AnimatedHeading = ({
  text,
  children,
  className = "",
  tag = "h2",
  display = "block",
  textAlign,
  delay = 28,
  duration = 1.05,
  from = { opacity: 0, y: 34 },
  to = { opacity: 1, y: 0 },
}) => (
  <SplitText
    text={text}
    className={`animated-heading ${className}`.trim()}
    delay={delay}
    duration={duration}
    ease="power3.out"
    splitType="chars"
    from={from}
    to={to}
    threshold={0.12}
    rootMargin="-80px"
    display={display}
    textAlign={textAlign}
    tag={tag}
  >
    {children}
  </SplitText>
);

export default AnimatedHeading;
