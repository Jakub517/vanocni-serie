      // Funkce pro vytváření vloček
      function createSnowflake() {
        // Vytvoření vločky (divu) s náhodnou pozicí
        var snowflake = $('<div class="snowflake">❄️</div>').css({
            top: Math.random() * $(window).height(),
            left: Math.random() * $(window).width(),
        });

        // Přidání vločky do dokumentu
        $('body').append(snowflake);

        // Animace vločky
        snowflake.animate(
            {
                top: $(window).height(),
                left: '+=' + (Math.random() * 200 - 100),
                opacity: 0,
            },
            Math.random() * 5000 + 5000, // Nastavení náhodné délky animace
            function () {
                // Po dokončení animace odstranit vločku z dokumentu
                $(this).remove();
                // Vytvořit další vločku
                createSnowflake();
            }
        );
    }

    // Vytvoření vloček při načtení stránky
    $(document).ready(function () {
        for (var i = 0; i < 20; i++) {
            createSnowflake();
        }
    });