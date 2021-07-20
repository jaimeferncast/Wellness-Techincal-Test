import { useState } from "react"

import { Modal, Button, Form } from "react-bootstrap"

const UsageEditor = ({ use, saveUse }) => {
  const [show, setShow] = useState(false)
  const [usage, setUsage] = useState(use)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleInputChange = (e) => {
    const { value, name } = e.target
    setUsage({ ...usage, [name]: value })
  }

  const saveUsage = () => {
    saveUse(usage)
    setShow(false)
  }

  return (
    <>
      <Button size="sm" variant="outline-secondary" onClick={handleShow}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Consumo del día {use.Fecha}, hora {parseInt(use.Hora)}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Consumo (Wh)</Form.Label>
              <Form.Control
                type="text"
                value={usage['Consumo (Wh)']}
                onChange={handleInputChange}
                name="Consumo (Wh)"
              />
              <Form.Label>Precio (€/kWh)</Form.Label>
              <Form.Control
                type="text"
                value={usage['Precio (€/kWh)']}
                onChange={handleInputChange}
                name="Precio (€/kWh)"
              />
              <Form.Label>Coste por hora (€)</Form.Label>
              <Form.Control
                type="text"
                value={usage['Coste por hora (€)']}
                onChange={handleInputChange}
                name="Coste por hora (€)"
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={saveUsage}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UsageEditor
