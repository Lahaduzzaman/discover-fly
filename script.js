// Function
  function ticketCountHandler(ticketCategory, isIncreased) {
    const ticketInput = document.getElementById(ticketCategory + "-ticket").value;
    const ticketCount = parseInt(ticketInput);
    let newTicketCount = ticketCount;

    if (isIncreased == true) {
      newTicketCount = ticketCount + 1;
    }
    if (isIncreased == false && ticketCount > 0) {
      newTicketCount = ticketCount - 1;
    }
    document.getElementById(ticketCategory + "-ticket").value = newTicketCount;
    subTotal();
    vatAmount();
    totalAmount();
  }


  // Subtotal Function
  function subTotal() {
    let firstClassTicketCount = document.getElementById("firstClass-ticket").value;
    let economyTicketCount = document.getElementById("economy-ticket").value;
    let subTotal = (document.getElementById("subTotal").innerText = firstClassTicketCount * 150 + economyTicketCount * 100);
    return subTotal;
  }


  // Vat Function
  function vatAmount() {
    let vat = Math.round(subTotal() * 0.1);
    document.getElementById("vat-amount").innerText = vat;
    return vat;
  }


  // Total Price Function
  function totalAmount() {
    let total = subTotal() + vatAmount();
    document.getElementById("total-amount").innerText = total;
  }


  // Extra Part
  document.getElementById("bookNow").addEventListener("click", function () {
    const bookingSection = document.getElementById("booking-section");
    bookingSection.style.display = "none";
    const bonusSection = document.getElementById("bonus-section");
    bonusSection.style.display = "block";
  })