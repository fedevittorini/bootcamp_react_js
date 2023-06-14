'use client'
import { useEffect, useState } from "react"
import $ from 'jquery'
import bootstrap from "bootstrap/dist/js/bootstrap"

export default function Menu(props) {

  const [usrData, setUsrData] = useState()

  useEffect(() => {
    let modalW = $("#loginModal")
    console.log(modalW);
  }, [])

  const formIsValid = (frm) => {
    console.log(frm[1].name)
    console.log(frm.length)
    return (frm.length > 3 && frm[1].name == "username");
  }

  const handleLogin = (event) => {
    event.preventDefault()
    event.stopPropagation()
    console.log(event)
    let frm = event.target

    if (frm.checkValidity() && formIsValid(frm)) {

      frm.classList.add('was-validated')
      var data = {}
      for (var i = 0; i<frm.length; i++) {
        var field = frm[i]
        if (field.getAttribute("submitable") == "true") {
          data[field.name] = field.value;
        }
      }
      setUsrData(data)
    }
  }

  return (
    <>
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
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/series">Series</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/peliculas">Peliculas</a>
                </li>
              </ul>
              <div className="container">
              {usrData == null ?
                (<button className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#loginModal">Ingresar</button>) 
                :
                  (<>
                    <p>Bienvenido: {usrData.username}</p>
                    <button className="btn btn-outline-success" >Salir</button>
                  </>
                ) 
              }
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="false">
      <div className="modal-dialog">
        <div className="modal-content">
          <form id="login_frm" className="needs-validation" onSubmit={handleLogin} noValidate>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="loginModalLabel">Login</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body ">
                <div className="row">
                  <div className="col">
                    <label htmlFor="username_fld" className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="username_fld" name="username" submitable="true" placeholder="usuario" required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="password_fld" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password_fld" name="pwd" submitable="true" required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary" >Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}