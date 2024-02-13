import { PostType, usePosts } from "../hooks/usePosts";
import "./index.css";
import React from "react";
import { takeElements } from "./utils";

const LoadMoreButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className="loadMore">
      <button title="load more" onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

export const LoadMoreSample = () => {
  const { data, isFetching, isLoading, isSuccess } = usePosts();
  const nextBatch = React.useMemo(
    () => takeElements<PostType>(data || [], 5),
    [data]
  );
  const [posts, setPosts] = React.useState<PostType[]>([]);
  const totalNoOfPostsDisplayed = posts.length;
  const totalNoOfPosts = data ? data.length : 0;

  React.useEffect(() => {
    if (isSuccess && data && data.length > 0) {
      const nextPosts = nextBatch.next().value as PostType[];
      setPosts(nextPosts);
    }
  }, [data, isSuccess, nextBatch]);

  const handleLoadMoreClick = () => {
    if (isSuccess && data && data.length > 0) {
      const nextPosts = nextBatch.next().value as PostType[];
      setPosts((posts) => [...posts, ...nextPosts]);
    }
  };

  if (isFetching || isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isSuccess && data && data.length === 0) {
    return <h3>No data Found</h3>;
  }
  return data ? (
    <div className="postList">
      <div>
        Posts Displayed : {totalNoOfPostsDisplayed}/{totalNoOfPosts}
      </div>
      {posts.map((post: PostType) => (
        <Post key={post.id} {...post} />
      ))}
      <LoadMoreButton onClick={handleLoadMoreClick} />
    </div>
  ) : null;
};

const Post: React.FC<PostType> = ({ userId, id, title, body }) => {
  return (
    <div className="post">
      <h4>
        {id} - {title}
      </h4>
      <p>{body}</p>
    </div>
  );
};
