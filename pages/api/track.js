export default async function handler(req, res) {
  try {
    const data = req.body;
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
}
