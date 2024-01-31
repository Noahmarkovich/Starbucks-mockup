const data = [
  {
    id: "c1",
    title: "Introducing Oleato™",
    paragraph:
      "A luxuriously smooth coffee experience perfectly balanced with Partanna® extra virgin olive oil.",
    button: "Order now",
    imageUrl:
      "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88469.jpg",
    backgroundColor: "#cfd84d",
    color: "#1e3932",
  },
  {
    id: "c2",
    title: "Savory and satisfying",
    paragraph:
      "Grab a subtly sweet Chicken, Maple Butter & Egg Sandwich on the way.",
    button: "Order now",
    imageUrl:
      "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88294.jpg",
    backgroundColor: "#a5c4dc",
    color: "#1e3932",
  },
  {
    id: "c3",
    title: "Get rewarded for your routine",
    paragraph:
      "Savor each sip a little more with Rewards in the Starbucks app. Join now and the more you visit, the more free favorites you can earn.*",
    button: "Join for free",
    imageUrl:
      "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88486.jpg",
    backgroundColor: "#006241",
    color: "#ffffff",
  },
  {
    id: "c4",
    title: "Our latest collection",
    paragraph:
      "Savor each sip a Damon Brown celebrates Black culture and his take on community using surprising color palettes, angles, and shapes in this artist series. more with Rewards in the Starbucks app. Join now and the more you visit, the more free favorites you can earn.*",
    button: "Meet Damon",
    imageUrl:
      "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88488.jpg",
    backgroundColor: "#cfd84d",
    color: "#1e3932",
  },
  {
    id: "c5",
    title: "Your go-to brought to you",
    paragraph:
      "Enjoy 20% off Starbucks orders of $15+ on DoorDash. Offer valid 1/22-2/4. New customers only. Max discount up to $5. Terms apply.**",
    button: "Order now",
    imageUrl:
      "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88373.jpg",
    backgroundColor: "#1e3932",
    color: "#ffffff",
  },
  {
    id: "c6",
    title: "“This is our community. We’re in it together.”",
    paragraph:
      "- Olivia, Starbucks Partner (Employee) Our partners uplift each other and their communities every day.",
    button: "Order now",
    imageUrl:
      "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88333.jpg",
    backgroundColor: "#006241",
    color: "#ffffff",
  },
];

export default async function handler(req, res) {
  try {
    // const res = data;
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
}
