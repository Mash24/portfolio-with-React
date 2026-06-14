import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, Loader2 } from 'lucide-react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import ProfileAvatar from '../ui/ProfileAvatar';
import { getBlogBySlug, getRelatedPosts, loadBlogContent } from '../../data/blog';

const formatDate = (isoDate) =>
  new Date(isoDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

const BlogDetail = () => {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);
  const related = slug ? getRelatedPosts(slug) : [];
  const [content, setContent] = useState(null);
  const [loadingContent, setLoadingContent] = useState(true);

  useEffect(() => {
    if (!slug || !post) {
      setLoadingContent(false);
      return;
    }

    let cancelled = false;
    setLoadingContent(true);
    setContent(null);

    loadBlogContent(slug)
      .then((html) => {
        if (!cancelled) setContent(html);
      })
      .finally(() => {
        if (!cancelled) setLoadingContent(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug, post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Article not found
          </h1>
          <Link
            to="/#blog-section"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Back to blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      <article className="pt-24 pb-16 lg:pt-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link
            to="/#blog-section"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold capitalize text-blue-700 dark:text-blue-400">
                {post.category}
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              {post.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <ProfileAvatar
                  src={post.authorImg}
                  alt={post.author}
                  className="h-9 w-9 rounded-full object-cover"
                  initials="JM"
                />
                <span className="font-medium text-gray-700 dark:text-gray-300">{post.author}</span>
              </div>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(post.publishDate)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {post.excerpt}
            </p>

            {loadingContent ? (
              <div className="mt-10 flex items-center justify-center py-16 text-gray-500 dark:text-gray-400">
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Loading article…
              </div>
            ) : content ? (
              <div
                className="blog-content mt-10 prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-md prose-blockquote:border-l-blue-500"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ) : null}
          </motion.div>

          {related.length > 0 && (
            <section className="mt-16 border-t border-gray-200 pt-10 dark:border-gray-800">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                Related articles
              </h2>
              <ul className="space-y-4">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      to={`/blog/${item.slug}`}
                      className="group flex items-start justify-between gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-blue-300 dark:border-gray-800 dark:hover:border-blue-500/40"
                    >
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                          {item.excerpt}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-gray-400 transition group-hover:translate-x-0.5 group-hover:text-blue-500" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogDetail;
