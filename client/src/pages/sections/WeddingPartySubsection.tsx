import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const groomsmenData = [
  { name: "Julian Bernard" },
  { name: "Damán Haber" },
  { name: "Patrik Pavone" },
  { name: "David Tatum" },
];

const bridesmaidsData = [
  { name: "Bridesmaid 1" },
  { name: "Bridesmaid 2" },
  { name: "Bridesmaid 3" },
  { name: "Bridesmaid 4" },
];

export const WeddingPartySubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start justify-center gap-16 px-20 py-24 bg-neutralbackground">
      <h2 className="font-heading-medium-h2-desktop font-[number:var(--heading-medium-h2-desktop-font-weight)] text-neutraltext-primary text-[length:var(--heading-medium-h2-desktop-font-size)] tracking-[var(--heading-medium-h2-desktop-letter-spacing)] leading-[var(--heading-medium-h2-desktop-line-height)] [font-style:var(--heading-medium-h2-desktop-font-style)]">
        The Bridal Party
      </h2>

      <Tabs defaultValue="groomsmen" className="w-full">
        <div className="flex items-start gap-16 w-full">
          <TabsList className="inline-flex flex-col items-start justify-center gap-8 bg-transparent h-auto p-0">
            <TabsTrigger
              value="groomsmen"
              className="inline-flex flex-col items-start gap-1 bg-transparent p-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none border-0"
            >
              <span className="font-heading-tiny-h5-desktop font-[number:var(--heading-tiny-h5-desktop-font-weight)] text-neutraltext-primary text-[length:var(--heading-tiny-h5-desktop-font-size)] tracking-[var(--heading-tiny-h5-desktop-letter-spacing)] leading-[var(--heading-tiny-h5-desktop-line-height)] [font-style:var(--heading-tiny-h5-desktop-font-style)] data-[state=active]:opacity-100 data-[state=inactive]:opacity-60">
                Groomsmen
              </span>
              <div className="w-full h-px bg-wedding-colorsprimary data-[state=inactive]:opacity-0" />
            </TabsTrigger>

            <TabsTrigger
              value="bridesmaids"
              className="inline-flex flex-col items-start gap-1 bg-transparent p-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none border-0"
            >
              <span className="font-heading-tiny-h5-desktop font-[number:var(--heading-tiny-h5-desktop-font-weight)] text-neutraltext-primary text-[length:var(--heading-tiny-h5-desktop-font-size)] tracking-[var(--heading-tiny-h5-desktop-letter-spacing)] leading-[var(--heading-tiny-h5-desktop-line-height)] [font-style:var(--heading-tiny-h5-desktop-font-style)] data-[state=active]:opacity-100 data-[state=inactive]:opacity-60">
                Bridemaids
              </span>
              <div className="w-full h-px bg-wedding-colorsprimary data-[state=inactive]:opacity-0" />
            </TabsTrigger>
          </TabsList>

          <TabsContent value="groomsmen" className="flex-1 mt-0">
            <div className="flex items-start gap-16">
              {groomsmenData.map((groomsman, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-6 flex-1"
                >
                  <div className="w-[206px] h-[206px] rounded-full bg-gray-200" />
                  <p className="font-heading-xsmall-h4-desktop-400 font-[number:var(--heading-xsmall-h4-desktop-400-font-weight)] text-neutraltext-primary text-[length:var(--heading-xsmall-h4-desktop-400-font-size)] text-center tracking-[var(--heading-xsmall-h4-desktop-400-letter-spacing)] leading-[var(--heading-xsmall-h4-desktop-400-line-height)] [font-style:var(--heading-xsmall-h4-desktop-400-font-style)]">
                    {groomsman.name}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bridesmaids" className="flex-1 mt-0">
            <div className="flex items-start gap-16">
              {bridesmaidsData.map((bridesmaid, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-6 flex-1"
                >
                  <div className="w-[206px] h-[206px] rounded-full bg-gray-200" />
                  <p className="font-heading-xsmall-h4-desktop-400 font-[number:var(--heading-xsmall-h4-desktop-400-font-weight)] text-neutraltext-primary text-[length:var(--heading-xsmall-h4-desktop-400-font-size)] text-center tracking-[var(--heading-xsmall-h4-desktop-400-letter-spacing)] leading-[var(--heading-xsmall-h4-desktop-400-line-height)] [font-style:var(--heading-xsmall-h4-desktop-400-font-style)]">
                    {bridesmaid.name}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
};
