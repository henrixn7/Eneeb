let baseProducts = [
  {
    id: 1,
    nome: "Camisa Vermelha Premium",
    categoria: "camisas",
    preco: 129.90,
    imagem: "imagens/camisa-vermelha.png",
    desc: "Camisa masculina vermelha com caimento premium.",
    tag: "Premium",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 2,
    nome: "Tênis Casual Branco",
    categoria: "calcados",
    preco: 219.90,
    imagem: "imagens/tenis-branco.png",
    desc: "Tênis casual moderno para compor looks elegantes.",
    tag: "Novo",
    tamanhos: ["38", "39", "40", "41", "42"]
  },
  {
    id: 3,
    nome: "Calças Premium",
    categoria: "calcas",
    preco: 139.90,
    imagem: "imagens/calcas.png",
    desc: "Calças masculinas em várias cores.",
    tag: "Mais vendido",
    tamanhos: ["38", "40", "42", "44"]
  },
  {
    id: 4,
    nome: "Calça Preta Slim",
    categoria: "calcas",
    preco: 139.90,
    imagem: "imagens/calcapreta.png",
    desc: "Calça preta com visual elegante e versátil.",
    tag: "Clássico",
    tamanhos: ["38", "40", "42", "44"]
  },
  {
    id: 5,
    nome: "Look Preto e Verde",
    categoria: "looks",
    preco: 169.90,
    imagem: "imagens/lookpretoeverde.png",
    desc: "Combinação pronta para o dia a dia.",
    tag: "Look",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 6,
    nome: "Short Azul",
    categoria: "calcas",
    preco: 89.90,
    imagem: "imagens/shortazul.png",
    desc: "Short azul confortável para dias quentes.",
    tag: "Verão",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 7,
    nome: "Camiseta Regata Branca",
    categoria: "camisas",
    preco: 69.90,
    imagem: "imagens/camisetabranca.png",
    desc: "Regata branca básica premium.",
    tag: "Básico",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 8,
    nome: "Camiseta Regata Marrom",
    categoria: "camisas",
    preco: 69.90,
    imagem: "imagens/camisetamarrom.png",
    desc: "Regata marrom com caimento moderno.",
    tag: "Premium",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 9,
    nome: "Camiseta Verde",
    categoria: "camisas",
    preco: 79.90,
    imagem: "imagens/camisetaverde.png",
    desc: "Camiseta verde masculina estilo casual premium.",
    tag: "Novo",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 10,
    nome: "Look Casual Verde",
    categoria: "looks",
    preco: 169.90,
    imagem: "imagens/lookblusaverde.png",
    desc: "Look com camiseta verde e calça clara.",
    tag: "Look",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 11,
    nome: "Look Casual Vermelho",
    categoria: "looks",
    preco: 169.90,
    imagem: "imagens/lookblusavermelha.png",
    desc: "Look com camiseta vermelha e jeans.",
    tag: "Look",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 12,
    nome: "Look Casual Amarelo",
    categoria: "looks",
    preco: 169.90,
    imagem: "imagens/lookblusaamarela.png",
    desc: "Look moderno com camiseta amarela.",
    tag: "Look",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 13,
    nome: "Bonés Premium",
    categoria: "acessorios",
    preco: 79.90,
    imagem: "imagens/bones.png",
    desc: "Bonés em várias cores para completar seu visual.",
    tag: "Acessório",
    tamanhos: ["Único"]
  },
  {
    id: 14,
    nome: "Look Vinho Premium",
    categoria: "looks",
    preco: 299.90,
    imagem: "imagens/lookvinho.png",
    desc: "Conjunto vinho elegante e marcante.",
    tag: "Premium",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 15,
    nome: "Look Praia Masculino",
    categoria: "looks",
    preco: 159.90,
    imagem: "imagens/lookpraia.png",
    desc: "Look leve para verão e praia.",
    tag: "Verão",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 16,
    nome: "Tênis Social Marrom",
    categoria: "calcados",
    preco: 249.90,
    imagem: "imagens/teniskchute.png",
    desc: "Sapato/tênis marrom de visual sofisticado.",
    tag: "Elegante",
    tamanhos: ["38", "39", "40", "41", "42"]
  }
];

const adminProducts = [];
let products = [...baseProducts, ...adminProducts];

const productsContainer = document.getElementById("products");
const filters = document.querySelectorAll(".filter");
const searchInput = document.getElementById("searchInput");

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

