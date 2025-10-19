// ====== VARIABLES ======
let products = JSON.parse(localStorage.getItem("products")) || [
  {
    id: 0,
    image: "image-path/aa-1.png",
    title: "Hamburguesa Mixta",
    price: 19000,
    description: "Pan Brioche, Carne, Jamón, Queso, Pollo desmechado, Papa Francesa, Salsita al gusto",
    inStock: true
  },
  {
    id: 1,
    image: "image-path/aa-2.png",
    title: "Hamburguesa Santandereana",
    price: 22000,
    description: "Pan Brioche, Carne, Jamón, Queso, Pollo desmechado, Arepa Amarilla, Vegetales frescos, Papas Francesa, Salsita al gusto",
    inStock: true
  },
  {
    id: 2,
    image: "image-path/aa-3.png",
    title: "Chory Burger",
    price: 22000,
    description: "Pan, Carne, Jamón, Queso, Pollo desmechado, Chorizo Caramelizado, Vegetales frescos, Papa a la francesa",
    inStock: true
  },
  {
    id: 3,
    image: "image-path/aa-4.png",
    title: "Papas Locas",
    price: 25000,
    description: "Carne picada, Chorizo picado, Jamón, Queso, Pollo desmechado, Papa a la francesa",
    inStock: true
  },
  {
    id: 4,
    image: "image-path/aa-5.png",
    title: "Hamburguesa doble carne Especial",
    price: 23000,
    description: "Pan Brioche, 2 Carnes, Doble Jamón, Doble Queso, Tocineta, Vegetales, Pollo desmechado, Papa a la francesa",
    inStock: true
  },
  {
    id: 5,
    image: "image-path/aa-6.png",
    title: "Chory Papa",
    price: 15000,
    description: "Papa, Chorizo, Salsa al gusto",
    inStock: true
  },
  {
    id: 6,
    image: "image-path/aa-7.png",
    title: "Pechuga a la plancha",
    price: 18000,
    description: "200 gramos de pechuga, Chorizo carfrisan, Papa a la francesa",
    inStock: true
  },
  {
    id: 7,
    image: "image-path/aa-8.png",
    title: "Mega Combo",
    price: 34000,
    description: "500 gramos de costillita, 6 porciones de alas, Papa a la francesa",
    inStock: true
  },
  {
    id: 8,
    image: "image-path/aa-9.png",
    title: "Hamburguesa doble carne Cryspy",
    price: 20000,
    description: "Pan Brioche, 2 Carnes, Jamón, Gratinado, Tocineta crispy, Papitas Francesa, Salsa al gusto",
    inStock: true
  },
  {
    id: 9,
    image: "image-path/aa-10.png",
    title: "Hamburguesa Campesita",
    price: 21000,
    description: "Carne, Jamón, Queso, Pollo desmechado, Maiz tierno, Tocineta, Vegetales, Papitas Francesa",
    inStock: true
  },
  {
    id: 10,
    image: "image-path/aa-11.png",
    title: "Picada Mixtas 2 personas",
    price: 37000,
    description: "200 Gramos de Carne, 200 Gramos de pechuga, Chorizo carfrisan, Cebolla Grillet, Papa a la Francesa, Rapi Yuca",
    inStock: true
  },
  {
    id: 11,
    image: "image-path/aa-12.png",
    title: "Hamburguesa Campesina",
    price: 21000,
    description: "Pan, Carne, Queso, Pollo desmechado, Maiz tierno, Tocineta, Vegetales, Papitas Francesa",
    inStock: true
  },
  {
    id: 12,
    image: "image-path/aa-13.png",
    title: "Perro Fuego",
    price: 21000,
    description: "Pan Brioche, Carne Picada, Jalapeños, Doritos Fuego, Queso Gratinado, Papas a la Francesa, Salsas al gusto",
    inStock: true
  },
  {
    id: 13,
    image: "image-path/aa-14.png",
    title: "Hamburguesa Sencilla",
    price: 21000,
    description: "Pan Brioche, Carne, Jamón, Queso, Vegetales, Papas a la Francesa",
    inStock: true
  }
];



