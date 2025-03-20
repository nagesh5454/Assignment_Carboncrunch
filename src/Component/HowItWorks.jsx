const Step = ({ number, title, description, isActive }) => (
  <div className="text-center">
    <h3 className="text-lg font-bold">{number}</h3>
    <h4 className={`font-semibold ${isActive ? "text-green-600" : "text-gray-900"}`}>
      {title}
    </h4>
    <p className="text-gray-600 text-sm">{description}</p>
    {isActive && <div className="w-12 h-1 bg-green-600 mx-auto mt-2"></div>}
  </div>
);

const HowItWorks = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16 mb-20">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-green-600 font-semibold">How It Works?</h3>
        <h2 className="text-3xl font-bold mt-2">Getting Started is easy</h2>
        <p className="text-gray-600 mt-2">How carboncrunch SAAS works</p>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-12">
          <Step
            number="01"
            title="Track and manage your Net Zero Pathway"
            description="Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target year."
            isActive={true}
          />
          <Step
            number="02"
            title="Track and manage your Net Zero Pathway"
            description="Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target year."
            isActive={false}
          />
          <Step
            number="03"
            title="Track and manage your Net Zero Pathway"
            description="Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target year."
            isActive={false}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
