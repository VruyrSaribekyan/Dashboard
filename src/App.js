import Layout from "./pages";
import Sidebar from "./sidebar";
import "./index.css";
import "./App.css";
export default function App() {
  return (
    <>
      <div style={{ display: "flex", backgroundColor: "#E5E5E5", }}>
        <Sidebar />
        <Layout />
      </div>
    </>
  );
}
