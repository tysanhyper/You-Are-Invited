import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const dates = [
  { value: "friday", label: "Friday, December 02" },
  { value: "saturday", label: "Saturday, December 03" },
  { value: "sunday", label: "Sunday, December 04" },
];

const itineraryItems = [
  {
    time: "10am",
    events: [
      {
        title: "Item Title",
        description:
          "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
      },
    ],
  },
  {
    time: "12pm",
    events: [
      {
        title: "Item Title",
        description:
          "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
      },
      {
        title: "Item Title",
        description:
          "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
      },
    ],
  },
];

export const ItinerarySubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-16 px-20 py-24 bg-neutralbackground">
      <h2 className="font-heading-medium-h2-desktop font-[number:var(--heading-medium-h2-desktop-font-weight)] text-neutraltext-primary text-[length:var(--heading-medium-h2-desktop-font-size)] tracking-[var(--heading-medium-h2-desktop-letter-spacing)] leading-[var(--heading-medium-h2-desktop-line-height)] [font-style:var(--heading-medium-h2-desktop-font-style)]">
        Itinerary
      </h2>

      <Tabs defaultValue="friday" className="w-full max-w-[840px]">
        <TabsList className="flex items-center justify-center gap-16 w-full h-auto bg-transparent p-0 mb-16">
          {dates.map((date) => (
            <TabsTrigger
              key={date.value}
              value={date.value}
              className="flex flex-col items-start gap-1 bg-transparent p-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none border-0"
            >
              <span className="font-heading-all-caps-h6-desktop font-[number:var(--heading-all-caps-h6-desktop-font-weight)] text-neutraltext-primary text-[length:var(--heading-all-caps-h6-desktop-font-size)] tracking-[var(--heading-all-caps-h6-desktop-letter-spacing)] leading-[var(--heading-all-caps-h6-desktop-line-height)] [font-style:var(--heading-all-caps-h6-desktop-font-style)] data-[state=inactive]:opacity-60 whitespace-nowrap">
                {date.label}
              </span>
              <div className="w-full h-px bg-wedding-colorsprimary data-[state=inactive]:opacity-0" />
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="friday" className="flex flex-col gap-16 mt-0">
          {itineraryItems.map((item, index) => (
            <div key={index} className="flex items-start gap-16">
              <div className="w-[184px] font-heading-tiny-h5-desktop font-[number:var(--heading-tiny-h5-desktop-font-weight)] text-wedding-colorsprimary text-[length:var(--heading-tiny-h5-desktop-font-size)] tracking-[var(--heading-tiny-h5-desktop-letter-spacing)] leading-[var(--heading-tiny-h5-desktop-line-height)] [font-style:var(--heading-tiny-h5-desktop-font-style)]">
                {item.time}
              </div>

              <div className="flex flex-col items-start gap-6 flex-1">
                {item.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="flex flex-col items-start gap-8 w-full max-w-[640px]"
                  >
                    <h3 className="font-heading-xsmall-h4-desktop-400 font-[number:var(--heading-xsmall-h4-desktop-400-font-weight)] text-neutraltext-primary text-[length:var(--heading-xsmall-h4-desktop-400-font-size)] tracking-[var(--heading-xsmall-h4-desktop-400-letter-spacing)] leading-[var(--heading-xsmall-h4-desktop-400-line-height)] [font-style:var(--heading-xsmall-h4-desktop-400-font-style)]">
                      {event.title}
                    </h3>

                    <p className="opacity-70 font-text-base-all-breakpoints font-[number:var(--text-base-all-breakpoints-font-weight)] text-neutraltext-primary text-[length:var(--text-base-all-breakpoints-font-size)] tracking-[var(--text-base-all-breakpoints-letter-spacing)] leading-[var(--text-base-all-breakpoints-line-height)] [font-style:var(--text-base-all-breakpoints-font-style)]">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="saturday" className="flex flex-col gap-16 mt-0">
          {itineraryItems.map((item, index) => (
            <div key={index} className="flex items-start gap-16">
              <div className="w-[184px] font-heading-tiny-h5-desktop font-[number:var(--heading-tiny-h5-desktop-font-weight)] text-wedding-colorsprimary text-[length:var(--heading-tiny-h5-desktop-font-size)] tracking-[var(--heading-tiny-h5-desktop-letter-spacing)] leading-[var(--heading-tiny-h5-desktop-line-height)] [font-style:var(--heading-tiny-h5-desktop-font-style)]">
                {item.time}
              </div>

              <div className="flex flex-col items-start gap-6 flex-1">
                {item.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="flex flex-col items-start gap-8 w-full max-w-[640px]"
                  >
                    <h3 className="font-heading-xsmall-h4-desktop-400 font-[number:var(--heading-xsmall-h4-desktop-400-font-weight)] text-neutraltext-primary text-[length:var(--heading-xsmall-h4-desktop-400-font-size)] tracking-[var(--heading-xsmall-h4-desktop-400-letter-spacing)] leading-[var(--heading-xsmall-h4-desktop-400-line-height)] [font-style:var(--heading-xsmall-h4-desktop-400-font-style)]">
                      {event.title}
                    </h3>

                    <p className="opacity-70 font-text-base-all-breakpoints font-[number:var(--text-base-all-breakpoints-font-weight)] text-neutraltext-primary text-[length:var(--text-base-all-breakpoints-font-size)] tracking-[var(--text-base-all-breakpoints-letter-spacing)] leading-[var(--text-base-all-breakpoints-line-height)] [font-style:var(--text-base-all-breakpoints-font-style)]">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="sunday" className="flex flex-col gap-16 mt-0">
          {itineraryItems.map((item, index) => (
            <div key={index} className="flex items-start gap-16">
              <div className="w-[184px] font-heading-tiny-h5-desktop font-[number:var(--heading-tiny-h5-desktop-font-weight)] text-wedding-colorsprimary text-[length:var(--heading-tiny-h5-desktop-font-size)] tracking-[var(--heading-tiny-h5-desktop-letter-spacing)] leading-[var(--heading-tiny-h5-desktop-line-height)] [font-style:var(--heading-tiny-h5-desktop-font-style)]">
                {item.time}
              </div>

              <div className="flex flex-col items-start gap-6 flex-1">
                {item.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="flex flex-col items-start gap-8 w-full max-w-[640px]"
                  >
                    <h3 className="font-heading-xsmall-h4-desktop-400 font-[number:var(--heading-xsmall-h4-desktop-400-font-weight)] text-neutraltext-primary text-[length:var(--heading-xsmall-h4-desktop-400-font-size)] tracking-[var(--heading-xsmall-h4-desktop-400-letter-spacing)] leading-[var(--heading-xsmall-h4-desktop-400-line-height)] [font-style:var(--heading-xsmall-h4-desktop-400-font-style)]">
                      {event.title}
                    </h3>

                    <p className="opacity-70 font-text-base-all-breakpoints font-[number:var(--text-base-all-breakpoints-font-weight)] text-neutraltext-primary text-[length:var(--text-base-all-breakpoints-font-size)] tracking-[var(--text-base-all-breakpoints-letter-spacing)] leading-[var(--text-base-all-breakpoints-line-height)] [font-style:var(--text-base-all-breakpoints-font-style)]">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </section>
  );
};
