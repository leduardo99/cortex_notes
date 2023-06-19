import { NuiProvider } from "./shared/providers/NuiProvider";
import Wrapper from "./shared/components/Wrapper";

import Router from "./router";

function App() {
  return (
    <NuiProvider resource="cortex_notes" timeout={3000}>
      <Wrapper>
        <Router />
      </Wrapper>
    </NuiProvider>
  );
}

export default App;
