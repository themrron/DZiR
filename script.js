// script.js

// ... (firebaseConfig and auth setup) ...
// ... (Authentication UI Elements and Listeners) ...

// --- Existing Store Rendering Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const storeGrid = document.getElementById('storeGrid');
    const instagramProfileUrl = "https://www.instagram.com/the___ron?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="; // Instagram URL

    const storesData = [
        // ... (Your existing storesData array with ORIGINAL names and logoUrls) ...
        {
            id: 1,
            name: "Amazon",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
            cashbackAmount: "0.00001%",
            cashbackType: "SynergyUnits™",
            offerDetails: "Mandatory fun procurement zone. Achieve optimal acquisition of miscellaneous consumer goods. Failure is not an option.",
            category: "electronics",
            officialUrl: "https://www.amazon.com"
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
        // ... (rest of your stores)
        {
            id: 6,
            name: "Zomato",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Zomato_logo.png/800px-Zomato_logo.png",
            cashbackAmount: "OVER 9000!",
            cashbackType: "FlavorStamps™",
            offerDetails: "Access a wide array of pre-processed nutrition solutions. Warning: May induce sudden desire for naps.",
            category: "food",
            officialUrl: "https://www.zomato.com"
        }
    ];

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

        // Add event listeners for the Instagram popup AFTER cards are rendered
        addInstagramPopupListeners();
    }

    function addInstagramPopupListeners() {
        const storeLinkButtons = document.querySelectorAll('.store-link-button');
        storeLinkButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default link behavior immediately
                
                const storeUrl = this.href; // Get the original store URL

                const userChoice = confirm("SYNERGYBUCKS™ ALERT:\n\nBefore proceeding to the merchant, would you like to visit our esteemed partner's Instagram profile for MAXIMUM INSPIRATION?\n\nOK = Visit Instagram\nCancel = Proceed to Merchant");

                if (userChoice) {
                    // User clicked OK - redirect to Instagram
                    console.log("Redirecting to Instagram:", instagramProfileUrl);
                    window.open(instagramProfileUrl, '_blank');
                    // Optionally, you might still want to open the store link after a delay or let the user click again
                    // For now, if they go to Instagram, they don't go to the store from this click.
                } else {
                    // User clicked Cancel - redirect to the original store
                    console.log("Proceeding to merchant:", storeUrl);
                    window.open(storeUrl, '_blank');
                }
            });
        });
    }


    // Initial render if storeGrid exists
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
                if (storeGrid) renderStores(filteredStores); // Corrected: storeGrid instead of storeGritd
            }
        });
    });

}); // End of DOMContentLoaded
