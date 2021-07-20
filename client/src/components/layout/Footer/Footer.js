import Mailto from "./Mailto"

const Footer = () => {
    return (
        <footer>
            <Mailto email="jaimeferncast@gmail.com" subject="Wellness - prueba técnica" body="Hola Jaime,">
                Mail me!
            </Mailto>
        </footer>
    )
}

export default Footer