import { Header } from "./components/Header.jsx"
import { Card } from "./components/Card.jsx"
import cards from "./data.js"

function App() {
    return (
        <>
            <Header />
            <div>
                {cards.map((data, i) => <Card key={i} {...data} />)}
            </div>
        </>
    )
}

export default App
