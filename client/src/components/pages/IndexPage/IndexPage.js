import { Link } from 'react-router-dom'

import { Container, Button } from 'react-bootstrap'

const Index = () => {
    return (
        <Container>
            <h6>Para ver listado de consumos por hora haz click aquí
                <span role="img" aria-label="finger" style={{ margin: '0 25px 0 10px' }}>👉</span>
                <Link to="/consumos">
                    <Button>
                        Resultados
                    </Button>
                </Link>
            </h6>
        </Container>
    )
}

export default Index