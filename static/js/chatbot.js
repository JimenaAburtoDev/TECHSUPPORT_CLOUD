const abrirChat = document.getElementById("abrirChat");
const chatVentana = document.getElementById("chatVentana");
const pregunta = document.getElementById("pregunta");
const mensajes = document.getElementById("mensajes");

abrirChat.addEventListener("click", () => {
    chatVentana.classList.toggle("hidden");
});

function responder(textoUsuario){

    let respuesta = "";
    textoUsuario = textoUsuario.toLowerCase();

    if(textoUsuario.includes("hola")){

        respuesta =
        "👋 Hola, bienvenido a TECHSUPPORT CLOUD. ¿Cómo puedo ayudarte?";

    }

    else if(textoUsuario.includes("servicios")){

        respuesta =
        "🛠️ Nuestros servicios incluyen mantenimiento de computadoras, reparación de laptops, instalación de software, soporte remoto y configuración de redes.";

    }

    else if(textoUsuario.includes("horario") ||
            textoUsuario.includes("horarios")){

        respuesta =
        "🕒 Nuestro horario de atención es de lunes a sábado de 8:00 AM a 6:00 PM.";

    }

    else if(textoUsuario.includes("contacto")){

        respuesta =
        "📞 Puedes contactarnos mediante nuestro formulario web o al correo soporte@techsupportcloud.com";

    }

    else if(textoUsuario.includes("soporte remoto")){

        respuesta =
        "💻 El soporte remoto nos permite ayudarte a distancia mediante conexión segura a tu equipo.";

    }

    else{

        respuesta =
        "❌ No encontré información sobre tu consulta. Prueba con: Hola, Servicios, Horarios, Contacto o Soporte Remoto.";

    }

    mensajes.innerHTML += `
        <div class="text-right mb-3">
            <span class="bg-blue-700 text-white px-3 py-2 rounded-lg inline-block">
                ${textoUsuario}
            </span>
        </div>
    `;

    mensajes.innerHTML += `
        <div class="mb-3">
            <span class="bg-gray-200 px-3 py-2 rounded-lg inline-block">
                ${respuesta}
            </span>
        </div>
    `;

    mensajes.scrollTop = mensajes.scrollHeight;
}

pregunta.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        const texto = pregunta.value.trim();

        if(texto === "") return;

        responder(texto);

        pregunta.value = "";

    }

});

function consultaRapida(texto){
    responder(texto);
}