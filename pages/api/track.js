import clientPromise from "@/utils/mongo";
import requestIp from "request-ip";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    switch (req.method) {
      case "POST":
        const ip = requestIp.getClientIp(req);
        const bodyObject = {
          ...JSON.parse(req.body),
          ip,
        };
        const newContent = await db.collection("tracks").insertOne(bodyObject);
        res.json({ status: 200, newContent });
        break;
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
}
