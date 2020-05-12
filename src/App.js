import React from "react";
import Pagination from "./Components/Pagination";

function App() {
  return (
    <Pagination
      total={100}
      perPage={10}
      page={1}
      paginate={() => console.log("funcção pra trocar page")}
    />
  );
}

export default App;
