package com.Javier.mi_proyecto.model;

public class Persona {

    public String nombre;
    public int edad;

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    @Override
    public String toString() {
        return nombre + " (" + edad + ")";
    }
}
