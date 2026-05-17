const SUPABASE_URL = "https://psgtheababifrowgesgb.supabase.co";
const SUPABASE_KEY = "sb_publishable_dsxzkrpZT4Ft35-WMQ6cYw_908qPxEF";
const PRODUCTS_ENDPOINT = `${SUPABASE_URL}/rest/v1/products`;

async function supabaseRequest(path = "", options = {}) {
  const headers = {
    "apikey": SUPABASE_KEY,
    "Authorization": `Bearer ${SUPABASE_KEY}`,
    "Content-Type": "application/json",
    "Prefer": "return=representation",
    ...(options.headers || {})
  };

  const response = await fetch(`${PRODUCTS_ENDPOINT}${path}`, {
    ...options,
    headers
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || "Erro ao conectar com Supabase");
  }

  if (response.status === 204) return null;

  return response.json();
}

async function getProductsFromSupabase() {
  return supabaseRequest("?select=*&order=id.desc", {
    method: "GET"
  });
}

async function createProductInSupabase(product) {
  return supabaseRequest("", {
    method: "POST",
    body: JSON.stringify(product)
  });
}

async function updateProductInSupabase(id, product) {
  return supabaseRequest(`?id=eq.${id}`, {
    method: "PATCH",
    body: JSON.stringify(product)
  });
}

async function deleteProductFromSupabase(id) {
  return supabaseRequest(`?id=eq.${id}`, {
    method: "DELETE"
  });
}


const PRODUCT_IMAGES_BUCKET = "product-images";

function sanitizeFileName(fileName) {
  return fileName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/-+/g, "-");
}

async function uploadProductImage(file) {
  const cleanName = sanitizeFileName(file.name);
  const filePath = `${Date.now()}-${cleanName}`;

  const response = await fetch(`${SUPABASE_URL}/storage/v1/object/${PRODUCT_IMAGES_BUCKET}/${filePath}`, {
    method: "POST",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
      "x-upsert": "true"
    },
    body: file
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || "Erro ao enviar imagem para o Supabase Storage");
  }

  return `${SUPABASE_URL}/storage/v1/object/public/${PRODUCT_IMAGES_BUCKET}/${filePath}`;
}
