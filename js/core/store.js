window.NexoraStore = {
  VERSION: '2026-08-final',

  get(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value ?? fallback;
    } catch (error) {
      return fallback;
    }
  },

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  seed() {
    const currentVersion = localStorage.getItem('nx_seed_version');

    if (currentVersion !== this.VERSION) {
      this.set('nx_products', window.NEXORA_PRODUCTS || []);
      localStorage.setItem('nx_seed_version', this.VERSION);
    }

    if (!localStorage.getItem('nx_orders')) {
      this.set('nx_orders', []);
    }

    if (!localStorage.getItem('nx_pos_sales')) {
      this.set('nx_pos_sales', []);
    }

    if (!localStorage.getItem('nx_devices')) {
      this.set('nx_devices', []);
    }

    if (!localStorage.getItem('nx_claims')) {
      this.set('nx_claims', []);
    }

    if (!localStorage.getItem('nx_returns')) {
      this.set('nx_returns', []);
    }

    if (!localStorage.getItem('nx_expenses')) {
      this.set('nx_expenses', []);
    }

    if (!localStorage.getItem('nx_payment_settings')) {
      this.set('nx_payment_settings', {
        shopName: 'Nexora Mobile',
        kbzpay: {
          active: true,
          phone: '09-xxxxxxxxx',
          accountName: 'Nexora Mobile'
        },
        wavepay: {
          active: true,
          phone: '09-xxxxxxxxx',
          accountName: 'Nexora Mobile'
        }
      });
    }
  }
};
