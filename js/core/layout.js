window.NexoraLayout = {
  customerNav(prefix = '') {
    return `
      <div class="utility-bar">
        <div class="container utility-inner">
          <div class="utility-points">
            <span>✓ Genuine Products</span>
            <span>◌ Secure Payment</span>
            <span>↗ Delivery Tracking</span>
          </div>

          <a href="${prefix}pages/contact.html">Need help? Contact Nexora</a>
        </div>
      </div>

      <header class="site-nav">
        <div class="container nav-inner">
          <a class="brand" href="${prefix}index.html">
            <img src="${prefix}assets/logo/nexora-logo.png" alt="Nexora Mobile logo">
            <span>
              <strong>Nexora</strong>
              <small>Mobile</small>
            </span>
          </a>

          <nav class="nav-links">
            <a href="${prefix}pages/phones.html">Phones</a>

            <div class="nav-dropdown">
              <button class="nav-dropdown-trigger" type="button">
                Accessories
                <span>⌄</span>
              </button>

              <div class="nav-dropdown-menu">
                <a href="${prefix}pages/phones.html?category=Headphones">Headphones & Earbuds</a>
                <a href="${prefix}pages/phones.html?category=Speakers">Speakers</a>
                <a href="${prefix}pages/phones.html?category=Chargers">Chargers</a>
                <a href="${prefix}pages/phones.html?category=Power%20Banks">Power Banks</a>
                <a href="${prefix}pages/phones.html?category=Smart%20Watches">Smart Watches</a>
                <a href="${prefix}pages/phones.html?category=More%20Accessories">More Accessories</a>
              </div>
            </div>

            <a href="${prefix}pages/compare.html">Compare</a>
            <a href="${prefix}pages/wishlist.html">Wishlist</a>
            <a href="${prefix}pages/my-orders.html">My Orders</a>
            <a href="${prefix}pages/contact.html">Contact</a>
          </nav>

          <form class="nav-search" action="${prefix}pages/phones.html">
            <input
              name="q"
              autocomplete="off"
              placeholder="Search phones..."
              aria-label="Search phones"
            >
            <button type="submit" aria-label="Search">⌕</button>
          </form>

          <div class="nav-actions">
            <a class="cart-pill" href="${prefix}pages/cart.html">
              <span>Cart</span>
              <b data-cart-count>0</b>
            </a>
          </div>
        </div>
      </header>
    `;
  },

  footer(prefix = '') {
    return `
      <footer class="footer">
        <div class="container footer-grid">
          <div>
            <h3>Nexora Mobile</h3>
            <p>Premium phone retail, e-commerce, POS, inventory, delivery and warranty in one connected system.</p>
          </div>

          <div>
            <h4>Shop</h4>
            <a href="${prefix}pages/phones.html">Phones</a>
            <a href="${prefix}pages/compare.html">Compare</a>
            <a href="${prefix}pages/wishlist.html">Wishlist</a>
          </div>

          <div>
            <h4>Service</h4>
            <a href="${prefix}pages/my-orders.html">Track Order</a>
            <a href="${prefix}pages/contact.html">Contact Us</a>
            <a href="${prefix}admin/login.html">Manager Login</a>
          </div>

          <div>
            <h4>Contact</h4>
            <span>09-xxxxxxxxx</span>
            <span>Yangon, Myanmar</span>
            <span>Daily 9:00 AM – 8:00 PM</span>
          </div>
        </div>
      </footer>
    `;
  },

  updateCartCount() {
    const cart = NexoraStore.get('nx_cart', []);
    const count = cart.reduce((total, item) => total + item.qty, 0);

    document.querySelectorAll('[data-cart-count]').forEach(element => {
      element.textContent = count;
    });
  },

  mount(prefix = '') {
    const nav = document.querySelector('[data-nexora-nav]');
    const footer = document.querySelector('[data-nexora-footer]');

    if (nav) {
      nav.innerHTML = this.customerNav(prefix);
    }

    if (footer) {
      footer.innerHTML = this.footer(prefix);
    }

    this.updateCartCount();
  }
};
