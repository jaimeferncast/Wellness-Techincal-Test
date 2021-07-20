import { useEffect, useState } from "react"

import { Table } from "react-bootstrap"

import UsageService from "../../../service/usage.service"

const UsageTable = () => {

  const [uses, setUses] = useState(null)

  useEffect(() => {
    const usageService = new UsageService()

    const fetchUsage = async () => {
      const fetchedUses = await usageService.getUses()
      setUses(fetchedUses.data.message.sort((a, b) => Date.parse(a.Fecha) - Date.parse(b.Fecha) || a.Hora - b.Hora))
    }

    fetchUsage()
  }, [])

  return (
    <>
      {uses &&
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Fecha </th>
              <th>Hora</th>
              <th>Consumo (Wh)</th>
              <th>Precio (€/kWh)</th>
              <th>Coste por hora (€)</th>
            </tr>
          </thead>
          <tbody>
            {uses.map((use) => (
              <tr key={use._id}>
                <td>{use.Fecha}</td>
                <td>{parseInt(use.Hora)}</td>
                <td>{parseInt(use['Consumo (Wh)'])}</td>
                <td>{parseFloat(use['Precio (€/kWh)']).toFixed(9)}</td>
                <td>{parseFloat(use['Coste por hora (€)']).toFixed(12)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      }
    </>
  )
}

export default UsageTable
