export default async function handler(req, res) {
  try {
    const { email, password } = req.body;
    // await signIn("credentials", { email, password });
    // const userInfo = JSON.stringify({ email });
    // res.cookie("loginToken", userInfo, { sameSite: "None", secure: true });
    // console.log(email);
    res.status(200).json({ success: true });
  } catch (error) {
    if (error.type === "CredentialsSignin") {
      res.status(401).json({ error: "Invalid credentials." });
    } else {
      res.status(500).json({ error: "Something went wrong." });
    }
  }
}
