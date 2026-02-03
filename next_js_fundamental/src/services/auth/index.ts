export const LoginUser = async (userData: any) => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/sign-in/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return Error(error);
  }
};
