import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "contexts/Favoritos";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import NaoEncontrada from "pages/NaoEncontrada";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/videos/:id" element={<Player />} />
            <Route path="*" element={<NaoEncontrada />} />
          </Routes>
        </FavoritosProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
};

export default AppRoutes;
