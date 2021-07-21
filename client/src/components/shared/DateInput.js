import { Form } from "react-bootstrap"

function DateInput({ initialDate, finalDate, handleInitialDateChange, handleFinalDateChange }) {
  return (
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
  )
}

export default DateInput