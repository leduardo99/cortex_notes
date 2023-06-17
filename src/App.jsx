import { RouterProvider } from "react-router-dom";

import { NuiProvider } from './shared/providers/NuiProvider'

import { router } from "./router";

function App() {
  return (
    <NuiProvider resource="cortex_notes" timeout={3000}>
      {/* <Wrapper> */}
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
        {/* <CortexResponsive /> */}
      {/* </Wrapper> */}
    </NuiProvider>
  )
}

export default App
