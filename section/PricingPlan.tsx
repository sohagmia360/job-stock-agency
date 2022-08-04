import { NextPage } from "next";
import PricingPlanCard from "../components/PricingPlanCard";
import PricingPlanList from "../utility/PricingPlanList";

const PricingPlan: NextPage = () => {
  return (
    <div className="mt-24">
      <div className="wContainer grid grid-cols-12 items-center">
        <div className="flex sm:flex-row flex-col items-center justify-center col-span-12 lg:col-span-6  lg:order-2 order-1">
          {PricingPlanList.map((plan, index) => (
            <PricingPlanCard key={index} plan={plan} />
          ))}
        </div>
        <div className="lg:col-span-6 col-span-12  lg:mb-0 mb-10 px-10 sm:px-20 lg:px-0">
          <h2 className="text-3xl font-bold mb-4 text-center lg:text-left ">
            Choose Your Best Pricing Plan
          </h2>
          <p className="text-center lg:text-left">
            Lorem ipsum dolor sit amet, et alii clita tritani per. Vix ut
            vidisse pertinacia, ius ut maiorum omittam. Duis ludus no mea, te
            has delenit maiorum, an ius admodum constituto. Nostrud urbanitas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
