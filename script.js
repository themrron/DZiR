document.addEventListener('DOMContentLoaded', () => {
    const storeGrid = document.getElementById('storeGrid');

    const storesData = [
        {
            id: 1,
            name: "Project: GigaMart",
            logoUrl: "https://via.placeholder.com/100x50.png?text=GMART",
            cashbackAmount: "0.00001%",
            cashbackType: "SynergyUnits™",
            offerDetails: "Mandatory fun procurement zone. Achieve optimal acquisition of miscellaneous consumer goods. Failure is not an option.",
            category: "electronics",
            officialUrl: "https://www.amazon.com"
        },
        {
            id: 2,
            name: "Aesthetic Compliance Dept. (Fashion)",
            logoUrl: "https://via.placeholder.com/100x50.png?text=ACDF",
            cashbackAmount: "Tier 3",
            cashbackType: "ApprovalPoints©",
            offerDetails: "Update your external casing to meet Q3 style mandates. Non-compliance may result in peer disapproval.",
            category: "fashion",
            officialUrl: "https://www.myntra.com"
        },
        {
            id: 3,
            name: "DataStream Bazaar",
            logoUrl: "https://via.placeholder.com/100x50.png?text=DSB",
            cashbackAmount: "404",
            cashbackType: "ErrorBucks (redeemable for more errors)",
            offerDetails: "Your one-stop-shop for digital artifacts and silicon-based lifeforms. Warning: may contain glitches.",
            category: "electronics",
            officialUrl: "https://www.flipkart.com"
        },
        {
            id: 4,
            name: "Apparel Enhancement Initiative",
            logoUrl: "https://via.placeholder.com/100x50.png?text=AEI",
            cashbackAmount: "CLASSIFIED",
            cashbackType: "StealthSavings™",
            offerDetails: "Procure designated sartorial upgrades. Blend in. Or stand out. Your choice, operative (results may vary).",
            category: "fashion",
            officialUrl: "https://www.ajio.com"
        },
        {
            id: 5,
            name: "Nutrient Disbursement Unit",
            logoUrl: "https://via.placeholder.com/100x50.png?text=NDU",
            cashbackAmount: "MAX_INT",
            cashbackType: "CalorieCredits®",
            offerDetails: "Automated delivery of vital sustenance. Ensure peak operational efficiency. Do not operate heavy machinery post-ingestion.",
            category: "food",
            officialUrl: "https://www.swiggy.com"
        },
        {
            id: 6,
            name: "Culinary Distribution Network",
            logoUrl: "https://via.placeholder.com/100x50.png?text=CDN",
            cashbackAmount: "OVER 9000!",
            cashbackType: "FlavorStamps™",
            offerDetails: "Access a wide array of pre-processed nutrition solutions. Warning: May induce sudden desire for naps.",
            category: "food",
            officialUrl: "https://www.zomato.com"
        }
    ];

    function renderStores(storesToRender) {
        storeGrid.innerHTML = ''; // Clear existing stores
        if (storesToRender.length === 0) {
            storeGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 30px 15px; background-color: var(--color-card-bg); border: 2px dashed var(--color-accent-warning); color: var(--color-accent-warning);">
                    <h3 style="font-family: var(--font-pixel); color: var(--color-accent-warning);">!!! ALERT: NO SYNERGY DETECTED !!!</h3>
                    <p style="color: var(--color-text-dim); font-family: var(--font-crt);">Data retrieval for this sector yielded ZERO results. Re-calibrate search parameters, operative!</p>
                    <p style="font-size: 2em; margin-top: 10px;">:(</p>
                </div>`;
            return;
        }
        storesToRender.forEach((store, index) => {
            const storeCard = `
                <article class="store-card" style="--card-index: ${index};" data-category="${store.category.toLowerCase()}">
                    <img src="${store.logoUrl}" alt="${store.name} Logo" class="logo-img">
                    <h3>${store.name}</h3>
                    <div class="cashback-info">
                        ${store.cashbackAmount} <span class="type">${store.cashbackType}</span>
                    </div>
                    <p class="offer-details">${store.offerDetails}</p>
                    <a href="${store.officialUrl}" class="action-button" data-store-id="${store.id}" target="_blank" rel="noopener noreferrer">ENGAGE PROTOCOL »</a>
                </article>
            `;
            storeGrid.innerHTML += storeCard;
        });
    }

    renderStores(storesData); // Initial render

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
