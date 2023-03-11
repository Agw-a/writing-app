import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";
import LogOutNav from "../components/common/LogOutNav";
import { useAllPostContext } from "../components/context/FetchPosts";
import Loading from "../components/common/Loading";
import Pagnation from "../components/common/Pagination";

const AllPosts = () => {
  const navigate = useNavigate();
  const { posts, isLoading } = useAllPostContext();

  //pagination
  const [postPerPage, setPostPerPage] = useState([12]);
  const [currentPage, setcurrentPage] = useState([1]);
  //find and iterate
  const [find, setFind] = useState("");
  const lastPostIndex = currentPage * postPerPage;
  const firstpostIndex = lastPostIndex - postPerPage;

 
  // const findPost = useMemo(() => {
  //   return posts.filter((post) =>
  //     post.body.toLowerCase().includes(find.toLowerCase())
  //   );
  // }, [posts, find]);






  const recentFeed = useMemo(() =>
    posts.sort((prev, next) => next.id - prev.id)
  ,[posts])
  console.log(`---->recentfeedt${recentFeed}`)
  console.log(recentFeed.length)
  

  console.log(`------ Sorted${recentFeed}`);

  const currentPost = recentFeed.slice(firstpostIndex, lastPostIndex);

  //   define route access
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/posts");
    }
    if (!authToken) {
      navigate("/signup");
    }
  }, []);

  return (
    <>
      <LogOutNav />
      <section className="main-page">
        <div className="make-a-post">
          <h3 className="into-text">
            Welcome, you can now create and view posts as you wish
          </h3>
          <div>
            <button
              onClick={() => navigate("/posts/new-post")}
              className={"action-buttons"}
            >
              New post
            </button>
          </div>
        </div>
        {/* TODO Make background transparent */}
        <div>
          <Outlet />
        </div>
        <div className={"all-posts"}>
          {isLoading ? (
            currentPost.map((post, index) => {
              return (
                <Link
                  to={`/post/${post.id}`}
                  key={index}
                  className={"post-card"}
                >
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-body">{post.body}</p>
                  <h4>{post.id}</h4>
                  <h6>{post.userId}</h6>
                </Link>
              );
            })
          ) : (
            <Loading />
          )}
        </div>
        {isLoading ? (
          <div className="paginate">
            <Pagnation
              totalPosts={recentFeed.length}
              postsPerPage={postPerPage}
              setCurrentPage={setcurrentPage}
              currentPage={currentPage}
            />
          </div>
        ) : (
          ""
        )}
        Posts go here
      </section>
    </>
  );
};

export default AllPosts;
