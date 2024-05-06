import { features } from "@/lib/feature";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  return (
    <div className="container pt-16 w-full ">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Feature;
