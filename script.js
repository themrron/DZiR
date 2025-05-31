document.addEventListener('DOMContentLoaded', () => {
    const storeGrid = document.getElementById('storeGrid');

    const storesData = [
        {
            id: 1,
            name: "Amazin' Deals",
            logoUrl: "https://via.placeholder.com/130x70.png?text=Amazin'",
            cashbackAmount: "Up to 0.001%",
            cashbackType: "Bitcoin (maybe)",
            offerDetails: "So many boxes, you'll think it's Christmas every day. Probably just socks.",
            category: "electronics" // Matched to data-filter in HTML
        },
        {
            id: 2,
            name: "Myntrax Fashion Vortex",
            logoUrl: "https://via.placeholder.com/130x70.png?text=Myntrax",
            cashbackAmount: "Flat π%",
            cashbackType: "Existential Rewards",
            offerDetails: "Dress like you're famous, even if only your cat notices. She's judging, btw.",
            category: "fashion"
        },
        {
            id: 3,
            name: "FlipFlopKart",
            logoUrl: "https://via.placeholder.com/130x70.png?text=FlipFlop",
            cashbackAmount: "Up to 42%",
            cashbackType: "Cosmic Chuckles",
            offerDetails: "Deals so good, they're almost suspicious. Is this a dream? Pinch yourself.",
            category: "electronics"
        },
        {
            id: 4,
            name: "AJIO-MG!",
            logoUrl: "https://via.placeholder.com/130x70.png?text=AJIO-MG",
            cashbackAmount: "Flat ₹LOL",
            cashbackType: "GiggleCash",
            offerDetails: "Be the trend, or at least try not to trip over it. We believe in you!",
            category: "fashion"
        },
        {
            id: 5,
            name: "Swiggylicious Noms",
            logoUrl: "https://via.placeholder.com/130x70.png?text=SwiggyFood",
            cashbackAmount: "Up to ∞%",
            cashbackType: "Food Coma Points",
            offerDetails: "Food that makes you go 'Mmm... and also, where's my TV remote?'",
            category: "food"
        },
        {
            id: 6,
            name: "Zomato-pocalypse",
            logoUrl: "https://via.placeholder.com/130x70.png?text=ZomatoEat",
            cashbackAmount: "A Gazillion",
            cashbackType: "Belly Rubs",
            offerDetails: "So many choices, you'll forget what you were hungry for. Just pick one!",
            category: "food"
        },
        {
            id: 7,
            name: "Gadget Glitch Emporium",
            logoUrl: "https://via.placeholder.com/130x70.png?text=Gadgets",
            cashbackAmount: "Error 404%",
            cashbackType: "Not Found",
            offerDetails: "Shiny things that beep and boop. May or may not improve your life.",
            category: "electronics"
        },
        {
            id: 8,
            name: "Threadbare Comedy Club",
            logoUrl: "https://via.placeholder.com/130x70.png?text=Threads",
            cashbackAmount: "10 Jokes Off",
            cashbackType: "Laugh Tracks",
            offerDetails: "Wearable punchlines and comedic couture. Warning: May cause spontaneous giggling.",
            category: "fashion"
        }
    ];

    function renderStores(storesToRender) {
        storeGrid.innerHTML = ''; // Clear existing stores
        if (storesToRender.length === 0) {
            storeGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; background-color: var(--card-bg); border-radius: 10px; border: 1px solid var(--accent-magenta);">
                    <h3 style="color: var(--accent-magenta); font-family: var(--heading-font);">No Chuckles Here!</h3>
                    <p style="color: var(--text-muted);">Looks like the comedy well is dry for this category. Try another filter, funny pants!</p>
                    <img src="https://via.placeholder.com/100x100.png?text=Sad+Clown" alt="Sad Clown" style="margin-top: 20px; border-radius: 50%; filter: grayscale(1);">
                </div>`;
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
                    <a href="#" class="action-button" data-store-id="${store.id}">Grab the Giggle & Get Paid!</a>
                </article>
            `;
            storeGrid.innerHTML += storeCard;
        });

        document.querySelectorAll('.action-button').forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                const storeId = event.target.dataset.storeId;
                const storeName = storesData.find(s => s.id == storeId)?.name || 'Mystery Merchant';
                console.log(`Giggle activated for store ID: ${storeId} (${storeName})`);
                alert(`You're about to snag a deal from ${storeName}! Prepare for potential side-splitting savings! (Actual redirection not implemented, this is just for laughs)`);
            });
        });
    }

    renderStores(storesData);

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterCategory = button.dataset.filter; // Use data-filter attribute
            if (filterCategory === 'all') {
                renderStores(storesData);
            } else {
                const filteredStores = storesData.filter(store => store.category.toLowerCase() === filterCategory);
                renderStores(filteredStores);
            }
        });
    });
});