const openCart = document.getElementById("openCart");
const openCartCta = document.getElementById("openCartCta");
const closeCart = document.getElementById("closeCart");
const cartPanel = document.getElementById("cartPanel");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const clearCartBtn = document.getElementById("clearCart");

const productModal = document.getElementById("productModal");
const closeProductModal = document.getElementById("closeProductModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalTag = document.getElementById("modalTag");
const modalSizes = document.getElementById("modalSizes");
const modalPrice = document.getElementById("modalPrice");
const modalAddCart = document.getElementById("modalAddCart");
const modalWhatsapp = document.getElementById("modalWhatsapp");
let currentModalProductId = null;


let activeCategory = "todos";
let cart = JSON.parse(localStorage.getItem("eneebCart")) || [];
let favorites = JSON.parse(localStorage.getItem("eneebFavorites")) || [];

function formatPrice(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function normalizeProduct(product) {
  return {
    ...product,
    status: product.status || "disponivel",
    promocao: !!product.promocao,
    lancamento: !!product.lancamento
  };
}

for (let i = 0; i < products.length; i++) {
  products[i] = normalizeProduct(products[i]);
}

async function loadOnlineProducts() {
  try {
    const onlineProducts = await getProductsFromSupabase();

    const formattedOnline = (onlineProducts || []).map(product => normalizeProduct({
      ...product,
      preco: Number(product.preco),
      tamanhos: typeof product.tamanhos === "string"
        ? product.tamanhos.split(",").map(item => item.trim()).filter(Boolean)
        : product.tamanhos
    }));

    // Mostra os produtos padrão do site + os produtos cadastrados online no painel.
    products = [
      ...baseProducts.map(product => normalizeProduct(product)),
      ...formattedOnline
    ];

    renderProducts();
    renderFavorites();
  } catch (error) {
    console.error("Erro ao carregar produtos online:", error);

    // Se o Supabase falhar, mantém os produtos padrão do site.
    products = baseProducts.map(product => normalizeProduct(product));

    renderProducts();
    renderFavorites();
  }
}


function saveCart() {
  localStorage.setItem("eneebCart", JSON.stringify(cart));
}

function renderProducts() {
  const search = searchInput.value.toLowerCase().trim();

  let list = products.filter(product => {
    const matchCategory = activeCategory === "todos" || product.categoria === activeCategory;
    const matchSearch = product.nome.toLowerCase().includes(search) || product.desc.toLowerCase().includes(search);
    return matchCategory && matchSearch;
  });

  productsContainer.innerHTML = "";

  if (list.length === 0) {
    productsContainer.innerHTML = `<div class="empty">Nenhum produto encontrado.</div>`;
    return;
  }

  list.forEach(product => {
    const sizes = product.tamanhos.map(size => `<span>${size}</span>`).join("");

    const card = document.createElement("div");
    card.className = "card reveal show";
    card.innerHTML = `
      <div class="card-img">
        <span class="product-tag ${product.status === "esgotado" ? "sold-tag" : ""}">${product.status === "esgotado" ? "Esgotado" : product.tag}</span>
        ${product.promocao ? '<span class="promo-tag-card">Promoção</span>' : ''}
        ${product.lancamento ? '<span class="launch-tag-card">Lançamento</span>' : ''}
        <button class="favorite-btn ${isFavorite(product.id) ? "active" : ""}" onclick="event.stopPropagation(); toggleFavorite(${product.id})">♥</button>
        <img src="${product.imagem}" alt="${product.nome}">
      </div>

      <div class="card-body">
        <h3>${product.nome}</h3>
        <small>${product.desc}</small>

        <div class="sizes">${sizes}</div>

        <div class="price">${formatPrice(product.preco)}</div>

        <a class="add-btn product-page-link" href="produto.html?id=${product.id}">
          Abrir página premium
        </a>
        <button class="add-btn secondary-add" onclick="openProductModal(${product.id})">
          Ver popup rápido
        </button>
        ${
          product.status === "esgotado"
            ? '<button class="add-btn disabled-btn" disabled>Produto esgotado</button>'
            : `<button class="add-btn secondary-add" onclick="addToCart(${product.id})">Adicionar ao carrinho</button>`
        }
      </div>
    `;

    productsContainer.appendChild(card);
  });
}

function addToCart(id) {
  const product = products.find(item => item.id === id);

  if (!product || product.status === "esgotado") {
    alert("Este produto está esgotado.");
    return;
  }

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qtd++;
  } else {
    cart.push({
      ...product,
      qtd: 1
    });
  }

  saveCart();
  updateCart();
  openCartPanel();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCart();
}

function changeQuantity(id, action) {
  const item = cart.find(product => product.id === id);

  if (!item) return;

  if (action === "plus") {
    item.qtd++;
  }

  if (action === "minus") {
    item.qtd--;

    if (item.qtd <= 0) {
      removeFromCart(id);
      return;
    }
  }

  saveCart();
  updateCart();
}

function updateCart() {
  const count = cart.reduce((sum, item) => sum + item.qtd, 0);
  const total = cart.reduce((sum, item) => sum + item.preco * item.qtd, 0);

  cartCount.textContent = count;
  cartTotal.textContent = formatPrice(total);

  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `<div class="cart-empty">Seu carrinho está vazio.</div>`;
    return;
  }

  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}">

      <div>
        <h3>${item.nome}</h3>
        <p>${formatPrice(item.preco)}</p>

        <div class="cart-controls">
          <button onclick="changeQuantity(${item.id}, 'minus')">-</button>
          <span>${item.qtd}</span>
          <button onclick="changeQuantity(${item.id}, 'plus')">+</button>
          <button class="remove" onclick="removeFromCart(${item.id})">Remover</button>
        </div>
      </div>
    `;

    cartItems.appendChild(div);
  });
}

function checkout() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.preco * item.qtd, 0);

  let message = "Olá, vim pelo site da Eneeb e quero fazer este pedido:%0A%0A";

  cart.forEach(item => {
    message += `• ${item.nome}%0A`;
    message += `Quantidade: ${item.qtd}%0A`;
    message += `Preço: ${formatPrice(item.preco)}%0A`;
    message += `Tamanho: informar no atendimento%0A%0A`;
  });

  message += `Total aproximado: ${formatPrice(total)}%0A%0A`;
  message += "Pode me confirmar disponibilidade, tamanhos e forma de pagamento?";

  window.open(`https://wa.me/5531985185956?text=${message}`, "_blank");
}

