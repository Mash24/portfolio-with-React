export const BLOG_CATEGORIES = [
  { id: 'all', label: 'All Posts' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'devops', label: 'DevOps' },
  { id: 'career', label: 'Career' },
];

const POST_META = {
  'cloud-journey': { category: 'career', readTime: '18 min read', publishDate: '2025-04-12', featured: true },
  'cloud-tools-2025': { category: 'cloud', readTime: '12 min read', publishDate: '2025-03-29', featured: true },
  'ci-cd-basics': { category: 'devops', readTime: '10 min read', publishDate: '2025-03-14', featured: false },
  'ai-infra-trends': { category: 'cloud', readTime: '11 min read', publishDate: '2025-02-20', featured: false },
  'cloud-security-best-practices': { category: 'cloud', readTime: '14 min read', publishDate: '2025-02-10', featured: true },
  'serverless-architecture': { category: 'cloud', readTime: '12 min read', publishDate: '2025-01-25', featured: false },
};

const RAW_BLOG_POSTS = [
  {
    "slug": "cloud-journey",
    "title": "How I Started My Cloud Journey: From Web Dev to Cloud Engineer",
    "date": "April 12, 2025",
    "author": "Jackson",
    "authorImg": "/images/about_1-3.jpg",
    "comments": 5,
    "image": "/images/image_1.jpg",
    "excerpt": "My transition story from building front-end apps to deploying scalable infrastructure using AWS, Docker, and CI/CD pipelines.",
    "tags": [
      "Cloud",
      "Career",
      "DevOps"
    ],
    "featured": true,
    "category": "career",
    "readTime": "18 min read",
    "publishDate": "2025-04-12"
  },
  {
    "slug": "cloud-tools-2025",
    "title": "Top 5 Tools Every Cloud Engineer Should Master in 2025",
    "date": "March 29, 2025",
    "author": "Jackson",
    "authorImg": "/images/about_1-3.jpg",
    "comments": 3,
    "image": "/images/image_2.jpg",
    "excerpt": "An overview of the essential tools—AWS, Terraform, Kubernetes, GitHub Actions—that boosted my career in cloud and DevOps engineering.",
    "tags": [
      "Cloud",
      "Tools",
      "DevOps"
    ],
    "category": "cloud",
    "readTime": "12 min read",
    "publishDate": "2025-03-29",
    "featured": true
  },
  {
    "slug": "ci-cd-basics",
    "title": "Demystifying CI/CD: How I Automated My First Deployment",
    "date": "March 14, 2025",
    "author": "Jackson",
    "authorImg": "/images/about_1-3.jpg",
    "comments": 4,
    "image": "/images/image_3.jpg",
    "excerpt": "A beginner-friendly guide to understanding Continuous Integration and Deployment pipelines, with practical examples.",
    "tags": [
      "CI/CD",
      "DevOps",
      "Tutorial"
    ],
    "category": "devops",
    "readTime": "10 min read",
    "publishDate": "2025-03-14",
    "featured": false
  },
  {
    "slug": "ai-infra-trends",
    "title": "AI in the Cloud: Infrastructure Trends for 2025 and Beyond",
    "date": "February 20, 2025",
    "author": "Jackson",
    "authorImg": "/images/about_1-3.jpg",
    "comments": 2,
    "image": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    "excerpt": "Exploring how AI and cloud infrastructure are converging, and what engineers need to know to stay ahead.",
    "tags": [
      "AI",
      "Cloud",
      "Trends"
    ],
    "category": "cloud",
    "readTime": "11 min read",
    "publishDate": "2025-02-20",
    "featured": false
  },
  {
    "slug": "cloud-security-best-practices",
    "title": "Cloud Security Best Practices: Protecting Your Infrastructure",
    "date": "February 10, 2025",
    "author": "Jackson",
    "authorImg": "/images/about_1-3.jpg",
    "comments": 3,
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    "excerpt": "Learn the essential security practices to safeguard your cloud infrastructure and data.",
    "tags": [
      "Security",
      "Cloud",
      "Best Practices"
    ],
    "category": "cloud",
    "readTime": "14 min read",
    "publishDate": "2025-02-10",
    "featured": true
  },
  {
    "slug": "serverless-architecture",
    "title": "Serverless Architecture: A Beginner's Guide",
    "date": "January 25, 2025",
    "author": "Jackson",
    "authorImg": "/images/about_1-3.jpg",
    "comments": 4,
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    "excerpt": "An introduction to serverless computing and how it can simplify your cloud deployments.",
    "tags": [
      "Serverless",
      "Cloud",
      "Architecture"
    ],
    "category": "cloud",
    "readTime": "12 min read",
    "publishDate": "2025-01-25",
    "featured": false
  }
];

export const BLOG_POSTS = RAW_BLOG_POSTS.map((post) => ({
  ...post,
  ...(POST_META[post.slug] || {
    category: 'cloud',
    readTime: '8 min read',
    publishDate: '2025-01-01',
    featured: false,
  }),
}));

const CONTENT_LOADERS = {
  'cloud-journey': () => import('./content/cloud-journey.js'),
  'cloud-tools-2025': () => import('./content/cloud-tools-2025.js'),
  'ci-cd-basics': () => import('./content/ci-cd-basics.js'),
  'ai-infra-trends': () => import('./content/ai-infra-trends.js'),
  'cloud-security-best-practices': () => import('./content/cloud-security-best-practices.js'),
  'serverless-architecture': () => import('./content/serverless-architecture.js'),
};

export function getBlogBySlug(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getFeaturedPosts() {
  return BLOG_POSTS.filter((post) => post.featured);
}

export function getRelatedPosts(slug, limit = 3) {
  const current = getBlogBySlug(slug);
  if (!current) return [];
  return BLOG_POSTS.filter(
    (post) => post.slug !== slug && post.category === current.category
  ).slice(0, limit);
}

export async function loadBlogContent(slug) {
  const loader = CONTENT_LOADERS[slug];
  if (!loader) return null;
  const module = await loader();
  return module.default;
}
