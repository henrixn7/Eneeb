let adminProducts = [];

const nome = document.getElementById("nome");
const preco = document.getElementById("preco");
const imagem = document.getElementById("imagem");
const imagemUpload = document.getElementById("imagemUpload");
const imagePreview = document.getElementById("imagePreview");
const categoria = document.getElementById("categoria");
const tag = document.getElementById("tag");
const tamanhos = document.getElementById("tamanhos");
const desc = document.getElementById("desc");
const editId = document.getElementById("editId");

const status = document.getElementById("status");
const promocao = document.getElementById("promocao");
const lancamento = document.getElementById("lancamento");

const saveProduct = document.getElementById("saveProduct");
const cancelEdit = document.getElementById("cancelEdit");
const clearAll = document.getElementById("clearAll");
const searchAdmin = document.getElementById("searchAdmin");
const adminGrid = document.getElementById("adminGrid");
const formTitle = document.getElementById("formTitle");

const loginScreen = document.getElementById("loginScreen");
const adminContent = document.getElementById("adminContent");
const adminPassword = document.getElementById("adminPassword");
const loginBtn = document.getElementById("loginBtn");
const loginError = document.getElementById("loginError");
const logoutBtn = document.getElementById("logoutBtn");

const ADMIN_PASSWORD = "Hermes102030-";

function checkLogin() {
  const logged = localStorage.getItem("eneebAdminLogged") === "true";

  if (logged) {
    loginScreen.classList.add("hide");
    adminContent.classList.remove("locked");
    loadAdminProducts();
  } else {
    loginScreen.classList.remove("hide");
    adminContent.classList.add("locked");
  }
}

function loginAdmin() {
  if (adminPassword.value === ADMIN_PASSWORD) {
    localStorage.setItem("eneebAdminLogged", "true");
    loginError.textContent = "";
    checkLogin();
  } else {
    loginError.textContent = "Senha incorreta.";
  }
}

function formatPrice(value) {
  return Number(value || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function parseTamanhos(value) {
  if (Array.isArray(value)) return value;
  if (!value) return [];
  return String(value).split(",").map(item => item.trim()).filter(Boolean);
}

function normalizeAdminProduct(product) {
  return {
    ...product,
    preco: Number(product.preco || 0),
    status: product.status || "disponivel",
    promocao: !!product.promocao,
    lancamento: !!product.lancamento,
    tamanhos: parseTamanhos(product.tamanhos)
  };
}

async function loadAdminProducts() {
  adminGrid.innerHTML = `
    <div class="empty">
      Carregando produtos online...
    </div>
  `;

  try {
    const data = await getProductsFromSupabase();
    adminProducts = (data || []).map(normalizeAdminProduct);
    renderAdminProducts();
  } catch (error) {
    console.error(error);
    adminGrid.innerHTML = `
      <div class="empty">
        Erro ao carregar produtos do Supabase. Abra o console para ver detalhes.
      </div>
    `;
  }
}

function resetForm() {
  nome.value = "";
  preco.value = "";
  imagem.value = "";
  imagemUpload.value = "";
  imagePreview.innerHTML = "<span>Prévia da imagem</span>";
  categoria.value = "camisas";
  tag.value = "";
  status.value = "disponivel";
  promocao.checked = false;
  lancamento.checked = false;
  tamanhos.value = "";
  desc.value = "";
  editId.value = "";

  formTitle.textContent = "Adicionar produto";
  saveProduct.textContent = "Salvar produto";
  cancelEdit.style.display = "none";
}

function createProductObject() {
  return {
    nome: nome.value.trim(),
    preco: Number(preco.value),
    imagem: imagem.value.trim(),
    categoria: categoria.value,
    desc: desc.value.trim(),
    tag: tag.value.trim() || "Novo",
    status: status.value || "disponivel",
    promocao: promocao.checked,
    lancamento: lancamento.checked,
    tamanhos: parseTamanhos(tamanhos.value).join(", ")
  };
}

function validateProduct(product) {
  if (!product.nome || !product.preco || !product.imagem || !product.desc) {
    alert("Preencha nome, preço, imagem e descrição.");
    return false;
  }

  if (!product.tamanhos || product.tamanhos.length === 0) {
    alert("Adicione pelo menos um tamanho. Ex: P, M, G, GG");
    return false;
  }

  return true;
}

function renderAdminProducts() {
  const search = (searchAdmin.value || "").toLowerCase().trim();

  const list = adminProducts.filter(product => {
    return product.nome.toLowerCase().includes(search) ||
      product.categoria.toLowerCase().includes(search) ||
      product.desc.toLowerCase().includes(search);
  });

  adminGrid.innerHTML = "";

  if (list.length === 0) {
    adminGrid.innerHTML = `
      <div class="empty">
        Nenhum produto cadastrado no Supabase ainda.
      </div>
    `;
    return;
  }

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "admin-card";

    card.innerHTML = `
      <img src="${product.imagem}" alt="${product.nome}" onerror="this.style.opacity='0.2'">

      <div class="admin-content">
        <h3>${product.nome}</h3>
        <p>${product.desc}</p>
        <strong class="admin-price">${formatPrice(product.preco)}</strong>

        <div class="admin-tags">
          <span>${product.categoria}</span>
          <span>${product.tag}</span>
          <span>${product.status === "esgotado" ? "Esgotado" : "Disponível"}</span>
          ${product.promocao ? "<span>Promoção</span>" : ""}
          ${product.lancamento ? "<span>Lançamento</span>" : ""}
          ${product.tamanhos.map(size => `<span>${size}</span>`).join("")}
        </div>

        <div class="admin-actions">
          <button class="edit" onclick="editProduct(${product.id})">Editar</button>
          <button class="delete" onclick="deleteProduct(${product.id})">Remover</button>
        </div>
      </div>
    `;

    adminGrid.appendChild(card);
  });
}

