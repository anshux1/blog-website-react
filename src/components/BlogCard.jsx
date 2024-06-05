import React from "react";

function BlogCard({post}) {
  console.log(post)
  return <div className="max-w-4xl p-4 my-10 border bg-gradient-to-br from-slate-50 to-emerald-100 rounded-xl">
    <div>
      <h1 className="text-xl font-semibold">{post.title}</h1>
      <p>By <span className="italic font-thin ">{post.author}</span> on <span className="border-b border-black border-dashed">{post.category}</span></p>
      <p>posted on {post.date}</p>
    </div>
    <div>
      <p className="line-clamp-3 ">{post.content}</p>
    </div>
    <div>
      <p>Tags:</p>
      <div className="flex gap-2">
        {post && post.tags.map((tag , index)=> <p className="px-2 rounded bg-gradient-to-br from-slate-50 to-teal-100" key={index}>{tag}</p>)}
      </div>
    </div>
  </div>;
}

export default BlogCard;
