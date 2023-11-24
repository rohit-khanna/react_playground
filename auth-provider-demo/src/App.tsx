import { QueryClient } from "@tanstack/query-core";
import ActionArea from "./ActionArea";
import "./App.css";
import NavBar from "./Navbar";
import ProtectedComponent1 from "./ProtectedComponent1";
import ProtectedComponent2 from "./ProtectedComponent2";
import { AuthContextProvider } from "./context/AuthContext";
import { QueryClientProvider } from "@tanstack/react-query";

function App() {
  console.log(import.meta.env);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <div className="container">
          <NavBar />
          <div className="content">
            {/* Cards Container */}
            <div className="cards-container">
              <div className="card">
                <ProtectedComponent1 />
              </div>
              <div className="card">
                <ProtectedComponent2 />
              </div>
            </div>
            {/* Action Area */}
            <ActionArea />
          </div>
          <footer>Footer Goes Here</footer>
        </div>{" "}
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
