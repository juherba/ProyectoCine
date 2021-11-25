/----------------------------------------------------------------------------------------------------------------------------------------------\

                                                Activitat by Julian Hernandez
                                                            Cine


    1. Orden de las webs.
        Inicio: Será la web que contendra informacion basica de la cartelera de peliculas, incluyendo el login a la web de cartelera,
        además podrán visualizar los horarios.

        Cartelera: Web principalmente destinada a poder visualizar las web disponibles para ver, la duracion y diferentes packs para
        ahorrar en caso de grupo, además dependiendo del dia de la reserva el precio sera mayor o menor dependiendo de, si es el dia
        del espectador o si es fin de semana por lo tanto es mas caro.

        Reserva: Web destinada a poder finalizar la reserva de las butacas del cine, ademas de auto completarse la informacion antes
        introducida como el nombre, el usuario podrá ver las butacas disponibles dependiendo de las horas de reserva.

        Informacion de usuario: El usuario podrá ver las reservas que tiene a su nombre y podrá cancelar la reserva.

    2. Funciones y explicaciones.
        Sistema de registro(Inicio): Sistema de usuarios por registro y login en caso de existir una cuenta.

        Sistema de autocargado de información(Cartelera): Mediante archivos .json podremos visualizar la web de cartelera, que con
        templates crearemos bucles para generar las diferentes peliculas de la "base de datos".

        Sistema de reservas y usuarios(Reserva): Teniendo en cuenta que los usuarios harán reservas y que han de estar enlazadas a
        su nombre y después se ha de poder mostrar se tendrá que generar una array de objetos que tendrá que almacenar datos tales
        como id del objeto, y que dentro del objeto habrá id del usuario, nombre del usuario, hora de la reserva, butacas a su que
        ha reservado y el nombre de la pelicula que querrá ver.

        Sistema de informacion(info usuario): Sera un sistema muy basico en el que se mostrará la informacion del usuario almacenada
        en el localStorage y manegada mediante js para modificarla hu mostrarla.

        Sistema de cklogin(todas): Una metodologia a seguir en todas las webs para que el usuario en caso de no haberse registrado no
        podrá acceder al resto de paginas ni visualizar la cartelera, ni mucho menos hacer reservas.

    3. Peliculas

        1. Spiderman No Way Home
        2. Venom 2
        3. Avengers
        4. Eternals
        5. Deadpool
        6. Viuda negra
