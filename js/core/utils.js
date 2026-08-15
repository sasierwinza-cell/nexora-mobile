window.NexoraUtils = {
  money(value) {
    return new Intl.NumberFormat('en-US').format(Number(value || 0)) + ' MMK';
  },

  param(name) {
    return new URLSearchParams(window.location.search).get(name);
  },

  makeOrderId() {
    return 'NX-' + Date.now().toString().slice(-8);
  },

  makeId(prefix) {
    return prefix + '-' + Date.now().toString().slice(-7);
  },

  toast(message) {
    let toast = document.querySelector('.toast');

    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add('show');

    clearTimeout(window.__nxToastTimer);
    window.__nxToastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 1800);
  }
};
