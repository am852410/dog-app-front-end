import Card from "../components/Card.js";

export default function MainPage() {
  return (
    <div>
      <Card
        image={"https://i.imgur.com/NYTS4ud.jpg"}
        title={"Neighborhood Walk"}
        description={"30 minute walk around your neighborhood"}
      />

      <Card
        image={"https://i.imgur.com/W39G84Z.jpg"}
        title={"Neighborhood Walk"}
        description={"An hour long walk around your neighborhood"}
      />

      <Card
        image={"https://i.imgur.com/qHziWZS.jpg"}
        title={"Beach Visits"}
        description={"Beach trips to Ocean Beach Dog Beach!"}
      />

      <Card
        image={"https://i.imgur.com/acfuo1Z.jpg"}
        title={"Mountain Hiking Trips (Full Day)"}
        description={"One day trips to Mount Laguna"}
      />
    </div>
  );
}
