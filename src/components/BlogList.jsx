import PostCard from './PostCard'

const BlogList = ({ posts }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-2xl mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          The <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">Future of Technology</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">What's Coming in the Next Decade</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Exploring the groundbreaking innovations that will transform how we live, work, and interact
          with digital systems. From AI co-pilots to immersive realities, discover what's on the horizon.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default BlogList