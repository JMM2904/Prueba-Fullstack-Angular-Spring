package com.Javier.mi_proyecto.model;

public class Serie {

    public String titulo;
    public int temporadas;

    public Serie(String titulo, int temporadas) {
        this.titulo = titulo;
        this.temporadas = temporadas;
    }

    @Override
    public String toString() {
        return titulo + " (" + temporadas + " temporadas)";
    }
}
