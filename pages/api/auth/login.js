import clientPromise from "../../../utils/mongo";
import { compare } from "bcryptjs";
import { serialize } from "cookie";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { email, password } = req.body;

    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection("users");

    const user = await collection.findOne({ email });
    if (!user || !(await compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const userToCookie = { email: user.email, isAdmin: user.isAdmin };
    const cookie = serialize("session", JSON.stringify(userToCookie), {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    res.setHeader("Set-Cookie", cookie);

    return res.status(200).json({ email: user.email });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
