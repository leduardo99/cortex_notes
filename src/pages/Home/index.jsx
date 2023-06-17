import React from "react";

import { Actions } from "./styles";

import Button from "@/shared/components/Button";
import Menu from "@/shared/components/Menu";

function Home() {
  const [items] = React.useState([
    {
      id: 1,
      name: "Nota 1",
      onClick,
    },
    {
      id: 2,
      name: "Nota 2",
      onClick,
    },
  ]);

  function onClick(item) {
    console.log(item);
  }

  return (
    <Menu
      title="Suas notas"
      subtitle="Aqui você pode encontrar todas as suas notas."
      items={items}
    >
      <Actions>
        <Button>Criar nota</Button>

        <Button color="danger">Cancelar</Button>
      </Actions>
    </Menu>
  );
}

export default Home;