function openCartPanel() {
  cartPanel.classList.add("open");
  overlay.classList.add("open");
  document.body.classList.add("no-scroll");
}

function closeCartPanel() {
  cartPanel.classList.remove("open");
  overlay.classList.remove("open");
  document.body.classList.remove("no-scroll");
}


function saveFavorites() {
  localStorage.setItem("eneebFavorites", JSON.stringify(favorites));
}

function isFavorite(id) {
  return favorites.includes(id);
}

function toggleFavorite(id) {
  if (isFavorite(id)) {
    favorites = favorites.filter(itemId => itemId !== id);
  } else {
    favorites.push(id);
  }

  saveFavorites();
  renderProducts();
  renderFavorites();
}

function renderFavorites() {
  const favoritesGrid = document.getElementById("favoritesGrid");
  if (!favoritesGrid) return;

  const list = products.filter(product => favorites.includes(product.id));
  favoritesGrid.innerHTML = "";

  if (list.length === 0) {
    favoritesGrid.innerHTML = `
      <div class="favorite-empty">
        <strong>Nenhum favorito ainda</strong>
        Clique no coração dos produtos para salvar suas peças preferidas.
      </div>
    `;
    return;
  }

  list.forEach(product => {
    const sizes = product.tamanhos.map(size => `<span>${size}</span>`).join("");

    const card = document.createElement("div");
    card.className = "card reveal show";
    card.innerHTML = `
      <div class="card-img">
        <span class="product-tag ${product.status === "esgotado" ? "sold-tag" : ""}">${product.status === "esgotado" ? "Esgotado" : product.tag}</span>
        ${product.promocao ? '<span class="promo-tag-card">Promoção</span>' : ''}
        ${product.lancamento ? '<span class="launch-tag-card">Lançamento</span>' : ''}
        <button class="favorite-btn active" onclick="toggleFavorite(${product.id})">♥</button>
        <img src="${product.imagem}" alt="${product.nome}">
      </div>

      <div class="card-body">
        <h3>${product.nome}</h3>
        <small>${product.desc}</small>
        <div class="sizes">${sizes}</div>
        <div class="price">${formatPrice(product.preco)}</div>
        <a class="add-btn product-page-link" href="produto.html?id=${product.id}">
          Abrir página premium
        </a>
        <button class="add-btn secondary-add" onclick="openProductModal(${product.id})">
          Ver popup rápido
        </button>
        ${
          product.status === "esgotado"
            ? '<button class="add-btn disabled-btn" disabled>Produto esgotado</button>'
            : `<button class="add-btn secondary-add" onclick="addToCart(${product.id})">Adicionar ao carrinho</button>`
        }
      </div>
    `;

    favoritesGrid.appendChild(card);
  });
}

