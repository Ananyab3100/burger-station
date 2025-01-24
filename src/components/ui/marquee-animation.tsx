import { MarqueeAnimation } from "@/components/ui/marquee-effect";

function MarqueeEffectDoubleExample() {
  return (
    <div className="flex flex-col gap-4">
      <MarqueeAnimation
        direction="left"
        baseVelocity={-3}
        className="bg-[#D1EF53] text-black py-2"
      >
        THE BEST BURGER I'VE EVER HAD
      </MarqueeAnimation>
      <MarqueeAnimation
        direction="right"
        baseVelocity={-3}
        className="bg-[#D1EF53] text-black py-2"
      >
        THE BEST BURGER I'VE EVER HAD
      </MarqueeAnimation>
    </div>
  );
}

export { MarqueeEffectDoubleExample }; 