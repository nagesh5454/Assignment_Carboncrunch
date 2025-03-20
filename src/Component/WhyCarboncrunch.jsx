import { CheckCircle } from "lucide-react";

const FeatureItem = ({ title, description, color }) => (
  <div className="flex items-start space-x-4">
    <div className={`p-3 rounded-full bg-${color}-100`}>
      <CheckCircle className={`text-${color}-500`} size={24} />
    </div>
    <div>
      <h4 className={`font-semibold text-${color}-700`}>{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const WhyCarboncrunch = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h3 className="text-green-600 font-semibold">Why Carboncrunch</h3>
          <h2 className="text-4xl font-bold mt-2">
            Leading Sustainability <br /> with Carboncrunch
          </h2>
          <p className="mt-4 text-gray-600">
            GHG (Greenhouse Gas) Accounting is a framework used to measure and
            report greenhouse gas emissions.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 space-y-6">
          <FeatureItem
            title="Regulatory Compliance and Reporting"
            description="Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements."
            color="green"
          />
          <FeatureItem
            title="Meeting Sustainability Goals and Net-Zero Targets"
            description="Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements."
            color="green"
          />
          <FeatureItem
            title="Cost Savings and Operational Efficiency"
            description="Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements."
            color="gray"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyCarboncrunch;
