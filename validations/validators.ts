import * as yup from "yup";

export const TEXT = yup.string().trim().required("Please add note.").min(20);
