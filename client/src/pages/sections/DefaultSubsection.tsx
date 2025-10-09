import React from "react";
import { Separator } from "@/components/ui/separator";

const navigationItems = [
  { label: "Home" },
  { label: "Our Story" },
  { label: "Venue" },
  { label: "Itinierary" },
  { label: "Registry" },
  { label: "RSVP" },
];

export const DefaultSubsection = (): JSX.Element => {
  return (
    <footer className="flex flex-col w-full items-center justify-center bg-neutraltext-primary">
      <Separator className="w-full h-px bg-neutraltext-primary" />

      <div className="flex flex-col items-center justify-center gap-12 px-20 py-8 bg-neutralbackground w-full">
        <nav className="flex items-start">
          {navigationItems.map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              <button className="flex flex-col items-center justify-center gap-1 px-10 py-2 opacity-60 hover:opacity-100 transition-opacity">
                <span className="flex items-center justify-center w-fit mt-[-1.00px] font-link-nav font-[number:var(--link-nav-font-weight)] text-neutraltext-primary text-[length:var(--link-nav-font-size)] tracking-[var(--link-nav-letter-spacing)] leading-[var(--link-nav-line-height)] whitespace-nowrap [font-style:var(--link-nav-font-style)]">
                  {item.label}
                </span>
              </button>
            </div>
          ))}
        </nav>

        <div className="flex w-full max-w-[1280px] items-end justify-around gap-10">
          <p className="w-fit mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-normal text-neutralbackground text-lg text-center tracking-[0] leading-[18px]">
            <span className="text-[#2a1105] leading-[25.2px]">Powered by </span>
            <a
              href="https://www.webflow.com"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:underline"
            >
              <span className="font-text-base-all-breakpoints text-[#2a1105] leading-[var(--text-base-all-breakpoints-line-height)] [font-style:var(--text-base-all-breakpoints-font-style)] font-[number:var(--text-base-all-breakpoints-font-weight)] tracking-[var(--text-base-all-breakpoints-letter-spacing)] text-[length:var(--text-base-all-breakpoints-font-size)]">
                Webflow
              </span>
            </a>
            <span className="text-[#2a1105] leading-[25.2px]">, built by </span>
            <a
              href="https://www.webflow.com/templates/designers/abel-hancock"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:underline"
            >
              <span className="font-text-base-all-breakpoints text-[#2a1105] leading-[var(--text-base-all-breakpoints-line-height)] [font-style:var(--text-base-all-breakpoints-font-style)] font-[number:var(--text-base-all-breakpoints-font-weight)] tracking-[var(--text-base-all-breakpoints-letter-spacing)] text-[length:var(--text-base-all-breakpoints-font-size)]">
                Abel Hancock
              </span>
            </a>
            <span className="text-[#2a1105] leading-[25.2px]"> |</span>
            <span className="[font-family:'Montaga',Helvetica] text-[#2a1105] leading-[0.1px]">
              &nbsp;
            </span>
            <span className="font-text-base-all-breakpoints text-[#2a1105] leading-[var(--text-base-all-breakpoints-line-height)] [font-style:var(--text-base-all-breakpoints-font-style)] font-[number:var(--text-base-all-breakpoints-font-weight)] tracking-[var(--text-base-all-breakpoints-letter-spacing)] text-[length:var(--text-base-all-breakpoints-font-size)]">
              Licensing
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
