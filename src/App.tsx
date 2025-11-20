"use client";

import { useState } from "react";
import CoverScreen from "./components/sections/CoverScreen";
import HeroSection from "./components/sections/HeroSection";
import { ProfileSection } from "./components/sections/ProfileSection";
import CountdownSection from "./components/sections/CountdownSection";
import ThankYouSection from "./components/sections/ThankYouSection";

function App() {
  const [isCoverOpen, setIsCoverOpen] = useState(false);

  const openInvitation = () => {
    setIsCoverOpen(true);
  };

  return (
    <div className="relative bg-black">
      <CoverScreen isCoverOpen={isCoverOpen} openInvitation={openInvitation} />
      {isCoverOpen && (
        <>
          <HeroSection />
          <ProfileSection />
          <CountdownSection />
          <ThankYouSection />
        </>
      )}
    </div>
  );
}

export default App;
