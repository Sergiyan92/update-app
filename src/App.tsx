import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import ProfilePage from "./pages/ProfilePage";
import FriendsPage from "./pages/FriendsPage";
import StatisticsPage from "./pages/StatisticsPage";
import TransactionPage from "./pages/TransactionPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/transaction" element={<TransactionPage />} />
      </Routes>
    </>
  );
}

export default App;
