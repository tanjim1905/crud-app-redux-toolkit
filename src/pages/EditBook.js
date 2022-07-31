import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "../redux/slice/booksSlice/booksSlice";

const EditBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = { id, title, author };
    dispatch(updateBook(updatedBook));
    navigate("/show-books", { replace: true });
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Edit Book</h1>
      <div className="table">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="author">Author: </label>
            <input
              type="text"
              id="author"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <button type="submit">Update Book</button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
