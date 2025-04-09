import React from "react";

const blogPosts = [
  {
    title: "From HTML to React: My Web Dev Journey",
    date: "April 02, 2025",
    author: "Jackson",
    comments: 3,
    image: "/images/image_1.jpg",
    excerpt:
      "A personal look into how I moved from static websites to building full React apps with Firebase and real-time features.",
  },
  {
    title: "Using Firebase Auth with React (The Easy Way)",
    date: "March 21, 2025",
    author: "Jackson",
    comments: 2,
    image: "/images/image_2.jpg",
    excerpt:
      "Learn how I implemented Firebase authentication, role-based access, and redirects in a job-matching app.",
  },
  {
    title: "Why Every Beginner Should Learn Git & GitHub",
    date: "February 18, 2025",
    author: "Jackson",
    comments: 4,
    image: "/images/image_3.jpg",
    excerpt:
      "Git changed how I work. Here's how version control has saved me time, protected my code, and helped me grow as a developer.",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="uppercase text-sm tracking-widest text-lime-600 font-semibold mb-2">Blog</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Insights & Tutorials</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I occasionally share thoughts, tips, and lessons from my development journey—especially things I wish I had learned earlier.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300"
          >
            <div
              className="h-56 bg-cover bg-center rounded-t-lg"
              style={{ backgroundImage: `url(${post.image})` }}
            ></div>
            <div className="p-6 text-left">
              <div className="text-sm text-gray-500 mb-2">
                <span className="mr-2">{post.date}</span>
                <span className="mr-2">| {post.author}</span>
                <span className="mr-2">| 💬 {post.comments}</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 hover:text-lime-600 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;