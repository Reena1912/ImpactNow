import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ImpactStats = () => {
  const [countedStats, setCountedStats] = useState([
    { value: 0, label: "Lives Impacted" },
    { value: 0, label: "Funds Raised" },
    { value: 0, label: "Projects" },
    { value: 0, label: "Communities" }
  ]);

  const targetStats = [
    { value: 50000, label: "Lives Impacted" },
    { value: 2500000, label: "Funds Raised" },
    { value: 120, label: "Projects" },
    { value: 75, label: "Communities" }
  ];

  useEffect(() => {
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      setCountedStats(targetStats.map((target) => {
        const currentValue = Math.floor(target.value * progress);
        return { ...target, value: currentValue };
      }));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toString();
  };

  return (
    <section className="py-20 bg-[#141c2c] text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
            Our Impact
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Together with our partners and supporters, we've made significant strides in creating positive change.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {countedStats.map((stat, index) => (
            <div key={index} className="bg-[#1f2937] p-6 rounded-lg border border-[#2c3e50]">
              <p className="text-4xl font-extrabold text-white mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                {formatNumber(stat.value)}
              </p>
              <p className="text-md text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <Link
            to="/donate"
            className="bg-white text-[#141c2c] hover:bg-gray-200 px-8 py-3 rounded-md text-lg font-medium transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Donate Now
          </Link>
          <Link
            to="/impact"
            className="border-2 border-white text-white hover:bg-white hover:text-[#141c2c] px-8 py-3 rounded-md text-lg font-medium transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Learn More →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
