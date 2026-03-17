import React, { useEffect, useState, useMemo } from "react";
import "./UserDetails.css";

function UsersDetails() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const limit = 10;
  const totalPages = 10;

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`,
    )
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [page]);

  const tableRows = useMemo(() => {
    return posts.map((post) => (
      <tr key={post.id}>
        <td>{post.id}</td>
        <td>{post.title}</td>
        <td>{post.body}</td>
      </tr>
    ));
  }, [posts]);

  const pages = [...Array(totalPages).keys()].map((n) => n + 1);

  return (
    <div style={{ marginTop: "-31%" }}>
      <h2>User Details</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>{tableRows}</tbody>
      </table>

      <div className="pagination" style={{ paddingBottom: "38px" }}>
        <button
          className="arrow"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          style={{ color: "black" }}
        >
          ◀
        </button>

        {pages.map((p) => (
          <button
            key={p}
            className={`page-btn ${page === p ? "active" : ""}`}
            onClick={() => setPage(p)}
          >
            {p}
          </button>
        ))}

        <button
          className="arrow"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          style={{ color: "black" }}
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default UsersDetails;
