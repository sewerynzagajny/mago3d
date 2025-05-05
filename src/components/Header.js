import React from "react";
import ScrollEffectContainer from "./ScrollEffectContainer";

export default function Header({ children }) {
  return (
    <ScrollEffectContainer
      totalImages={0}
      animationTime={0.6}
      animationTransform="translateY(2rem)"
    >
      {" "}
      <header className="header">{children}</header>;
    </ScrollEffectContainer>
  );
}
