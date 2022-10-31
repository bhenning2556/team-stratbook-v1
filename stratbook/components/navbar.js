import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-3">
            <div class="container-xl">
                <a class="navbar-brand" href="#">
                <img className={styles.brand} src="https://preview.redd.it/1s0j5e4fhws01.png?auto=webp&s=af1a17c3f935e22d1cbf6aecc983d8626c15b590" class="h-8" alt="..."></img>
                <span className={styles.brandTitle}>Team Lethal Pacifists</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav mx-lg-auto">
                    <a class="nav-item nav-link active" href="#" aria-current="page"><i class="fa-solid fa-house"></i> Home</a>
                    <a class="nav-item dropdown nav-link dropdown-toggle" href="#" id="mapsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa-solid fa-chess-board"></i> Maps</a>
                    <div class="dropdown-menu" aria-labelledby="mapsDropdown">
                        <a className="dropdown-item" href="#">Overpass</a>
                        <a className="dropdown-item" href="#">Mirage</a>
                        <a className="dropdown-item" href="#">Dust 2</a>
                        <a className="dropdown-item" href="#">Nuke</a>
                        <a className="dropdown-item" href="#">Inferno</a>
                        <a className="dropdown-item" href="#">Vertigo</a>
                        <a className="dropdown-item" href="#">Ancient</a>    
                    </div>                    
                    <a class="nav-item nav-link" href="#"><i class="fa-solid fa-bomb"></i> Nade Library</a>
                    <a class="nav-item nav-link" href="#"><i class="fa-regular fa-note-sticky"></i> Practice Notes</a>
                    <a class="nav-item nav-link" href="#"><i class="fa-solid fa-calendar-days"></i> Team Schedule</a>
                </div>
                </div>
            </div>
        </nav>
    )
}