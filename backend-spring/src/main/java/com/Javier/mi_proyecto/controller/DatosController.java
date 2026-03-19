package com.Javier.mi_proyecto.controller;

import com.Javier.mi_proyecto.model.Persona;
import com.Javier.mi_proyecto.model.Serie;
import com.Javier.mi_proyecto.model.Videojuego;
import com.Javier.mi_proyecto.service.DatosService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "https://JMM2904.github.io/Prueba-Fullstack-Angular-Spring/")
public class DatosController {

    private final DatosService service;

    public DatosController(DatosService service) {
        this.service = service;
    }

    @GetMapping("/personas")
    public List<Persona> personas() {
        return service.getPersonas();
    }

    @GetMapping("/series")
    public List<Serie> series() {
        return service.getSeries();
    }

    @GetMapping("/videojuegos")
    public List<Videojuego> videojuegos() {
        return service.getVideojuegos();
    }


}
