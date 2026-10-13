/* =========================================================
   SOPHIE'S KNITTED
   SCRIPT JAVASCRIPT
   ========================================================= */


/* ================= CONFIGURATION ================= */

const WHATSAPP_NUMBER = "237678329439";

const INSTAGRAM_URL =
  "https://www.instagram.com/byso_phiecrochet/";

const TIKTOK_URL =
  "https://www.tiktok.com/@by_sophie_crochet";


/* ================= PRODUITS ================= */

const PRODUCTS = [

  {
    id: 1,
    name: "Chapeau à froufrous",
    price: 6000,
    cat: "Chapeaux",
    desc: "Une pièce féminine et originale.",
    tag: "FROUFROUS",
    image: "chapeau.jpeg"
  },

  {
    id: 2,
    name: "Chapeau carré granny",
    price: 7500,
    cat: "Chapeaux",
    desc: "Le granny revisité avec des froufrous.",
    tag: "GRANNY",
    image: "chapeaugranny.jpeg"
  },

  {
    id: 3,
    name: "Chapeau mesh",
    price: 4000,
    cat: "Chapeaux",
    desc: "Léger, simple et facile à porter.",
    tag: "MESH",
    image: "chapeaumesh.jpeg"
  },

  {
    id: 4,
    name: "Bucket hat",
    price: 4000,
    cat: "Chapeaux",
    desc: "Un chapeau pour ceux qui aiment l'originalité.",
    tag: "BUCKET",
    image: "chapeauchat.jpeg"
  },

  {
    id: 5,
    name: "Scrunchie uni",
    price: 1000,
    cat: "Accessoires",
    desc: "Un petit détail crocheté pour tes looks.",
    tag: "UNI",
    image: "chouchouuni.jpeg"
  },

  {
    id: 6,
    name: "Scrunchie multicolore",
    price: 1500,
    cat: "Accessoires",
    desc: "Une touche colorée et originale.",
    tag: "COLOR",
    image: "chouchoumulti.jpeg"
  },

  {
    id: 7,
    name: "Bandeau",
    price: 2000,
    cat: "Accessoires",
    desc: "Un accessoire doux et élégant.",
    tag: "BANDEAU",
    image: "bandeau.jpeg"
  },

  {
    id: 8,
    name: "Nœud",
    price: 1000,
    cat: "Accessoires",
    desc: "Le petit accessoire qui fait la différence.",
    tag: "NŒUD",
    image: "noeud.jpeg"
  },

  {
    id: 9,
    name: "Top Kely",
    minPrice: 15000,
    maxPrice: 25000,
    cat: "Vêtements",
    desc: "Une création crochetée avec soin.",
    tag: "TOP",
    image: "kelytop.jpeg"
  },

  {
    id: 10,
    name: "Pull",
    minPrice: 15000,
    maxPrice: 25000,
    cat: "Vêtements",
    desc: "Une pièce originale signée Sophie’s Knitted.",
    tag: "PULL",
    image: "pullgris.jpeg"
  },

  {
    id: 11,
    name: "Boléros",
    minPrice: 7000,
    maxPrice: 15000,
    cat: "Vêtements",
    desc: "Une création élégante et faite main.",
    tag: "BOLERO",
    image: "boléros.jpeg"
  },

  {
    id: 12,
    name: "Top et culotte",
    minPrice: 12000,
    maxPrice: 20000,
    cat: "Vêtements",
    desc: "Un ensemble conçu pour des femmes uniques.",
    tag: "ENSEMBLE",
    image: "ensembleculotte.jpeg"
  },

  {
    id: 13,
    name: "Sac d'été",
    price: 17000,
    cat: "Sacs",
    desc: "Un sac crocheté avec soin.",
    tag: "SAC",
    image: "sacbleu.jpeg"
  },

  {
    id: 14,
    name: "Sac granny",
    price: 8500,
    cat: "Sacs",
    desc: "Une pièce originale et élégante.",
    tag: "GRANNY",
    image: "sacgranny.jpeg"
  },

  {
    id: 15,
    name: "Sac cabas à carreaux",
    price: 14000,
    cat: "Sacs",
    desc: "Un accessoire fait main pour compléter tes looks.",
    tag: "CARREAUX",
    image: "sacquadrillage.jpeg"
  },

  {
    id: 16,
    name: "Sac motif hibiscus",
    price: 14000,
    cat: "Sacs",
    desc: "Une création unique Sophie’s Knitted.",
    tag: "MOTIF",
    image: "sacnoirrose.jpeg"
  },

  {
    id: 17,
    name: "Sandales crochet",
    price: 5000,
    cat: "Chaussures",
    desc: "Des sandales crochetées avec soin.",
    tag: "SANDALES",
    image: "sandale.jpeg"
  },

  {
    id: 18,
    name: "Robe mesh",
    minPrice: 20000,
    maxPrice: 35000,
    cat: "Nouveautés",
    desc: "Une création originale et stylée.",
    tag: "MESH",
    image: "robemarrone.jpeg"
  },

  {
    id: 19,
    name: "Boho stripe crochet dress",
    minPrice: 20000,
    maxPrice: 35000,
    cat: "Nouveautés",
    desc: "Une création pour mieux valoriser le Handmade.",
    tag: "BOHO",
    image: "roberose.jpeg"
  },

  {
    id: 20,
    name: "Pantalons",
    minPrice: 22000,
    maxPrice: 40000,
    cat: "Nouveautés",
    desc: "Afin d'avoir un look plus stylé.",
    tag: "GRANNY",
    image: "pantalon.jpeg"
  },

  {
    id: 24,
    name: "Cardigans unisexe",
    minPrice: 25000,
    maxPrice: 40000,
    cat: "Nouveautés",
    desc: "Une création unique Sophie’s Knitted.",
    tag: "UNI",
    image: "cardigan.jpeg"
  }

];


