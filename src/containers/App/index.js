import Header from "../Header";
import Routes from "../../Routes";
import { HeaderProvider } from "../providers/HeaderValues";

function App() {
  return (
    <div>
      <HeaderProvider>
        <Header />
        {Routes()}
      </HeaderProvider>
    </div>
  );
}

export default App;
