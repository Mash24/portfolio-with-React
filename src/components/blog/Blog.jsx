import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaClock, 
  FaTag, 
  FaArrowRight,
  FaCode,
  FaRocket,
  FaCloud,
  FaCog,
  FaExternalLinkAlt
} from 'react-icons/fa';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: <FaCode /> },
    { id: 'frontend', name: 'Frontend', icon: <FaCode /> },
    { id: 'backend', name: 'Backend', icon: <FaCog /> },
    { id: 'devops', name: 'DevOps', icon: <FaRocket /> },
    { id: 'cloud', name: 'Cloud', icon: <FaCloud /> }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable SaaS Platforms with Next.js and Supabase",
      excerpt: "Learn how to architect multi-tenant SaaS applications that can handle thousands of users with proper authentication, database design, and deployment strategies.",
      content: "In this comprehensive guide, I'll walk you through building a production-ready SaaS platform using Next.js 14, Supabase, and Prisma. We'll cover multi-tenant architecture, role-based access control, and CI/CD automation...",
      category: 'frontend',
      tags: ['Next.js', 'Supabase', 'SaaS', 'TypeScript'],
      readTime: '12 min read',
      publishDate: '2024-01-15',
      image: '/images/blog/saas-platform.jpg',
      featured: true,
      views: 2847,
      likes: 156
    },
    {
      id: 2,
      title: "CI/CD Automation: From Zero to Production with GitHub Actions",
      excerpt: "Complete guide to setting up automated deployment pipelines that reduce errors by 90% and enable zero-downtime deployments for your applications.",
      content: "Automation is the key to reliable software delivery. In this post, I'll show you how to set up a complete CI/CD pipeline using GitHub Actions, Docker, and modern deployment strategies...",
      category: 'devops',
      tags: ['GitHub Actions', 'Docker', 'CI/CD', 'DevOps'],
      readTime: '8 min read',
      publishDate: '2024-01-10',
      image: '/images/blog/cicd-automation.jpg',
      featured: true,
      views: 1923,
      likes: 89
    },
    {
      id: 3,
      title: "TypeScript Best Practices for Large-Scale Applications",
      excerpt: "Advanced TypeScript patterns and practices that will make your code more maintainable, type-safe, and developer-friendly in enterprise applications.",
      content: "TypeScript is more than just JavaScript with types. In this deep dive, I'll share advanced patterns, utility types, and architectural decisions that have helped me build maintainable large-scale applications...",
      category: 'frontend',
      tags: ['TypeScript', 'Best Practices', 'Architecture', 'Enterprise'],
      readTime: '15 min read',
      publishDate: '2024-01-05',
      image: '/images/blog/typescript-patterns.jpg',
      featured: false,
      views: 1456,
      likes: 67
    },
    {
      id: 4,
      title: "Cloud-Native Architecture: Scaling from MVP to Enterprise",
      excerpt: "How to design cloud-native applications that can scale from startup MVP to enterprise-grade platforms serving millions of users.",
      content: "Building applications that can scale is an art and science. In this comprehensive guide, I'll share the architectural patterns, technologies, and strategies I've used to build platforms serving 15,000+ users...",
      category: 'cloud',
      tags: ['Cloud Architecture', 'Scalability', 'AWS', 'Microservices'],
      readTime: '18 min read',
      publishDate: '2024-01-01',
      image: '/images/blog/cloud-architecture.jpg',
      featured: true,
      views: 3214,
      likes: 178
    },
    {
      id: 5,
      title: "AI-Assisted Development: Using Copilot and ChatGPT Responsibly",
      excerpt: "How to leverage AI tools to increase development productivity by 40% while maintaining code quality and best practices.",
      content: "AI tools are revolutionizing how we write code. In this practical guide, I'll show you how to use GitHub Copilot and ChatGPT effectively while maintaining code quality and avoiding common pitfalls...",
      category: 'frontend',
      tags: ['AI', 'Copilot', 'ChatGPT', 'Productivity'],
      readTime: '10 min read',
      publishDate: '2023-12-28',
      image: '/images/blog/ai-development.jpg',
      featured: false,
      views: 2789,
      likes: 134
    },
    {
      id: 6,
      title: "Database Design Patterns for Multi-Tenant SaaS Applications",
      excerpt: "Comprehensive guide to designing databases that can efficiently handle multi-tenancy, data isolation, and performance optimization.",
      content: "Multi-tenant database design is one of the most challenging aspects of SaaS development. In this detailed guide, I'll cover different approaches, trade-offs, and implementation strategies...",
      category: 'backend',
      tags: ['Database Design', 'Multi-tenancy', 'PostgreSQL', 'Prisma'],
      readTime: '14 min read',
      publishDate: '2023-12-20',
      image: '/images/blog/database-design.jpg',
      featured: false,
      views: 1654,
      likes: 92
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden" id="blog">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
            <FaCode className="w-4 h-4" />
            Technical Blog
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Insights & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Tutorials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep dives into full-stack development, cloud architecture, and modern engineering practices. 
            Learn from real-world projects and production experiences.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Articles</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 2).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl opacity-30">
                    {post.category === 'frontend' && <FaCode />}
                    {post.category === 'devops' && <FaRocket />}
                    {post.category === 'cloud' && <FaCloud />}
                    {post.category === 'backend' && <FaCog />}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <FaCalendarAlt className="w-3 h-3" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <FaClock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4 text-sm text-gray-400">
                      <span>{post.views} views</span>
                      <span>{post.likes} likes</span>
                    </div>
                    <a
                      href={`/blog/${post.id}`}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Read More
                      <FaArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-4xl opacity-30">
                  {post.category === 'frontend' && <FaCode />}
                  {post.category === 'devops' && <FaRocket />}
                  {post.category === 'cloud' && <FaCloud />}
                  {post.category === 'backend' && <FaCog />}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <FaClock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white/10 text-gray-400 text-xs rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <FaCalendarAlt className="w-3 h-3" />
                    {new Date(post.publishDate).toLocaleDateString()}
                  </div>
                  <a
                    href={`/blog/${post.id}`}
                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    Read
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Get the latest insights on full-stack development, cloud architecture, and engineering best practices.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Blog;