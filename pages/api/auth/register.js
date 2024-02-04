import { serialize } from "cookie";
import clientPromise from "../../../utils/mongo";
import { hash } from "bcryptjs";
import { getRandomColor } from "@/utils/utils-functions";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    const collection = db.collection("users");

    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "User with this email already exists" });
    }

    const hashedPassword = await hash(password, 10);

    const userToSave = {
      email,
      password: hashedPassword,
      isAdmin: false,
      avatarColor: getRandomColor(),
    };
    const newUser = await collection.insertOne(userToSave);

    const userToCookie = {
      email: userToSave.email,
      isAdmin: userToSave.isAdmin,
      avatarColor: userToSave.avatarColor,
    };

    const cookie = serialize("session", JSON.stringify(userToCookie), {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    res.setHeader("Set-Cookie", cookie);

    res.status(201).json({ id: newUser.insertedId });
  } catch (error) {
    console.error("Error during registration:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
