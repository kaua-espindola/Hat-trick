document.addEventListener('DOMContentLoaded', () => {

    // 1. DADOS CENTRALIZADOS DE TODOS OS ELENCOS
    // Todos os jogadores das suas páginas de equipes foram adicionados aqui.
    // Substitua o objeto 'elencosPorTime' antigo por este completo
const elencosPorTime = {
    'athletico-pr': {
        nome: 'Athletico-PR',
        jogadores: [
            { id: 101, nome: "Bento", posicao: "GOL" }, { id: 102, nome: "Léo Linck", posicao: "GOL" }, { id: 103, nome: "Mycael", posicao: "GOL" },
            { id: 104, nome: "Madson", posicao: "DEF" }, { id: 105, nome: "Lucas Esquivel", posicao: "DEF" }, { id: 106, nome: "Fernando", posicao: "DEF" }, { id: 107, nome: "Thiago Heleno", posicao: "DEF" }, { id: 108, nome: "Kaique Rocha", posicao: "DEF" }, { id: 109, nome: "Gamarra", posicao: "DEF" },
            { id: 110, nome: "Fernandinho", posicao: "MEI" }, { id: 111, nome: "Erick", posicao: "MEI" }, { id: 112, nome: "Alex Santana", posicao: "MEI" }, { id: 113, nome: "Bruno Zapelli", posicao: "MEI" }, { id: 114, nome: "Nikão", posicao: "MEI" },
            { id: 115, nome: "Pablo", posicao: "ATA" }, { id: 116, nome: "Agustín Canobbio", posicao: "ATA" }, { id: 117, nome: "Tomás Cuello", posicao: "ATA" }, { id: 118, nome: "Gonzalo Mastriani", posicao: "ATA" }, { id: 119, nome: "Julimar", posicao: "ATA" }
        ]
    },
    'atletico-go': {
        nome: 'Atlético-GO',
        jogadores: [
            { id: 201, nome: "Ronaldo", posicao: "GOL" }, { id: 202, nome: "Pedro Rangel", posicao: "GOL" },
            { id: 203, nome: "Maguinho", posicao: "DEF" }, { id: 204, nome: "Bruno Tubarão", posicao: "DEF" }, { id: 205, nome: "Guilherme Romão", posicao: "DEF" }, { id: 206, nome: "Alix Vinicius", posicao: "DEF" }, { id: 207, nome: "Adriano Martins", posicao: "DEF" }, { id: 208, nome: "Luiz Felipe", posicao: "DEF" },
            { id: 209, nome: "Rhaldney", posicao: "MEI" }, { id: 210, nome: "Baralhas", posicao: "MEI" }, { id: 211, nome: "Roni", posicao: "MEI" }, { id: 212, nome: "Shaylon", posicao: "MEI" }, { id: 213, nome: "Danielzinho", posicao: "MEI" },
            { id: 214, nome: "Luiz Fernando", posicao: "ATA" }, { id: 215, nome: "Vagner Love", posicao: "ATA" }, { id: 216, nome: "Emiliano Rodríguez", posicao: "ATA" }, { id: 217, nome: "Yony González", posicao: "ATA" }, { id: 218, nome: "Alejo Cruz", posicao: "ATA" }
        ]
    },
    'atletico-mg': {
        nome: 'Atlético-MG',
        jogadores: [
            { id: 1, nome: "Everson", posicao: "GOL" }, { id: 2, nome: "Matheus Mendes", posicao: "GOL" },
            { id: 3, nome: "Guilherme Arana", posicao: "DEF" }, { id: 4, nome: "Jemerson", posicao: "DEF" }, { id: 5, nome: "Bruno Fuchs", posicao: "DEF" }, { id: 6, nome: "Mauricio Lemos", posicao: "DEF" }, { id: 7, nome: "Renzo Saravia", posicao: "DEF" }, { id: 8, nome: "Igor Rabello", posicao: "DEF" }, { id: 9, nome: "Rubens", posicao: "DEF" },
            { id: 10, nome: "Otávio", posicao: "MEI" }, { id: 11, nome: "Rodrigo Battaglia", posicao: "MEI" }, { id: 12, nome: "Matías Zaracho", posicao: "MEI" }, { id: 13, nome: "Gustavo Scarpa", posicao: "MEI" }, { id: 14, nome: "Alan Franco", posicao: "MEI" }, { id: 15, nome: "Igor Gomes", posicao: "MEI" },
            { id: 16, nome: "Hulk", posicao: "ATA" }, { id: 17, nome: "Paulinho", posicao: "ATA" }, { id: 18, nome: "Eduardo Vargas", posicao: "ATA" }, { id: 19, nome: "Cristian Pavón", posicao: "ATA" }, { id: 20, nome: "Alan Kardec", posicao: "ATA" }, { id: 21, nome: "Isaac", posicao: "ATA" }
        ]
    },
    'bahia': {
        nome: 'Bahia',
        jogadores: [
            { id: 301, nome: "Danilo Fernandes", posicao: "GOL" }, { id: 302, nome: "Ronaldo", posicao: "GOL" }, { id: 303, nome: "João Paulo", posicao: "GOL" },
            { id: 304, nome: "Gilberto", posicao: "DEF" }, { id: 305, nome: "Santiago Arias", posicao: "DEF" }, { id: 306, nome: "Iago Borduchi", posicao: "DEF" }, { id: 307, nome: "Luciano Juba", posicao: "DEF" }, { id: 308, nome: "Kanu", posicao: "DEF" }, { id: 309, nome: "David Duarte", posicao: "DEF" }, { id: 310, nome: "Ramos Mingo", posicao: "DEF" }, { id: 311, nome: "Gabriel Xavier", posicao: "DEF" },
            { id: 312, nome: "Cauly", posicao: "MEI" }, { id: 313, nome: "Everton Ribeiro", posicao: "MEI" }, { id: 314, nome: "Jean Lucas", posicao: "MEI" }, { id: 315, nome: "Caio Alexandre", posicao: "MEI" }, { id: 316, nome: "Rodrigo Nestor", posicao: "MEI" }, { id: 317, nome: "Nicolás Acevedo", posicao: "MEI" },
            { id: 318, nome: "Ademir", posicao: "ATA" }, { id: 319, nome: "Erick Pulga", posicao: "ATA" }, { id: 320, nome: "Willian José", posicao: "ATA" }, { id: 321, nome: "Kayky", posicao: "ATA" }, { id: 322, nome: "Sanabria", posicao: "ATA" }
        ]
    },
    'botafogo': {
        nome: 'Botafogo',
        jogadores: [
            { id: 601, nome: "John", posicao: "GOL" }, { id: 602, nome: "Gatito Fernández", posicao: "GOL" },
            { id: 603, nome: "Damián Suárez", posicao: "DEF" }, { id: 604, nome: "Cuiabano", posicao: "DEF" }, { id: 605, nome: "Marçal", posicao: "DEF" }, { id: 606, nome: "Alexander Barboza", posicao: "DEF" }, { id: 607, nome: "Bastos", posicao: "DEF" }, { id: 608, nome: "Lucas Halter", posicao: "DEF" },
            { id: 609, nome: "Marlon Freitas", posicao: "MEI" }, { id: 610, nome: "Danilo Barbosa", posicao: "MEI" }, { id: 611, nome: "Tchê Tchê", posicao: "MEI" }, { id: 612, nome: "Eduardo", posicao: "MEI" }, { id: 613, nome: "Óscar Romero", posicao: "MEI" }, { id: 614, nome: "Luiz Henrique", posicao: "MEI" },
            { id: 615, nome: "Júnior Santos", posicao: "ATA" }, { id: 616, nome: "Tiquinho Soares", posicao: "ATA" }, { id: 617, nome: "Jeffinho", posicao: "ATA" }, { id: 618, nome: "Savarino", posicao: "ATA" }
        ]
    },
    'bragantino': {
        nome: 'Bragantino',
        jogadores: [
            { id: 701, nome: "Cleiton", posicao: "GOL" }, { id: 702, nome: "Lucão", posicao: "GOL" },
            { id: 703, nome: "Andrés Hurtado", posicao: "DEF" }, { id: 704, nome: "Juninho Capixaba", posicao: "DEF" }, { id: 705, nome: "Luan Cândido", posicao: "DEF" }, { id: 706, nome: "Pedro Henrique", posicao: "DEF" }, { id: 707, nome: "Eduardo Santos", posicao: "DEF" }, { id: 708, nome: "Lucas Cunha", posicao: "DEF" },
            { id: 709, nome: "Jadsom", posicao: "MEI" }, { id: 710, nome: "Matheus Fernandes", posicao: "MEI" }, { id: 711, nome: "Eric Ramires", posicao: "MEI" }, { id: 712, nome: "Lucas Evangelista", posicao: "MEI" }, { id: 713, nome: "Lincoln", posicao: "MEI" },
            { id: 714, nome: "Eduardo Sasha", posicao: "ATA" }, { id: 715, nome: "Thiago Borbas", posicao: "ATA" }, { id: 716, nome: "Helinho", posicao: "ATA" }, { id: 717, nome: "Vitinho", posicao: "ATA" }, { id: 718, nome: "Henry Mosquera", posicao: "ATA" }
        ]
    },
    'ceara': {
        nome: 'Ceará',
        jogadores: [
            { id: 801, nome: "Richard", posicao: "GOL" }, { id: 802, nome: "Fernando Miguel", posicao: "GOL" },
            { id: 803, nome: "Raí Ramos", posicao: "DEF" }, { id: 804, nome: "Rafael Ramos", posicao: "DEF" }, { id: 805, nome: "Matheus Bahia", posicao: "DEF" }, { id: 806, nome: "David Ricardo", posicao: "DEF" }, { id: 807, nome: "Ramon Menezes", posicao: "DEF" }, { id: 808, nome: "Matheus Felipe", posicao: "DEF" },
            { id: 809, nome: "Lourenço", posicao: "MEI" }, { id: 810, nome: "Guilherme Castilho", posicao: "MEI" }, { id: 811, nome: "Jorge Recalde", posicao: "MEI" }, { id: 812, nome: "Bruninho", posicao: "MEI" }, { id: 813, nome: "Lucas Mugni", posicao: "MEI" },
            { id: 814, nome: "Erick Pulga", posicao: "ATA" }, { id: 815, nome: "Facundo Barceló", posicao: "ATA" }, { id: 816, nome: "Saulo Mineiro", posicao: "ATA" }, { id: 817, nome: "Aylon", posicao: "ATA" }, { id: 818, nome: "Janderson", posicao: "ATA" }
        ]
    },
    'corinthians': {
        nome: 'Corinthians',
        jogadores: [
            { id: 501, nome: "Hugo Souza", posicao: "GOL" }, { id: 502, nome: "Matheus Donelli", posicao: "GOL" }, { id: 503, nome: "Felipe Longo", posicao: "GOL" },
            { id: 504, nome: "Matheuzinho", posicao: "DEF" }, { id: 505, nome: "Hugo", posicao: "DEF" }, { id: 506, nome: "Fabrizio Angileri", posicao: "DEF" }, { id: 507, nome: "Félix Torres", posicao: "DEF" }, { id: 508, nome: "Cacá", posicao: "DEF" }, { id: 509, nome: "Gustavo Henrique", posicao: "DEF" }, { id: 510, nome: "André Ramalho", posicao: "DEF" },
            { id: 511, nome: "Raniele", posicao: "MEI" }, { id: 512, nome: "Maycon", posicao: "MEI" }, { id: 513, nome: "Breno Bidon", posicao: "MEI" }, { id: 514, nome: "Rodrigo Garro", posicao: "MEI" }, { id: 515, nome: "Charles", posicao: "MEI" }, { id: 516, nome: "José Martínez", posicao: "MEI" },
            { id: 517, nome: "Yuri Alberto", posicao: "ATA" }, { id: 518, nome: "Romero", posicao: "ATA" }, { id: 519, nome: "Talles Magno", posicao: "ATA" }, { id: 520, nome: "Memphis Depay", posicao: "ATA" }, { id: 521, nome: "Kayke", posicao: "ATA" }
        ]
    },
    'criciuma': {
        nome: 'Criciúma',
        jogadores: [
            { id: 901, nome: "Gustavo", posicao: "GOL" }, { id: 902, nome: "Alisson", posicao: "GOL" },
            { id: 903, nome: "Claudinho", posicao: "DEF" }, { id: 904, nome: "Jonathan", posicao: "DEF" }, { id: 905, nome: "Marcelo Hermes", posicao: "DEF" }, { id: 906, nome: "Rodrigo", posicao: "DEF" }, { id: 907, nome: "Wilker Ángel", posicao: "DEF" }, { id: 908, nome: "Tobias Figueiredo", posicao: "DEF" },
            { id: 909, nome: "Barreto", posicao: "MEI" }, { id: 910, nome: "Newton", posicao: "MEI" }, { id: 911, nome: "Higor Meritão", posicao: "MEI" }, { id: 912, nome: "Marquinhos Gabriel", posicao: "MEI" }, { id: 913, nome: "Fellipe Mateus", posicao: "MEI" },
            { id: 914, nome: "Yannick Bolasie", posicao: "ATA" }, { id: 915, nome: "Felipe Vizeu", posicao: "ATA" }, { id: 916, nome: "Éder", posicao: "ATA" }, { id: 917, nome: "Arthur Caíke", posicao: "ATA" }, { id: 918, nome: "Allano", posicao: "ATA" }
        ]
    },
    'cruzeiro': {
        nome: 'Cruzeiro',
        jogadores: [
            { id: 1001, nome: "Cássio", posicao: "GOL" }, { id: 1002, nome: "Anderson", posicao: "GOL" }, { id: 1003, nome: "Léo Aragão", posicao: "GOL" },
            { id: 1004, nome: "William", posicao: "DEF" }, { id: 1005, nome: "Marlon", posicao: "DEF" }, { id: 1006, nome: "Kaiki", posicao: "DEF" }, { id: 1007, nome: "Zé Ivaldo", posicao: "DEF" }, { id: 1008, nome: "João Marcelo", posicao: "DEF" }, { id: 1009, nome: "Lucas Villalba", posicao: "DEF" },
            { id: 1010, nome: "Lucas Romero", posicao: "MEI" }, { id: 1011, nome: "Lucas Silva", posicao: "MEI" }, { id: 1012, nome: "José Cifuentes", posicao: "MEI" }, { id: 1013, nome: "Matheus Henrique", posicao: "MEI" }, { id: 1014, nome: "Mateus Vital", posicao: "MEI" }, { id: 1015, nome: "Matheus Pereira", posicao: "MEI" },
            { id: 1016, nome: "Kaio Jorge", posicao: "ATA" }, { id: 1017, nome: "Juan Dinenno", posicao: "ATA" }, { id: 1018, nome: "Gabriel Veron", posicao: "ATA" }, { id: 1019, nome: "Arthur Gomes", posicao: "ATA" }, { id: 1020, nome: "Álvaro Barreal", posicao: "ATA" }
        ]
    },
    'cuiaba': {
        nome: 'Cuiabá',
        jogadores: [
            { id: 1101, nome: "Walter", posicao: "GOL" }, { id: 1102, nome: "Mateus Pasinato", posicao: "GOL" },
            { id: 1103, nome: "Matheus Alexandre", posicao: "DEF" }, { id: 1104, nome: "Railan", posicao: "DEF" }, { id: 1105, nome: "Rikelme", posicao: "DEF" }, { id: 1106, nome: "Ramon", posicao: "DEF" }, { id: 1107, nome: "Marllon", posicao: "DEF" }, { id: 1108, nome: "Bruno Alves", posicao: "DEF" }, { id: 1109, nome: "Alan Empereur", posicao: "DEF" },
            { id: 1110, nome: "Fernando Sobral", posicao: "MEI" }, { id: 1111, nome: "Lucas Mineiro", posicao: "MEI" }, { id: 1112, nome: "Filipe Augusto", posicao: "MEI" }, { id: 1113, nome: "Guilherme Madruga", posicao: "MEI" }, { id: 1114, nome: "Max", posicao: "MEI" },
            { id: 1115, nome: "Deyverson", posicao: "ATA" }, { id: 1116, nome: "Isidro Pitta", posicao: "ATA" }, { id: 1117, nome: "Clayson", posicao: "ATA" }, { id: 1118, nome: "Jonathan Cafú", posicao: "ATA" }, { id: 1119, nome: "André Luís", posicao: "ATA" }
        ]
    },
    'flamengo': {
        nome: 'Flamengo',
        jogadores: [
            { id: 401, nome: "Agustín Rossi", posicao: "GOL" }, { id: 402, nome: "Matheus Cunha", posicao: "GOL" },
            { id: 403, nome: "Guillermo Varela", posicao: "DEF" }, { id: 404, nome: "Ayrton Lucas", posicao: "DEF" }, { id: 405, nome: "Matías Viña", posicao: "DEF" }, { id: 406, nome: "Alex Sandro", posicao: "DEF" }, { id: 407, nome: "Léo Pereira", posicao: "DEF" }, { id: 408, nome: "Fabrício Bruno", posicao: "DEF" }, { id: 409, nome: "Léo Ortiz", posicao: "DEF" }, { id: 410, nome: "David Luiz", posicao: "DEF" },
            { id: 411, nome: "Erick Pulgar", posicao: "MEI" }, { id: 412, nome: "Gerson", posicao: "MEI" }, { id: 413, nome: "Allan", posicao: "MEI" }, { id: 414, nome: "Nicolás de la Cruz", posicao: "MEI" }, { id: 415, nome: "G. de Arrascaeta", posicao: "MEI" }, { id: 416, nome: "Carlos Alcaraz", posicao: "MEI" },
            { id: 417, nome: "Pedro", posicao: "ATA" }, { id: 418, nome: "Gabriel Barbosa", posicao: "ATA" }, { id: 419, nome: "Bruno Henrique", posicao: "ATA" }, { id: 420, nome: "Everton Cebolinha", posicao: "ATA" }, { id: 421, nome: "Luiz Araújo", posicao: "ATA" }, { id: 422, nome: "Michael", posicao: "ATA" }, { id: 423, nome: "Gonzalo Plata", posicao: "ATA" }
        ]
    },
    'fluminense': {
        nome: 'Fluminense',
        jogadores: [
            { id: 1201, nome: "Fábio", posicao: "GOL" }, { id: 1202, nome: "Felipe Alves", posicao: "GOL" }, { id: 1203, nome: "Vitor Eudes", posicao: "GOL" },
            { id: 1204, nome: "Marcelo", posicao: "DEF" }, { id: 1205, nome: "Guga", posicao: "DEF" }, { id: 1206, nome: "Samuel Xavier", posicao: "DEF" }, { id: 1207, nome: "Diogo Barbosa", posicao: "DEF" }, { id: 1208, nome: "Thiago Silva", posicao: "DEF" }, { id: 1209, nome: "Marlon", posicao: "DEF" }, { id: 1210, nome: "Manoel", posicao: "DEF" }, { id: 1211, nome: "Felipe Melo", posicao: "DEF" },
            { id: 1212, nome: "André", posicao: "MEI" }, { id: 1213, nome: "Martinelli", posicao: "MEI" }, { id: 1214, nome: "Lima", posicao: "MEI" }, { id: 1215, nome: "Alexsander", posicao: "MEI" }, { id: 1216, nome: "Renato Augusto", posicao: "MEI" }, { id: 1217, nome: "Ganso", posicao: "MEI" },
            { id: 1218, nome: "Germán Cano", posicao: "ATA" }, { id: 1219, nome: "Jhon Arias", posicao: "ATA" }, { id: 1220, nome: "Keno", posicao: "ATA" }, { id: 1221, nome: "Marquinhos", posicao: "ATA" }, { id: 1222, nome: "Douglas Costa", posicao: "ATA" }, { id: 1223, nome: "Kevin Serna", posicao: "ATA" }
        ]
    },
    'fortaleza': {
        nome: 'Fortaleza',
        jogadores: [
            { id: 1301, nome: "João Ricardo", posicao: "GOL" }, { id: 1302, nome: "Santos", posicao: "GOL" }, { id: 1303, nome: "Maurício Kozlinski", posicao: "GOL" },
            { id: 1304, nome: "Tinga", posicao: "DEF" }, { id: 1305, nome: "Dudu", posicao: "DEF" }, { id: 1306, nome: "Bruno Pacheco", posicao: "DEF" }, { id: 1307, nome: "Titi", posicao: "DEF" }, { id: 1308, nome: "Brítez", posicao: "DEF" }, { id: 1309, nome: "Kuscevic", posicao: "DEF" }, { id: 1310, nome: "Tomás Cardona", posicao: "DEF" },
            { id: 1311, nome: "Zé Welison", posicao: "MEI" }, { id: 1312, nome: "Hércules", posicao: "MEI" }, { id: 1313, nome: "Pochettino", posicao: "MEI" }, { id: 1314, nome: "Kervin Andrade", posicao: "MEI" }, { id: 1315, nome: "Luquinhas", posicao: "MEI" }, { id: 1316, nome: "Emmanuel Martínez", posicao: "MEI" },
            { id: 1317, nome: "Juan Martín Lucero", posicao: "ATA" }, { id: 1318, nome: "Marinho", posicao: "ATA" }, { id: 1319, nome: "Moisés", posicao: "ATA" }, { id: 1320, nome: "Yago Pikachu", posicao: "ATA" }, { id: 1321, nome: "Machuca", posicao: "ATA" }, { id: 1322, nome: "Iarley", posicao: "ATA" }
        ]
    },
    'gremio': {
        nome: 'Grêmio',
        jogadores: [
            { id: 1401, nome: "Tiago Volpi", posicao: "GOL" }, { id: 1402, nome: "Gabriel Grando", posicao: "GOL" },
            { id: 1403, nome: "Marcos Rocha", posicao: "DEF" }, { id: 1404, nome: "Marlon", posicao: "DEF" }, { id: 1405, nome: "João Pedro", posicao: "DEF" }, { id: 1406, nome: "Kannemann", posicao: "DEF" }, { id: 1407, nome: "Jemerson", posicao: "DEF" }, { id: 1408, nome: "Rodrigo Ely", posicao: "DEF" }, { id: 1409, nome: "Gustavo Martins", posicao: "DEF" },
            { id: 1410, nome: "Mathías Villasanti", posicao: "MEI" }, { id: 1411, nome: "Edenilson", posicao: "MEI" }, { id: 1412, nome: "Dodi", posicao: "MEI" }, { id: 1413, nome: "Franco Cristaldo", posicao: "MEI" }, { id: 1414, nome: "Arthur", posicao: "MEI" }, { id: 1415, nome: "Cuéllar", posicao: "MEI" },
            { id: 1416, nome: "Martin Braithwaite", posicao: "ATA" }, { id: 1417, nome: "Cristian Pavón", posicao: "ATA" }, { id: 1418, nome: "André Henrique", posicao: "ATA" }, { id: 1419, nome: "Carlos Vinícius", posicao: "ATA" }, { id: 1420, nome: "Cristian Olivera", posicao: "ATA" }
        ]
    },
    'internacional': {
        nome: 'Internacional',
        jogadores: [
            { id: 1501, nome: "Sergio Rochet", posicao: "GOL" }, { id: 1502, nome: "Ivan", posicao: "GOL" }, { id: 1503, nome: "Fabrício", posicao: "GOL" },
            { id: 1504, nome: "Fabricio Bustos", posicao: "DEF" }, { id: 1505, nome: "Hugo Mallo", posicao: "DEF" }, { id: 1506, nome: "Renê", posicao: "DEF" }, { id: 1507, nome: "Alexandro Bernabei", posicao: "DEF" }, { id: 1508, nome: "Vitão", posicao: "DEF" }, { id: 1509, nome: "Gabriel Mercado", posicao: "DEF" }, { id: 1510, nome: "Robert Renan", posicao: "DEF" },
            { id: 1511, nome: "Thiago Maia", posicao: "MEI" }, { id: 1512, nome: "Fernando", posicao: "MEI" }, { id: 1513, nome: "Bruno Gomes", posicao: "MEI" }, { id: 1514, nome: "Charles Aránguiz", posicao: "MEI" }, { id: 1515, nome: "Bruno Henrique", posicao: "MEI" }, { id: 1516, nome: "Alan Patrick", posicao: "MEI" }, { id: 1517, nome: "Mauricio", posicao: "MEI" },
            { id: 1518, nome: "Enner Valencia", posicao: "ATA" }, { id: 1519, nome: "Lucas Alario", posicao: "ATA" }, { id: 1520, nome: "Rafael Borré", posicao: "ATA" }, { id: 1521, nome: "Wanderson", posicao: "ATA" }, { id: 1522, nome: "Wesley", posicao: "ATA" }
        ]
    },
    'juventude': {
        nome: 'Juventude',
        jogadores: [
            { id: 1601, nome: "Gabriel", posicao: "GOL" }, { id: 1602, nome: "Mateus Claus", posicao: "GOL" }, { id: 1603, nome: "Lucas Wingert", posicao: "GOL" },
            { id: 1604, nome: "João Lucas", posicao: "DEF" }, { id: 1605, nome: "Alan Ruschel", posicao: "DEF" }, { id: 1606, nome: "Gabriel Inocêncio", posicao: "DEF" }, { id: 1607, nome: "Danilo Boza", posicao: "DEF" }, { id: 1608, nome: "Zé Marcos", posicao: "DEF" }, { id: 1609, nome: "Rodrigo Sam", posicao: "DEF" },
            { id: 1610, nome: "Caíque", posicao: "MEI" }, { id: 1611, nome: "Jadson", posicao: "MEI" }, { id: 1612, nome: "Nenê", posicao: "MEI" }, { id: 1613, nome: "Jean Carlos", posicao: "MEI" }, { id: 1614, nome: "Luis Oyama", posicao: "MEI" },
            { id: 1615, nome: "Gilberto", posicao: "ATA" }, { id: 1616, nome: "Erick Farias", posicao: "ATA" }, { id: 1617, nome: "Marcelinho", posicao: "ATA" }, { id: 1618, nome: "Edson Carioca", posicao: "ATA" }, { id: 1619, nome: "David da Hora", posicao: "ATA" }
        ]
    },
    'mirassol': {
        nome: 'Mirassol',
        jogadores: [
            { id: 1701, nome: "Alex Muralha", posicao: "GOL" }, { id: 1702, nome: "Vanderlei", posicao: "GOL" }, { id: 1703, nome: "Thomazella", posicao: "GOL" },
            { id: 1704, nome: "Warley", posicao: "DEF" }, { id: 1705, nome: "Rodrigo Ferreira", posicao: "DEF" }, { id: 1706, nome: "Marcelo", posicao: "DEF" }, { id: 1707, nome: "Luiz Otávio", posicao: "DEF" }, { id: 1708, nome: "Lucas Gazal", posicao: "DEF" }, { id: 1709, nome: "Wanderson", posicao: "DEF" },
            { id: 1710, nome: "Neto Moura", posicao: "MEI" }, { id: 1711, nome: "Yuri Lima", posicao: "MEI" }, { id: 1712, nome: "Danielzinho", posicao: "MEI" }, { id: 1713, nome: "Gabriel", posicao: "MEI" }, { id: 1714, nome: "Chico Kim", posicao: "MEI" }, { id: 1715, nome: "Isaque", posicao: "MEI" },
            { id: 1716, nome: "Dellatorre", posicao: "ATA" }, { id: 1717, nome: "Fernandinho", posicao: "ATA" }, { id: 1718, nome: "Negueba", posicao: "ATA" }, { id: 1719, nome: "Paulinho Bóia", posicao: "ATA" }, { id: 1720, nome: "Iury Castilho", posicao: "ATA" }
        ]
    },
    'palmeiras': {
        nome: 'Palmeiras',
        jogadores: [
            { id: 1801, nome: "Weverton", posicao: "GOL" }, { id: 1802, nome: "Marcelo Lomba", posicao: "GOL" },
            { id: 1803, nome: "Agustín Giay", posicao: "DEF" }, { id: 1804, nome: "Khellven", posicao: "DEF" }, { id: 1805, nome: "Piquerez", posicao: "DEF" }, { id: 1806, nome: "Jefté", posicao: "DEF" }, { id: 1807, nome: "Gustavo Gómez", posicao: "DEF" }, { id: 1808, nome: "Murilo", posicao: "DEF" }, { id: 1809, nome: "Micael", posicao: "DEF" },
            { id: 1810, nome: "Aníbal Moreno", posicao: "MEI" }, { id: 1811, nome: "Raphael Veiga", posicao: "MEI" }, { id: 1812, nome: "Felipe Anderson", posicao: "MEI" }, { id: 1813, nome: "Mauricio", posicao: "MEI" }, { id: 1814, nome: "Lucas Evangelista", posicao: "MEI" }, { id: 1815, nome: "Andreas Pereira", posicao: "MEI" },
            { id: 1816, nome: "Vitor Roque", posicao: "ATA" }, { id: 1817, nome: "Paulinho", posicao: "ATA" }, { id: 1818, nome: "Facundo Torres", posicao: "ATA" }, { id: 1819, nome: "Bruno Rodrigues", posicao: "ATA" }, { id: 1820, nome: "José Manuel López", posicao: "ATA" }
        ]
    },
    'santos': {
        nome: 'Santos',
        jogadores: [
            { id: 1901, nome: "João Paulo", posicao: "GOL" }, { id: 1902, nome: "Gabriel Brazão", posicao: "GOL" },
            { id: 1903, nome: "Hayner", posicao: "DEF" }, { id: 1904, nome: "Aderlan", posicao: "DEF" }, { id: 1905, nome: "Jorge", posicao: "DEF" }, { id: 1906, nome: "Gil", posicao: "DEF" }, { id: 1907, nome: "Joaquim", posicao: "DEF" }, { id: 1908, nome: "Luan Peres", posicao: "DEF" },
            { id: 1909, nome: "Diego Pituca", posicao: "MEI" }, { id: 1910, nome: "João Schmidt", posicao: "MEI" }, { id: 1911, nome: "Giuliano", posicao: "MEI" }, { id: 1912, nome: "Rómulo Otero", posicao: "MEI" }, { id: 1913, nome: "Cazares", posicao: "MEI" },
            { id: 1914, nome: "Guilherme", posicao: "ATA" }, { id: 1915, nome: "Julio Furch", posicao: "ATA" }, { id: 1916, nome: "Willian Bigode", posicao: "ATA" }, { id: 1917, nome: "Alfredo Morelos", posicao: "ATA" }, { id: 1918, nome: "Marcelinho", posicao: "ATA" }
        ]
    },
    'sao-paulo': {
        nome: 'São Paulo',
        jogadores: [
            { id: 2001, nome: "Rafael", posicao: "GOL" }, { id: 2002, nome: "Jandrei", posicao: "GOL" }, { id: 2003, nome: "Young", posicao: "GOL" },
            { id: 2004, nome: "Igor Vinícius", posicao: "DEF" }, { id: 2005, nome: "Rafinha", posicao: "DEF" }, { id: 2006, nome: "Welington", posicao: "DEF" }, { id: 2007, nome: "Patryck", posicao: "DEF" }, { id: 2008, nome: "Arboleda", posicao: "DEF" }, { id: 2009, nome: "Alan Franco", posicao: "DEF" }, { id: 2010, nome: "Diego Costa", posicao: "DEF" }, { id: 2011, nome: "Nahuel Ferraresi", posicao: "DEF" },
            { id: 2012, nome: "Pablo Maia", posicao: "MEI" }, { id: 2013, nome: "Alisson", posicao: "MEI" }, { id: 2014, nome: "Luiz Gustavo", posicao: "MEI" }, { id: 2015, nome: "Giuliano Galoppo", posicao: "MEI" }, { id: 2016, nome: "Rodrigo Nestor", posicao: "MEI" }, { id: 2017, nome: "James Rodríguez", posicao: "MEI" },
            { id: 2018, nome: "Jonathan Calleri", posicao: "ATA" }, { id: 2019, nome: "Luciano", posicao: "ATA" }, { id: 2020, nome: "Lucas Moura", posicao: "ATA" }, { id: 2021, nome: "Ferreirinha", posicao: "ATA" }, { id: 2022, nome: "Erick", posicao: "ATA" }, { id: 2023, nome: "André Silva", posicao: "ATA" }
        ]
    },
    'sport': {
        nome: 'Sport Recife',
        jogadores: [
            { id: 2101, nome: "Caíque França", posicao: "GOL" }, { id: 2102, nome: "Gabriel", posicao: "GOL" },
            { id: 2103, nome: "Luan Cândido", posicao: "DEF" }, { id: 2104, nome: "Aderlan", posicao: "DEF" }, { id: 2105, nome: "Kévyson", posicao: "DEF" }, { id: 2106, nome: "Lucas Cunha", posicao: "DEF" }, { id: 2107, nome: "Rafael Thyere", posicao: "DEF" }, { id: 2108, nome: "Renzo", posicao: "DEF" },
            { id: 2109, nome: "Lucas Kal", posicao: "MEI" }, { id: 2110, nome: "Pedro Augusto", posicao: "MEI" }, { id: 2111, nome: "Christian Rivera", posicao: "MEI" }, { id: 2112, nome: "Hyoran", posicao: "MEI" }, { id: 2113, nome: "Matheusinho", posicao: "MEI" }, { id: 2114, nome: "Rodrigo Atencio", posicao: "MEI" },
            { id: 2115, nome: "Léo Pereira", posicao: "ATA" }, { id: 2116, nome: "Colo Ramírez", posicao: "ATA" }, { id: 2117, nome: "Derik Lacerda", posicao: "ATA" }, { id: 2118, nome: "Romarinho", posicao: "ATA" }, { id: 2119, nome: "Pablo", posicao: "ATA" }
        ]
    },
    'vasco': {
        nome: 'Vasco da Gama',
        jogadores: [
            { id: 2201, nome: "Léo Jardim", posicao: "GOL" }, { id: 2202, nome: "Keiller", posicao: "GOL" },
            { id: 2203, nome: "Puma Rodríguez", posicao: "DEF" }, { id: 2204, nome: "Lucas Piton", posicao: "DEF" }, { id: 2205, nome: "Paulo Henrique", posicao: "DEF" }, { id: 2206, nome: "Léo", posicao: "DEF" }, { id: 2207, nome: "Maicon", posicao: "DEF" }, { id: 2208, nome: "João Victor", posicao: "DEF" },
            { id: 2209, nome: "Zé Gabriel", posicao: "MEI" }, { id: 2210, nome: "Juan Sforza", posicao: "MEI" }, { id: 2211, nome: "Pablo Galdames", posicao: "MEI" }, { id: 2212, nome: "Mateus Carvalho", posicao: "MEI" }, { id: 2213, nome: "Dimitri Payet", posicao: "MEI" }, { id: 2214, nome: "Philippe Coutinho", posicao: "MEI" },
            { id: 2215, nome: "Pablo Vegetti", posicao: "ATA" }, { id: 2216, nome: "David", posicao: "ATA" }, { id: 2217, nome: "Adson", posicao: "ATA" }, { id: 2218, nome: "Rossi", posicao: "ATA" }, { id: 2219, nome: "Rayan", posicao: "ATA" }
        ]
    },
    'vitoria': {
        nome: 'Vitória',
        jogadores: [
            { id: 2301, nome: "Lucas Arcanjo", posicao: "GOL" }, { id: 2302, nome: "Muriel", posicao: "GOL" },
            { id: 2303, nome: "Zeca", posicao: "DEF" }, { id: 2304, nome: "Willean Lepo", posicao: "DEF" }, { id: 2305, nome: "Felipe Vieira", posicao: "DEF" }, { id: 2306, nome: "Wagner Leonardo", posicao: "DEF" }, { id: 2307, nome: "Camutanga", posicao: "DEF" }, { id: 2308, nome: "Bruno Uvini", posicao: "DEF" },
            { id: 2309, nome: "Willian Oliveira", posicao: "MEI" }, { id: 2310, nome: "Dudu", posicao: "MEI" }, { id: 2311, nome: "Luan", posicao: "MEI" }, { id: 2312, nome: "Jean Mota", posicao: "MEI" }, { id: 2313, nome: "Matheuzinho", posicao: "MEI" },
            { id: 2314, nome: "Luiz Adriano", posicao: "ATA" }, { id: 2315, nome: "Osvaldo", posicao: "ATA" }, { id: 2316, nome: "Iury Castilho", posicao: "ATA" }, { id: 2317, nome: "Léo Gamalho", posicao: "ATA" }, { id: 2318, nome: "Janderson", posicao: "ATA" }
        ]
    }
};

    const formacoesTaticas = {
        '4-3-3': [
            { top: '85%', left: '50%', label: 'GOL' },
            { top: '65%', left: '20%', label: 'LAT' }, { top: '68%', left: '40%', label: 'ZAG' }, { top: '68%', left: '60%', label: 'ZAG' }, { top: '65%', left: '80%', label: 'LAT' },
            { top: '45%', left: '30%', label: 'MEI' }, { top: '40%', left: '50%', label: 'VOL' }, { top: '45%', left: '70%', label: 'MEI' },
            { top: '20%', left: '25%', label: 'PONTA' }, { top: '15%', left: '50%', label: 'ATA' }, { top: '20%', left: '75%', label: 'PONTA' }
        ],
        '4-4-2': [
            { top: '85%', left: '50%', label: 'GOL' },
            { top: '65%', left: '18%', label: 'LAT' }, { top: '68%', left: '40%', label: 'ZAG' }, { top: '68%', left: '60%', label: 'ZAG' }, { top: '65%', left: '82%', label: 'LAT' },
            { top: '45%', left: '20%', label: 'MEI' }, { top: '45%', left: '40%', label: 'VOL' }, { top: '45%', left: '60%', label: 'VOL' }, { top: '45%', left: '80%', label: 'MEI' },
            { top: '20%', left: '40%', label: 'ATA' }, { top: '20%', left: '60%', label: 'ATA' }
        ],
        '3-5-2': [
            { top: '85%', left: '50%', label: 'GOL' },
            { top: '68%', left: '30%', label: 'ZAG' }, { top: '70%', left: '50%', label: 'ZAG' }, { top: '68%', left: '70%', label: 'ZAG' },
            { top: '45%', left: '15%', label: 'ALA' }, { top: '45%', left: '35%', label: 'MEI' }, { top: '40%', left: '50%', label: 'VOL' }, { top: '45%', left: '65%', label: 'MEI' }, { top: '45%', left: '85%', label: 'ALA' },
            { top: '20%', left: '40%', label: 'ATA' }, { top: '20%', left: '60%', label: 'ATA' }
        ]
    };

    const listaJogadoresEl = document.getElementById('jogadores-lista');
    const campoEl = document.getElementById('campo-tatico');
    const botoesFormacao = document.querySelectorAll('.formacao-btn');
    const btnLimpar = document.getElementById('limpar-campo-btn');
    const nomeTimeEl = document.getElementById('nome-time-elenco');
    
    let jogadoresElenco = [];
    let jogadorSelecionado = null;
    let formacaoAtual = '4-3-3';

    // 2. LÓGICA PARA CARREGAR O TIME CERTO
    function carregarElencoDoTime() {
        const params = new URLSearchParams(window.location.search);
        const timeId = params.get('time') || 'atletico-mg'; // Pega o 'time' da URL ou usa 'atletico-mg' como padrão
        
        const timeData = elencosPorTime[timeId];

        if (timeData) {
            jogadoresElenco = timeData.jogadores;
            nomeTimeEl.textContent = timeData.nome; // Atualiza o nome do time na tela
        } else {
            // Se não encontrar o time, carrega o padrão
            jogadoresElenco = elencosPorTime['atletico-mg'].jogadores;
            nomeTimeEl.textContent = elencosPorTime['atletico-mg'].nome;
        }

        renderizarListaJogadores();
        desenharFormacao(formacaoAtual);
    }

    // FUNÇÕES PRINCIPAIS (com pequenas modificações)
    function desenharFormacao(nomeFormacao) {
        campoEl.innerHTML = '';
        const posicoes = formacoesTaticas[nomeFormacao];

        posicoes.forEach(pos => {
            const slot = document.createElement('div');
            slot.className = 'player-slot';
            slot.style.top = pos.top;
            slot.style.left = pos.left;
            slot.innerHTML = `<span>+</span><p>${pos.label}</p>`;
            slot.addEventListener('click', () => onSlotClick(slot));
            campoEl.appendChild(slot);
        });
        formacaoAtual = nomeFormacao;
    }

    function renderizarListaJogadores() {
        listaJogadoresEl.innerHTML = '';
        jogadoresElenco.forEach(jogador => {
            const jogadorDiv = document.createElement('div');
            jogadorDiv.className = 'jogador-selecionavel';
            jogadorDiv.dataset.id = jogador.id;
            jogadorDiv.innerHTML = `<p>${jogador.nome}</p><span>${jogador.posicao}</span>`;
            jogadorDiv.addEventListener('click', () => onJogadorClick(jogadorDiv));
            listaJogadoresEl.appendChild(jogadorDiv);
        });
    }

    // LÓGICA DE EVENTOS (sem alterações)
    function onJogadorClick(jogadorDiv) {
        if (jogadorDiv.classList.contains('selecionado')) return;

        document.querySelectorAll('.jogador-selecionavel.ativo').forEach(el => el.classList.remove('ativo'));
        jogadorDiv.classList.add('ativo');

        const jogadorId = parseInt(jogadorDiv.dataset.id);
        jogadorSelecionado = jogadoresElenco.find(j => j.id === jogadorId);
    }

    function onSlotClick(slot) {
        if (jogadorSelecionado) {
            if (slot.dataset.jogadorId) {
                const idAntigo = parseInt(slot.dataset.jogadorId);
                document.querySelector(`.jogador-selecionavel[data-id='${idAntigo}']`).classList.remove('selecionado');
            }
            const posLabel = slot.querySelector('p').textContent;
            slot.innerHTML = `<span>${jogadorSelecionado.nome}</span><p>${posLabel}</p>`;
            slot.classList.add('filled');
            slot.dataset.jogadorId = jogadorSelecionado.id;
            document.querySelector('.jogador-selecionavel.ativo').classList.add('selecionado');
            document.querySelector('.jogador-selecionavel.ativo').classList.remove('ativo');
            jogadorSelecionado = null;
        } else if (slot.classList.contains('filled')) {
            const jogadorId = parseInt(slot.dataset.jogadorId);
            const posLabel = slot.querySelector('p').textContent;
            slot.innerHTML = `<span>+</span><p>${posLabel}</p>`;
            slot.classList.remove('filled');
            delete slot.dataset.jogadorId;
            document.querySelector(`.jogador-selecionavel[data-id='${jogadorId}']`).classList.remove('selecionado');
        }
    }

    botoesFormacao.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.id === 'limpar-campo-btn') return;
            const novaFormacao = btn.dataset.formacao;
            if (novaFormacao !== formacaoAtual) {
                desenharFormacao(novaFormacao);
                botoesFormacao.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                document.querySelectorAll('.jogador-selecionavel').forEach(j => j.classList.remove('selecionado', 'ativo'));
            }
        });
    });

    btnLimpar.addEventListener('click', () => {
        desenharFormacao(formacaoAtual);
        document.querySelectorAll('.jogador-selecionavel').forEach(j => j.classList.remove('selecionado', 'ativo'));
    });

    // 3. INICIALIZAÇÃO
    carregarElencoDoTime();
});