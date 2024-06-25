import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreateEvent from "./pages/CreateEvent.jsx"; // Import the new CreateEvent page
import BookTicket from "./pages/BookTicket.jsx"; // Import the new BookTicket page

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/create-event" element={<CreateEvent />} /> {/* Add route for CreateEvent page */}
      <Route path="/book-ticket" element={<BookTicket />} /> {/* Add route for BookTicket page */}
      </Routes>
    </Router>
  );
}

export default App;
