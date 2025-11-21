import { SignInWithGoogle } from "firebase/auth";
import { auth, provider } from "../../firebaseConfig";

export const googleSignIn = async () => {
  try {
    const result = await SignInWithGoogle(auth, provider);
    return result.user;
  } catch (error) {
    console.log("Error occured while signin in with google", error);
    throw error;
  }
};
