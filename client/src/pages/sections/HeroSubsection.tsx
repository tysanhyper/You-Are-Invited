import React from "react";

const navItems = [
  { label: "Home" },
  { label: "Our Story" },
  { label: "Venue" },
];

const navItemsRight = [
  { label: "Itinierary" },
  { label: "Registry" },
  { label: "RSVP" },
];

export const HeroSubsection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-neutralbackground">
      <nav className="flex w-full items-center justify-center pt-6 pb-0 px-20">
        {navItems.map((item, index) => (
          <div
            key={`nav-left-${index}`}
            className="inline-flex flex-col items-start flex-[0_0_auto]"
          >
            <button className="inline-flex flex-col items-center justify-center gap-1 px-10 py-2 flex-[0_0_auto] opacity-60 hover:opacity-100 transition-opacity">
              <div className="flex items-center justify-center w-fit mt-[-1.00px] font-link-nav font-[number:var(--link-nav-font-weight)] text-neutraltext-primary text-[length:var(--link-nav-font-size)] tracking-[var(--link-nav-letter-spacing)] leading-[var(--link-nav-line-height)] whitespace-nowrap [font-style:var(--link-nav-font-style)]">
                {item.label}
              </div>
            </button>
          </div>
        ))}

        <div className="inline-flex items-start px-10 py-0 flex-[0_0_auto]">
          <img
            className="w-[104px] h-[104px]"
            alt="Logo"
            src="/figmaAssets/logo.svg"
          />
        </div>

        {navItemsRight.map((item, index) => (
          <div
            key={`nav-right-${index}`}
            className="inline-flex flex-col items-start flex-[0_0_auto]"
          >
            <button className="inline-flex flex-col items-center justify-center gap-1 px-10 py-2 flex-[0_0_auto] opacity-60 hover:opacity-100 transition-opacity">
              <div className="flex items-center justify-center w-fit mt-[-1.00px] font-link-nav font-[number:var(--link-nav-font-weight)] text-neutraltext-primary text-[length:var(--link-nav-font-size)] tracking-[var(--link-nav-letter-spacing)] leading-[var(--link-nav-line-height)] whitespace-nowrap [font-style:var(--link-nav-font-style)]">
                {item.label}
              </div>
            </button>
          </div>
        ))}
      </nav>

      <div className="flex flex-col items-center justify-center gap-4 pt-[93px] pb-0">
        <div className="w-fit mt-[-1.00px] font-heading-tiny-h5-desktop font-[number:var(--heading-tiny-h5-desktop-font-weight)] text-wedding-colorsprimary text-[length:var(--heading-tiny-h5-desktop-font-size)] tracking-[var(--heading-tiny-h5-desktop-letter-spacing)] leading-[var(--heading-tiny-h5-desktop-line-height)] whitespace-nowrap [font-style:var(--heading-tiny-h5-desktop-font-style)]">
          Please join us to celebrate
        </div>

        <h1 className="w-fit font-heading-xlarge-desktop font-[number:var(--heading-xlarge-desktop-font-weight)] text-neutraltext-primary text-[length:var(--heading-xlarge-desktop-font-size)] tracking-[var(--heading-xlarge-desktop-letter-spacing)] leading-[var(--heading-xlarge-desktop-line-height)] whitespace-nowrap [font-style:var(--heading-xlarge-desktop-font-style)]">
          Yatin &amp; Nisha
        </h1>

        <div className="inline-flex items-center justify-center gap-4 flex-[0_0_auto]">
          <div className="w-fit mt-[-1.00px] font-heading-tiny-h5-desktop font-[number:var(--heading-tiny-h5-desktop-font-weight)] text-wedding-colorsprimary text-[length:var(--heading-tiny-h5-desktop-font-size)] tracking-[var(--heading-tiny-h5-desktop-letter-spacing)] leading-[var(--heading-tiny-h5-desktop-line-height)] whitespace-nowrap [font-style:var(--heading-tiny-h5-desktop-font-style)]">
            December 5, 2025
          </div>

          <img
            className="w-4 h-px object-cover"
            alt="Line"
            src="/figmaAssets/line-1.svg"
          />

          <div className="w-fit mt-[-1.00px] font-heading-tiny-h5-desktop font-[number:var(--heading-tiny-h5-desktop-font-weight)] text-wedding-colorsprimary text-[length:var(--heading-tiny-h5-desktop-font-size)] tracking-[var(--heading-tiny-h5-desktop-letter-spacing)] leading-[var(--heading-tiny-h5-desktop-line-height)] whitespace-nowrap [font-style:var(--heading-tiny-h5-desktop-font-style)]">
            Lodha, Banswara
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-[124px] px-40 pb-0">
        <img className="w-full max-w-[1121px] h-auto" alt="Carly rae hobbins" />
      </div>
    </section>
  );
};
