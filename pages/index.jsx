import { Card } from "../components/card";

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

const notes = [
  {
    id: 1,
    text: "*Restrictions apply. At participating stores. See starbucks.com/terms for details.",
  },
  {
    id: 2,
    text: "**Valid 1/22-2/4, enjoy 20% off your Starbucks order of $15 or more through the DoorDash app, excluding taxes and fees. Maximum discount is up to $5. New customers only. Restrictions and other taxes/fees/gratuity still apply. See DoorDash app for details and location availability. Fees subject to change. Restricted delivery area. Menu limited. Delivery orders may be limited to a maximum subtotal no more than $100, excluding taxes and fees, on any single transaction. We may adjust this limit at any time at our discretion. Product image may vary from delivered product. Available at participating locations only. All deliveries subject to availability. Must have or create a valid DoorDash account with valid form of accepted payment on file. No cash value. Non-transferable. Prices for Starbucks items purchased through DoorDash may be higher than as marked or posted in stores. May not be combined with other offers, discounts or promotions. See DoorDash terms and conditions at help.doordash.com/consumers/s/article/offer-terms-conditions.",
  },
];
export default function HomePage() {
  return (
    <section className="home-page">
      <main className="main-cards">
        {data.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </main>
      <section className="notices">
        {notes.map((note) => (
          <div key={note.id}>{note.text}</div>
        ))}
      </section>
    </section>
  );
}
