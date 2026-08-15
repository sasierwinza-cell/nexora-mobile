window.NexoraDB = {
  products() {
    return NexoraStore.get('nx_products', []);
  },

  saveProducts(products) {
    NexoraStore.set('nx_products', products);
  },

  orders() {
    return NexoraStore.get('nx_orders', []);
  },

  saveOrders(orders) {
    NexoraStore.set('nx_orders', orders);
  },

  sales() {
    return NexoraStore.get('nx_pos_sales', []);
  },

  saveSales(sales) {
    NexoraStore.set('nx_pos_sales', sales);
  },

  devices() {
    return NexoraStore.get('nx_devices', []);
  },

  saveDevices(devices) {
    NexoraStore.set('nx_devices', devices);
  },

  claims() {
    return NexoraStore.get('nx_claims', []);
  },

  saveClaims(claims) {
    NexoraStore.set('nx_claims', claims);
  },

  returns() {
    return NexoraStore.get('nx_returns', []);
  },

  saveReturns(items) {
    NexoraStore.set('nx_returns', items);
  },

  expenses() {
    return NexoraStore.get('nx_expenses', []);
  },

  saveExpenses(expenses) {
    NexoraStore.set('nx_expenses', expenses);
  },

  paymentSettings() {
    return NexoraStore.get('nx_payment_settings', {});
  },

  savePaymentSettings(settings) {
    NexoraStore.set('nx_payment_settings', settings);
  }
};
