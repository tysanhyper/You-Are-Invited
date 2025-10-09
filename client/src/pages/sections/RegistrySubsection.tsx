import React from "react";

export const RegistrySubsection = (): JSX.Element => {
  return (
    <section className="flex w-full items-center justify-center gap-16 px-20 py-24">
      <div className="flex items-start flex-1 flex-col gap-16">
        <h2 className="self-stretch font-heading-medium-h2-desktop font-[number:var(--heading-medium-h2-desktop-font-weight)] text-neutraltext-primary text-[length:var(--heading-medium-h2-desktop-font-size)] tracking-[var(--heading-medium-h2-desktop-letter-spacing)] leading-[var(--heading-medium-h2-desktop-line-height)] [font-style:var(--heading-medium-h2-desktop-font-style)]">
          Registry
        </h2>

        <p className="self-stretch opacity-80 font-text-base-all-breakpoints font-[number:var(--text-base-all-breakpoints-font-weight)] text-neutraltext-primary text-[length:var(--text-base-all-breakpoints-font-size)] tracking-[var(--text-base-all-breakpoints-letter-spacing)] leading-[var(--text-base-all-breakpoints-line-height)] [font-style:var(--text-base-all-breakpoints-font-style)]">
          Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi.
          Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu
          euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim
          adipiscing sem.
        </p>
      </div>

      <img className="flex-1" alt="Frame" src="/figmaAssets/frame-29.svg" />
    </section>
  );
};
