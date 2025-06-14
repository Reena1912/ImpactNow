import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "How Our Volunteers Transformed a Village",
    description:
      "Read about the incredible story of our volunteers who brought clean water and education to a remote village.",
    date: "May 12, 2025",
    author: "K Reena",
  },
  {
    title: "The Power of Small Donations",
    description:
      "Learn how even small contributions can lead to massive impact when directed efficiently.",
    date: "April 25, 2025",
    author: "ImpactNow Team",
  },
  {
    title: "Celebrating Earth Day: Community Cleanup Drive",
    description:
      "Our Earth Day event brought together over 300 volunteers to clean 5 major parks across the city.",
    date: "April 22, 2025",
    author: "John Samuel",
  },
];

const Blog = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6 text-blue-700"
        >
          Our Blog & Stories
        </motion.h1>
        <p className="mb-12 text-lg text-gray-600">
          Discover how we create meaningful impact through stories from our volunteers and communities.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-600">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                {post.date} | by {post.author}
              </p>
              <p className="text-gray-700">{post.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