const adicionalesDisponibles = [
  { nombre: "Salchicha Zenú", precio: 3000 },
  { nombre: "Aros de cebolla", precio: 2500 },
  { nombre: "Salchicha americana", precio: 4000 },
  { nombre: "Chorizo", precio: 4000 },
  { nombre: "Tocineta", precio: 4000 },
  { nombre: "Maíz tierno", precio: 3500 },
  { nombre: "Queso gratinado", precio: 4000 },
  { nombre: "Carne Hamburguesa", precio: 5000 },
  { nombre: "Porción de papa", precio: 12000 }
];



let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ====== ELEMENTOS ======
const cartIcon = document.querySelector(".cart-icon");

// ====== FUNCIONES ======

// Actualizar contador del carrito con animación
function updateCartBadge() {
  let badge = document.getElementById("cartCount");
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Crear badge si no existe
  if (!badge) {
    badge = document.createElement("div");
    badge.id = "cartCount";
    badge.style.position = "absolute";
    badge.style.top = "-5px";
    badge.style.right = "-5px";
    badge.style.width = "20px";
    badge.style.height = "20px";
    badge.style.background = "red";
    badge.style.color = "#fff";
    badge.style.fontSize = "12px";
    badge.style.fontWeight = "700";
    badge.style.borderRadius = "50%";
    badge.style.display = "flex";
    badge.style.justifyContent = "center";
    badge.style.alignItems = "center";
    badge.style.transition = "all 0.3s ease";
    cartIcon.style.position = "relative";
    cartIcon.appendChild(badge);
  }

  // Actualizar contador
  badge.innerText = total; // siempre muestra número, incluso 0

  // Animación solo si hay productos
  if (total > 0) {
    badge.style.transform = "scale(1.4)";
    setTimeout(() => badge.style.transform = "scale(1)", 200);
  } else {
    badge.style.transform = "scale(1)";
  }

  // Guardar en localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
}


// Agregar producto al carrito desde el botón del producto
document.querySelectorAll(".add-cart").forEach((btn, i) => {
  btn.onclick = (e) => {
    e.stopPropagation(); // Evita que abra el modal
    const product = products[i];
    const existing = cart.find(item => item.id === product.id);
    if (existing) existing.quantity++;
    else cart.push({ ...product, quantity: 1, removedIngredients: [], addedExtras: [] });

    updateCartBadge();
  };
});

// Función toggle del modal
function toggleCart() {
  let modal = document.getElementById("cartModal");
  if (modal && modal.classList.contains("active")) {
    modal.style.transform = "translateX(-50%) translateY(100%)";
    modal.style.opacity = "0";
    setTimeout(() => modal.classList.remove("active"), 300);
  } else {
    renderCart();
  }
}

