import { createContext } from "react";
import { MainPage } from "./components/MainPage";

export const UserNameVlue = createContext();
export default function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="blogs" element={<Blogs />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <UserNameVlue.Provider value={{ name: "Mohammad", LastName: "Namvar" }}>
      <MainPage />
    </UserNameVlue.Provider>
  );
}
