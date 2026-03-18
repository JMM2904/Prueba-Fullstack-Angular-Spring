package com.Javier.mi_proyecto.model;

public class Videojuego {

    public String titulo;
    public int horas;

    public Videojuego(String titulo, int horas) {
        this.titulo = titulo;
        this.horas = horas;
    }

    @Override
    public String toString() {
        return titulo + " (" + horas + " h)";
    }
}
