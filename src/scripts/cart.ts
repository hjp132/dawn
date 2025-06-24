import Alpine from 'alpinejs';

Alpine.data('cart', () => ({
  items: [],
  isOpen: false,
  
  async addItem(variantId: number, quantity: number = 1) {
    const response = await fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: variantId,
        quantity
      })
    });
    
    if (response.ok) {
      await this.updateCart();
      this.isOpen = true;
    }
  },
  
  async updateCart() {
    const response = await fetch('/cart.js');
    const cart = await response.json();
    this.items = cart.items;
  }
}));