import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const db = getDatabase();
      const questionsRef = ref(db, "quiz/" + videoID + "/questions");
      const questionsQuery = query(questionsRef, orderByKey());
      try {
        setLoading(true);
        setError(false);
        const snapshot = await get(questionsQuery);
        if (snapshot.exists()) {
          setQuestions((prevVedios) => {
            return [...prevVedios, ...Object.values(snapshot.val())];
          });
        } else {
          //
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
  }, [videoID]);
  return {
    loading,
    error,
    questions,
  };
}
