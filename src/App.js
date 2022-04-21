import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Container from "./components/ItemListContainer"

const App = () => {
    return (
        <>
            <Header/>
            <Main greetings={Container.greetings}/>
            <Footer/>
        </>
    )
}

export default App