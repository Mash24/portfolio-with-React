import React from "react";
import { useParams } from "react-router-dom";

const blogContent = {
  "cloud-journey": {
    title: "How I Started My Cloud Journey",
    date: "April 12, 2025",
    author: "Jackson",
    content: `
      In this blog, I share how I moved from simple static sites to deploying scalable apps using AWS.
      I explain how I transitioned into cloud engineering, the challenges I faced, and how learning DevOps tools helped me grow.
    `,
  },
  "cloud-tools-2025": {
    title: "Top 5 Tools Every Cloud Engineer Should Master",
    date: "March 29, 2025",
    author: "Jackson",
    content: `
      Here are the tools I believe every cloud engineer should know: AWS, Terraform, Docker, GitHub Actions, and Kubernetes.
      These tools help manage infrastructure, automate tasks, and keep systems reliable.
    `,
  },
  "ci-cd-basics": {
    title: "Demystifying CI/CD",
    date: "March 14, 2025",
    author: "Jackson",
    content: `
      This post explains CI/CD in plain language. I walk through my first automated pipeline and share lessons learned.
      You’ll learn what CI/CD means and how you can implement it with tools like GitHub Actions and Firebase Hosting.
    `,
  },
};

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogContent[slug];

  if (!post) {
    return <div className="p-8 text-center text-gray-600">Post not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <p className="text-sm text-gray-500 mb-2">{post.date} • {post.author}</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
        {post.content}
      </p>
    </div>
  );
};

export default BlogDetail;
