import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasmore] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videosQuery = query(
        videoRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );
      try {
        setLoading(true);
        setError(false);
        const snapshot = await get(videosQuery);
        if (snapshot.exists()) {
          setVideos((prevVedios) => {
            return [...prevVedios, ...Object.values(snapshot.val())];
          });
        } else {
          setHasmore(false);
        }
      } catch (error) {
        setLoading(false);
        setError(true);
      }
      setLoading(false);
    }
    setTimeout(() => {
      fetchVideos();
    }, 2000);
  }, [page]);
  return {
    loading,
    error,
    videos,
    hasMore,
  };
}
