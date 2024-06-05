import { useAppContext } from "../context/AppContext";
import BlogCard from "./BlogCard";

function Blogs() {
  const { posts, loading } = useAppContext()
  
  return <div className="max-w-5xl pt-24 pr-5 mx-auto">
    <div>
    {/* <BlogCard /> */}
    
    {loading ? (<div className="flex items-center justify-center h-screen">
      <span className="w-24 loading loading-spinner text-primary"></span>
      </div>):
    (posts && posts.map((post) => <BlogCard key={post.id} post={post} /> ))  }
    </div>
  </div>;
}

export default Blogs;
