import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { FaSchool, FaTint, FaClinicMedical } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';

const markers = [
  {
    position: [28.6139, 77.2090],
    title: "Delhi, India",
    type: "Education",
    description: "12 schools built, 450+ teachers trained"
  },
  {
    position: [6.5244, 3.3792],
    title: "Lagos, Nigeria",
    type: "Clean Water",
    description: "215 wells, 120,000+ people served"
  },
  {
    position: [-1.2921, 36.8219],
    title: "Nairobi, Kenya",
    type: "Healthcare",
    description: "48 clinics, 85,000+ patients treated"
  }
];

const markerIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const OurImpact = () => {
  return (
    <section className="bg-white text-gray-800 min-h-screen pt-24 pb-24 px-4 md:px-6 font-[Poppins]">
      

      <div className="max-w-7xl mx-auto text-center pt-8">
        <h1 className="text-4xl font-bold mb-4 font-[Playfair Display] text-blue-900">Impact Dashboard</h1>
        <p className="text-gray-600 mb-12 text-lg">Real-time statistics showing our progress across all programs.</p>

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[{
              title: "Education",
              stats: ["Schools Built: 32", "Children Educated: 12,500+", "Teachers Trained: 450"],
              icon: <FaSchool className="text-4xl text-blue-500" />,
              bg: "from-blue-100 to-blue-200"
            },
            {
              title: "Clean Water",
              stats: ["Wells Built: 215", "People with Access: 120,000+", "Disease Reduction: 73%"],
              icon: <FaTint className="text-4xl text-teal-500" />,
              bg: "from-teal-100 to-green-200"
            },
            {
              title: "Healthcare",
              stats: ["Clinics Established: 48", "Patients Treated: 85,000+", "Workers Trained: 620"],
              icon: <FaClinicMedical className="text-4xl text-rose-500" />,
              bg: "from-rose-100 to-red-200"
            }
          ].map((card, i) => (
            <div key={i} className={`bg-gradient-to-br ${card.bg} p-6 rounded-2xl shadow-md transition-transform hover:scale-105`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold font-[Playfair Display] text-blue-900">{card.title}</h3>
                {card.icon}
              </div>
              <ul className="text-left text-sm space-y-2 text-gray-700">
                {card.stats.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6 font-[Playfair Display] text-blue-900">Interactive Impact Map</h2>
        <div className="h-[500px] rounded-xl overflow-hidden shadow-md border border-gray-200">
          <MapContainer center={[10, 0]} zoom={2} className="h-full w-full" scrollWheelZoom={false}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map((marker, i) => (
              <Marker key={i} position={marker.position} icon={markerIcon}>
                <Popup>
                  <strong>{marker.title}</strong><br />
                  <em>{marker.type}</em><br />
                  {marker.description}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
