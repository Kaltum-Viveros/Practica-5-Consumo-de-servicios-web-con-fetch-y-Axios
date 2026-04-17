const API_URL = "http://localhost:3000/api/students";
const resultado = document.getElementById("resultado");

function mostrarDatos(datos, titulo) {
    resultado.textContent = `${titulo}\n\n${JSON.stringify(datos, null, 2)}`;
}

function obtenerFormulario() {
    return {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: Number(document.getElementById("age").value)
    };
}

async function getStudentsFetch() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Error al consultar estudiantes con fetch");
        }

        const data = await response.json();
        mostrarDatos(data, "GET con fetch");
    } catch (error) {
        mostrarDatos({ error: error.message }, "Error");
    }
}

async function getStudentsAxios() {
    try {
        const response = await axios.get(API_URL);
        mostrarDatos(response.data, "GET con Axios");
    } catch (error) {
        mostrarDatos({ error: error.message }, "Error");
    }
}

async function createStudentFetch() {
    try {
        const student = obtenerFormulario();

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        });

        if (!response.ok) {
            throw new Error("Error al registrar estudiante con fetch");
        }

        const data = await response.json();
        mostrarDatos(data, "POST con fetch");
    } catch (error) {
        mostrarDatos({ error: error.message }, "Error");
    }
}

async function createStudentAxios() {
    try {
        const student = obtenerFormulario();

        const response = await axios.post(API_URL, student);
        mostrarDatos(response.data, "POST con Axios");
    } catch (error) {
        mostrarDatos({ error: error.message }, "Error");
    }
}