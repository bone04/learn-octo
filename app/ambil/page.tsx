// https://raw.githubusercontent.com/bone04/learn-octo/main/items.json

export default async function AmbilPage() {
    // const ambilData = fetch();
      const response = await fetch("api/ambil", {
        method: "GET"
        }
      );
      const itemsTodays = await response.json();
      // const todaysTodaysList = itemsTodays["todays"]; // array of nama items todays
      const todaysTodaysList = itemsTodays;
      console.log("items todays : ", todaysTodaysList); // array of object
  
    return (
    <div>
      <h1>Hello Next.js! Ambil Page</h1>
      <p>This is a basic page in Next.js.</p>
    </div>
  );
}
