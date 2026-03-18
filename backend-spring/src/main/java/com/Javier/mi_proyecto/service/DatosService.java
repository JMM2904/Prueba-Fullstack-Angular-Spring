package com.Javier.mi_proyecto.service;

import com.Javier.mi_proyecto.model.Persona;
import com.Javier.mi_proyecto.model.Videojuego;
import com.Javier.mi_proyecto.model.Serie;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class DatosService {

    public List<Persona> getPersonas() {
        List<Persona> lista = new ArrayList<>();
        lista.add(new Persona("Javier", 20));
        lista.add(new Persona("Ivan", 17));
        lista.add(new Persona("Pedro", 33));
        lista.add(new Persona("Nadia", 21));
        return lista;
    }

    public List<Serie> getSeries() {
        List<Serie> lista = new ArrayList<>();
        lista.add(new Serie("Breaking Bad", 5));
        lista.add(new Serie("Friends", 10));
        lista.add(new Serie("Lost", 6));
        return lista;
    }

    public List<Videojuego> getVideojuegos() {
        List<Videojuego> lista = new ArrayList<>();
        lista.add(new Videojuego("Dark Souls", 50));
        lista.add(new Videojuego("Hollow Knight", 60));
        lista.add(new Videojuego("Mario Kart", 15));
        return lista;
    }

}
