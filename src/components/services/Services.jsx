import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaCloud, 
  FaRocket, 
  FaCog, 
  FaMobile, 
  FaShieldAlt,
  FaCheck,
  FaStar,
  FaClock,
  FaUsers,
  FaArrowRight
} from 'react-icons/fa';

const Services = () => {
  const [selectedPlan, setSelectedPlan] = useState('startup');

  const services = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Complete web applications with React, Next.js, TypeScript, and modern backend solutions.",
      features: ["Custom SaaS Platforms", "API Development", "Database Design", "Authentication Systems"]
    },
    {
      icon: <FaCloud className="w-8 h-8" />,
      title: "Cloud Architecture",
      description: "Scalable cloud-native solutions using AWS, Firebase, and modern DevOps practices.",
      features: ["Multi-tenant Architecture", "Auto-scaling Systems", "Cloud Migration", "Performance Optimization"]
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "CI/CD Automation",
      description: "Streamlined deployment pipelines that reduce errors and accelerate delivery.",
      features: ["GitHub Actions", "Docker Containers", "Automated Testing", "Zero-downtime Deployments"]
    },
    {
      icon: <FaCog className="w-8 h-8" />,
      title: "Technical Consulting",
      description: "Strategic guidance on architecture, scalability, and technology decisions.",
      features: ["System Architecture", "Code Reviews", "Performance Audits", "Team Mentoring"]
    },
    {
      icon: <FaMobile className="w-8 h-8" />,
      title: "Mobile-First Design",
      description: "Responsive, accessible interfaces that work perfectly across all devices.",
      features: ["Responsive Design", "Progressive Web Apps", "Accessibility Compliance", "Performance Optimization"]
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with proper authentication, authorization, and data protection.",
      features: ["JWT Authentication", "RBAC Systems", "Data Encryption", "Security Audits"]
    }
  ];

  const pricingPlans = [
    {
      id: 'startup',
      name: 'Startup Package',
      price: '$2,500',
      duration: '2-3 weeks',
      description: 'Perfect for MVPs and early-stage startups',
      features: [
        'Custom React/Next.js Application',
        'Responsive Design & Mobile Optimization',
        'Basic Authentication System',
        'Database Setup & API Development',
        'Deployment & CI/CD Pipeline',
        '2 Revisions Included',
        '2 Weeks Post-Launch Support'
      ],
      popular: false,
      cta: 'Start Your MVP'
    },
    {
      id: 'growth',
      name: 'Growth Package',
      price: '$5,000',
      duration: '4-6 weeks',
      description: 'Ideal for scaling businesses and SaaS platforms',
      features: [
        'Full-Stack SaaS Platform',
        'Multi-tenant Architecture',
        'Advanced Authentication & RBAC',
        'Real-time Features & Notifications',
        'Admin Dashboard & Analytics',
        'Cloud Infrastructure Setup',
        'Performance Optimization',
        '3 Revisions Included',
        '1 Month Post-Launch Support'
      ],
      popular: true,
      cta: 'Scale Your Business'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Package',
      price: '$10,000+',
      duration: '8-12 weeks',
      description: 'Complete enterprise solutions with ongoing support',
      features: [
        'Enterprise-Grade Platform',
        'Microservices Architecture',
        'Advanced Security & Compliance',
        'Custom Integrations & APIs',
        'Advanced Analytics & Reporting',
        'Team Training & Documentation',
        'Unlimited Revisions',
        '3 Months Ongoing Support',
        'Priority Support & Maintenance'
      ],
      popular: false,
      cta: 'Build Enterprise Solution'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden" id="services">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-600 text-sm font-medium mb-6">
            <FaStar className="w-4 h-4" />
            Services & Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Development Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From MVP development to enterprise-scale platforms, I deliver production-ready solutions that scale with your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
            >
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <FaCheck className="w-3 h-3 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Package</h3>
            <p className="text-lg text-gray-600">Transparent pricing with no hidden fees. All packages include source code and documentation.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  plan.popular 
                    ? 'border-blue-500 scale-105' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
                    <FaClock className="w-4 h-4" />
                    <span>{plan.duration}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
                  }`}
                >
                  {plan.cta}
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-6">How We Work Together</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Discovery", description: "Understanding your vision, requirements, and technical needs" },
              { step: "02", title: "Planning", description: "Architecture design, tech stack selection, and project roadmap" },
              { step: "03", title: "Development", description: "Agile development with regular updates and milestone deliveries" },
              { step: "04", title: "Launch", description: "Deployment, testing, and ongoing support for your success" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-blue-100 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-6">Let's discuss your requirements and create something amazing together.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <FaUsers className="w-5 h-5" />
                Get Free Consultation
              </a>
              <a
                href="mailto:jackmwakano@gmail.com"
                className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaArrowRight className="w-4 h-4" />
                Send Email
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;