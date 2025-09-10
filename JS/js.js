function mostrarEjemplo(accion) {
    let codigo = "";
    switch (accion) {
        case "crear":
            codigo = 'CREATE (p:Persona {nombre:"Ana", edad:25})';
            break;
        case "consultar":
            codigo = 'MATCH (p:Persona) WHERE p.nombre="Ana" RETURN p';
            break;
        case "actualizar":
            codigo = 'MATCH (p:Persona {nombre:"Ana"}) SET p.edad=26 RETURN p';
            break;
        case "eliminar":
            codigo = 'MATCH (p:Persona {nombre:"Ana"}) DELETE p';
            break;
    }
    document.getElementById("codigo").textContent = codigo;
}