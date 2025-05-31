document.addEventListener('DOMContentLoaded', () => {
    const storeGrid = document.getElementById('storeGrid');

    // Sample store data (in a real app, this would come from a backend API)
    const storesData = [
        {
            id: 1,
            name: "Amazon",
            logoUrl: "https://via.placeholder.com/120x60.png?text=Amazon", // Replace with actual logo URL
            cashbackAmount: "Up to 7.5%",
            cashbackType: "Cashback",
            offerDetails: "On Fashion, Electronics & More. Explore a wide range of products with great deals.",
            category: "Electronics"
        },
        {
            id: 2,
            name: "Myntra",
            logoUrl: "https://via.placeholder.com/120x60.png?text=Myntra",
            cashbackAmount: "Flat 8%",
            cashbackType: "Rewards",
            offerDetails: "On all orders over ₹1000. Find the latest fashion trends.",
            category: "Fashion"
        },
        {
            id: 3,
            name: "Flipkart",
            logoUrl: "https://via.placeholder.com/120x60.png?text=Flipkart",
            cashbackAmount: "Up to 6%",
            cashbackType: "Cashback",
            offerDetails: "On selected Mobiles & Laptops. India's favorite online store.",
            category: "Electronics"
        },
        {
            id: 4,
            name: "AJIO",
            logoUrl: "https://via.placeholder.com/120x60.png?text=AJIO",
            cashbackAmount: "Flat ₹200",
            cashbackType: "Cashback",
            offerDetails: "First order special offer. Exclusive styles and brands.",
            category: "Fashion"
        },
        {
            id: 5,
            name: "Swiggy",
            logoUrl: "https://via.placeholder.com/120x60.png?text=Swiggy",
            cashbackAmount: "Up to 30%",
            cashbackType: "Discount",
            offerDetails: "On your favorite restaurants. Fast delivery from top eateries.",
            category: "Food"
        },
        {
            id: 6,
            name: "Zomato",
            logoUrl: "https://via.placeholder.com/120x60.png?text=Zomato",
            cashbackAmount: "Flat 20%",
            cashbackType: "Cashback",
            offerDetails: "Order food online. Discover new restaurants near you.",
            category: "Food"
        }
    ];

    function renderStores(storesToRender) {
        storeGrid.innerHTML = ''; // Clear existing stores
        if (storesToRender.length === 0) {
            storeGrid.innerHTML = '<p style="text-align:center; grid-column: 1 / -1;">No stores found for this category.</p>';
            return;
        }
        storesToRender.forEach(store => {
            const storeCard = `
                <article class="store-card" data-category="${store.category.toLowerCase()}">
                    <img src="${store.logoUrl}" alt="${store.name} Logo" class="logo-img">
                    <div>
                        <h3>${store.name}</h3>
                        <div class="cashback-info">
                            ${store.cashbackAmount} <span class="type">${store.cashbackType}</span>
                        </div>
                        <p class="offer-details">${store.offerDetails}</p>
                    </div>
                    <a href="#" class="action-button" data-store-id="${store.id}">Activate Cashback</a>
                </article>
            `;
            storeGrid.innerHTML += storeCard;
        });

        // Add event listeners to newly created buttons (for a real app)
        document.querySelectorAll('.action-button').forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                const storeId = event.target.dataset.storeId;
                const storeName = storesData.find(s => s.id == storeId)?.name || 'Unknown Store';
                console.log(`Activate cashback for store ID: ${storeId} (${storeName})`);
                // In a real app: redirect to affiliate link, track click, etc.
                alert(`Button clicked for ${storeName}! (Actual redirection not implemented in this demo)`);
            });
        });
    }

    // Initial render of all stores
    renderStores(storesData);

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterCategory = button.textContent.toLowerCase();
            if (filterCategory === 'all') {
                renderStores(storesData);
            } else {
                const filteredStores = storesData.filter(store => store.category.toLowerCase() === filterCategory);
                renderStores(filteredStores);
            }
        });
    });
});