/* ================= VARIABLES ================= */

let cart = JSON.parse(
  localStorage.getItem("sophiesKnittedCart") || "[]"
);

let activeCat = "Tous";


/* ================= OUTILS ================= */

const $ = selector => document.querySelector(selector);

const money = number =>
  new Intl.NumberFormat("fr-FR").format(number) + " FCFA";


function getProduct(id) {
  return PRODUCTS.find(product => product.id === Number(id));
}


function getProductPrice(product) {
  if (typeof product.price === "number") {
    return product.price;
  }

  if (
    typeof product.minPrice === "number" &&
    typeof product.maxPrice === "number"
  ) {
    return product.minPrice;
  }

  return 0;
}


function displayPrice(product) {

  if (typeof product.price === "number") {
    return money(product.price);
  }

  if (
    typeof product.minPrice === "number" &&
    typeof product.maxPrice === "number"
  ) {
    return (
      money(product.minPrice) +
      " – " +
      money(product.maxPrice)
    );
  }

  return "Prix à définir";
}


/* ================= PANIER ================= */

function saveCart() {
  localStorage.setItem(
    "sophiesKnittedCart",
    JSON.stringify(cart)
  );
}


function addToCart(id) {

  const product = getProduct(id);

  if (!product) return;

  const existing = cart.find(
    item => item.id === product.id
  );

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      qty: 1
    });
  }

  saveCart();
  renderCart();

  const cartDrawer = $("#cartDrawer");

  if (cartDrawer) {
    cartDrawer.classList.add("open");
    cartDrawer.setAttribute("aria-hidden", "false");
  }
}


function removeFromCart(id) {

  cart = cart.filter(
    item => item.id !== Number(id)
  );

  saveCart();
  renderCart();
}


function changeQuantity(id, amount) {

  const item = cart.find(
    product => product.id === Number(id)
  );

  if (!item) return;

  item.qty += amount;

  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }

  saveCart();
  renderCart();
}


/* ================= AFFICHER LES PRODUITS ================= */

function renderProducts() {

  const productsContainer = $("#products");

  if (!productsContainer) return;

  const list =
    activeCat === "Tous"
      ? PRODUCTS
      : PRODUCTS.filter(
          product => product.cat === activeCat
        );

  productsContainer.innerHTML = list.map(product => `

    <article class="product reveal">

      <div class="product-img">

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.onerror=null; this.src='logo.jpeg';"
        >

        <span>
          ${product.tag}
        </span>

      </div>

      <div class="product-info">

        <h3>
          ${product.name}
        </h3>

        <p>
          ${product.desc}
        </p>

        <div class="price-row">

          <span class="price">
            ${displayPrice(product)}
          </span>

          <button
            class="add"
            type="button"
            data-add="${product.id}"
            aria-label="Ajouter ${product.name} au panier"
          >
            +
          </button>

        </div>

      </div>

    </article>

  `).join("");

  setupReveal();
}


/* ================= FILTRES ================= */

function renderFilters() {

  const container = $("#filters");

  if (!container) return;

  const categories = [
    "Tous",
    ...new Set(
      PRODUCTS.map(product => product.cat)
    )
  ];

  container.innerHTML = categories.map(category => `

    <button
      class="filter ${category === activeCat ? "active" : ""}"
      type="button"
      data-category="${category}"
    >
      ${category}
    </button>

  `).join("");
}


/* ================= AFFICHER PANIER ================= */

