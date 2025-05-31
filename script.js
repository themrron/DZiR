// IMPORTANT: PASTE YOUR firebaseConfig OBJECT FROM THE FIREBASE CONSOLE HERE
const firebaseConfig = {
  apiKey: "AIzaSyYOUR_API_KEY_HERE", // REPLACE
  authDomain: "your-project-id.firebaseapp.com", // REPLACE
  projectId: "your-project-id", // REPLACE
  storageBucket: "your-project-id.appspot.com", // REPLACE
  messagingSenderId: "YOUR_SENDER_ID", // REPLACE
  appId: "YOUR_APP_ID" // REPLACE
};

// Initialize Firebase (if not already initialized - good practice to check)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

// --- Authentication UI Elements ---
const loginButton = document.getElementById('login-button');
const logoutButton = document.getElementById('logout-button');
const userGreeting = document.getElementById('user-greeting');

// --- Listen for auth state changes ---
auth.onAuthStateChanged(user => {
    if (user) {
        // User is signed in
        if (loginButton) loginButton.style.display = 'none';
        if (logoutButton) logoutButton.style.display = 'inline-block'; // Or 'block' if it's alone
        if (userGreeting) {
            userGreeting.textContent = `OPERATIVE: ${user.displayName || user.email}`;
            userGreeting.style.display = 'inline';
        }
        console.log("User logged in:", user.displayName);
        // You could potentially fetch user-specific data here if you had a database
    } else {
        // User is signed out
        if (loginButton) loginButton.style.display = 'inline-block';
        if (logoutButton) logoutButton.style.display = 'none';
        if (userGreeting) userGreeting.style.display = 'none';
        console.log("User logged out");
    }
});

// --- Logout functionality ---
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        auth.signOut().then(() => {
            // Sign-out successful.
            // localStorage.removeItem('synergyUser'); // Clear any local user data
            console.log("Sign out successful");
            // The onAuthStateChanged listener above will handle UI updates
            // Optionally redirect to login page or home page
            // window.location.href = 'login.html';
        }).catch((error) => {
            // An error happened.
            console.error("Sign out error:", error);
        });
    });
}


// --- Existing Store Rendering Logic (Keep As Is) ---
document.addEventListener('DOMContentLoaded', () => { // Ensure DOM is fully loaded for store rendering
    const storeGrid = document.getElementById('storeGrid');

    const storesData = [
        // ... (Your existing storesData array with ORIGINAL names) ...
        {
            id: 1,
            name: "Amazon",
            logoUrl: "https://via.placeholder.com/100x50.png?text=Amazon",
            cashbackAmount: "0.00001%",
            cashbackType: "SynergyUnits™",
            offerDetails: "Mandatory fun procurement zone. Achieve optimal acquisition of miscellaneous consumer goods. Failure is not an option.",
            category: "electronics",
            officialUrl: "https://www.amazon.com"
        },
        {
            id: 2,
            name: "Myntra",
            logoUrl: "https://via.placeholder.com/100x50.png?text=Myntra",
            cashbackAmount: "Tier 3",
            cashbackType: "ApprovalPoints©",
            offerDetails: "Update your external casing to meet Q3 style mandates. Non-compliance may result in peer disapproval.",
            category: "fashion",
            officialUrl: "https://www.myntra.com"
        },
        {
            id: 3,
            name: "Flipkart",
            logoUrl: "https://via.placeholder.com/100x50.png?text=Flipkart",
            cashbackAmount: "404",
            cashbackType: "ErrorBucks (redeemable for more errors)",
            offerDetails: "Your one-stop-shop for digital artifacts and silicon-based lifeforms. Warning: may contain glitches.",
            category: "electronics",
            officialUrl: "https://www.flipkart.com"
        },
        {
            id: 4,
            name: "AJIO",
            logoUrl: "https://via.placeholder.com/100x50.png?text=AJIO",
            cashbackAmount: "CLASSIFIED",
            cashbackType: "StealthSavings™",
            offerDetails: "Procure designated sartorial upgrades. Blend in. Or stand out. Your choice, operative (results may vary).",
            category: "fashion",
            officialUrl: "https://www.ajio.com"
        },
        {
            id: 5,
            name: "Swiggy",
            logoUrl: "https://via.placeholder.com/100x50.png?text=Swiggy",
            cashbackAmount: "MAX_INT",
            cashbackType: "CalorieCredits®",
            offerDetails: "Automated delivery of vital sustenance. Ensure peak operational efficiency. Do not operate heavy machinery post-ingestion.",
            category: "food",
            officialUrl: "https://www.swiggy.com"
        },
        {
            id: 6,
            name: "Zomato",
            logoUrl: "https://via.placeholder.com/100x50.png?text=Zomato",
            cashbackAmount: "OVER 9000!",
            cashbackType: "FlavorStamps™",
            offerDetails: "Access a wide array of pre-processed nutrition solutions. Warning: May induce sudden desire for naps.",
            category: "food",
            officialUrl: "https://www.zomato.com"
        }
    ];

    function renderStores(storesToRender) {
        if (!storeGrid) return; // Guard clause if storeGrid is not found
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
                    <a href="${store.officialUrl}" class="action-button" data-store-id="${store.id}" target="_blank" rel="noopener noreferrer">ENGAGE PROTOCOL »</a>
                </article>
            `;
            storeGrid.innerHTML += storeCard;
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
                if (storeGrid) renderStores(filteredStores);
            }
        });
    });
}); // End of DOMContentLoaded for store rendering
