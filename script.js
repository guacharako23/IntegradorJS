function mostrarSeccionTickets() {
    var seccionTickets = document.getElementById("seccionTickets");
    seccionTickets.style.display = "block";
  }
  
  function calcularTotal() {
    var categoria = document.getElementById("categoria").value;
    var cantidadTickets = parseInt(prompt("Ingrese la cantidad de tickets a comprar:"));
  
    var descuento = 0;
    if (categoria === "estudiante") {
      descuento = 0.2; // 20% de descuento para estudiantes
    } else if (categoria === "trainee") {
      descuento = 0.1; // 10% de descuento para trainees
    } else if (categoria === "junior") {
      descuento = 0; // Sin descuento para juniors
    }
  
    var totalAPagar = cantidadTickets * 100; // Precio base de cada ticket: $100
    totalAPagar -= totalAPagar * descuento; // Aplicar descuento
  
    var resultado = document.getElementById("totalAPagar");
    resultado.textContent = "Total a Pagar: $" + totalAPagar.toFixed(2);
  }
  