function renderCart() {

  const cartItems = $("#cartItems");
  const cartEmpty = $("#cartEmpty");
  const cartSummary = $("#cartSummary");
  const cartCount = $("#cartCount");
  const cartTotal = $("#cartTotal");

  if (!cartItems) return;

  let total = 0;
  let count = 0;

  const validItems = cart.filter(item =>
    getProduct(item.id)
  );

  cart = validItems;

  cartItems.innerHTML = cart.map(item => {

    const product = getProduct(item.id);

    const price = getProductPrice(product);

    total += price * item.qty;
    count += item.qty;

    return `

      <div class="cart-item">

        <img
          src="${product.image}"
          alt="${product.name}"
          onerror="this.onerror=null; this.src='logo.jpeg';"
        >

        <div>

          <h4>
            ${product.name}
          </h4>

          <p>
            ${displayPrice(product)}
          </p>

          <div class="quantity-controls">

            <button
              type="button"
              data-minus="${product.id}"
            >
              −
            </button>

            <span>
              ${item.qty}
            </span>

            <button
              type="button"
              data-plus="${product.id}"
            >
              +
            </button>

          </div>

        </div>

        <button
          type="button"
          data-remove="${product.id}"
          aria-label="Supprimer ${product.name}"
        >
          ×
        </button>

      </div>

    `;

  }).join("");

  saveCart();

  if (cartCount) {
    cartCount.textContent = count;
  }

  if (cartTotal) {
    cartTotal.textContent = money(total);
  }

  if (cartEmpty) {
    cartEmpty.style.display =
      cart.length ? "none" : "block";
  }

  if (cartSummary) {
    cartSummary.style.display =
      cart.length ? "block" : "none";
  }
}


/* ================= LOADING ================= */

function hideLoader() {

  const loader = $("#siteLoader");

  if (!loader) return;

  setTimeout(() => {

    loader.classList.add("hidden");

  }, 700);
}


/* ================= MENU ================= */

function setupMenu() {

  const menuToggle = $("#menuToggle");
  const nav = $("#nav");

  if (!menuToggle || !nav) return;

  menuToggle.addEventListener("click", () => {

    const isOpen =
      nav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });

  nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });
}


/* ================= PANIER OUVERTURE ================= */

function openCart() {

  const drawer = $("#cartDrawer");

  if (!drawer) return;

  drawer.classList.add("open");

  drawer.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add("no-scroll");
}


function closeCart() {

  const drawer = $("#cartDrawer");

  if (!drawer) return;

  drawer.classList.remove("open");

  drawer.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove("no-scroll");
}


/* ================= CHECKOUT ================= */

function openCheckout() {

  if (!cart.length) {
    alert("Ton panier est vide.");
    return;
  }

  const modal = $("#checkoutModal");

  if (!modal) return;

  modal.classList.add("open");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add("no-scroll");
}


function closeCheckout() {

  const modal = $("#checkoutModal");

  if (!modal) return;

  modal.classList.remove("open");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove("no-scroll");
}


/* ================= WHATSAPP ================= */

function createWhatsAppMessage(data = {}) {

  const lines = [
    "Bonjour Sophie’s Knitted 🌸",
    "",
    "Je souhaite passer une commande :",
    ""
  ];

  cart.forEach(item => {

    const product = getProduct(item.id);

    if (!product) return;

    lines.push(
      `• ${product.name} × ${item.qty} — ${displayPrice(product)}`
    );

  });

  lines.push("");

  if (data.name) {
    lines.push(`Nom : ${data.name}`);
  }

  if (data.phone) {
    lines.push(`Téléphone : ${data.phone}`);
  }

  if (data.city) {
    lines.push(`Ville : ${data.city}`);
  }

  if (data.district) {
    lines.push(`Quartier : ${data.district}`);
  }

  if (data.address) {
    lines.push(`Adresse : ${data.address}`);
  }

  if (data.payment) {
    lines.push(`Paiement : ${data.payment}`);
  }

  if (data.notes) {
    lines.push(`Informations : ${data.notes}`);
  }

  lines.push("");
  lines.push("Merci 💕");

  return lines.join("\n");
}


function sendWhatsAppOrder(data = {}) {

  if (!cart.length) {
    alert("Ton panier est vide.");
    return;
  }

  const message =
    createWhatsAppMessage(data);

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
}


/* ================= RÉSEAUX ================= */

function setupSocialLinks() {

  const instagramLinks = [
    "#instagramLink",
    "#footerInstagram"
  ];

  const tiktokLinks = [
    "#tiktokLink",
    "#footerTikTok"
  ];

  instagramLinks.forEach(selector => {

    const link = $(selector);

    if (link) {
      link.href = INSTAGRAM_URL;
    }

  });

  tiktokLinks.forEach(selector => {

    const link = $(selector);

    if (link) {
      link.href = TIKTOK_URL;
    }

  });

  const whatsappLinks = [
    "#contactWhatsApp",
    "#footerWhatsApp"
  ];

  whatsappLinks.forEach(selector => {

    const link = $(selector);

    if (link) {

      link.href = `https://wa.me/${WHATSAPP_NUMBER}`;

      link.target = "_blank";
      link.rel = "noopener noreferrer";

    }

  });
}


