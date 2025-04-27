import React from "react";
import { Link } from "react-router-dom";

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
    comments: 5,
    image: "/images/image_1.jpg",
    excerpt:
      "My transition story from building front-end apps to deploying scalable infrastructure using AWS, Docker, and CI/CD pipelines.",
  },
  {
    slug: "cloud-tools-2025",
    title: "Top 5 Tools Every Cloud Engineer Should Master in 2025",
    date: "March 29, 2025",
    author: "Jackson",
    comments: 3,
    image: "/images/image_2.jpg",
    excerpt:
      "An overview of the essential tools—AWS, Terraform, Kubernetes, GitHub Actions—that boosted my career in cloud and DevOps engineering.",
  },
  {
    slug: "ci-cd-basics",
    title: "Demystifying CI/CD: How I Automated My First Deployment",
    date: "March 14, 2025",
    author: "Jackson",
    comments: 4,
    image: "/images/image_3.jpg",
    excerpt:
      "A beginner-friendly guide to understanding Continuous Integration and Deployment pipelines, with practical examples.",
  },
];

/**
 * Blog Component
 * - Displays a grid of blog posts with a title, excerpt, and link to full post
 */
const Blog = () => {
  return (
    <section id="blog-section" className="bg-gray-50 py-20 px-4 overflow-hidden">
      
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="uppercase text-sm tracking-widest text-lime-600 font-semibold mb-2">Blog</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Insights & Tutorials</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          I regularly share practical tips, project lessons, and cloud engineering tutorials—written for beginners moving into Cloud and DevOps roles.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col"
          >
            {/* Blog Post Image */}
            <div
              className="h-48 sm:h-56 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${post.image})` }}
            ></div>

            {/* Blog Post Content */}
            <div className="p-5 text-left flex flex-col flex-grow">
              {/* Meta Information */}
              <div className="text-xs text-gray-400 mb-2">
                {post.date} • {post.author} • 💬 {post.comments}
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
          </div>
        ))}
      </div>

    </section>
  );
};

export default Blog;