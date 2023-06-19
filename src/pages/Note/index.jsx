import { useNavigate } from "react-router-dom";

import Button from "@/shared/components/Button";
import SimpleTextEditor from "@/shared/components/SimpleTextEditor/SimpleTextEditor";

function Note() {
  const navigate = useNavigate();

  function handleCancel() {
    navigate(-1);
  }

  return (
    <>
      <div className="note__modal"></div>

      <div className="note">
        <div className="note__background"></div>

        <div className="note__container">
          <SimpleTextEditor placeholderText="Digite aqui..." />
        </div>

        <div className="note__footer">
          <Button size="large">Criar</Button>
          <Button size="large" color="danger" onClick={handleCancel}>
            Cancelar
          </Button>
        </div>
      </div>
    </>
  );
}

export default Note;
