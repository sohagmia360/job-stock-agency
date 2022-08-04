import { NextPage } from "next";

interface PricingPlanType {
  plan : {
    pricingPlan : string,
    packagePer : string,
    price : number ,
    planFeatured : string[] 
  }
}

const PricingPlanCard:NextPage<PricingPlanType> = ({plan})=> {
  return (
    <div className="bg-light_white shadow-md py-6 px-9 mr-6 rounded-md sm:mb-0 mb-6">
        <div className="text-center">
            <h2 className="text-3xl mb-3">{plan.pricingPlan}</h2>
            <span className="text-xl mb-3 block">{plan.packagePer}</span>
            <p className="text-4xl font-bold mb-4 text-[#E73C51] ">${plan.price}<span className="text-xl text-light_black">/Month</span> </p>
            <ul className="">
              {plan.planFeatured?.map((planF , index) => <li className="mb-2" key={index}>{planF}</li>)}
            </ul>
            <button className="bg-light_green px-6 py-2 rounded-lg text-light_white font-bold mt-10">Purchase</button>
        </div>
    </div>
  );
}

export default PricingPlanCard;