// 🔹 Renderizar carrito con overlay y estilo profesional
// 🔹 Renderizar carrito con overlay y estilo profesional
function renderCart() {
  let modal = document.getElementById("cartModal");
  let overlay = document.getElementById("overlay");

  // 🟢 Crear overlay si no existe
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "overlay";
    Object.assign(overlay.style, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.45)",
      zIndex: "1500",
      opacity: "0",
      transition: "opacity 0.3s ease",
    });
    document.body.appendChild(overlay);
    setTimeout(() => (overlay.style.opacity = "1"), 10);
  }

  // 🟢 Crear modal si no existe
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "cartModal";
    Object.assign(modal.style, {
      position: "fixed",
      bottom: "70px",
      left: "50%",
      transform: "translateX(-50%) translateY(100%)",
      width: "92%",
      maxWidth: "420px",
      maxHeight: "75%",
      background: "#fff",
      borderRadius: "25px",
      boxShadow: "0 15px 30px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      overflowY: "auto",
      zIndex: "2000",
      opacity: "0",
      transition: "transform 0.35s ease, opacity 0.35s ease",
      fontFamily: "Poppins, sans-serif",
    });

    modal.innerHTML = `
      <span class="close">&times;</span>
      <h3 style="text-align:center; margin-bottom:15px; font-weight:700;">🛒 Tu carrito</h3>
      <div id="cartItemsContainer"></div>

      <div class="totals" style="text-align:right; margin-top:15px; color:#333;">
        <div style="font-size:0.9rem;">Subtotal:<br><strong id="subtotal" style="font-size:1rem;">$0</strong></div>
        <div style="font-size:0.9rem; margin-top:5px;">Total:<br><strong id="total" style="font-size:1.1rem;">$0</strong></div>
      </div>

      <div class="customer-form" style="margin-top:15px;">
        <input type="text" id="clientName" placeholder="Nombre completo">
        <input type="text" id="clientPhone" placeholder="Teléfono">
        <select id="deliveryType">
          <option value="pickup">Recoger</option>
          <option value="delivery">Domicilio</option>
        </select>
        <input type="text" id="clientAddress" placeholder="Dirección" style="display:none;">

        <!-- 🔹 Nuevo select de método de pago -->
        <select id="paymentMethod">
          <option value="efectivo">Pago en efectivo</option>
          <option value="transferencia">Transferencia bancaria</option>
        </select>
        <button id="confirmOrder">Confirmar Orden</button>
      </div>
    `;
    document.body.appendChild(modal);

    // 🔸 Botón cerrar
    const closeBtn = modal.querySelector(".close");
    Object.assign(closeBtn.style, {
      position: "absolute",
      top: "15px",
      right: "20px",
      fontSize: "1.5rem",
      color: "#999",
      cursor: "pointer",
      transition: "color 0.2s ease",
    });
    closeBtn.onmouseover = () => (closeBtn.style.color = "#000");
    closeBtn.onmouseout = () => (closeBtn.style.color = "#999");

    // 🧩 Inputs y selects
    modal.querySelectorAll("input, select").forEach(el => {
      Object.assign(el.style, {
        width: "100%",
        marginTop: "8px",
        padding: "10px 12px",
        borderRadius: "12px",
        border: "1px solid #ddd",
        fontSize: "0.95rem",
        outline: "none",
      });
      el.onfocus = () => (el.style.border = "1px solid #000");
      el.onblur = () => (el.style.border = "1px solid #ddd");
    });

    // 🟩 Botón confirmar
    const confirmBtn = modal.querySelector("#confirmOrder");
    Object.assign(confirmBtn.style, {
      marginTop: "15px",
      width: "100%",
      padding: "12px",
      borderRadius: "20px",
      border: "none",
      background: "#000",
      color: "#fff",
      fontWeight: "700",
      cursor: "pointer",
      transition: "background 0.25s",
    });
    confirmBtn.onmouseover = () => (confirmBtn.style.background = "#333");
    confirmBtn.onmouseout = () => (confirmBtn.style.background = "#000");

    // ✅ Cerrar con la X o al hacer clic fuera (igual que showCustomizeItem)
    closeBtn.onclick = () => {
      modal.remove();
      overlay.remove();
    };
    overlay.onclick = () => {
      modal.remove();
      overlay.remove();
    };
  }

  // 🟢 Mostrar modal con animación
  setTimeout(() => {
    modal.style.transform = "translateX(-50%) translateY(0)";
    modal.style.opacity = "1";
  }, 10);

  const container = document.getElementById("cartItemsContainer");
  container.innerHTML = "";

  // 🧮 Formato COP
  const formatCOP = num =>
    num.toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });

  // 🛍️ Renderizar items
  cart.forEach((item, index) => {
    const div = document.createElement("div");
    Object.assign(div.style, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 15px",
      marginBottom: "12px",
      borderRadius: "18px",
      background: "#f9f9f9",
      boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
      transition: "transform 0.2s ease",
    });
    div.onmouseover = () => (div.style.transform = "scale(1.02)");
    div.onmouseout = () => (div.style.transform = "scale(1)");

    const info = document.createElement("div");
    info.style.flex = "1";
    info.style.fontSize = "0.92rem";
    info.style.cursor = "pointer";
    info.style.lineHeight = "1.4";
    info.title = "Toca para personalizar este producto";

    info.innerHTML = `
      <strong>${item.title || item.name}</strong><br>
      ${item.removedIngredients?.length ? `<small style="color:#d63031;">Sin: ${item.removedIngredients.join(", ")}</small><br>` : ""}
      ${item.addedExtras?.length ? `<small style="color:#00b894;">Extras:<br>${item.addedExtras.map(e => `<span style="margin-left:8px; display:block;">• ${e.name} x${e.quantity} (${formatCOP(e.price)})</span>`).join("")}</small><br>` : ""}
      ${item.notes ? `<small><em style="color:#555;">Nota: ${item.notes}</em></small>` : ""}
    `;
    info.onclick = e => {
      e.stopPropagation();
      showCustomizeProduct({ ...item }, index);
    };

    const controls = document.createElement("div");
    controls.style.display = "flex";
    controls.style.alignItems = "center";
    controls.style.gap = "6px";
    controls.innerHTML = `
      <button class="decrease">-</button>
      <span>${item.quantity}</span>
      <button class="increase">+</button>
      <button class="remove">🗑️</button>
    `;

    controls.querySelector(".increase").onclick = () => {
      item.quantity++;
      renderCart();
      updateCartBadge();
    };
    controls.querySelector(".decrease").onclick = () => {
      item.quantity > 1 ? item.quantity-- : cart.splice(index, 1);
      renderCart();
      updateCartBadge();
    };
    controls.querySelector(".remove").onclick = () => {
      cart.splice(index, 1);
      renderCart();
      updateCartBadge();
    };

    controls.querySelectorAll("button").forEach(btn => {
      Object.assign(btn.style, {
        width: "28px",
        height: "28px",
        border: "none",
        borderRadius: "8px",
        background: "#eee",
        fontSize: "0.9rem",
        cursor: "pointer",
        transition: "all 0.2s",
      });
      btn.onmouseover = () => {
        btn.style.background = "#000";
        btn.style.color = "#fff";
      };
      btn.onmouseout = () => {
        btn.style.background = "#eee";
        btn.style.color = "#000";
      };
    });

    const extrasTotal = item.addedExtras?.reduce((sum, e) => sum + e.price * e.quantity, 0) || 0;
    const totalPrice = (item.price + extrasTotal) * item.quantity;
    const price = document.createElement("div");
    price.style.fontWeight = "700";
    price.style.fontSize = "0.95rem";
    price.innerText = formatCOP(totalPrice);

    div.append(info, controls, price);
    container.appendChild(div);
  });

  // 🧾 Totales
  const subtotal = cart.reduce((sum, item) => {
    const extras = item.addedExtras?.reduce((s, e) => s + e.price * e.quantity, 0) || 0;
    return sum + (item.price + extras) * item.quantity;
  }, 0);

  document.getElementById("subtotal").innerText = formatCOP(subtotal);
  document.getElementById("total").innerText = formatCOP(subtotal);

  // Mostrar dirección si aplica
  const deliverySelect = document.getElementById("deliveryType");
  const addressInput = document.getElementById("clientAddress");
  addressInput.style.display = deliverySelect.value === "delivery" ? "block" : "none";
  deliverySelect.onchange = () =>
    (addressInput.style.display = deliverySelect.value === "delivery" ? "block" : "none");

  // 🟢 Confirmar orden
 document.getElementById("confirmOrder").onclick = confirmarOrden;
  
}





