import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type FormValues = {
  note: string;
};

const TEXT = yup.string().trim().required("Please add note.").min(20);

const Schema = yupResolver(
  yup.object({
    note: TEXT,
  })
);

export function useAddNote() {
  const { control, handleSubmit } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      note: "",
    },
    resolver: Schema,
  });

  const onSubmit = (data: FormValues) => {
    console.log("Note data", data);
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
  };
}
