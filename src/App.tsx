import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ListObject } from "./page/objects/list";
import { NewObject } from "./page/objects/new";
import { MainLayout } from "./layouts/MainLayout.tsx";

function App() {
  return (
    <>
      {/* <ListObject /> */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<ListObject />} />
          <Route path="/new" element={<NewObject />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
