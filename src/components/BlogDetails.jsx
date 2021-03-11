import { useParams } from "react-router-dom";

const BlogDetails = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.find((blog) => {
    return blog.id == id ? blog : null;
  });
  return (
    <>
      <h1>{blog.title}</h1>
      <h5>{blog.date}</h5>
      <p className="blog-body">{blog.body}</p>
    </>
  );
};

export default BlogDetails;
