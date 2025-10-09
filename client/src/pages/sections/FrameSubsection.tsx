import React from "react";

export const FrameSubsection = (): JSX.Element => {
  return (
    <section className="inline-flex flex-col items-start relative w-full">
      <div className="relative w-full h-[645px] bg-neutralbackground">
        <div className="absolute w-full h-full top-0 left-0 bg-[#4b1c1c]" />

        <h2 className="absolute top-[calc(50.00%_-_100px)] left-[113px] w-[328px] font-heading-xlarge-desktop font-[number:var(--heading-xlarge-desktop-font-weight)] text-neutralbackground text-[length:var(--heading-xlarge-desktop-font-size)] tracking-[var(--heading-xlarge-desktop-letter-spacing)] leading-[var(--heading-xlarge-desktop-line-height)] [font-style:var(--heading-xlarge-desktop-font-style)]">
          Our Story
        </h2>

        <p className="absolute top-[calc(50.00%_-_210px)] left-[calc(50.00%_-_162px)] w-[800px] font-text-medium-desktop font-[number:var(--text-medium-desktop-font-weight)] text-neutralbackground text-[length:var(--text-medium-desktop-font-size)] tracking-[var(--text-medium-desktop-letter-spacing)] leading-[var(--text-medium-desktop-line-height)] [font-style:var(--text-medium-desktop-font-style)]">
          Feugiat pretium egestas enim blandit purus euismod. Feugiat magna
          aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur quam
          diam felis, fringilla varius. Quis purus nisl orci eu, ultrices. Purus
          pretium egestas ultricies tempus sit elit. Maecenas pellentesque sit
          eros vitae. Maecenas suspendisse tincidunt ullamcorper justo neque
          quis et, laoreet.
          <br />
          <br />
          Vitae lacus, aliquet lorem mauris, sit dolor sodales. Nullam quam quis
          lorem dui tristique massa enim. Faucibus sed egestas mollis vivamus et
          sed sed.
          <br />
          <br />
          Feugiat magna aliquam lectus lectus eu amet. Eros, accumsan purus enim
          nascetur quam diam felis, fringilla varius. Quis purus nisl orci eu,
          ultrices. Purus pretium egestas ultricies tempus sit elit.
        </p>
      </div>

      <div className="relative w-full h-[600px] bg-neutralbackground">
        <img
          className="absolute top-[calc(50.00%_-_300px)] left-0 w-full h-[600px] object-cover"
          alt="Vince fleming"
        />
      </div>
    </section>
  );
};