async function addOrUpdateProduct() {
  const editing = editId.value;
  const product = createProductObject();

  if (!validateProduct(product)) return;

  try {
    if (editing) {
      await updateProductInSupabase(Number(editing), product);
      alert("Produto atualizado online com sucesso!");
    } else {
      await createProductInSupabase(product);
      alert("Produto adicionado online com sucesso!");
    }

    resetForm();
    await loadAdminProducts();
  } catch (error) {
    console.error(error);
    alert("Erro ao salvar no Supabase. Confira as permissões RLS e os nomes das colunas.");
  }
}

function editProduct(id) {
  const product = adminProducts.find(item => Number(item.id) === Number(id));
  if (!product) return;

  editId.value = product.id;
  nome.value = product.nome;
  preco.value = product.preco;
  imagem.value = product.imagem;
  imagePreview.innerHTML = product.imagem
    ? `<img src="${product.imagem}" alt="${product.nome}">`
    : "<span>Prévia da imagem</span>";
  categoria.value = product.categoria;
  tag.value = product.tag;
  status.value = product.status || "disponivel";
  promocao.checked = !!product.promocao;
  lancamento.checked = !!product.lancamento;
  tamanhos.value = product.tamanhos.join(", ");
  desc.value = product.desc;

  formTitle.textContent = "Editar produto";
  saveProduct.textContent = "Salvar alterações";
  cancelEdit.style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

async function deleteProduct(id) {
  const confirmDelete = confirm("Tem certeza que deseja remover este produto?");
  if (!confirmDelete) return;

  try {
    await deleteProductFromSupabase(id);
    await loadAdminProducts();
  } catch (error) {
    console.error(error);
    alert("Erro ao remover produto no Supabase.");
  }
}


async function handleImageUpload() {
  const file = imagemUpload.files[0];
  if (!file) return;

  try {
    document.body.classList.add("uploading");
    imagePreview.innerHTML = "<span>Enviando imagem...</span>";

    const publicUrl = await uploadProductImage(file);

    imagem.value = publicUrl;
    imagePreview.innerHTML = `<img src="${publicUrl}" alt="Prévia">`;
  } catch (error) {
    console.error(error);
    imagePreview.innerHTML = "<span>Erro ao enviar imagem</span>";
    alert("Erro ao enviar imagem. Confira se o bucket product-images foi criado no Supabase.");
  } finally {
    document.body.classList.remove("uploading");
  }
}

imagemUpload.addEventListener("change", handleImageUpload);

saveProduct.addEventListener("click", addOrUpdateProduct);
cancelEdit.addEventListener("click", resetForm);
searchAdmin.addEventListener("input", renderAdminProducts);

clearAll.addEventListener("click", async () => {
  const confirmClear = confirm("Isso vai apagar todos os produtos cadastrados no Supabase. Continuar?");
  if (!confirmClear) return;

  try {
    for (const product of adminProducts) {
      await deleteProductFromSupabase(product.id);
    }

    await loadAdminProducts();
  } catch (error) {
    console.error(error);
    alert("Erro ao limpar produtos.");
  }
});

loginBtn.addEventListener("click", loginAdmin);

adminPassword.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    loginAdmin();
  }
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("eneebAdminLogged");
  checkLogin();
});

checkLogin();