function checkoutFavorites() {
  const list = products.filter(product => favorites.includes(product.id));

  if (list.length === 0) {
    alert("Você ainda não tem favoritos.");
    return;
  }

  let message = "Olá, vim pelo site da Eneeb e gostei dessas peças:%0A%0A";

  list.forEach(item => {
    message += `• ${item.nome} - ${formatPrice(item.preco)}%0A`;
  });

  message += "%0APode me confirmar disponibilidade e tamanhos?";

  window.open(`https://wa.me/5531985185956?text=${message}`, "_blank");
}

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    activeCategory = button.dataset.category;
    renderProducts();
  });
});

searchInput.addEventListener("input", renderProducts);

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

openCart.addEventListener("click", openCartPanel);
openCartCta.addEventListener("click", openCartPanel);
closeCart.addEventListener("click", closeCartPanel);
overlay.addEventListener("click", closeCartPanel);
checkoutBtn.addEventListener("click", checkout);

clearCartBtn.addEventListener("click", () => {
  cart = [];
  saveCart();
  updateCart();
});

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", () => {
  loadOnlineProducts();
  updateCart();
  revealOnScroll();

  setTimeout(() => {
    document.getElementById("loader").classList.add("hide");
  }, 650);
});


function openProductModal(id) {
  const product = products.find(item => item.id === id);

  if (!product) return;

  currentModalProductId = id;

  modalImage.src = product.imagem;
  modalImage.alt = product.nome;
  modalTitle.textContent = product.nome;
  modalDesc.textContent = product.desc;
  modalTag.textContent = product.tag;
  modalPrice.textContent = formatPrice(product.preco);
  modalTag.textContent = product.status === "esgotado" ? "Esgotado" : product.tag;
  modalTag.className = product.status === "esgotado" ? "modal-tag sold-modal-tag" : "modal-tag";

  modalSizes.innerHTML = product.tamanhos.map(size => `<span>${size}</span>`).join("");

  if (product.status === "esgotado") {
    modalAddCart.disabled = true;
    modalAddCart.textContent = "Produto esgotado";
    modalWhatsapp.textContent = "Consultar reposição";
  } else {
    modalAddCart.disabled = false;
    modalAddCart.textContent = "Adicionar ao carrinho";
    modalWhatsapp.textContent = "Comprar no WhatsApp";
  }

  const msg = `Olá, tenho interesse no produto: ${product.nome} - ${formatPrice(product.preco)}`;
  modalWhatsapp.href = `https://wa.me/5531985185956?text=${encodeURIComponent(msg)}`;

  productModal.classList.add("open");
  document.body.classList.add("no-scroll");
}

function closeProductModalFn() {
  productModal.classList.remove("open");
  document.body.classList.remove("no-scroll");
}

if (closeProductModal) {
  closeProductModal.addEventListener("click", closeProductModalFn);
}

if (productModal) {
  productModal.addEventListener("click", (event) => {
    if (event.target === productModal) {
      closeProductModalFn();
    }
  });
}

if (modalAddCart) {
  modalAddCart.addEventListener("click", () => {
    if (currentModalProductId) {
      addToCart(currentModalProductId);
      closeProductModalFn();
    }
  });
}


// Header inteligente + parallax leve
const headerPremium = document.querySelector(".header");
const videoHero = document.querySelector(".video-hero");
const heroContentPremium = document.querySelector(".hero-content");
const heroCardPremium = document.querySelector(".hero-card");

function premiumScrollEffects() {
  const y = window.scrollY;

  if (headerPremium) {
    headerPremium.classList.toggle("scrolled", y > 30);
  }

  if (videoHero && y < window.innerHeight) {
    if (heroContentPremium) {
      heroContentPremium.style.transform = `translateY(${y * 0.08}px)`;
    }

    if (heroCardPremium) {
      heroCardPremium.style.transform = `translateY(${y * 0.05}px)`;
    }
  }
}

window.addEventListener("scroll", premiumScrollEffects);
window.addEventListener("load", premiumScrollEffects);

// Hover premium com movimento nos cards
document.addEventListener("mousemove", (event) => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const inside =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    if (!inside) {
      card.style.transform = "";
      return;
    }

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 7;
    const rotateX = ((y / rect.height) - 0.5) * -7;

    card.style.transform = `translateY(-12px) scale(1.015) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
});
