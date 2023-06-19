import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/shared/components/Button";
import Menu from "@/shared/components/Menu";
import Modal from "@/shared/components/Modal";

import { Actions, ModalWrapper } from "./styles";

function Home() {
  const [modalVisiblity, setModalVisibility] = React.useState(false);

  const navigate = useNavigate();

  const [items] = React.useState([
    {
      id: 1,
      name: "Nota 1",
      onClick: onClickNote,
    },
    {
      id: 2,
      name: "Nota 2",
      onClick: onClickNote,
    },
  ]);

  function onClickNote(item) {
    console.log("onClickNote", item);
  }

  function handleChooseNoteName() {
    console.log("handleChooseNoteName");

    navigate("/note");
  }

  return (
    <>
      <Modal isVisible={modalVisiblity} setIsVisible={setModalVisibility}>
        <ModalWrapper>
          <div className="content">
            <span className="content-title">Qual o nome da sua nota?</span>

            <input />

            <Actions>
              <Button size="large" onClick={handleChooseNoteName}>
                Próximo
              </Button>

              <Button
                onClick={() => setModalVisibility(false)}
                size="large"
                color="danger"
              >
                Cancelar
              </Button>
            </Actions>
          </div>
        </ModalWrapper>
      </Modal>

      <Menu
        title="Suas notas"
        subtitle="Aqui você pode encontrar todas as suas notas."
        items={items}
      >
        <Actions>
          <Button size="large" onClick={() => setModalVisibility(true)}>
            Criar nota
          </Button>

          <Button size="large" color="danger">
            Cancelar
          </Button>
        </Actions>
      </Menu>
    </>
  );
}

export default Home;
