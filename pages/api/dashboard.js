import clientPromise from "@/utils/mongo";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const collection = await db.collection("content");
    const userCookie = req.cookies.session
      ? JSON.parse(req.cookies.session)
      : null;

    switch (req.method) {
      case "POST":
        if (!userCookie) {
          return res.status(401).json({ success: false });
        }
        if (!userCookie.isAdmin) {
          return res.status(403).json({ success: false });
        }

        const { newCard } = req.body;
        const addedCard = await collection.insertOne(newCard);
        res.status(200).json({
          success: true,
          message: "Added card!:" + addedCard.insertedId,
        });
        break;
      case "PUT":
        if (!userCookie) {
          return res.status(401).json({ success: false });
        }
        if (!userCookie.isAdmin) {
          return res.status(403).json({ success: false });
        }

        const { editData } = req.body;
        const promises = Object.entries(editData).map(([cardId, card]) => {
          const filter = { _id: ObjectId(cardId) };
          const updateOperation = {
            $set: {
              title: card.title,
              paragraph: card.paragraph,
              button: card.button,
              imageUrl: card.imageUrl,
              backgroundColor: card.backgroundColor,
              color: card.color,
            },
          };
          return collection.updateOne(filter, updateOperation);
        });

        await Promise.all(promises);
        res.status(200).json({ success: true, message: "Cards are updated" });
        break;
      case "GET":
        const data = await await db.collection("content").find({}).toArray();
        res.json({ status: 200, data });
        break;
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
