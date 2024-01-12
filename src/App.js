import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "./context/contextApi.js";
import Header from "./components/Header.js";
import SearchResult from "./components/SearchResult.js";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full bg-red-300">
          <Header />
          <Routes>
            <Route path="/" exact element={"feed"} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="/video/:id" element={"video"} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
