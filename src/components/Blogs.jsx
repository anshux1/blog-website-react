import { useAppContext } from "../context/AppContext";
import BlogCard from "./BlogCard";

function Blogs() {
  const { posts, loading } = useAppContext()
  
  return <div className="max-w-5xl pt-24 pr-5 mx-auto">
    <div>
    {/* <BlogCard /> */}
    {loading ? (<span className="loading loading-spinner text-primary"></span>) : 
    (posts && posts.map((post) => <BlogCard key={post.id} post={post} /> ))  }
    </div>
  </div>;
}

export default Blogs;
