import { useState } from "react"

import { Row, Col, Button } from "react-bootstrap"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

function UsageGraph({ uses, initialDate, finalDate }) {

  const data = uses.filter((use) => {
    return Date.parse(use.Fecha) >= Date.parse(`${initialDate.year}-${initialDate.month}-${initialDate.day}`)
      && Date.parse(use.Fecha) <= Date.parse(`${finalDate.year}-${finalDate.month}-${finalDate.day}`)
  }).map((use) => {
    return {
      "Consumo (Wh)": parseFloat(use["Consumo (Wh)"]),
      "Precio (€/kWh)": parseFloat(use["Precio (€/kWh)"]),
      "Coste por hora (€)": parseFloat(use["Coste por hora (€)"]),
      date: use.Fecha + "/" + parseInt(use.Hora) + "h"
    }
  })

  const [dataType, setDataType] = useState("Consumo (Wh)")

  console.log(data)

  return (
    <div style={{ width: '800px', margin: '0 auto' }}>
      <Row style={{ justifyContent: 'space-evenly', margin: '10px' }}>
        <Col xs="auto">
          <Button onClick={() => setDataType("Consumo (Wh)")} variant="outline-secondary">
            Consumo
          </Button>
        </Col>
        <Col xs="auto">
          <Button onClick={() => setDataType("Precio (€/kWh)")} variant="outline-secondary">
            Precio
          </Button>
        </Col>
        <Col xs="auto">
          <Button onClick={() => setDataType("Coste por hora (€)")} variant="outline-secondary">
            Coste por hora
          </Button>
        </Col>
      </Row>
      <LineChart
        layout="vertical"
        width={800}
        height={data.length * 20}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 100,
          bottom: 5,
        }}
      >
        <Line dataKey={dataType} stroke="#8884d8" />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" domain={[0, 'dataMax']} />
        <YAxis dataKey="date" type="category" />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  )
}

export default UsageGraph
