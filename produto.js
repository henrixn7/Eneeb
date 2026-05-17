let baseProducts = [
  {
    id: 1,
    nome: "Camisa Vermelha Premium",
    categoria: "camisas",
    preco: 129.90,
    imagem: "imagens/camisa-vermelha.png",
    galeria: ["imagens/camisa-vermelha.png", "imagens/lookblusavermelha.png", "imagens/calcas.png"],
    desc: "Camisa masculina vermelha com caimento premium, ideal para montar looks marcantes e elegantes.",
    tag: "Premium",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 2,
    nome: "Tênis Casual Branco",
    categoria: "calcados",
    preco: 219.90,
    imagem: "imagens/tenis-branco.png",
    galeria: ["imagens/tenis-branco.png", "imagens/lookpraia.png", "imagens/calcas.png"],
    desc: "Tênis casual branco moderno, perfeito para compor looks masculinos limpos e sofisticados.",
    tag: "Novo",
    tamanhos: ["38", "39", "40", "41", "42"]
  },
  {
    id: 3,
    nome: "Calças Premium",
    categoria: "calcas",
    preco: 139.90,
    imagem: "imagens/calcas.png",
    galeria: ["imagens/calcas.png", "imagens/calcapreta.png", "imagens/lookpretoeverde.png"],
    desc: "Calças masculinas versáteis para usar no dia a dia, com visual moderno e elegante.",
    tag: "Mais vendido",
    tamanhos: ["38", "40", "42", "44"]
  },
  {
    id: 4,
    nome: "Calça Preta Slim",
    categoria: "calcas",
    preco: 139.90,
    imagem: "imagens/calcapreta.png",
    galeria: ["imagens/calcapreta.png", "imagens/calcas.png", "imagens/lookpretoeverde.png"],
    desc: "Calça preta slim com visual sofisticado e fácil de combinar com várias peças.",
    tag: "Clássico",
    tamanhos: ["38", "40", "42", "44"]
  },
  {
    id: 5,
    nome: "Look Preto e Verde",
    categoria: "looks",
    preco: 169.90,
    imagem: "imagens/lookpretoeverde.png",
    galeria: ["imagens/lookpretoeverde.png", "imagens/camisetaverde.png", "imagens/calcapreta.png"],
    desc: "Look casual premium com combinação moderna em tons preto e verde.",
    tag: "Look",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 6,
    nome: "Short Azul",
    categoria: "calcas",
    preco: 89.90,
    imagem: "imagens/shortazul.png",
    galeria: ["imagens/shortazul.png", "imagens/lookpraia.png", "imagens/tenis-branco.png"],
    desc: "Short azul confortável, ideal para dias quentes, praia e combinações leves.",
    tag: "Verão",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 7,
    nome: "Camiseta Regata Branca",
    categoria: "camisas",
    preco: 69.90,
    imagem: "imagens/camisetabranca.png",
    galeria: ["imagens/camisetabranca.png", "imagens/camisetamarrom.png", "imagens/lookpraia.png"],
    desc: "Regata branca básica premium para montar looks leves e estilosos.",
    tag: "Básico",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 8,
    nome: "Camiseta Regata Marrom",
    categoria: "camisas",
    preco: 69.90,
    imagem: "imagens/camisetamarrom.png",
    galeria: ["imagens/camisetamarrom.png", "imagens/camisetabranca.png", "imagens/lookpraia.png"],
    desc: "Regata marrom com caimento moderno e visual elegante para o verão.",
    tag: "Premium",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 9,
    nome: "Camiseta Verde",
    categoria: "camisas",
    preco: 79.90,
    imagem: "imagens/camisetaverde.png",
    galeria: ["imagens/camisetaverde.png", "imagens/lookblusaverde.png", "imagens/calcas.png"],
    desc: "Camiseta verde masculina, perfeita para looks casuais com presença.",
    tag: "Novo",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 10,
    nome: "Look Casual Verde",
    categoria: "looks",
    preco: 169.90,
    imagem: "imagens/lookblusaverde.png",
    galeria: ["imagens/lookblusaverde.png", "imagens/camisetaverde.png", "imagens/calcas.png"],
    desc: "Look casual verde com combinação pronta para usar com estilo.",
    tag: "Look",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 11,
    nome: "Look Casual Vermelho",
    categoria: "looks",
    preco: 169.90,
    imagem: "imagens/lookblusavermelha.png",
    galeria: ["imagens/lookblusavermelha.png", "imagens/camisa-vermelha.png", "imagens/calcas.png"],
    desc: "Look vermelho casual para quem quer um visual forte e moderno.",
    tag: "Look",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 12,
    nome: "Look Casual Amarelo",
    categoria: "looks",
    preco: 169.90,
    imagem: "imagens/lookblusaamarela.png",
    galeria: ["imagens/lookblusaamarela.png", "imagens/calcas.png", "imagens/tenis-branco.png"],
    desc: "Look amarelo moderno, ideal para destacar o visual com personalidade.",
    tag: "Look",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 13,
    nome: "Bonés Premium",
    categoria: "acessorios",
    preco: 79.90,
    imagem: "imagens/bones.png",
    galeria: ["imagens/bones.png", "imagens/lookpretoeverde.png", "imagens/lookpraia.png"],
    desc: "Bonés premium em várias cores para completar seu look Eneeb.",
    tag: "Acessório",
    tamanhos: ["Único"]
  },
  {
    id: 14,
    nome: "Look Vinho Premium",
    categoria: "looks",
    preco: 299.90,
    imagem: "imagens/lookvinho.png",
    galeria: ["imagens/lookvinho.png", "imagens/camisa-vermelha.png", "imagens/teniskchute.png"],
    desc: "Look vinho premium, elegante e marcante para ocasiões especiais.",
    tag: "Premium",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 15,
    nome: "Look Praia Masculino",
    categoria: "looks",
    preco: 159.90,
    imagem: "imagens/lookpraia.png",
    galeria: ["imagens/lookpraia.png", "imagens/shortazul.png", "imagens/camisetabranca.png"],
    desc: "Look praia masculino leve, confortável e estiloso para dias quentes.",
    tag: "Verão",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 16,
    nome: "Tênis Social Marrom",
    categoria: "calcados",
    preco: 249.90,
    imagem: "imagens/teniskchute.png",
    galeria: ["imagens/teniskchute.png", "imagens/lookvinho.png", "imagens/calcapreta.png"],
    desc: "Tênis social marrom com visual sofisticado para looks mais elegantes.",
    tag: "Elegante",
    tamanhos: ["38", "39", "40", "41", "42"]
  }
];