/* ================= REVEAL ================= */

function setupReveal() {

  const products =
    document.querySelectorAll(
      ".product.reveal"
    );

  if (!products.length) return;

  if (!("IntersectionObserver" in window)) {

    products.forEach(product => {
      product.classList.add("visible");
    });

    return;
  }

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.1
      }
    );

  products.forEach(product => {
    observer.observe(product);
  });
}


/* ================= ÉVÉNEMENTS ================= */

function setupEvents() {

  document.addEventListener(
    "click",
    event => {

      const addButton =
        event.target.closest("[data-add]");

      if (addButton) {

        addToCart(
          Number(addButton.dataset.add)
        );

        return;
      }


      const removeButton =
        event.target.closest("[data-remove]");

      if (removeButton) {

        removeFromCart(
          Number(removeButton.dataset.remove)
        );

        return;
      }


      const plusButton =
        event.target.closest("[data-plus]");

      if (plusButton) {

        changeQuantity(
          Number(plusButton.dataset.plus),
          1
        );

        return;
      }


      const minusButton =
        event.target.closest("[data-minus]");

      if (minusButton) {

        changeQuantity(
          Number(minusButton.dataset.minus),
          -1
        );

        return;
      }


      const filterButton =
        event.target.closest("[data-category]");

      if (filterButton) {

        activeCat =
          filterButton.dataset.category;

        renderFilters();
        renderProducts();

        return;
      }

    }
  );


  const cartBtn = $("#cartBtn");

  if (cartBtn) {
    cartBtn.addEventListener(
      "click",
      openCart
    );
  }


  const closeCartButton =
    $("#closeCart");

  if (closeCartButton) {
    closeCartButton.addEventListener(
      "click",
      closeCart
    );
  }


  const cartOverlay =
    $("#cartOverlay");

  if (cartOverlay) {
    cartOverlay.addEventListener(
      "click",
      closeCart
    );
  }


  const emptyShop =
    $("#emptyShop");

  if (emptyShop) {
    emptyShop.addEventListener(
      "click",
      closeCart
    );
  }


  const checkoutButton =
    $("#checkoutBtn");

  if (checkoutButton) {
    checkoutButton.addEventListener(
      "click",
      openCheckout
    );
  }


  const closeModal =
    $("#closeModal");

  if (closeModal) {
    closeModal.addEventListener(
      "click",
      closeCheckout
    );
  }


  const modalBackdrop =
    $("#modalBackdrop");

  if (modalBackdrop) {
    modalBackdrop.addEventListener(
      "click",
      closeCheckout
    );
  }


  const whatsappCartBtn =
    $("#whatsappCartBtn");

  if (whatsappCartBtn) {

    whatsappCartBtn.addEventListener(
      "click",
      () => sendWhatsAppOrder()
    );

  }


  const formWhatsApp =
    $("#formWhatsApp");

  if (formWhatsApp) {

    formWhatsApp.addEventListener(
      "click",
      () => {

        const form =
          $("#checkoutForm");

        if (!form) return;

        const formData =
          new FormData(form);

        const data =
          Object.fromEntries(formData.entries());

        sendWhatsAppOrder(data);

      }
    );

  }


  const checkoutForm =
    $("#checkoutForm");

  if (checkoutForm) {

    checkoutForm.addEventListener(
      "submit",
      event => {

        event.preventDefault();

        const successBox =
          $("#successBox");

        if (successBox) {
          successBox.hidden = false;
        }

        checkoutForm.style.display =
          "none";

      }
    );

  }


  const successClose =
    $("#successClose");

  if (successClose) {

    successClose.addEventListener(
      "click",
      () => {

        const successBox =
          $("#successBox");

        const form =
          $("#checkoutForm");

        if (successBox) {
          successBox.hidden = true;
        }

        if (form) {
          form.style.display = "grid";
          form.reset();
        }

        closeCheckout();

      }
    );

  }
}


/* ================= INITIALISATION ================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderFilters();

    renderProducts();

    renderCart();

    setupMenu();

    setupEvents();

    setupSocialLinks();

    const year = $("#year");

    if (year) {
      year.textContent =
        new Date().getFullYear();
    }

    hideLoader();

  }
);


/* ================= SÉCURITÉ SUPPLÉMENTAIRE ================= */

window.addEventListener(
  "error",
  () => {

    const loader =
      document.getElementById("siteLoader");

    if (loader) {
      loader.classList.add("hidden");
    }

  }
);
