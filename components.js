// components.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Injetar o Header Global Semântico
    const headerContainer = document.getElementById('global-header');
    if (headerContainer) {
        // Descobre qual página está ativa para colocar a classe "active" no menu
        const currentPath = window.location.pathname.split("/").pop() || "index.html";

        headerContainer.innerHTML = `
            <nav class="navbar navbar-expand-lg bg-white border-bottom shadow-sm py-3" aria-label="Navegação Principal">
                <div class="container">
                    <a class="navbar-brand d-flex align-items-center gap-2" href="index.html">
                        <i class="bi bi-bezier2 text-primary fs-3" aria-hidden="true"></i>
                        <span class="fs-4 fw-bold text-primary">SciELO</span>
                    </a>
                    
                    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#menuPrincipal" aria-controls="menuPrincipal" aria-expanded="false" aria-label="Alternar navegação">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="menuPrincipal">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 fw-medium">
                            <li class="nav-item">
                                <a class="nav-link px-3 ${currentPath === 'index.html' ? 'active text-primary fw-bold' : ''}" href="index.html">Início</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link px-3 ${currentPath === 'busca-avancada.html' ? 'active text-primary fw-bold' : ''}" href="busca-avancada.html">Busca Avançada</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link px-3 ${currentPath === 'resultados.html' ? 'active text-primary fw-bold' : ''}" href="resultados.html">Resultados</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link px-3 ${currentPath === 'artigo.html' ? 'active text-primary fw-bold' : ''}" href="artigo.html">Página do Artigo</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link px-3 ${currentPath === 'biblioteca.html' ? 'active text-primary fw-bold' : ''}" href="biblioteca.html">Minha Biblioteca</a>
                            </li>
                        </ul>
                        
                        <div class="d-flex align-items-center gap-3">
                            <div class="dropdown">
                                <button class="btn btn-light dropdown-toggle rounded-pill fw-medium border" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Seletor de Idioma">
                                    <i class="bi bi-globe" aria-hidden="true"></i> PT
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end shadow border-0">
                                    <li><a class="dropdown-item" href="#" lang="en">Inglês</a></li>
                                    <li><a class="dropdown-item" href="#" lang="es">Espanhol</a></li>
                                </ul>
                            </div>
                            <a href="biblioteca.html" class="btn btn-primary rounded-pill px-4 fw-semibold">Entrar</a>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }

    // 2. Injetar o Rodapé Global Semântico (Footer)
    const footerContainer = document.getElementById('global-footer');
    if (footerContainer) {
        footerContainer.innerHTML = `
            <div class="container">
                <div class="row gy-4 mb-4">
                    <address class="col-lg-4 text-secondary small fst-normal lh-lg mb-0">
                        <h4 class="fs-4 fw-bold text-primary mb-3"><i class="bi bi-bezier2" aria-hidden="true"></i> SciELO</h4>
                        <strong>Scientific Electronic Library Online</strong><br>
                        Rua Dr. Diogo de Faria, 1087 – 9º andar<br>
                        Vila Clementino, São Paulo/SP - Brasil<br>
                        CEP: 04037-003<br>
                        E-mail: <a href="mailto:scielo@scielo.org" class="text-white text-decoration-none">scielo@scielo.org</a>
                    </address>
                    
                    <section class="col-lg-8" aria-labelledby="parceiros-title">
                        <h5 id="parceiros-title" class="fs-6 fw-semibold mb-3 text-uppercase text-secondary">Apoio e Parcerias</h5>
                        <div class="d-flex flex-wrap gap-4 align-items-center">
                            <span class="fs-5 fw-bold text-secondary footer-logo">FAPESP</span>
                            <span class="fs-5 fw-bold text-secondary footer-logo">CAPES</span>
                            <span class="fs-5 fw-bold text-secondary footer-logo">CNPq</span>
                            <span class="fs-5 fw-bold text-secondary footer-logo">BIREME</span>
                        </div>
                    </section>
                </div>
                
                <hr class="border-secondary mb-4">
                
                <div class="d-flex flex-column flex-md-row justify-content-between align-items-center text-secondary small">
                    <p class="mb-2 mb-md-0">&copy; 2026 SciELO. Todos os direitos reservados para fins acadêmicos.</p>
                    <div class="d-flex align-items-center gap-2">
                        <i class="bi bi-unlock text-primary" aria-hidden="true"></i>
                        <a href="#" class="text-secondary text-decoration-none">Leia a Declaração de Acesso Aberto</a>
                    </div>
                </div>
            </div>
        `;
    }
});