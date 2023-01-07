import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { GiftsPage } from "./pages/GiftsPage";
import { GiftPage } from "./pages/GiftPage";
import { GodParentsPage } from "./pages/GodParentsPage";
import { Page404 } from "./pages/Page404";
import { CerimonyPage } from "./pages/CerimonyPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/gifts" element={<GiftsPage />}/>
      <Route path="/gifts/:giftId" element={<GiftPage />}/>
      <Route path="/godparents" element={<GodParentsPage />}/>
      <Route path="/cerimony" element={<CerimonyPage />}/>
      <Route path="*" element={<Page404 />}/>
    </Routes>
  )
}