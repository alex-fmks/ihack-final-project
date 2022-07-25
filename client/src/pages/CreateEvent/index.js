import { useState } from "react";

function createEvent() {
  /*   const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [date, setDate] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState(0);
  const [postcode, setPostcode] = useState(0); */

  return (
    <div>
      <form style={{ width: "30%", padding: "2rem" }}>
        <h1>Create event</h1>
        <input type="text" placeholder="Event title" /* value={title} */ />
        <input type="text" placeholder="Client" /* value={client} */ />
        <input type="text" placeholder="Event date" /* value={date} */ />
        <input type="text" placeholder="street" /* value={street} */ />
        <input
          type="number"
          placeholder="House number" /* value={houseNumber} */
        />
        <input type="text" placeholder="Post code" /* value={postcode} */ />
      </form>
    </div>
  );
}

export default createEvent;
