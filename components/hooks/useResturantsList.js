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
import "../../utils/firebase";

export default function useResturantsList(page, node) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resturants, setResturants] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchRestuarants() {
      // database related works
      const db = getDatabase();
      const resturantsRef = ref(db, node);
      const resturantQuery = query(
        resturantsRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );

      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(resturantQuery);
        setLoading(false);
        // console.log({ res: snapshot.val(), resturants, page });
        if (snapshot.exists()) {
          
          setResturants((prev) => {
            return [...prev, ...Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchRestuarants();
  }, [page, node]);

  return {
    loading,
    error,
    resturants,
    hasMore,
  };
}
