import { useEffect, useState } from "react";
import { Card } from "../components/card";

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
  const [data, setData] = useState(null);

  useEffect(() => {
    loadContent();
  }, []);

  async function onButtonClick(ev, card) {
    const data = {
      buttonText: card.button,
      bannerTitle: card.title,
      bannerContent: card.paragraph,
      bannerPosition: ev.target.getBoundingClientRect(),
      screenSize: {
        height: ev.view.screen.height,
        width: ev.view.screen.width,
      },
    };
    const response = await fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log(data);
    }
  }

  async function loadContent() {
    try {
      const response = await fetch("/api/dashboard");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  if (!data) return <div>loading..</div>;
  return (
    <section className="home-page">
      <main className="main-cards">
        {data.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              onButtonClick={(ev) => onButtonClick(ev, card)}
            />
          );
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
