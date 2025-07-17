import { AddMoodEntry } from "@/apis/Mood/Mood";
import { removeItem, saveToMoodEntry } from "@/services/Storage";
import { STORAGE_CONST } from "@/utilities/Constants";
import { NoteSchema } from "@/validations";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { toast } from "sonner-native";

type FormValues = {
  note: string;
};

export function useAddNote() {
  const router = useRouter();
  const { control, handleSubmit } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      note: "",
    },
    resolver: NoteSchema,
  });
  const { mutate: saveMoodEntryToDb, isPending } = AddMoodEntry({
    onSuccess() {
      removeItem(STORAGE_CONST.MOOD_ENTRY);
      toast.success("Mood entered successfully. Have a great day!");
      router.push("/(app)/(tabs)");
    },
    onError() {
      toast.error("Oops! There was an error saving the mood :(");
    },
  });

  const onSubmit = (data: FormValues) => {
    if (data) {
      saveToMoodEntry(data);
      saveMoodEntryToDb();
    }
  };

  return {
    control,
    isPending,
    handleSubmit: handleSubmit(onSubmit),
  };
}
