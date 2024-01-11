import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "./context/contextApi.js";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Routes>
            <Route path="/" exact element={"feed"} />
            <Route path="/searchResult/:searchQuery" element={"search"} />
            <Route path="/video/:id" element={"video"} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
