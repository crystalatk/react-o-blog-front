import { useState } from "react";
import { actionReload } from "../redux/action";
import { connect } from "react-redux";

const AddNewBlog = (props) => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogBody, setBlogBody] = useState("");

  const _handleTitleChange = (e) => {
    setBlogTitle(e.target.value);
  };

  const _handleBodyChange = (e) => {
    setBlogBody(e.target.value);
  };

  const _handleSubmit = async (e) => {
    e.preventDefault();
    const submitResponse = await fetch("http://127.0.0.1:3232/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: blogTitle, body: blogBody }),
    }).then((response) => response);
    console.log("RESPONSE IS:", submitResponse);
    setBlogTitle("");
    setBlogBody("");
    if (submitResponse.status === 200) {
      props.triggerReload();
    }
  };

  return (
    <>
      <h1>Add a New Blog</h1>
      <form onSubmit={_handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="blog_title"
            data-testid="addNewBlogTitle"
            value={blogTitle}
            onChange={_handleTitleChange}
          />
        </label>
        <label>
          Blog Body:
          <textarea
            name="blog_body"
            data-testid="addNewBlogBody"
            value={blogBody}
            onChange={_handleBodyChange}
          />
        </label>
        <button type="submit" data-testid="addNewBlogButton">
          Add New Blog Entry
        </button>
      </form>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerReload: () => {
      dispatch(actionReload(true));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddNewBlog);
