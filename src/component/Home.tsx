import {Link} from "react-router-dom"
function Home() {
  return (
    <>
      <p> hello i'm in Home </p>
      <Link to="/new/">New</Link>
    </>

  )
}

export default Home;