// ✅ Confirmar Orden con SweetAlert y WhatsApp
function confirmarOrden() {
  if (cart.length === 0) {
     alert("Tu Carrito está Vacio. ❌👀​");
    return;
  }

  const nombre = document.getElementById("clientName").value.trim();
  const telefono = document.getElementById("clientPhone").value.trim();
  const tipoEntrega = document.getElementById("deliveryType").value;
  const direccion = document.getElementById("clientAddress").value.trim();
  const metodoPago = document.getElementById("paymentMethod").value;
  const total = document.getElementById("total").innerText;

  if (!nombre || !telefono || (tipoEntrega === "delivery" && !direccion)) {
  alert("Tus datos están incompletos. 😱​❌👀​");
    return;
  }

  // 🧾 Construir mensaje con el pedido
  let mensaje = `🌟 *Nuevo pedido recibido en Mao Burger* 🌟\n\n`;
  mensaje += `👤 *Nombre:* ${nombre}\n📞 *Teléfono:* ${telefono}\n`;
  if (tipoEntrega === "delivery") {
    mensaje += `🚚 *Tipo de entrega:* Domicilio\n🏠 *Dirección:* ${direccion}\n`;
  } else {
    mensaje += `🏃 *Tipo de entrega:* Recoge en el local\n`;
  }
  mensaje += `💳 *Método de pago:* ${metodoPago}\n\n`;
  mensaje += `🛒 *Detalle del pedido:*\n`;

  cart.forEach((item) => {
    const extrasTotal = item.addedExtras?.reduce((sum, e) => sum + e.price * e.quantity, 0) || 0;
    const totalItem = (item.price + extrasTotal) * item.quantity;

    mensaje += `\n🍔 *${item.title}* x${item.quantity}\n💰 ${totalItem.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0
    })}\n`;

    if (item.removedIngredients?.length) {
      mensaje += `🧂 Sin: ${item.removedIngredients.join(", ")}\n`;
    }

    if (item.addedExtras?.length) {
      mensaje += `➕ *Adicionales:*\n`;
      item.addedExtras.forEach(ex => {
        mensaje += `   • ${ex.name} x${ex.quantity} (${ex.price.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
          maximumFractionDigits: 0
        })})\n`;
      });
    }

    if (item.notes) {
      mensaje += `📝 Nota: ${item.notes}\n`;
    }
  });

  mensaje += `\n💵 *Total a pagar:* ${total}\n`;
  mensaje += `\n🙏 ¡Gracias por tu compra! Te contactaremos pronto para confirmar tu pedido.`;

  const numeroNegocio = "573123022548";
  const mensajeCodificado = encodeURIComponent(mensaje);
  const linkWhatsApp = `https://wa.me/${numeroNegocio}?text=${mensajeCodificado}`;

  // ✅ SweetAlert de confirmación (sin temporizador)
  // Swal.fire({
  //   icon: "success",
  //   title: "¡Orden confirmada! 🎉",
  //   text: "serás dirigido a Whatsapp."
  // });

  alert("Tu pedido ha sido ordenado Correctamente. Te llevaremos a WhatsApp para confirmar tu orden ✅​🍔​");
  
      // 🔹 Abrir WhatsApp
      window.open(linkWhatsApp, "_blank");

      // 🔹 Limpiar carrito
      cart = [];
      updateCartBadge();
      localStorage.removeItem("cart");

      // 🔹 Cerrar modal y overlay si existen
      const modal = document.getElementById("cartModal");
      const overlay = document.getElementById("overlay");
      if (modal) modal.remove();
      if (overlay) overlay.remove();
}










