"use server";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const LoginUser = async (userData: FieldValues) => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/sign-in/email", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();

    console.log(result);
    const storedCookies = await cookies();
    if (result.success) {
      storedCookies.set("token", result.data.accessToken);
    }
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
