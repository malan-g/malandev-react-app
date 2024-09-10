import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-8 lg:grid-cols-12 gap-x-[8px] px-4 lg:px-0">
        <div className="col-span-8 lg:col-start-3">
          <Hero />
        </div>
      </main>
    </>
  );
}

export default App;
