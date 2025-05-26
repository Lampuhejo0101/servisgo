
document.addEventListener('DOMContentLoaded', function () {
  const pesanBtn = document.querySelector('.btn');
  if (pesanBtn) {
    pesanBtn.addEventListener('click', function () {
      alert('Booking berhasil dikirim! Mekanik akan segera mengkonfirmasi jadwal.');
    });
  }

  // Hitung total sparepart otomatis
  function updateTotal() {
    let total = 0;
    document.querySelectorAll('.sparepart-row').forEach(row => {
      const qty = parseInt(row.querySelector('.qty').value) || 0;
      const price = parseInt(row.querySelector('.price').value) || 0;
      total += qty * price;
    });
    document.getElementById('total-harga').innerText = 'Rp' + total.toLocaleString();
  }

  document.getElementById('add-sparepart')?.addEventListener('click', function () {
    const tbody = document.getElementById('sparepart-list');
    const row = document.createElement('tr');
    row.className = 'sparepart-row';
    row.innerHTML = `
      <td><input type="text" placeholder="Nama Sparepart"></td>
      <td><input type="number" class="qty" value="1" min="1"></td>
      <td><input type="number" class="price" value="0" min="0"></td>
      <td class="subtotal">Rp0</td>
    `;
    tbody.appendChild(row);
    row.querySelectorAll('input').forEach(input => input.addEventListener('input', updateTotal));
  });
});
