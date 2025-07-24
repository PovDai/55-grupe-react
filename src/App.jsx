import { Calc } from "./components/Calc";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Title } from "./components/Title";
import { AdminPage } from "./components/AdminPage";
import { NotAdminPage } from "./components/NotAdminPage";
import Square from "./components/Square"


export function App() {
  


  return (
    <>
      
      <AdminPage> </AdminPage>
      <AdminPage> </AdminPage>
      <Header />
      <Main>
        <Title text="Labas rytas, Lietuva cia title text" desc="" />

        <Calc a={7} b={5} />
        <Calc a={77} b={55} />
        <Calc a={10} b={2} />
        
        <Title text="Apie mus" desc="Trumpas tinklapio pristatymas" />
        <Title text="Kontaktai" desc="Cia kontaktu description"/>
        <div>kazkas cia slepiasi </div>
      </Main>
      <NotAdminPage />
      
      <Footer />
      <Square/>
      
    </>
  )
}

