import { Link } from "react-router-dom"


export function Notfound() {

    return (
        <div>
          <h1>ERROR 404</h1>
          <h2>Essa página não existe!</h2>
          <br />
          <Link to={"/"}>Voltar para Home</Link>
        </div>
    )
  }