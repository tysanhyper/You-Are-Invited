import React from "react";
import { Button } from "@/components/ui/button";

const hotelData = [
  {
    title: "Hotel 1",
    description:
      "Feugiat pretium egestas enim blandit purus euismod. Feugiat magna aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur quam diam felis, fringilla varius.",
  },
  {
    title: "Hotel 2",
    description:
      "Nec laoreet tristique orci viverra sed aliquam. Amet odio ornare fermentum amet adipiscing malesuada turpis diam augue. Eget enim ultrices etiam nibh at porta.",
  },
  {
    title: "Hotel 3",
    description:
      "Cras rhoncus malesuada eget vitae eleifend. Sodales purus et aliquam diam, nascetur at habitant. A, vel, donec at commodo eu non ac interdum.",
  },
];

export const TextSectionSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-16 px-20 py-24 bg-neutralbackground">
      <div className="flex self-stretch w-full items-start gap-16">
        {hotelData.map((hotel, index) => (
          <div key={index} className="flex flex-col items-start gap-8 flex-1">
            <h3 className="self-stretch mt-[-1.00px] font-heading-small-h3-desktop font-[number:var(--heading-small-h3-desktop-font-weight)] text-neutraltext-primary text-[length:var(--heading-small-h3-desktop-font-size)] tracking-[var(--heading-small-h3-desktop-letter-spacing)] leading-[var(--heading-small-h3-desktop-line-height)] [font-style:var(--heading-small-h3-desktop-font-style)]">
              {hotel.title}
            </h3>

            <p className="self-stretch opacity-80 font-text-base-all-breakpoints font-[number:var(--text-base-all-breakpoints-font-weight)] text-neutraltext-primary text-[length:var(--text-base-all-breakpoints-font-size)] tracking-[var(--text-base-all-breakpoints-letter-spacing)] leading-[var(--text-base-all-breakpoints-line-height)] [font-style:var(--text-base-all-breakpoints-font-style)]">
              {hotel.description}
            </p>

            <Button
              variant="outline"
              className="h-auto px-[26px] py-[18px] bg-neutralbackground border-[#c6754d] hover:bg-neutralbackground"
            >
              <span className="font-link-button font-[number:var(--link-button-font-weight)] text-wedding-colorsprimary text-[length:var(--link-button-font-size)] tracking-[var(--link-button-letter-spacing)] leading-[var(--link-button-line-height)] [font-style:var(--link-button-font-style)]">
                Button
              </span>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};
