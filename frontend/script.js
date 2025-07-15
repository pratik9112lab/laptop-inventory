const API_URL = 'http://localhost:3000/api/laptops';

async function fetchLaptops() {
  const res = await fetch(API_URL);
  const data = await res.json();
  const list = document.getElementById('laptop-list');
  list.innerHTML = '';
  data.forEach(l => {
    const li = document.createElement('li');
    li.textContent = `${l.brand} ${l.model} - Assigned to: ${l.assignedTo}`;
    list.appendChild(li);
  });
}

async function addLaptop() {
  const brand = document.getElementById('brand').value;
  const model = document.getElementById('model').value;
  const assignedTo = document.getElementById('assignedTo').value;

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ brand, model, assignedTo })
  });

  fetchLaptops();
}

fetchLaptops();

