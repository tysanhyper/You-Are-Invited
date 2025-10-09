import React from "react";

export const VenueSubsection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-neutralbackground py-20">
      <div className="container mx-auto px-20">
        <div className="flex items-center justify-between gap-8">
          <div className="flex flex-col items-start gap-8 max-w-[539px]">
            <h6 className="font-heading-all-caps-h6-desktop font-[number:var(--heading-all-caps-h6-desktop-font-weight)] text-wedding-colorsprimary text-[length:var(--heading-all-caps-h6-desktop-font-size)] tracking-[var(--heading-all-caps-h6-desktop-letter-spacing)] leading-[var(--heading-all-caps-h6-desktop-line-height)] [font-style:var(--heading-all-caps-h6-desktop-font-style)]">
              The Venue
            </h6>

            <h2 className="font-heading-medium-h2-desktop font-[number:var(--heading-medium-h2-desktop-font-weight)] text-neutraltext-primary text-[length:var(--heading-medium-h2-desktop-font-size)] tracking-[var(--heading-medium-h2-desktop-letter-spacing)] leading-[var(--heading-medium-h2-desktop-line-height)] [font-style:var(--heading-medium-h2-desktop-font-style)]">
              Royal Kesari Banquet Hall
            </h2>

            <div className="flex flex-col items-start gap-4">
              <p className="opacity-80 font-text-base-all-breakpoints font-[number:var(--text-base-all-breakpoints-font-weight)] text-neutraltext-primary text-[length:var(--text-base-all-breakpoints-font-size)] tracking-[var(--text-base-all-breakpoints-letter-spacing)] leading-[var(--text-base-all-breakpoints-line-height)] [font-style:var(--text-base-all-breakpoints-font-style)]">
                Feugiat pretium egestas enim blandit purus euismod. Feugiat
                magna aliquam lectus lectus eu amet. Eros, accumsan purus enim
                nascetur quam diam felis, fringilla varius.
              </p>

              <p className="opacity-80 font-text-base-all-breakpoints font-[number:var(--text-base-all-breakpoints-font-weight)] text-neutraltext-primary text-[length:var(--text-base-all-breakpoints-font-size)] tracking-[var(--text-base-all-breakpoints-letter-spacing)] leading-[var(--text-base-all-breakpoints-line-height)] [font-style:var(--text-base-all-breakpoints-font-style)]">
                4750 Tyler Avenue Boise, Idaho 83705
              </p>
            </div>
          </div>

          <div className="relative flex-shrink-0 w-[533px] h-[422px]">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt="Irina iriser wop"
            />

            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt="Annie spratt"
            />

            <img
              className="absolute top-[26px] left-[19px] w-[495px] h-[371px] object-cover"
              alt="Zane persaud jlu"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
