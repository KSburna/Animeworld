let cartItems = [];

  function addItem(itemName, price) {
    const existingItem = cartItems.find(item => item.name === itemName);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.push({ name: itemName, price: price, quantity: 1 });
    }

    displayCart();
  }

  function displayCart() {
    const cartItemsList = document.getElementById('cartItems');
    const totalPriceDisplay = document.getElementById('totalPrice');

    cartItemsList.innerHTML = '';
    let totalPrice = 0;

    cartItems.forEach(item => {
      const listItem = document.createElement('li');
      const incrementButton = document.createElement('button');
      const decrementButton = document.createElement('button');

      listItem.innerText = '';

      incrementButton.textContent = '+';
      incrementButton.onclick = () => {
        item.quantity++;
        displayCart();
      };

      decrementButton.textContent = '-';
      decrementButton.onclick = () => {
        if (item.quantity > 1) {
          item.quantity--;
          displayCart();
        }
      };

      listItem.appendChild(incrementButton);
      listItem.appendChild(decrementButton);
      cartItemsList.appendChild(listItem);
      totalPrice += item.price * item.quantity;
    });

    totalPriceDisplay.textContent = totalPrice;
  }

  function checkout() {
    alert('Payment Successful');
    cartItems = [];
    displayCart();
  }