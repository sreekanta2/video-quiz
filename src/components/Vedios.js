import React, { useState } from "react";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import Vedio from "./Vedio";

import InfiniteScroll from "react-infinite-scroll-component";
const Vedios = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader="Loading..."
          next={() => setPage(page + 6)}
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link to={`quiz/${video.youtubeID}`} key={video.youtubeID}>
                <Vedio
                  title={video.title}
                  noq={video.noq}
                  id={video.youtubeID}
                />
              </Link>
            ) : (
              <Vedio title={video.title} noq={video.noq} id={video.youtubeID} />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && !error && videos.length === 0 && <div>data not found!</div>}
      {!loading && error && <div>There was an error!</div>}
      {loading && <div>loading....</div>}
    </div>
  );
};

export default Vedios;
