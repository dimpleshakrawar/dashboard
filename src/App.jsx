import Header from "./components/Header";
import PageRoute from "./routes/index";

function App() {
  return (
    <>
      <Header />
      <div style={{ padding: "1rem" }}>
        <PageRoute />
      </div>
    </>
  );
}

export default App;
