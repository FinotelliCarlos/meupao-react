import { Header } from "./components/Header";
import { Presentation } from "./components/Presentation";
import { SuccessItems } from "./components/SuccessItems";
import { MoreItems } from "./components/MoreItems";
import { Messages } from "./components/Messages";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";

import "./styles/global.scss";
import "./styles.scss";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Presentation />
        <div className="mainitems">
          <SuccessItems />
          <MoreItems />
          {/* <Modal /> */}         
        </div>
        <Messages />
      </main>
      <Footer />
    </>
  );
}

export default App;
