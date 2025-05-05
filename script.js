function calcular() {
    const dias = document.getElementById("dias").value;
    const destino = document.getElementById("destino").value;
    const total = dias * 100;
  
    document.getElementById("resultado").innerText = 
      `Entonces, junta ${total} pesos para viajar`;
  }
  