// Click en header y menu inferior abre modal
cartIcon.onclick = toggleCart;
document.querySelectorAll(".bottom-menu .menu-item").forEach(item=>{
  item.onclick = ()=>{
    document.querySelectorAll(".bottom-menu .menu-item").forEach(i=>i.classList.remove("active"));
    item.classList.add("active");
    if(item.innerText.includes("🛒")) toggleCart();
  }
});

updateCartBadge();


// Contenedor donde se mostrarán los productos
const productsContainer = document.querySelector(".products");

// Función para renderizar productos
function renderProducts() {
  productsContainer.innerHTML = ""; // Limpiar antes de renderizar

  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";

    // Contenido de la tarjeta
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" style="width:100%; border-radius:12px; cursor:pointer;">
      <h3 style="margin:8px 0 4px 0; font-size:1rem;">${product.title}</h3>
      <p style="font-size:0.85rem; color:#555; height:34px; overflow:hidden;">${product.description}</p>
      <div class="price-cart" style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
        <span class="price" style="font-weight:700;">$${product.price.toLocaleString()}</span>
        <div class="add-cart" data-index="${index}" style="cursor:pointer; font-size:1.2rem;">🛒</div>
      </div>
    `;

    productsContainer.appendChild(card);

    // Click en imagen = mostrar info del producto
    card.querySelector("img").onclick = () => showProductInfo(product);

    // Click en carrito = mostrar personalización
    card.querySelector(".add-cart").onclick = (e) => {
      e.stopPropagation(); // prevenir que abra modal info
      showCustomizeProduct(product);
    };
  });
}

// Ejecutar renderizado al cargar la página
document.addEventListener("DOMContentLoaded", renderProducts);


// Ejecutar renderizado al cargar la página
document.addEventListener("DOMContentLoaded", renderProducts);



function showProductInfo(product) {
  const modalsContainer = document.getElementById("modalsContainer");
  const existing = modalsContainer.querySelector(".modal");
  if (existing) existing.remove();

  let modal = document.createElement("div");
  modal.className = "modal";

  Object.assign(modal.style, {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(0.9)",
    width: "90%",
    maxWidth: "360px",
    maxHeight: "75vh",
    background: "#fff",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: "2000",
    overflowY: "auto",
    opacity: "0",
    transition: "opacity 0.3s ease, transform 0.3s ease",
  });

  modal.innerHTML = `
    <span class="close" style="position:absolute; top:12px; right:15px; font-size:1.4rem; color:#888; cursor:pointer;">&times;</span>
    <h3 style="margin-bottom:10px;">${product.title}</h3>
    <img src="${product.image}" alt="${product.title}" style="width:100%; border-radius:12px;">
    <p style="font-size:0.95rem;">${product.description}</p>
    <p style="font-size:0.95rem;"><strong>Precio:</strong> $${product.price.toLocaleString()}</p>
    <p style="font-size:0.95rem; color:${product.inStock ? "green" : "red"};"><strong>${product.inStock ? "Disponible" : "Agotado"}</strong></p>
  `;

  modalsContainer.appendChild(modal);

  setTimeout(() => {
    modal.style.opacity = "1";
    modal.style.transform = "translate(-50%, -50%) scale(1)";
  }, 10);

  const closeBtn = modal.querySelector(".close");
  closeBtn.onmouseover = () => closeBtn.style.color = "#000";
  closeBtn.onmouseout = () => closeBtn.style.color = "#888";
  closeBtn.onclick = () => modal.remove();
  modal.onclick = e => { if (e.target === modal) modal.remove(); };
}




// 🔹 Modal para personalizar producto
// 🔹 Modal para personalizar producto
function showCustomizeProduct(product, index = null) {
  const existing = document.querySelector(".modal");
  if (existing) existing.remove();

  const baseProduct = products.find(p => p.id === product.id) || product;
  const ingredients = baseProduct.description
    ? baseProduct.description.split(",").map(i => i.trim())
    : [];
  const removedIngredients = [...(product.removedIngredients || [])];
  const existingExtras = product.addedExtras || [];
  const notes = product.notes || "";

  const modal = document.createElement("div");
  modal.className = "modal";

  Object.assign(modal.style, {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(0.9)",
    width: "90%",
    maxWidth: "400px",
    maxHeight: "80vh",
    background: "#fff",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: "3000",
    overflowY: "auto",
    opacity: "0",
    transition: "opacity 0.3s ease, transform 0.3s ease",
    fontFamily: "Poppins, sans-serif"
  });

  modal.innerHTML = `
    <span class="close">&times;</span>
    <h3 style="margin-bottom:10px;">${product.title}</h3>

    <h4 style="margin-top:5px;">Selecciona los ingredientes</h4>
    <div id="ingredientsContainer"></div>

    <h4 style="margin-top:10px;">Adicionales</h4>
    <div id="extrasContainer"></div>

    <textarea 
      id="customNotes" 
      placeholder="Notas adicionales..."
      style="
        width: 100%;
        min-height: 160px;
        padding: 14px;
        border-radius: 16px;
        border: 1px solid #ccc;
        background: #f7f7f7;
        font-size: 1rem;
        resize: vertical;
        outline: none;
        transition: all 0.2s ease;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
      "
    >${notes}</textarea>

    <div style="margin-top:10px; text-align:right; font-weight:600;">
      Subtotal: <span id="customSubtotal">$${product.price.toLocaleString()}</span>
    </div>

    <button id="saveProductBtn" style="
      margin-top:15px; 
      width:100%; 
      padding:12px; 
      border:none; 
      border-radius:20px; 
      background:#000; 
      color:#fff; 
      font-weight:700; 
      cursor:pointer;
      transition: background 0.3s ease;
    ">${index !== null ? "Actualizar producto" : "Agregar al carrito"}</button>
  `;

  document.body.appendChild(modal);

  // Animación de entrada
  setTimeout(() => {
    modal.style.opacity = "1";
    modal.style.transform = "translate(-50%, -50%) scale(1)";
  }, 10);

  // Cerrar modal
  modal.querySelector(".close").onclick = () => modal.remove();
  modal.onclick = e => { if (e.target === modal) modal.remove(); };

  const ingredientsContainer = modal.querySelector("#ingredientsContainer");
  const extrasContainer = modal.querySelector("#extrasContainer");
  const subtotalEl = modal.querySelector("#customSubtotal");

  // ✅ Ingredientes con checkboxes
  ingredients.forEach(ing => {
    const label = document.createElement("label");
    Object.assign(label.style, {
      display: "block",
      fontSize: "0.95rem",
      marginBottom: "6px",
      cursor: "pointer"
    });

    const checked = !removedIngredients.includes(ing);
    label.innerHTML = `<input type="checkbox" ${checked ? "checked" : ""} style="margin-right:6px;"> ${ing}`;
    const checkbox = label.querySelector("input");

    checkbox.onchange = () => {
      if (!checkbox.checked) removedIngredients.push(ing);
      else removedIngredients.splice(removedIngredients.indexOf(ing), 1);
    };

    ingredientsContainer.appendChild(label);
  });

  // ✅ Renderizar adicionales con cantidad
  const extras = adicionalesDisponibles.map(e => {
    const found = existingExtras.find(x => x.name === e.nombre);
    return { ...e, quantity: found ? found.quantity : 0 };
  });

  extras.forEach(extra => {
    const div = document.createElement("div");
    Object.assign(div.style, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "6px"
    });

    div.innerHTML = `
      <span style="font-size:0.95rem;">${extra.nombre} ($${extra.precio.toLocaleString()})</span>
      <div>
        <button class="minus" style="width:28px;height:28px;border:none;border-radius:8px;background:#eee;">-</button>
        <span class="qty" style="margin:0 8px;">${extra.quantity}</span>
        <button class="plus" style="width:28px;height:28px;border:none;border-radius:8px;background:#eee;">+</button>
      </div>
    `;

    const qtySpan = div.querySelector(".qty");
    div.querySelector(".plus").onclick = () => { extra.quantity++; qtySpan.innerText = extra.quantity; calculateSubtotal(); };
    div.querySelector(".minus").onclick = () => { if (extra.quantity > 0) extra.quantity--; qtySpan.innerText = extra.quantity; calculateSubtotal(); };

    extrasContainer.appendChild(div);
  });

  function calculateSubtotal() {
    let total = product.price;
    extras.forEach(e => total += e.precio * e.quantity);
    subtotalEl.innerText = `$${total.toLocaleString()}`;
  }
  calculateSubtotal();

  // ✅ Guardar producto personalizado
  modal.querySelector("#saveProductBtn").onclick = () => {
    const addedExtras = extras.filter(e => e.quantity > 0).map(e => ({
      name: e.nombre,
      price: e.precio,
      quantity: e.quantity
    }));

    const notes = modal.querySelector("#customNotes").value;

    const updatedItem = {
      ...product,
      removedIngredients,
      addedExtras,
      notes
    };

    if (index !== null) cart[index] = { ...cart[index], ...updatedItem };
    else cart.push({ ...updatedItem, quantity: 1 });

    updateCartBadge();
    renderCart();
    modal.remove();
  };
}





