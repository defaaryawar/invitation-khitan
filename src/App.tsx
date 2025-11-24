"use client";

import { useRef, useState } from "react";
import CoverScreen from "./components/sections/CoverScreen";
import HeroSection from "./components/sections/HeroSection";
import { ProfileSection } from "./components/sections/ProfileSection";
import CountdownSection from "./components/sections/CountdownSection";
import ThankYouSection from "./components/sections/ThankYouSection";
import FloatingMusicPlayer, { type FloatingMusicPlayerHandle } from "./components/ui/FloatingMusicPlayer";

function App() {
  const [isCoverOpen, setIsCoverOpen] = useState(false);
  const playerRef = useRef<FloatingMusicPlayerHandle>(null);

  const openInvitation = () => {
    setIsCoverOpen(true);

    setTimeout(() => {
      playerRef.current?.expand();
      playerRef.current?.playMusic();
    }, 80);
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
          <FloatingMusicPlayer ref={playerRef} autoPlay={false} />
        </>
      )}
    </div>
  );
}

export default App;
