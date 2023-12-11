const cartItems = [
    { id: 1, name: ‘Naruto Figure’, price: 20 },
    { id: 2, name: ‘One Piece Manga’, price: 15 },
    { id: 3, name: ‘Sailor Moon Poster’, price: 10 },
  ];

  function displayCart() {
    const cartItemsDiv = document.querySelector(‘.cart-container’);
    let total = 0;
  
    cartItems.forEach(item => {
      const cartItem = document.createElement(‘div’);
      cartItem.classList.add(‘cart-item’);
      cartItem.innerHTML = `
        <p>${item.name}</p>
        <p>$${item.price}</p>
      `;
      cartItemsDiv.appendChild(cartItem);
      total += item.price;
    });