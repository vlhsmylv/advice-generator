import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <main className="bg-dark-blue flex justify-center items-center min-h-screen">
    <section className="lg:my-0 mt-8 my-14">
      <App />
    </section>
    <ToastContainer />
  </main>
);
