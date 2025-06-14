import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

const About = () => {
  return (
    <div className="min-h-screen px-4 py-20 overflow-hidden" style={{ backgroundColor: '#141c2c' }}>
      {/* Hero Section */}
      <section className="relative py-24 text-white" style={{ backgroundColor: '#1e293b' }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">About ImpactNow</h1>
            <p className="text-xl text-white-100">
              Learn about our story, our mission, and the dedicated team working to create positive change around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={1}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative h-full">
                <div className="rounded-lg overflow-hidden h-[400px] md:h-full">
                  <img 
                    src="https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="ImpactNow team in action" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                  <p className="font-serif italic">
                    "We believe that sustainable change begins with listening to communities and building solutions together."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6">
                ImpactNow was founded in 2015 by a group of passionate individuals who saw both tremendous need and tremendous potential in communities around the world.
              </p>
              <p className="text-gray-300 mb-6">
                What began as a small initiative to improve access to clean water in three villages has grown into a global organization working across education, healthcare, environmental conservation, and community development programs.
              </p>
              <p className="text-gray-300 mb-6">
                Throughout our journey, we've maintained our core belief that lasting change must be community-driven. We don't simply deliver aid; we partner with local leaders and organizations to develop sustainable solutions that address the unique challenges faced by each community.
              </p>
              <p className="text-gray-300">
                Today, ImpactNow works in 75 communities across 12 countries, always with the same mission: to empower communities to create positive, sustainable change.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#1e293b' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={2}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white-400">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16 8s-1.5 2-4 2-4-2-4-2" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Mission & Vision</h2>
            <p className="text-xl text-orange-200">
              Our guiding principles that drive everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={3}
              className="bg-gray-800 p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 mb-4">
                To empower communities through sustainable development initiatives that improve quality of life, preserve the environment, and create lasting positive impact.
              </p>
              <ul className="space-y-3">
                {[
                  'Partner with communities to identify and address their most pressing needs',
                  'Implement sustainable solutions that create lasting positive change',
                  'Build local capacity through education and skills training',
                  'Advocate for policies that support vulnerable communities',
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400 mt-1 mr-3 flex-shrink-0">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={4}
              className="bg-gray-800 p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 mb-4">
                A world where all communities have the resources, knowledge, and support they need to thrive and create a sustainable future for generations to come.
              </p>
              <ul className="space-y-3">
                {[
                  'Communities that are resilient and self-sufficient',
                  'Equal access to education, healthcare, and economic opportunities',
                  'Sustainable practices that protect and preserve the environment',
                  'A global network of supporters and partners working together for positive change',
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400 mt-1 mr-3 flex-shrink-0">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={5}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white-400">
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-blue-200">
              The principles that guide our work and define our approach
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Community-Driven',
                description: 'We believe that sustainable solutions must be driven by the communities they serve.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
                    <path d="M12 2a3 3 0 0 0-3 3c0 1.12.86 2 1.5 2 .63 0 2 .37 2 2.12 0 .5-.38.88-.88.88-.5 0-.88-.38-.88-.88C10.5 7.5 9.13 6 7 6a4 4 0 0 0-4 4c0 1.13.38 2.25 1.06 3.19.15.21.19.5.06.72l-1.06 1.69c-.1.16-.06.38.1.5.5.38 1.06.75 1.69 1.03.19.1.44.06.59-.06l1.19-.94c.25-.19.56-.25.84-.19 1.22.38 2.6.63 4.06.63s2.84-.25 4.06-.63c.28-.06.59 0 .84.19l1.19.94c.16.13.41.16.59.06.63-.28 1.19-.66 1.69-1.03.16-.12.2-.34.1-.5l-1.06-1.69c-.13-.22-.1-.5.06-.72C20.62 12.25 21 11.13 21 10a4 4 0 0 0-4-4c-2.13 0-3.5 1.5-3.5 3.12 0 .5-.38.88-.88.88s-.88-.38-.88-.88C12.5 7 14.13 6 16 6a3 3 0 0 0 0-6z" />
                  </svg>
                ),
              },
              {
                title: 'Transparency',
                description: 'We maintain open communication about our work, finances, and impact with all stakeholders.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white-400">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ),
              },
              {
                title: 'Collaboration',
                description: 'We work alongside local partners, governments, and other organizations to maximize impact.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ehite-400">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
              {
                title: 'Innovation',
                description: 'We continuously seek new and better ways to address complex challenges.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white-400">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={6 + index}
                className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default About;