const adminProducts = [];
let products = [...baseProducts, ...adminProducts].map(product => ({
  ...product,
  status: product.status || "disponivel",
  promocao: !!product.promocao,
  lancamento: !!product.lancamento,
  galeria: product.galeria || [product.imagem]
}));

function formatPrice(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("id")) || 14;
}

const product = products.find(item => item.id === getProductId()) || products[13];

document.title = `${product.nome} | Eneeb`;

const mainImage = document.getElementById("mainImage");
const thumbs = document.getElementById("thumbs");
const title = document.getElementById("title");
const desc = document.getElementById("desc");
const price = document.getElementById("price");
const tag = document.getElementById("tag");
const sizes = document.getElementById("sizes");
const whatsappBtn = document.getElementById("whatsappBtn");
const addCart = document.getElementById("addCart");
const relatedGrid = document.getElementById("relatedGrid");
const longDesc = document.getElementById("longDesc");

mainImage.src = product.imagem;
mainImage.alt = product.nome;
title.textContent = product.nome;
desc.textContent = product.desc;
longDesc.textContent = `${product.desc} Uma peça selecionada pela Eneeb para entregar estilo, presença e versatilidade no guarda-roupa masculino.`;
price.textContent = formatPrice(product.preco);
tag.textContent = product.tag;

sizes.innerHTML = product.tamanhos.map((size, index) => {
  return `<button class="${index === 0 ? "active" : ""}">${size}</button>`;
}).join("");

