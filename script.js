// script.js

// ... (firebaseConfig and auth setup) ...
// ... (Authentication UI Elements and Listeners) ...

document.addEventListener('DOMContentLoaded', () => {
    const storeGrid = document.getElementById('storeGrid');
    const instagramProfileUrl = "https://www.instagram.com/the___ron?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

    const storesData = [
        {
            id: 1,
            name: "Amazon",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
            cashbackAmount: "0.00001%",
            cashbackType: "SynergyUnits™",
            offerDetails: "Mandatory fun procurement zone. Achieve optimal acquisition of miscellaneous consumer goods. Failure is not an option.",
            category: "electronics", // General category, can be multi-category
            officialUrl: "https://www.amazon.in" // Using .in for India, adjust if needed
        },
        {
            id: 2,
            name: "Myntra",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Myntra_logo.png",
            cashbackAmount: "Tier 3",
            cashbackType: "ApprovalPoints©",
            offerDetails: "Update your external casing to meet Q3 style mandates. Non-compliance may result in peer disapproval.",
            category: "fashion",
            officialUrl: "https://www.myntra.com"
        },
        {
            id: 3,
            name: "Flipkart", // Already present, but confirming details
            logoUrl: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png", // Example logo
            cashbackAmount: "404",
            cashbackType: "ErrorBucks (redeemable for more errors)",
            offerDetails: "Your one-stop-shop for digital artifacts and silicon-based lifeforms. Warning: may contain glitches.",
            category: "electronics", // General category
            officialUrl: "https://www.flipkart.com"
        },
        {
            id: 4,
            name: "AJIO",
            logoUrl: "https://cdn.iconscout.com/icon/free/png-256/ajio-3384844-2822656.png",
            cashbackAmount: "CLASSIFIED",
            cashbackType: "StealthSavings™",
            offerDetails: "Procure designated sartorial upgrades. Blend in. Or stand out. Your choice, operative (results may vary).",
            category: "fashion",
            officialUrl: "https://www.ajio.com"
        },
        {
            id: 5,
            name: "Swiggy",
            logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png",
            cashbackAmount: "MAX_INT",
            cashbackType: "CalorieCredits®",
            offerDetails: "Automated delivery of vital sustenance. Ensure peak operational efficiency. Do not operate heavy machinery post-ingestion.",
            category: "food",
            officialUrl: "https://www.swiggy.com"
        },
        {
            id: 6,
            name: "Zomato",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Zomato_logo.png/800px-Zomato_logo.png",
            cashbackAmount: "OVER 9000!",
            cashbackType: "FlavorStamps™",
            offerDetails: "Access a wide array of pre-processed nutrition solutions. Warning: May induce sudden desire for naps.",
            category: "food",
            officialUrl: "https://www.zomato.com"
        },
        // --- NEW STORES ---
        {
            id: 7, // Make sure IDs are unique
            name: "Snapdeal",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Snapdeal_logo_new.png/600px-Snapdeal_logo_new.png", // Example logo
            cashbackAmount: "Variable %",
            cashbackType: "BargainBits™",
            offerDetails: "Engage in resource acquisition at sub-optimal expenditure levels. Deal parameters may fluctuate wildly.",
            category: "electronics", // Snapdeal is multi-category, pick a primary or make new filter
            officialUrl: "https://www.snapdeal.com"
        },
        {
            id: 8,
            name: "Meesho",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Meesho_logo.png/600px-Meesho_logo.png", // Example logo
            cashbackAmount: "Social Synergy %",
            cashbackType: "ResellerRoyalties™",
            offerDetails: "Facilitate decentralized commerce. Leverage social networks for enhanced value extraction. Become the vendor!",
            category: "fashion", // Meesho is strong in fashion, also multi-category
            officialUrl: "https://www.meesho.com"
        }
        // You can continue adding more stores here
    ];

    // ... (rest of your script.js: renderStores function, addInstagramPopupListeners, auth listeners, filter logic, etc.) ...

    function renderStores(storesToRender) {
        if (!storeGrid) return;
        storeGrid.innerHTML = '';
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
                    <a href="${store.officialUrl}" class="action-button store-link-button" data-store-id="${store.id}" target="_blank" rel="noopener noreferrer">ENGAGE PROTOCOL »</a>
                </article>
            `;
            storeGrid.innerHTML += storeCard;
        });

        addInstagramPopupListeners();
    }

    function addInstagramPopupListeners() {
        const storeLinkButtons = document.querySelectorAll('.store-link-button');
        storeLinkButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault(); 
                
                const storeUrl = this.href; 
                const userChoice = confirm("SYNERGYBUCKS™ ALERT:\n\nBefore proceeding to the merchant, would you like to visit our esteemed partner's Instagram profile for MAXIMUM INSPIRATION?\n\nOK = Visit Instagram\nCancel = Proceed to Merchant");

                if (userChoice) {
                    console.log("Redirecting to Instagram:", instagramProfileUrl);
                    window.open(instagramProfileUrl, '_blank');
                } else {
                    console.log("Proceeding to merchant:", storeUrl);
                    window.open(storeUrl, '_blank');
                }
            });
        });
    }

    if (storeGrid) {
        renderStores(storesData);
    }

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterCategory = button.dataset.filter;
            if (filterCategory === 'all') {
                if (storeGrid) renderStores(storesData);
            } else {
                const filteredStores = storesData.filter(store => store.category.toLowerCase() === filterCategory);
                if (storeGrid) renderStores(filteredStores);
            }
        });
    });

}); // End of DOMContentLoaded
