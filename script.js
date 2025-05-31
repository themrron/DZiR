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
            category: "electronics",
            officialUrl: "https://www.amazon.com" // Example official URL
        },
        {
            id: 2,
            name: "Myntrax Fashion Vortex",
            logoUrl: "https://via.placeholder.com/130x70.png?text=Myntrax",
            cashbackAmount: "Flat π%",
            cashbackType: "Existential Rewards",
            offerDetails: "Dress like you're famous, even if only your cat notices. She's judging, btw.",
            category: "fashion",
            officialUrl: "https://www.myntra.com" // Example official URL
        },
        {
            id: 3,
            name: "FlipFlopKart",
            logoUrl: "https://via.placeholder.com/130x70.png?text=FlipFlop",
            cashbackAmount: "Up to 42%",
            cashbackType: "Cosmic Chuckles",
            offerDetails: "Deals so good, they're almost suspicious. Is this a dream? Pinch yourself.",
            category: "electronics",
            officialUrl: "https://www.flipkart.com" // Example official URL
        },
        {
            id: 4,
            name: "AJIO-MG!",
            logoUrl: "https://via.placeholder.com/130x70.png?text=AJIO-MG",
            cashbackAmount: "Flat ₹LOL",
            cashbackType: "GiggleCash",
            offerDetails: "Be the trend, or at least try not to trip over it. We believe in you!",
            category: "fashion",
            officialUrl: "https://www.ajio.com" // Example official URL
        },
        {
            id: 5,
            name: "Swiggylicious Noms",
            logoUrl: "https://via.placeholder.com/130x70.png?text=SwiggyFood",
            cashbackAmount: "Up to ∞%",
            cashbackType: "Food Coma Points",
            offerDetails: "Food that makes you go 'Mmm... and also, where's my TV remote?'",
            category: "food",
            officialUrl: "https://www.swiggy.com" // Example official URL
        },
        {
            id: 6,
            name: "Zomato-pocalypse",
            logoUrl: "https://via.placeholder.com/130x70.png?text=ZomatoEat",
            cashbackAmount: "A Gazillion",
            cashbackType: "Belly Rubs",
            offerDetails: "So many choices, you'll forget what you were hungry for. Just pick one!",
            category: "food",
            officialUrl: "https://www.zomato.com" // Example official URL
        },
        {
            id: 7,
            name: "Gadget Glitch Emporium",
            logoUrl: "https://via.placeholder.com/130x70.png?text=Gadgets",
            cashbackAmount: "Error 404%",
            cashbackType: "Not Found",
            offerDetails: "Shiny things that beep and boop. May or may not improve your life.",
            category: "electronics",
            officialUrl: "https://www.bestbuy.com" // Example for a generic gadget store
        },
        {
            id: 8,
            name: "Threadbare Comedy Club",
            logoUrl: "https://via.placeholder.com/130x70.png?text=Threads",
            cashbackAmount: "10 Jokes Off",
            cashbackType: "Laugh Tracks",
            offerDetails: "Wearable punchlines and comedic couture. Warning: May cause spontaneous giggling.",
            category: "fashion",
            officialUrl: "https://www.asos.com" // Example for a generic fashion store
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
                    <a href="${store.officialUrl}" class="action-button" data-store-id="${store.id}" target="_blank" rel="noopener noreferrer">Grab the Giggle & Get Paid!</a>
                </article>
            `;
            // Note: We added target="_blank" and rel="noopener noreferrer" to the <a> tag directly.
            // The JS event listener for alert can be removed or modified if needed for other tracking.
            storeGrid.innerHTML += storeCard;
        });

        // Optional: If you still want to do something BEFORE redirecting (like logging)
        // you can keep the event listener, but ensure it doesn't preventDefault() if
        // the link itself is handling the redirect. For simplicity, direct link is fine.
        // If you keep the listener, it might look like this:

        /*
        document.querySelectorAll('.action-button').forEach(button => {
            button.addEventListener('click', (event) => {
                // event.preventDefault(); // Remove this if the <a> tag has the href
                const storeId = event.target.dataset.storeId;
                const store = storesData.find(s => s.id == storeId);

                if (store) {
                    console.log(`User clicked on ${store.name} (ID: ${storeId}). Redirecting to: ${store.officialUrl}`);
                    // The <a> tag's href will handle the actual redirection.
                    // You might add tracking logic here in a real app before the user leaves your site.
                }
            });
        });
        */
    }

    renderStores(storesData);

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterCategory = button.dataset.filter;
            if (filterCategory === 'all') {
                renderStores(storesData);
            } else {
                const filteredStores = storesData.filter(store => store.category.toLowerCase() === filterCategory);
                renderStores(filteredStores);
            }
        });
    });
});
