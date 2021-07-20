import { useEffect, useState } from "react"

import { Table, Row, Col, Form, Dropdown, Button, Spinner } from "react-bootstrap"

import UsageEditor from "./UsageEditor"
import UsageDelete from "./UsageDelete"

import UsageService from "../../../service/usage.service"

const UsageTable = () => {

  const [uses, setUses] = useState(null)
  const [initialDate, setInitialDate] = useState(null)
  const [finalDate, setFinalDate] = useState(null)

  const usageService = new UsageService()

  useEffect(() => {

    const fetchUsage = async () => {
      const fetchedJson = await usageService.getUses()
      const fetchedUses = fetchedJson.data.message
      setUses(fetchedUses.sort((a, b) => Date.parse(a.Fecha) - Date.parse(b.Fecha) || a.Hora - b.Hora))
      setInitialDate({
        day: fetchedUses[0].Fecha.slice(-2),
        month: fetchedUses[0].Fecha.slice(5, 7),
        year: fetchedUses[0].Fecha.slice(0, 4)
      })
      setFinalDate({
        day: fetchedUses[fetchedUses.length - 1].Fecha.slice(-2),
        month: fetchedUses[fetchedUses.length - 1].Fecha.slice(5, 7),
        year: fetchedUses[fetchedUses.length - 1].Fecha.slice(0, 4)
      })
    }

    fetchUsage()

  }, [])

  const handleInitialDateChange = (e) => {
    const { value, name } = e.target
    setInitialDate({ ...initialDate, [name]: value })
  }

  const handleFinalDateChange = (e) => {
    const { value, name } = e.target
    setFinalDate({ ...finalDate, [name]: value })
  }

  const sortByCostAsc = () => {
    const newUses = [...uses]
    setUses(newUses.sort((a, b) => +a['Coste por hora (€)'] - +b['Coste por hora (€)']))
  }

  const sortByCostDesc = () => {
    const newUses = [...uses]
    setUses(newUses.sort((b, a) => +a['Coste por hora (€)'] - +b['Coste por hora (€)']))
  }

  const sortByDateAsc = () => {
    const newUses = [...uses]
    setUses(newUses.sort((a, b) => Date.parse(a.Fecha) - Date.parse(b.Fecha) || a.Hora - b.Hora))
  }

  const sortByDateDesc = () => {
    const newUses = [...uses]
    setUses(newUses.sort((b, a) => Date.parse(a.Fecha) - Date.parse(b.Fecha) || a.Hora - b.Hora))
  }

  const saveUse = async (use, id, idx) => {
    const editedUse = await usageService.editUse(use, id)
    const newUses = [...uses]
    newUses[idx] = editedUse.data
    setUses(newUses)
  }

  const deleteUse = async (id, idx) => {
    usageService.deleteUse(id)
      .then(() => {
        const newUses = [...uses]
        newUses.splice(idx, 1)
        setUses(newUses)
      })
      .catch((err) => alert("Se ha producido un error borrando el consumo.", err))
  }

  return (
    <>
      {!(uses && initialDate && finalDate)
        ? <Spinner animation="grow" />
        : <>
          <Row>
            <Col xs={8}>
              <Form>
                <Form.Group>
                  <span>Rango de fechas:</span>
                  <Form.Control
                    className="input year"
                    type="text"
                    value={initialDate.year}
                    onChange={handleInitialDateChange}
                    name="year"
                  />
                  <Form.Control
                    className="input"
                    type="text"
                    value={initialDate.month}
                    onChange={handleInitialDateChange}
                    name="month"
                  />
                  <Form.Control
                    className="input day"
                    type="text"
                    value={initialDate.day}
                    onChange={handleInitialDateChange}
                    name="day"
                  />
                  <span>-</span>
                  <Form.Control
                    className="input year"
                    type="text"
                    value={finalDate.year}
                    onChange={handleFinalDateChange}
                    name="year"
                  />
                  <Form.Control
                    className="input"
                    type="text"
                    value={finalDate.month}
                    onChange={handleFinalDateChange}
                    name="month"
                  />
                  <Form.Control
                    className="input day"
                    type="text"
                    value={finalDate.day}
                    onChange={handleFinalDateChange}
                    name="day"
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col xs={4}>
              <Dropdown className="d-inline mx-2" variant="secondary">
                <Dropdown.Toggle variant="info">
                  Ordenar Por
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={sortByCostAsc}>Coste por hora (asc.)</Dropdown.Item>
                  <Dropdown.Item onClick={sortByCostDesc}>Coste por hora (desc..)</Dropdown.Item>
                  <Dropdown.Item onClick={sortByDateAsc}>Fecha (asc.)</Dropdown.Item>
                  <Dropdown.Item onClick={sortByDateDesc}>Fecha (desc..)</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Consumo (Wh)</th>
                <th>Precio (€/kWh)</th>
                <th>Coste por hora (€)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {uses
                .filter((use) => {
                  return Date.parse(use.Fecha) >= Date.parse(`${initialDate.year}-${initialDate.month}-${initialDate.day}`)
                    && Date.parse(use.Fecha) <= Date.parse(`${finalDate.year}-${finalDate.month}-${finalDate.day}`)
                })
                .map((use, idx) => (
                  <tr key={idx}>
                    <td>{use.Fecha}</td>
                    <td>{parseInt(use.Hora)}</td>
                    <td>{parseInt(use['Consumo (Wh)'])}</td>
                    <td>{parseFloat(use['Precio (€/kWh)']).toFixed(9)}</td>
                    <td>{parseFloat(use['Coste por hora (€)']).toFixed(12)}</td>
                    <td>
                      <UsageEditor use={use} saveUse={(use) => saveUse(use, use._id, idx)} />
                      <UsageDelete use={use} deleteUse={() => deleteUse(use._id, idx)} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </>
      }
    </>
  )
}

export default UsageTable
