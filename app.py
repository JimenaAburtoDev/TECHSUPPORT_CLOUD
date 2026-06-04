from flask import Flask, render_template, request, redirect
import pymysql

app = Flask(__name__)

def get_connection():
    return pymysql.connect(
        host="52.90.163.218",
        user="admintech",
        password="Admin123*",
        database="techsupport"
    )

@app.route("/")
def inicio():

    conexion = get_connection()
    cursor = conexion.cursor()

    cursor.execute("SELECT COUNT(*) FROM clientes")

    total_clientes = cursor.fetchone()[0]

    cursor.close()
    conexion.close()

    return render_template(
        "index.html",
        total_clientes=total_clientes
    )

@app.route("/nosotros")
def nosotros():
    return render_template("nosotros.html")

@app.route("/servicios")
def servicios():
    return render_template("servicios.html")

@app.route("/contacto")
def contacto():
    return render_template("contacto.html")

@app.route("/guardar", methods=["POST"])
def guardar():

    nombre = request.form["nombre"]
    correo = request.form["correo"]
    telefono = request.form["telefono"]
    servicio = request.form["servicio"]
    mensaje = request.form["mensaje"]

    conexion = get_connection()
    cursor = conexion.cursor()

    sql = """
    INSERT INTO clientes
    (nombre, correo, telefono, servicio, mensaje)
    VALUES (%s,%s,%s,%s,%s)
    """

    cursor.execute(
        sql,
        (
            nombre,
            correo,
            telefono,
            servicio,
            mensaje
        )
    )

    conexion.commit()

    cursor.close()
    conexion.close()

    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)