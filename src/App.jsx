import {
  BackgroundHeading,
  Footer,
  Header,
  ItemsList,
  Sidebar,
} from "./components";
import ItemsContextProvider from "./contexts/ItemsContextProvider";
import "./index.css";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <ItemsContextProvider>
          <Header />
          <ItemsList />
          <Sidebar />
        </ItemsContextProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
