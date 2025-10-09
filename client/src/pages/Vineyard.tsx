import React from "react";
import { DefaultSubsection } from "./sections/DefaultSubsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { HeroSubsection } from "./sections/HeroSubsection";
import { ItinerarySubsection } from "./sections/ItinerarySubsection";
import { RegistrySubsection } from "./sections/RegistrySubsection";
import { RsvpSubsection } from "./sections/RsvpSubsection";
import { TextSectionSubsection } from "./sections/TextSectionSubsection";
import { VenueSubsection } from "./sections/VenueSubsection";
import { WeddingPartySubsection } from "./sections/WeddingPartySubsection";

export const Vineyard = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full bg-neutralbackground">
      <HeroSubsection />
      <FrameSubsection />
      <VenueSubsection />
      <img
        className="w-full h-[122px]"
        alt="Frame"
        src="/figmaAssets/frame.svg"
      />
      <TextSectionSubsection />
      <WeddingPartySubsection />
      <img
        className="w-full h-[122px]"
        alt="Frame"
        src="/figmaAssets/frame.svg"
      />
      <ItinerarySubsection />
      <RegistrySubsection />
      <RsvpSubsection />
      <img
        className="w-full h-[712px]"
        alt="Frame"
        src="/figmaAssets/frame-2.svg"
      />
      <DefaultSubsection />
    </main>
  );
};
