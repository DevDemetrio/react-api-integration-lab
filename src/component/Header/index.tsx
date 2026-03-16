import { Link } from "react-router-dom";

export function Header(){
    return(
        <header>
            <nav>
              <Link to="/">Listar</Link> {" | "}
              <Link to="new">Criar</Link>
            </nav>
        </header>
    )
}