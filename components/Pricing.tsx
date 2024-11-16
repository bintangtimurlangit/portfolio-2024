import { Fragment } from "react";
import clsx from "clsx";
import PricingCard from "@/components/ui/PricingCard";
import GlassBox from "@/public/glassSquare.svg";
import GlassCheck from "@/public/glassSend.svg";

enum PRICING_PLAN {
  BASIC = "Basic Plan",
  PREMIUM = "Premium Plan",
  ENTERPRISE = "Enterprise Plan",
}

const PricingSection = () => {
  const PRICING_CARDS = [
    {
      planType: PRICING_PLAN.BASIC,
      typeName: "Basic",
      duration: "",
      price: "1.000.000",
      description: "Perfect for simple personal websites",
      highlightFeature: "Essential Features",
      features: [
        "Single Page Website",
        "Mobile Responsive Design",
        "Contact Form",
        "3 Content Sections",
        "Basic SEO Setup",
        "1 Round of Revisions",
      ],
    },
    {
      planType: PRICING_PLAN.PREMIUM,
      typeName: "Premium",
      price: "2.000.000",
      description: "Ideal for small businesses",
      highlightFeature: "Everything in Basic +",
      features: [
        "Up to 5 Pages",
        "Custom Design",
        "Social Media Integration",
        "Google Analytics Setup",
        "Basic CMS Integration",
        "3 Rounds of Revisions",
        "1 Month Support",
      ],
    },
    {
      planType: PRICING_PLAN.ENTERPRISE,
      duration: "",
      typeName: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for your business needs",
      highlightFeature: "Everything in Premium +",
      features: [
        "Up to 10 Pages",
        "Advanced CMS Integration",
        "E-commerce Features",
        "Custom Animations",
        "Performance Optimization",
        "Advanced SEO Setup",
        "3 Months Support",
        "Custom Features Available",
      ],
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-[#010117] via-[#1a1d3a] to-[#010117] relative">
      <div className="absolute inset-0 bg-gradient-radial from-[#9560EB]/10 via-transparent to-transparent blur-3xl"></div>
      <h1 className="relative text-center text-[25px] sm:text-[25px] md:text-center leading-tight font-bold">
        Web Development{" "}
        <span className="block sm:block lg:inline text-[#9560EB] drop-shadow-[0_0_20px_rgba(149,96,235,0.7)]">
          Pricing
        </span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {PRICING_CARDS.map((plan) => (
          <div
            key={plan.planType}
            className="h-[45rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <div 
              className="relative w-full h-full rounded-2xl 
              shadow-[0_8px_16px_rgb(0_0_0/0.4)] 
              border border-white/[0.1] 
              hover:border-[#9560EB]/50
              hover:shadow-[0_8px_30px_rgb(149,96,235,0.2)]
              hover:scale-105
              transition-all duration-500 ease-out"
              style={{ backgroundColor: "#13162D" }}
            >
              <div className="flex flex-col h-full p-8 justify-between">
                <h1 className={clsx(
                  "text-3xl font-semibold mb-6 text-[#ffffff] drop-shadow-[0_0_35px_rgba(149,96,235,0.9)]"
                )}>
                  {plan.typeName}
                </h1>

                <div className="mb-6">
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-neutrals-6">Rp</span>
                    <h5 className="text-[28px] text-neutrals-6">
                      {plan.price}
                    </h5>
                  </div>
                  <p className="text-washed-purple-800 mt-2">{plan.description}</p>
                </div>

                <div className="flex-grow">
                  <p className="font-normal text-[14px] text-white mb-4">
                    {plan.highlightFeature}
                  </p>
                  <ul className="font-normal flex flex-col gap-4">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-neutrals-6 text-[15px]"
                      >
                        <GlassCheck />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <button
                    className="whitespace-nowrap w-full h-[42px] p-[1px]
                    bg-gradient-to-r from-[#201F30] to-[#666666]/30 rounded-[15px]
                    hover:from-[#9560EB] hover:to-[#201F30]
                    transition-all duration-300 ease-in-out
                    hover:shadow-[0_0_20px_rgba(149,96,235,0.3)]"
                  >
                    <span
                      className="flex items-center gap-3 justify-center w-full 
                      h-full rounded-[15px]
                      bg-gradient-to-tr from-black to-[#46445b]/5
                      text-[17px] font-normal text-[#8D8C95]
                      hover:text-white transition-colors duration-300"
                    >
                      {plan.planType === PRICING_PLAN.ENTERPRISE
                        ? "Contact Us"
                        : "Get Started"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;