import { useState } from "react"

import { Modal, Button } from "react-bootstrap"

const UsageDelete = ({ use, deleteUse }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const deleteUsage = () => {
    deleteUse()
    setShow(false)
  }

  return (
    <>
      <Button size="sm" variant="outline-danger" onClick={handleShow}>
        Borrar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¿Seguro que quieres borrar el consumo del día {use.Fecha}, hora {parseInt(use.Hora)}?</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Volver
          </Button>
          <Button variant="danger" onClick={deleteUsage}>
            Borrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UsageDelete
