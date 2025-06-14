import { useState, useEffect } from "react";
import { Download, Video, FileText, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const resources = [
  {
    title: "Community Development Toolkit",
    type: "Toolkit",
    category: "Community Development",
    description:
      "A comprehensive guide to planning and implementing community-led development initiatives.",
    fileSize: "4.2 MB",
    downloadLink: "https://www.icvanetwork.org/uploads/2021/09/ICVA-NGO-Coordination-Guide-Version-1.01.pdf",
    image: "/images/comm.jpg",
  },
  {
    title: "Annual Impact Report 2024",
    type: "Report",
    category: "Impact",
    description:
      "Comprehensive overview of our programs, impact, and financials for the past year.",
    fileSize: "5.1 MB",
    downloadLink: "https://www.icvanetwork.org/uploads/2021/09/ICVA-NGO-Coordination-Guide-Version-1.01.pdf",
    image: "/images/annual.jpg",
  },
  {
    title: "Clean Water Implementation Guide",
    type: "PDF",
    category: "Water",
    description:
      "Technical guidelines for implementing clean water projects in rural areas.",
    fileSize: "3.5 MB",
    downloadLink: "https://apps.who.int/iris/bitstream/handle/10665/331665/WHO-2019-nCoV-IPC-2020.3-eng.pdf",
    image: "/images/water.jpg",
  },
  {
    title: "Educational Resources for Remote Learning",
    type: "Guide",
    category: "Education",
    description:
      "Digital tools and strategies for remote education in underserved communities.",
    fileSize: "3.9 MB",
    downloadLink: "https://www.unicef.org/protection/files/child_protection_toolkit.pdf",
    image: "/images/education.jpg",
  },
  {
    title: "Sustainable Agriculture Practices",
    type: "Video",
    category: "Farming",
    description:
      "Video series on sustainable farming techniques for small-scale farmers.",
    fileSize: "",
    downloadLink: "#",
    image: "/images/agriculture.jpg",
    videoUrl: "https://youtu.be/iloAQmroRK0?si=Mw75QMTyK64pea39", 
  },
  {
    title: "Volunteer Training Manual",
    type: "PDF",
    category: "Training",
    description:
      "Complete guide for new volunteers, including policies, procedures, and best practices.",
    fileSize: "3.2 MB",
    downloadLink: "https://ngocsw.org/wp-content/uploads/2024/01/NGO-CSW68-Advocacy-Toolkit-compressed.pdf",
    image: "/images/vol.jpg",
  },
];

// ResourceCard Component
function ResourceCard({ resource, onPreview }) {
  const { title, type, category, description, fileSize, image } = resource;

  const Icon =
    type === "Video" ? Video : type === "Report" ? FileText : Download;

  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
      className="bg-white border rounded-xl shadow-md overflow-hidden flex flex-col cursor-pointer"
      onClick={() => onPreview(resource)}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3 text-sm">
          <span className="bg-blue-100 text-orange-800 px-3 py-1 rounded-full">
            {type}
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <h2 className="text-lg font-semibold mb-2 text-gray-900">{title}</h2>
        <p className="text-sm text-gray-600 flex-grow">{description}</p>

        <div className="mt-4 inline-flex items-center gap-2 text-sm bg-orange-600 text-white px-4 py-2 rounded-md select-none">
          <Icon size={16} />
          {type === "Video"
            ? "Watch Video"
            : `Download ${fileSize ? `(${fileSize})` : ""}`}
        </div>
      </div>
    </motion.div>
  );
}

// Modal component for preview
function PreviewModal({ resource, onClose }) {
  if (!resource) return null;

  const { title, type, description, downloadLink, videoUrl } = resource;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      >
        <motion.div
          key="modal"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-lg max-w-3xl w-full max-h-[80vh] overflow-auto shadow-lg p-6 relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="mb-4 text-gray-700">{description}</p>

          {type === "Video" && videoUrl ? (
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={videoUrl}
                title={title}
                allowFullScreen
                className="w-full h-full rounded"
                frameBorder="0"
              />
            </div>
          ) : (
            <div>
              <p className="mb-2">
                <strong>Download Link:</strong>{" "}
                <a
                  href={downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 underline"
                >
                  Click here to download
                </a>
              </p>
              <p className="text-sm text-gray-500">
                Preview is not available for this resource type.
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// AI Suggestion component (simple mock based on category similarity)
function AISuggestions({ currentResource, resources, onPreview }) {
  if (!currentResource) return null;

  // Suggest other resources with the same category except the current one
  const suggestions = resources.filter(
    (r) => r.category === currentResource.category && r.title !== currentResource.title
  );

  if (suggestions.length === 0) return null;

  return (
    <div className="mt-10">
      <h4 className="text-xl font-semibold mb-4 text-gray-800">
        You might also like...
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {suggestions.map((res) => (
          <div
            key={res.title}
            className="cursor-pointer bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-lg transition"
            onClick={() => onPreview(res)}
          >
            <h5 className="font-semibold text-gray-900">{res.title}</h5>
            <p className="text-sm text-gray-600">{res.type} - {res.fileSize || "N/A"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ResourcePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [previewResource, setPreviewResource] = useState(null);

  const itemsPerPage = 6;

  // Filter resources based on search, category, and type
  const filtered = resources.filter(
    (res) =>
      res.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || res.category === category) &&
      (type === "All" || res.type === type)
  );

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset page if filters/search change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, type]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-4 py-16 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Explore Our Resources
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Search by keyword"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>All</option>
            <option>Community Development</option>
            <option>Impact</option>
            <option>Water</option>
            <option>Education</option>
            <option>Farming</option>
            <option>Training</option>
          </select>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>All</option>
            <option>Toolkit</option>
            <option>Report</option>
            <option>PDF</option>
            <option>Guide</option>
            <option>Video</option>
          </select>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginated.map((res) => (
            <ResourceCard
              key={res.title}
              resource={res}
              onPreview={setPreviewResource}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-3 mt-12">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-orange-600 text-white rounded disabled:bg-gray-400"
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? "bg-orange-700 text-white"
                    : "bg-blue-100 text-orange-700 hover:bg-blue-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-orange-600 text-white rounded disabled:bg-gray-400"
            >
              Next
            </button>
          </div>
        )}

        {/* Modal Preview */}
        <PreviewModal
          resource={previewResource}
          onClose={() => setPreviewResource(null)}
        />

        {/* AI Suggestions */}
        <AISuggestions
          currentResource={previewResource}
          resources={resources}
          onPreview={setPreviewResource}
        />

        {/* Request Section */}
        <div className="mt-20 bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Need Something Specific?
          </h2>
          <p className="text-gray-700 mb-6">
            If you're looking for a particular resource or need help finding
            materials for your project, feel free to reach out!
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition"
          >
            Request a Custom Resource
          </a>
        </div>
      </div>
    </div>
  );
}
