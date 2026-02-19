function scrollR(btn) {
    const container = btn.closest('.lanc');
    container.scrollBy({ left: 400, behavior: 'smooth' });
}

function scrollL(btn) {
    const container = btn.closest('.lanc');
    container.scrollBy({ left: -400, behavior: 'smooth' });
}



const bancoDados = [
    // Filmes
    { nome: "Michael", link: "Cat-Filmes/MJ.html" },
    { nome: "Avatar", link: "Cat-Filmes/Avatar.html" },
    { nome: "He-Man", link: "Cat-Filmes/He-man.html" },
    { nome: "Dinheiro Suspeito", link: "Cat-Filmes/din_sus.html" },
    { nome: "Dupla Perigosa", link: "Cat-Filmes/Dupla_perigosa.html" },
    { nome: "Matrix Resurrections", link: "Cat-Filmes/Matrix_Resurrections.html" },
    { nome: "O Tanque de Guerra", link: "Cat-Filmes/O_Tanque_de_Guerra.html" },
    { nome: "Predador: Terras Selvagens", link: "Cat-Filmes/PTS.html" },
    { nome: "Terror em Silent Hill: Regresso Para o Inferno", link: "Cat-Filmes/Silent_Hill.html" },
    { nome: "Temporada de Sangue", link: "Cat-Filmes/Temporada_Sangue.html" },
    { nome: "Tron Ares", link: "Cat-Filmes/tron_ares.html" },
    { nome: "Truque de Mestre: O 3° Ato", link: "Cat-Filmes/Truque_de_Mestre.html" },
    { nome: "Um Maluco no Golfe 2", link: "Cat-Filmes/um_maluco_no_golfe_2.html" },
    
    // Séries
    { nome: "Fallout", link: "SeriesC/fallout.html" },
    { nome: "Stranger Things", link: "SeriesC/Stranger_things.html" },
    { nome: "The Pitt", link: "SeriesC/the_pitt.html" },
    { nome: "Cavaleiros dos Sete Reinos", link: "SeriesC/cavaleiros_sete_reinos.html" },
    { nome: "Dexter New Blood", link: "SeriesC/Dexter_newBlood.html" },
    { nome: "Dexter Ressurection", link: "SeriesC/dexter_ressurection.html" },
    { nome: "Dexter", link: "SeriesC/Dexter.html" },
    { nome: "Jeffrey Epstein", link: "SeriesC/Epstein.html" },
    { nome: "Espíritos na Escola", link: "SeriesC/espiritos_na_escola.html" },
    { nome: "Memory of a Killer", link: "SeriesC/Memory_of_a_Killer.html" },
    { nome: "Rivalidade Ardente", link: "SeriesC/Rivalidade_ardente.html" },
    { nome: "Robin Hood", link: "SeriesC/robin_hood.html" },
];

function realizarBusca() {
    let input = document.getElementById('campo-pesquisa').value.toLowerCase();
    let container = document.getElementById('resultados-busca');
    container.innerHTML = "";

    if (input.length > 0) {
        bancoDados.forEach(item => {
            if (item.nome.toLowerCase().includes(input)) {
                container.innerHTML += `<a href="${item.link}" class="item-resultado">${item.nome}</a>`;
            }
        });
    }


if (item.nome.toLowerCase().includes(input)) {
    container.innerHTML += `<a href="${item.link}" class="item-resultado">${item.nome}</a>`;
}


}