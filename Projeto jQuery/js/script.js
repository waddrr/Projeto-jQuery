$(document).ready(function() {
    $(".br").click(function() {
        // header
        $(".nav__links").children().eq(0).find("a").text("Início");
        $(".nav__links").children().eq(1).find("a").text("Destinos");
        $(".nav__links").children().eq(2).find("a").text("Contato");
        $(".nav__links").children().eq(3).find("a").text("Blog");
        $(".language-selected").text("br");
        $(".language-selected").removeClass("change-es change-en").addClass("change-br");
    });
    
        // seção
        $(".content h1").html("EXPLORAR<br />SONHAR<br /><span>VOAR</span>");
        $(".content p").text("Viaje para onde seu coração mandar: Embarque em uma jornada inesquecível e explore novos horizontes. Descubra culturas vibrantes, paisagens deslumbrantes e destinos que farão você se apaixonar.");
        $(".btn").text("Reserve sua viagem");
        // sobre
        $(".destination__card").eq(0).find("h4").text("10 Paraísos Escondidos Que Você Precisa Conhecer");
        $(".destination__card").eq(0).find("p").text("Descubra lugares escondidos e tesouros secretos em seus destinos dos sonhos. Fuja do turismo convencional e embarque em uma aventura inesquecível!");
        $(".destination__card").eq(1).find("h4").text("Experiências Culturais Imersivas");
        $(".destination__card").eq(1).find("p").text("Mergulhe nas culturas vibrantes dos destinos dos sonhos, destacando os rituais, tradições e costumes locais que tornam esses lugares verdadeiramente únicos.");
        $(".destination__card").eq(2).find("h4").text("Do Sonho à Jornada");
        $(".destination__card").eq(2).find("p").text("Descubra dicas valiosas de especialistas e encontre lugares incríveis fora do comum. Aproveite ao máximo cada minuto do seu destino dos sonhos e torne cada momento memorável!");
        // Entrar e Pesquisar
        $(".search input").attr("placeholder", "Pesquisar");
        $(".login").contents().filter(function() {
            return this.nodeType == 3;
        }).remove();  // Remover o texto existente
        $(".login").append("Entrar");
    });

    $(".en").click(function() {
        // cabeçalho
        $(".nav__links").children().eq(0).find("a").text("Home");
        $(".nav__links").children().eq(1).find("a").text("Destinations");
        $(".nav__links").children().eq(2).find("a").text("Contact");
        $(".nav__links").children().eq(3).find("a").text("Blog");
        $(".language-selected").text("EN");
        $(".language-selected").removeClass("change-es change-br").addClass("change-en");
        // seção
        $(".content h1").html("EXPLORE<br />DREAM<br /><span>FLY</span>");
        $(".content p").text("Travel wherever your heart takes you: Embark on an unforgettable journey and explore new horizons. Discover vibrant cultures, stunning landscapes, and destinations that will make you fall in love.");
        $(".btn").text("Book Now");
        // sobre
        $(".destination__card").eq(0).find("h4").text("10 Hidden Paradises You Need to Know");
        $(".destination__card").eq(0).find("p").text("Discover hidden places and secret treasures in your dream destinations. Escape conventional tourism and embark on an unforgettable adventure!");
        $(".destination__card").eq(1).find("h4").text("Immersive Cultural Experiences");
        $(".destination__card").eq(1).find("p").text("Dive deep into the vibrant cultures of dream destinations, highlighting the rituals, traditions, and local customs that make these places truly unique.");
        $(".destination__card").eq(2).find("h4").text("From Dream to Journey");
        $(".destination__card").eq(2).find("p").text("Discover valuable tips from experts and find amazing places off the beaten path. Make the most of every minute of your dream destination and make every moment worthwhile!");
        // Sign In and Search
        $(".search input").attr("placeholder", "Search");
        $(".login").contents().filter(function() {
            return this.nodeType == 3;
        }).remove();  // Remover o texto existente
        $(".login").append("Sign In");
    });
    $(".es").click(function() {
        // cabeçalho
        $(".nav__links").children().eq(0).find("a").text("Inicio");
        $(".nav__links").children().eq(1).find("a").text("Destinos");
        $(".nav__links").children().eq(2).find("a").text("Contacto");
        $(".nav__links").children().eq(3).find("a").text("Blog");
        $(".language-selected").text("ES");
        $(".language-selected").removeClass("change-br change-en").addClass("change-es");
        // seção
        $(".content h1").html("EXPLORAR<br />SOÑAR<br /><span>VOLAR</span>");
        $(".content p").text("Viaja a donde te lleve el corazón: Emprende un viaje inolvidable y explora nuevos horizontes. Descubre culturas vibrantes, paisajes impresionantes y destinos que te enamorarán.");
        $(".btn").text("Reserva tu viaje");
        // sobre
        $(".destination__card").eq(0).find("h4").text("10 Paraísos Secretos Que Necesitas Conocer");
        $(".destination__card").eq(0).find("p").text("Descubre lugares escondidos y tesoros secretos en tus destinos soñados. ¡Escápate del turismo convencional y embárcate en una aventura inolvidable!");
        $(".destination__card").eq(1).find("h4").text("Experiencias Culturales Inmersivas");
        $(".destination__card").eq(1).find("p").text("Sumérgete profundamente en las culturas vibrantes de los destinos soñados, destacando los rituales, tradiciones y costumbres locales que hacen que estos lugares sean verdaderamente únicos.");
        $(".destination__card").eq(2).find("h4").text("Del Sueño al Viaje");
        $(".destination__card").eq(2).find("p").text("Descubre valiosos consejos de expertos y encuentra lugares increíbles fuera de la ruta turística. ¡Aprovecha al máximo cada minuto de tu destino soñado y haz que cada momento valga la pena!");
        // Entrar e Pesquisar
        $(".search input").attr("placeholder", "Buscar");
        $(".login").contents().filter(function() {
            return this.nodeType == 3;
        }).remove();  // Remover o texto existente
        $(".login").append("Iniciar sesión");
    });
