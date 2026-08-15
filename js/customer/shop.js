window.NexoraShop = {
  productCard(product, prefix = '') {
    const lowStock = product.stock <= 5;

    return `
      <article class="product-card">
        <a href="${prefix}product-detail.html?id=${product.id}">
          <div class="product-art">
            <div class="phone-render"></div>
          </div>
          <h3>${product.name}</h3>
          <div class="meta">${product.brand} · ${lowStock ? 'Only ' + product.stock + ' left' : 'In Stock'}</div>
          <div class="price">${NexoraUtils.money(product.price)}</div>
        </a>
        <div class="product-actions">
          <button class="btn" onclick="NexoraShop.toggleCompare('${product.id}')">Compare</button>
          <button class="btn primary" onclick="NexoraShop.quickAdd('${product.id}')">Add</button>
        </div>
      </article>
    `;
  },

  quickAdd(productId) {
    const product = NexoraDB.products().find(item => item.id === productId);
    const cart = NexoraStore.get('nx_cart', []);
    const existing = cart.find(item => item.id === productId);

    if (!product) {
      return;
    }

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        qty: 1,
        variant: {
          ram: product.ram?.[0] || '',
          storage: product.storage?.[0] || '',
          color: product.colors?.[0] || ''
        }
      });
    }

    NexoraStore.set('nx_cart', cart);
    NexoraUtils.toast('Added to cart');
  },

  toggleCompare(productId) {
    let compare = NexoraStore.get('nx_compare', []);

    if (compare.includes(productId)) {
      compare = compare.filter(id => id !== productId);
      NexoraUtils.toast('Removed from compare');
    } else {
      compare = [...compare, productId].slice(-3);
      NexoraUtils.toast('Added to compare');
    }

    NexoraStore.set('nx_compare', compare);
  },

  toggleWishlist(productId) {
    let wishlist = NexoraStore.get('nx_wishlist', []);

    if (wishlist.includes(productId)) {
      wishlist = wishlist.filter(id => id !== productId);
      NexoraUtils.toast('Removed from wishlist');
    } else {
      wishlist.push(productId);
      NexoraUtils.toast('Saved to wishlist');
    }

    NexoraStore.set('nx_wishlist', wishlist);
  },

  markViewed(productId) {
    let recent = NexoraStore.get('nx_recent', []);
    recent = [productId, ...recent.filter(id => id !== productId)].slice(0, 8);
    NexoraStore.set('nx_recent', recent);
  }
};


NexoraShop.finalPrice = function(product, basePrice) {
  const price = Number(basePrice ?? product.price ?? 0);

  if (!product.promoActive || !product.discountValue) {
    return price;
  }

  if (product.discountType === 'percent') {
    return Math.max(0, Math.round(price * (1 - product.discountValue / 100)));
  }

  if (product.discountType === 'fixed') {
    return Math.max(0, price - Number(product.discountValue));
  }

  return price;
};

NexoraShop.variantFor = function(product, selection = {}) {
  const variants = product.variants || [];

  return variants.find(variant => {
    const ramMatch = !selection.ram || variant.ram === selection.ram;
    const storageMatch = !selection.storage || variant.storage === selection.storage;
    const colorMatch = !selection.color || variant.color === selection.color;

    return ramMatch && storageMatch && colorMatch;
  }) || variants[0] || null;
};

NexoraShop.giftLabel = function(product) {
  if (!product.gift?.active || !product.gift?.name) {
    return '';
  }

  return `${product.gift.name} × ${product.gift.qty || 1}`;
};
