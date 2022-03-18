import CategoryItems from "../../components/category/CategoryItems"
import Deneme from "../../components/deneme/Deneme"
import Featured from "../../components/featured/Featured"
import Main from "../../components/main/Main"
import "./styles.scss"

const Home = () => {
  return (
    <div className="home__container" >
      <Featured/>
      {/* <CategoryItems/> */}
       <Main/> 
       {/* <Deneme/> */}
    </div>
  )
}

export default Home