document.querySelectorAll(".sizes button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".sizes button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

thumbs.innerHTML = product.galeria.map((img, index) => {
  return `<img src="${img}" class="${index === 0 ? "active" : ""}" alt="${product.nome}">`;
}).join("");

document.querySelectorAll(".thumbs img").forEach(img => {
  img.addEventListener("click", () => {
    mainImage.src = img.src;
    document.querySelectorAll(".thumbs img").forEach(item => item.classList.remove("active"));
    img.classList.add("active");
  });
});

function selectedSize() {
  const active = document.querySelector(".sizes button.active");
  return active ? active.textContent : "A confirmar";
}

function whatsappLink() {
  const msg = `Olá, tenho interesse no produto: ${product.nome} - ${formatPrice(product.preco)}. Tamanho: ${selectedSize()}. Pode confirmar disponibilidade?`;
  return `https://wa.me/5531985185956?text=${encodeURIComponent(msg)}`;
}

whatsappBtn.href = whatsappLink();

if (product.status === "esgotado") {
  tag.textContent = "Esgotado";
  tag.classList.add("sold-product-tag");
  addCart.disabled = true;
  addCart.textContent = "Produto esgotado";
  whatsappBtn.textContent = "Consultar reposição no WhatsApp";
} else if (product.promocao) {
  tag.textContent = "Promoção";
} else if (product.lancamento) {
  tag.textContent = "Lançamento";
}

document.querySelectorAll(".sizes button").forEach(button => {
  button.addEventListener("click", () => {
    whatsappBtn.href = whatsappLink();

if (product.status === "esgotado") {
  tag.textContent = "Esgotado";
  tag.classList.add("sold-product-tag");
  addCart.disabled = true;
  addCart.textContent = "Produto esgotado";
  whatsappBtn.textContent = "Consultar reposição no WhatsApp";
} else if (product.promocao) {
  tag.textContent = "Promoção";
} else if (product.lancamento) {
  tag.textContent = "Lançamento";
}
  });
});

addCart.addEventListener("click", () => {
  if (product.status === "esgotado") {
    alert("Este produto está esgotado.");
    return;
  }

  const cart = JSON.parse(localStorage.getItem("eneebCart")) || [];
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qtd++;
  } else {
    cart.push({
      ...product,
      qtd: 1
    });
  }

  localStorage.setItem("eneebCart", JSON.stringify(cart));
  alert("Produto adicionado ao carrinho!");
});

const related = products
  .filter(item => item.id !== product.id)
  .slice(0, 4);

relatedGrid.innerHTML = related.map(item => `
  <a class="related-card" href="produto.html?id=${item.id}">
    <img src="${item.imagem}" alt="${item.nome}">
    <div>
      <h3>${item.nome}</h3>
      <strong>${formatPrice(item.preco)}</strong>
    </div>
  </a>
`).join("");

const productHeader = document.querySelector(".product-header");

function productHeaderScroll() {
  if (productHeader) {
    productHeader.classList.toggle("scrolled", window.scrollY > 30);
  }
}

window.addEventListener("scroll", productHeaderScroll);
window.addEventListener("load", productHeaderScroll);

const addFavorite = document.getElementById("addFavorite");
let favorites = JSON.parse(localStorage.getItem("eneebFavorites")) || [];

function saveFavorites() {
  localStorage.setItem("eneebFavorites", JSON.stringify(favorites));
}

function updateFavoriteButton() {
  if (!addFavorite) return;
  if (favorites.includes(product.id)) {
    addFavorite.classList.add("active");
    addFavorite.textContent = "Favoritado ♥";
  } else {
    addFavorite.classList.remove("active");
    addFavorite.textContent = "Salvar nos favoritos ♥";
  }
}

if (addFavorite) {
  addFavorite.addEventListener("click", () => {
    if (favorites.includes(product.id)) {
      favorites = favorites.filter(id => id !== product.id);
    } else {
      favorites.push(product.id);
    }
    saveFavorites();
    updateFavoriteButton();
  });

  updateFavoriteButton();
}


async function loadProductOnline() {
  try {
    const data = await getProductsFromSupabase();
    if (!data || data.length === 0) return;

    products = data.map(product => ({
      ...product,
      preco: Number(product.preco),
      status: product.status || "disponivel",
      promocao: !!product.promocao,
      lancamento: !!product.lancamento,
      tamanhos: typeof product.tamanhos === "string"
        ? product.tamanhos.split(",").map(item => item.trim()).filter(Boolean)
        : product.tamanhos,
      galeria: product.galeria || [product.imagem]
    }));

    const onlineProduct = products.find(item => item.id === getProductId());
    if (onlineProduct) {
      window.location.reload();
    }
  } catch (error) {
    console.error("Erro ao consultar produto online:", error);
  }
}
