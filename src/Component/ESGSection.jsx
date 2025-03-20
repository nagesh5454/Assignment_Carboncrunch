import dashboardImage from "../assets/bg.png"; // Dashboard image
import backgroundImage from "../assets/bg1.jpeg"; // Background image

const ESGSection = () => {
  return (
    <section className="relative w-full">
      {/* Dashboard Image (Floating Effect) */}
      <div className="relative z-20 flex justify-center">
        <img
          src={dashboardImage}
          alt="Dashboard"
          className="max-w-full md:max-w-5xl rounded-lg shadow-2xl border-4 border-green-500"
          style={{
            marginTop: "-80px", // Move dashboard slightly up
            zIndex: 10,
          }}
        />
      </div>

      {/* Overlay ESG Section with Larger Background */}
      <div
        className="relative z-0 bg-cover bg-center mt-[-60px]" // Push ESG section lower
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "750px", // Increase background height
          paddingTop: "120px", // Ensure content doesn't overlap
        }}
      >
        <div className="bg-black/75 py-40 px-8 md:px-24 text-center text-white"> {/* Increase spacing */}
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to take meaningful action on your ESG journey?
          </h2>
          <p className="text-gray-300 mt-6 max-w-4xl mx-auto text-xl">
            Drive impact with accurate carbon accounting, reduction strategies, and transparent reporting.
          </p>
          <div className="mt-10 flex justify-center space-x-8">
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg shadow-lg text-lg hover:bg-gray-200">
              Login
            </button>
            <button className="px-8 py-4 bg-green-500 text-white font-semibold rounded-lg shadow-lg text-lg hover:bg-green-600">
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGSection;
