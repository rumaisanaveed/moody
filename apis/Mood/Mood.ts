import { db } from "@/services/firebaseConfig";
import { getItem } from "@/services/Storage";
import { QUERY_KEYS, STORAGE_CONST } from "@/utilities/Constants";
import {
  getCurrentDateString,
  getCurrentDay,
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
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { MoodEntry } from "./types";

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
  options?: UseQueryOptions<MoodEntry[], Error>
) {
  return useQuery<MoodEntry[], Error>({
    queryKey: [QUERY_KEYS.MOOD_ENTRIES],
    queryFn: async () => {
      try {
        const userId = getUserDetails()?.id;
        const docRef = collection(db, `users/${userId}/moodEntries`);
        const snapshot = await getDocs(docRef);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        return data as MoodEntry[];
      } catch (error) {
        console.log("An error occured in fetching mood entries", error);
        // to not get undefined
        return [];
      }
    },
    ...options,
  });
}
