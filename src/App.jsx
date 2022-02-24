import { Header } from "./components/Header";
import { Presentation } from "./components/Presentation";
import { SuccessItems } from "./components/SuccessItems";
import { MoreItems } from "./components/MoreItems";
import { Messages } from "./components/Messages";
import { Footer } from "./components/Footer";

import "./styles/global.css";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Presentation />
        <div className="mainitems">
            <SuccessItems />
            <MoreItems />
        </div>
        <Messages />
      </main>
      <Footer />
    </>
  );
}

export default App;
