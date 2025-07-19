import { db } from "@/services/firebaseConfig";
import { getItem } from "@/services/Storage";
import { QUERY_KEYS, STORAGE_CONST } from "@/utilities/Constants";
import {
  getCurrentDateString,
  getCurrentDay,
  getSevenDaysAgoDate,
  getUserDetails,
} from "@/utilities/Utils";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import {
  collection,
  doc,
  getDocs,
  limit,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
  where,
} from "firebase/firestore";
import { IMoodData, IMoodEntry, IQuote } from "./types";

export function AddMoodEntry(options?: UseMutationOptions) {
  const user = getUserDetails();
  const userId = user?.id ?? "";
  return useMutation({
    mutationFn: async () => {
      const currentDay = getCurrentDay();
      const currentDate = getCurrentDateString();
      const data = getItem(STORAGE_CONST.MOOD_ENTRY) ?? {};
      const newData = {
        timestamp: serverTimestamp(),
        dayOfWeek: currentDay,
      };
      const dataToSave = { ...data, ...newData };
      const docRef = doc(db, `users/${userId}/moodEntries/${currentDate}`);
      const response = await setDoc(docRef, dataToSave);
      return response;
    },
    ...options,
  });
}

export function GetSevenDaysMoodEntries(
  options?: UseQueryOptions<IMoodData[], Error>
) {
  return useQuery<IMoodData[], Error>({
    queryKey: [QUERY_KEYS.MOOD_ENTRIES],
    queryFn: async () => {
      try {
        const userId = getUserDetails()?.id;
        const sevenDaysAgo = getSevenDaysAgoDate();
        const moodEntriesQuery = query(
          collection(db, `users/${userId}/moodEntries`),
          where("timestamp", ">=", Timestamp.fromDate(sevenDaysAgo))
        );
        const snapshot = await getDocs(moodEntriesQuery);
        let moodEntries = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as IMoodEntry[];

        const defaultQuote: IQuote = {
          heading: "",
          id: "",
          quote: "",
          reasons: [],
        };
        // Get quote wrt reason and modify the mood entries to attach corresponding quote to each entry
        const moodEntriesWithQuotes = await Promise.all(
          moodEntries.map(async (item) => {
            let quote = defaultQuote;
            if (item.reasons && item.reasons.length > 0) {
              const quotesQuery = query(
                collection(db, "quotes"),
                where("reasons", "array-contains-any", item.reasons),
                limit(1)
              );
              const quotesSnapshot = await getDocs(quotesQuery);
              if (!quotesSnapshot.empty) {
                const doc = quotesSnapshot.docs[0];
                const quoteData = doc.data();
                quote = {
                  id: doc.id,
                  quote: quoteData.quote,
                  heading: quoteData.heading,
                  reasons: quoteData.reasons,
                };
              }
            }
            return { ...item, quote };
          })
        );

        // charts data
        const barChartsData = moodEntriesWithQuotes.map((item) => ({
          mood: item.mood,
          moodScore: item.moodScore,
          sleepScore: item.sleepScore,
          day: item.dayOfWeek,
        }));

        const result = [{ moodEntries: moodEntriesWithQuotes, barChartsData }];
        return result;
      } catch (error) {
        console.log("An error occured in fetching mood entries", error);
        return [];
      }
    },
    ...options,
  });
}
