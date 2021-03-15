import { useState, useEffect } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import { connect } from "react-redux";
import { actionReload } from "../redux/action";

const BlogList = ({ refresh, triggerReload }) => {
  const [blogs, setBlogs] = useState([]);
  const history = useHistory();
  const fetchData = async () => {
    const blogData = await fetch("http://127.0.0.1:3232/blog");
    setBlogs(await blogData.json());
    triggerReload();
  };
  useEffect(() => {
    fetchData();
  }, [refresh]);

  return (
    <>
      <h3>Choose a Blog to Read:</h3>
      <br />
      {!!blogs.length ? (
        <>
          <Route exact path="/">
            <ul data-testid="blogList">
              {blogs.map((blog) => {
                return (
                  <li key={blog.id}>
                    <Link data-testid={blog.id} to={`/blog/${blog.id}`}>
                      <strong>{blog.title}</strong>
                    </Link>
                    <hr />
                  </li>
                );
              })}
            </ul>
          </Route>
          <Route path="/blog/:id">
            <BlogDetails blogs={blogs} data-testid="blogDetails" />
            <button
              data-testid="backButton"
              type="button"
              onClick={() => history.goBack()}
            >
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

const mapStateToProps = (state) => {
  return {
    refresh: state.refresh,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerReload: () => {
      dispatch(actionReload(false));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
