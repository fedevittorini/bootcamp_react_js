

export default function Menu(props) {
  
  return (
    <header className="container sticky-top">
      <div className="row bg-contrast-pr">
        <div className="col-4 col-lg-3 col-xxl-2">
          <a href="#" >
            <img src="logo.svg" alt="Logo" className="img-logo"/>
          </a>
        </div>
        
        <div className="col-8 col-lg-9 col-xxl-10">
          <p className="text-secondary">Una aplicacion de ejemplo para trabajar con bootstrap.</p>
          <p id="usuario" className="text-primary"></p>
        </div>
      </div>
      <div className="row bg-primary bg-gradient">
        <nav className="col navbar navbar-expand-lg">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item dropdown ">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Lenguajes
                  </a>
                  <ul className="dropdown-menu bg-primary">
                    <li><a className="dropdown-item" href="#">Java</a></li>
                    <li><a className="dropdown-item" href="#">Python</a></li>
                    <li><a className="dropdown-item" href="#">JS</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contacto</a>
                </li>
              </ul>
              <div className="container">
                <button className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#loginModal">Ingresar</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
