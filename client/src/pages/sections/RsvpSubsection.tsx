import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const guestOptions = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { value: "four", label: "Four" },
];

const attendanceOptions = [
  { value: "accept", label: "Accept with pleasure" },
  { value: "decline", label: "Regretfully Decline" },
];

const eventOptions = [
  { value: "rehearsal", label: "Rehearsal Dinner" },
  { value: "ceremony", label: "Ceremony" },
  { value: "reception", label: "Reception" },
];

export const RsvpSubsection = (): JSX.Element => {
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [attendance, setAttendance] = useState("");
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);

  const handleEventToggle = (value: string) => {
    setSelectedEvents((prev) =>
prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <section className="flex flex-col w-full items-center justify-center gap-16 px-20 py-24 bg-neutralbackground">
<div className="inline-flex items-center justify-center flex-col gap-16">
<h2 className="font-heading-medium-h2-desktop font-[number:var(--heading-medium-h2-desktop-font-weight)] text-neutraltext-primary text-[length:var(--heading-medium-h2-desktop-font-size)] tracking-[var(--heading-medium-h2-desktop-letter-spacing)] leading-[var(--heading-medium-h2-desktop-line-height)] [font-style:var(--heading-medium-h2-desktop-font-style)]">
RSVP
        </h2>
<p className="w-[800px] max-w-full opacity-80 font-text-base-all-breakpoints font-[number:var(--text-base-all-breakpoints-font-weight)] text-neutraltext-primary text-[length:var(--text-base-all-breakpoints-font-size)] tracking-[var(--text-base-all-breakpoints-letter-spacing)] leading-[var(--text-base-all-breakpoints-line-height)] [font-style:var(--text-base-all-breakpoints-font-style)]">
Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi.
          Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu
          euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim
          adipiscing sem.
        </p>
</div>
<div className="flex flex-col w-[600px] max-w-full items-start">
<div className="flex items-start gap-8 w-full">
<div className="flex-col items-start flex-1 flex">
<div className="flex flex-col items-start pt-0 pb-5 px-0 w-full rounded-sm">
<div className="inline-flex items-center mb-2">
<Label className="font-form-label font-[number:var(--form-label-font-weight)] text-neutraltext-primary text-[length:var(--form-label-font-size)] tracking-[var(--form-label-letter-spacing)] leading-[var(--form-label-line-height)] [font-style:var(--form-label-font-style)]">
First Name
                </Label>
<span className="opacity-80 font-form-label font-[number:var(--form-label-font-weight)] text-wedding-colorsprimary text-[length:var(--form-label-font-size)] tracking-[var(--form-label-letter-spacing)] leading-[var(--form-label-line-height)] [font-style:var(--form-label-font-style)]">
*
                </span>
</div>
<Input
                className="w-full px-4 py-3 bg-neutralbackground border border-solid border-[#2a1105] opacity-70 font-form-input-placeholder font-[number:var(--form-input-placeholder-font-weight)] text-neutraltext-primary text-[length:var(--form-input-placeholder-font-size)] tracking-[var(--form-input-placeholder-letter-spacing)] leading-[var(--form-input-placeholder-line-height)] [font-style:var(--form-input-placeholder-font-style)] rounded-none h-auto"
              />
</div>
</div>
<div className="flex-col items-start flex-1 flex">
<div className="flex flex-col items-start pt-0 pb-5 px-0 w-full rounded-sm">
<div className="inline-flex items-center mb-2">
<Label className="font-form-label font-[number:var(--form-label-font-weight)] text-neutraltext-primary text-[length:var(--form-label-font-size)] tracking-[var(--form-label-letter-spacing)] leading-[var(--form-label-line-height)] [font-style:var(--form-label-font-style)]">
Last Name
                </Label>
<span className="opacity-80 font-form-label font-[number:var(--form-label-font-weight)] text-wedding-colorsprimary text-[length:var(--form-label-font-size)] tracking-[var(--form-label-letter-spacing)] leading-[var(--form-label-line-height)] [font-style:var(--form-label-font-style)]">
*
                </span>
</div>
<Input
                className="w-full px-4 py-3 bg-neutralbackground border border-solid border-[#2a1105] opacity-70 font-form-input-placeholder font-[number:var(--form-input-placeholder-font-weight)] text-neutraltext-primary text-[length:var(--form-input-placeholder-font-size)] tracking-[var(--form-input-placeholder-letter-spacing)] leading-[var(--form-input-placeholder-line-height)] [font-style:var(--form-input-placeholder-font-style)] rounded-none h-auto"
              />
</div>
</div>
</div>
<div className="flex-col items-start w-full flex">
<div className="flex flex-col items-start pt-0 pb-5 px-0 w-full rounded-sm">
<div className="inline-flex items-center mb-2">
<Label className="font-form-label font-[number:var(--form-label-font-weight)] text-neutraltext-primary text-[length:var(--form-label-font-size)] tracking-[var(--form-label-letter-spacing)] leading-[var(--form-label-line-height)] [font-style:var(--form-label-font-style)]">
Email Address
              </Label>
<span className="opacity-80 font-form-label font-[number:var(--form-label-font-weight)] text-wedding-colorsprimary text-[length:var(--form-label-font-size)] tracking-[var(--form-label-letter-spacing)] leading-[var(--form-label-line-height)] [font-style:var(--form-label-font-style)]">
*
              </span>
</div>
<Input
              type="email"
              className="w-full px-4 py-3 bg-neutralbackground border border-solid border-[#2a1105] opacity-70 font-form-input-placeholder font-[number:var(--form-input-placeholder-font-weight)] text-neutraltext-primary text-[length:var(--form-input-placeholder-font-size)] tracking-[var(--form-input-placeholder-letter-spacing)] leading-[var(--form-input-placeholder-line-height)] [font-style:var(--form-input-placeholder-font-style)] rounded-none h-auto"
            />
</div>
</div>
<div className="flex flex-col items-start gap-2 pt-0 pb-5 px-0 w-full">
<div className="inline-flex items-center">
<Label className="font-form-label font-[number:var(--form-label-font-weight)] text-neutraltext-primary text-[length:var(--form-label-font-size)] tracking-[var(--form-label-letter-spacing)] leading-[var(--form-label-line-height)] [font-style:var(--form-label-font-style)]">
Number of Guests
            </Label>
<span className="opacity-80 font-form-label font-[number:var(--form-label-font-weight)] text-wedding-colorsprimary text-[length:var(--form-label-font-size)] tracking-[var(--form-label-letter-spacing)] leading-[var(--form-label-line-height)] [font-style:var(--form-label-font-style)]">
*
            </span>
</div>
<RadioGroup
            value={numberOfGuests}
            onValueChange={setNumberOfGuests}
            className="flex items-start gap-4 w-full"
          >
{guestOptions.map((option) => (
              <div key={option.value} className="flex items-center flex-1">
<label className="flex items-center gap-2 px-3 py-4 flex-1 border border-solid border-[#2a1105] cursor-pointer">
<RadioGroupItem
                    value={option.value}
                    className="w-4 h-4 bg-neutralbackground rounded-full border border-solid border-[#2a1105]"
                  />
<span className="font-form-checkbox-label font-[number:var(--form-checkbox-label-font-weight)] text-neutraltext-primary text-[length:var(--form-checkbox-label-font-size)] tracking-[var(--form-checkbox-label-letter-spacing)] leading-[var(--form-checkbox-label-line-height)] [font-style:var(--form-checkbox-label-font-style)]">
{option.label}
                  </span>
</label>
</div>
))}
          </RadioGroup>
</div>
<div className="flex flex-col items-start gap-2 pt-0 pb-5 px-0 w-full">
<div className="inline-flex items-center">
<Label className="font-form-label font-[number:var(--form-label-font-weight)] text-neutraltext-primary text-[length:var(--form-label-font-size)] tracking-[var(--form-label-letter-spacing)] leading-[var(--form-label-line-height)] [font-style:var(--form-label-font-style)]">
Attendance
            </Label>
<span className="opacity-80 font-form-label font-[number:var(--form-label-font-weight)] text-wedding-colorsprimary text-[length:var(--form-label-font-size)] tracking-[var(--form-label-letter-spacing)] leading-[var(--form-label-line-height)] [font-style:var(--form-label-font-style)]">
*
            </span>
</div>
<RadioGroup
            value={attendance}
            onValueChange={setAttendance}
            className="flex items-start gap-4 w-full"
          >
{attendanceOptions.map((option) => (
              <div key={option.value} className="flex items-center flex-1">
<label className="flex items-center gap-2 px-3 py-4 flex-1 border border-solid border-[#2a1105] cursor-pointer">
<RadioGroupItem
                    value={option.value}
                    className="w-4 h-4 bg-neutralbackground rounded-full border border-solid border-[#2a1105]"
                  />
<span className="font-form-checkbox-label font-[number:var(--form-checkbox-label-font-weight)] text-neutraltext-primary text-[length:var(--form-checkbox-label-font-size)] tracking-[var(--form-checkbox-label-letter-spacing)] leading-[var(--form-checkbox-label-line-height)] whitespace-nowrap [font-style:var(--form-checkbox-label-font-style)]">
{option.label}
                  </span>
</label>
</div>
))}
          </RadioGroup>
<div className="flex items-start gap-4 w-full">
{eventOptions.map((option) => (
              <div key={option.value} className="flex items-center flex-1">
<label className="flex items-center gap-2 px-3 py-4 flex-1 border border-solid border-[#2a1105] cursor-pointer">
<Checkbox
                    checked=
                    onCheckedChange={() => handleEventToggle(option.value)}
                    className="w-4 h-4 bg-neutralbackground border border-solid border-[#2a1105]"
                  />
<span className="font-form-checkbox-label font-[number:var(--form-checkbox-label-font-weight)] text-neutraltext-primary text-[length:var(--form-checkbox-label-font-size)] tracking-[var(--form-checkbox-label-letter-spacing)] leading-[var(--form-checkbox-label-line-height)] whitespace-nowrap [font-style:var(--form-checkbox-label-font-style)]">
{option.label}
                  </span>
</label>
</div>
))}
          </div>
</div>
</div>
</section>
);
};