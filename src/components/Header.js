import React from "react";
import ScrollEffectContainer from "./ScrollEffectContainer";

export default function Header({ children }) {
  return (
    <ScrollEffectContainer
      totalImages={1}
      threshold={0}
      animationTime={0.6}
      animationDelay={1}
      animationTransform="translateY(2rem)"
    >
      <header className="header">{children}</header>
    </ScrollEffectContainer>
  );
  // return <header className="header">{children}</header>;
}
