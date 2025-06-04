import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * Blog posts data
 * - Each post includes a slug, title, date, author, comment count, image, and excerpt
 */
const blogPosts = [
  {
    slug: "cloud-journey",
    title: "How I Started My Cloud Journey: From Web Dev to Cloud Engineer",
    date: "April 12, 2025",
    author: "Jackson",
    authorImg: "/images/about_1-3.jpg",
    comments: 5,
    image: "/images/image_1.jpg",
    excerpt:
      "My transition story from building front-end apps to deploying scalable infrastructure using AWS, Docker, and CI/CD pipelines.",
    tags: ["Cloud", "Career", "DevOps"],
    featured: true
  },
  {
    slug: "cloud-tools-2025",
    title: "Top 5 Tools Every Cloud Engineer Should Master in 2025",
    date: "March 29, 2025",
    author: "Jackson",
    authorImg: "/images/about_1-3.jpg",
    comments: 3,
    image: "/images/image_2.jpg",
    excerpt:
      "An overview of the essential tools—AWS, Terraform, Kubernetes, GitHub Actions—that boosted my career in cloud and DevOps engineering.",
    tags: ["Cloud", "Tools", "DevOps"]
  },
  {
    slug: "ci-cd-basics",
    title: "Demystifying CI/CD: How I Automated My First Deployment",
    date: "March 14, 2025",
    author: "Jackson",
    authorImg: "/images/about_1-3.jpg",
    comments: 4,
    image: "/images/image_3.jpg",
    excerpt:
      "A beginner-friendly guide to understanding Continuous Integration and Deployment pipelines, with practical examples.",
    tags: ["CI/CD", "DevOps", "Tutorial"]
  },
  {
    slug: "ai-infra-trends",
    title: "AI in the Cloud: Infrastructure Trends for 2025 and Beyond",
    date: "February 20, 2025",
    author: "Jackson",
    authorImg: "/images/about_1-3.jpg",
    comments: 2,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Exploring how AI and cloud infrastructure are converging, and what engineers need to know to stay ahead.",
    tags: ["AI", "Cloud", "Trends"]
  },
  {
    slug: "cloud-security-best-practices",
    title: "Cloud Security Best Practices: Protecting Your Infrastructure",
    date: "February 10, 2025",
    author: "Jackson",
    authorImg: "/images/about_1-3.jpg",
    comments: 3,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Learn the essential security practices to safeguard your cloud infrastructure and data.",
    tags: ["Security", "Cloud", "Best Practices"]
  },
  {
    slug: "serverless-architecture",
    title: "Serverless Architecture: A Beginner's Guide",
    date: "January 25, 2025",
    author: "Jackson",
    authorImg: "/images/about_1-3.jpg",
    comments: 4,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "An introduction to serverless computing and how it can simplify your cloud deployments.",
    tags: ["Serverless", "Cloud", "Architecture"]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, duration: 0.7, type: "spring", bounce: 0.3 },
  }),
};

/**
 * Blog Component
 * - Displays a grid of blog posts with a title, excerpt, and link to full post
 */
const Blog = () => {
  return (
    <section id="blog-section" className="bg-gray-50 py-20 px-4 overflow-hidden">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <p className="uppercase text-sm tracking-widest text-lime-600 font-semibold mb-2">Blog</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Insights & Tutorials</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          I regularly share practical tips, project lessons, and cloud engineering tutorials—written for beginners moving into Cloud and DevOps roles.
        </p>
      </motion.div>

      {/* Blog Posts Grid */}
      <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.04, boxShadow: "0 12px 36px 0 rgba(181,187,141,0.18)" }}
            className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col border border-lime-50 cursor-pointer relative ${post.featured ? 'ring-2 ring-lime-400' : ''}`}
          >
            {/* Featured Ribbon */}
            {post.featured && (
              <span className="absolute top-4 left-0 bg-lime-500 text-white text-xs font-bold px-4 py-1 rounded-r-full shadow-lg z-20 animate-pulse">
                Featured
              </span>
            )}
            {/* Blog Post Image */}
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              {/* Tag Badges */}
              <div className="absolute top-3 left-3 flex gap-2 z-10">
                {post.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-lime-100 text-lime-800 text-xs rounded-full font-semibold shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Blog Post Content */}
            <div className="p-7 text-left flex flex-col flex-grow">
              {/* Meta Information */}
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                <img src={post.authorImg} alt={post.author} className="w-6 h-6 rounded-full object-cover border-2 border-lime-100 shadow" />
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.author}</span>
                <span>•</span>
                <span>💬 {post.comments}</span>
              </div>

              {/* Blog Title */}
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-lime-600 leading-snug mb-2">
                {post.title}
              </h3>

              {/* Blog Excerpt */}
              <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>

              {/* Read More Link */}
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center text-sm text-lime-700 font-semibold hover:underline mt-auto"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Blog;