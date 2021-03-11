import { useState, useEffect } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import BlogDetails from "./BlogDetails";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const history = useHistory();
  useEffect(() => {
    (async () => {
      const blogData = await fetch(
        "http://127.0.0.1:3232/blog"
      ).then((response) => response.json());
      setBlogs(blogData);
    })();
  }, []);
  console.log("This the BLOGS:", blogs);

  return (
    <>
      <h3>Choose a Blog to Read:</h3>
      <br />
      {!!blogs.length ? (
        <>
          <Route exact path="/">
            <ul>
              {blogs.map((blog) => {
                return (
                  <>
                    <li key={blog.id}>
                      <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                    </li>
                    <hr />
                  </>
                );
              })}
            </ul>
          </Route>
          <Route path="/blog/:id">
            <BlogDetails blogs={blogs} />
            <button type="button" onClick={() => history.goBack()}>
              GO BACK
            </button>
          </Route>
        </>
      ) : (
        <p>Loading Blogs...</p>
      )}
    </>
  );
};

export default BlogList;
