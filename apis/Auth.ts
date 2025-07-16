import { auth, db } from "@/services/firebaseConfig";
import { removeItem } from "@/services/Storage";
import { useAuthStore } from "@/stores/Auth";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";

interface SignupPayload {
  username: string;
  email: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

export function Signup(options?: UseMutationOptions<User, any, SignupPayload>) {
  return useMutation({
    mutationFn: async function ({ username, email, password }: SignupPayload) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        await setDoc(doc(collection(db, "users"), user.uid), {
          username,
          email,
          createdAt: new Date().toISOString(),
        });
        await updateProfile(user, { displayName: username });
        await user.reload();
        return user;
      } catch (error) {
        throw error;
      }
    },
    ...options,
  });
}

export function Login(options?: UseMutationOptions<User, any, LoginPayload>) {
  return useMutation({
    mutationFn: async function ({ email, password }: LoginPayload) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        // console.log("User after login", userCredential.user);
        return userCredential.user;
      } catch (error) {
        throw error;
      }
    },
    ...options,
  });
}

export function Logout(options?: UseMutationOptions) {
  return useMutation({
    mutationFn: async function () {
      try {
        await signOut(auth);
        removeItem("user");
        useAuthStore.setState({ isAuthorized: false });
      } catch (error) {
        throw error;
      }
    },
    ...options,
  });
}
