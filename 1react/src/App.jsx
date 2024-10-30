
import Netflixseries from "./components/Netflixseries"
import "./components/Netflix.css";
import "./index.css"
function App() {
          // const menuItem=[10,20,30,40,50,60]
          // const updatedList=menuItem.map((menuItem)=>{
          //   return <li>{menuItem}</li>
          // })

  return (
        <section className="container">
          <h1 className="card-heading">List of Best Netflix Series</h1>
          <Netflixseries/> 
        </section>   
  )
}

export default App
