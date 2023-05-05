import { RouterProvider } from "react-router-dom";
import { appRouter } from './router/index'

export default function App() {
  return (
    <main>
      <RouterProvider
        router={appRouter}
        fallbackElement={<h1>Loading.......</h1>}
      />
    </main>
  );
}
