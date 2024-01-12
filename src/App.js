import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "./context/contextApi.js";
import Header from "./components/Header.js";
import SearchResult from "./components/SearchResult.js";
import VideoDetails from "./components/VideoDetails.js";
import Feed from "./components/Feed.js";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
