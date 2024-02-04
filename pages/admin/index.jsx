import { DataEditForm } from "@/components/data-edit-form";
import { LoadingSpinner } from "@/components/loading-spinner";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function createBlankCard() {
  return {
    title: "",
    paragraph: "",
    button: "",
    backgroundColor: "#000000",
    color: "#ffffff",
    imageUrl: "",
  };
}

export default function AdminPage() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [editData, setEditData] = useState({});
  const [isNewCard, setIsNewCard] = useState(false);
  const [newCard, setNewCard] = useState(createBlankCard());

  useEffect(() => {
    loadContent();
  }, []);

  async function loadContent() {
    try {
      const response = await fetch("/api/dashboard", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  function handleEditChange(ev, cardId) {
    const { value, name: field } = ev.target;
    const currentCard =
      editData[cardId] ?? data.find((card) => card._id === cardId);

    setEditData({
      ...editData,
      [cardId]: {
        ...currentCard,
        [field]: value,
      },
    });
  }

  function handelAddChange(ev) {
    const { value, name: field } = ev.target;
    setNewCard((prevBoard) => ({ ...prevBoard, [field]: value }));
  }

  async function onEditCards(ev) {
    ev.preventDefault();
    if (!editData) return;
    try {
      const response = await fetch("/api/dashboard", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          editData,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data.message);
      router.push("/");
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  async function onAddCards(ev) {
    ev.preventDefault();
    try {
      const response = await fetch("/api/dashboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          newCard,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data.message);
      setIsNewCard(false);
      setNewCard(createBlankCard());
      router.push("/");
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  if (!data) return <LoadingSpinner />;
  return (
    <section className="admin-page">
      <h1>Content editor</h1>
      <form onSubmit={onEditCards}>
        {data.map((card) => {
          return (
            <DataEditForm
              key={card._id}
              cardValue={editData[card._id] ?? card}
              changeInput={(ev) => handleEditChange(ev, card._id)}
            />
          );
        })}
        <button type="submit">Save</button>
      </form>
      {!isNewCard && (
        <button onClick={() => setIsNewCard(true)}>Add new card</button>
      )}
      {isNewCard && (
        <form onSubmit={onAddCards}>
          <DataEditForm cardValue={newCard} changeInput={handelAddChange} />
          <button>Save</button>
        </form>
      )}
    </section>
  );
}
