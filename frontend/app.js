/* ==========================================================================
   McDonald's Kiosk & Counter e-Bill Application Engine (INR ₹ Edition)
   ========================================================================== */

// --- MENU CATALOG STATE (INDIAN RUPEE ₹) ---
const DEFAULT_MENU_CATALOG = [
  {
    "id": "cc-sb-01",
    "name": "Sandwich Veg",
    "category": "SANDWICH & BURGER",
    "price": 75.0,
    "image": "assets/veg sandwhich.jpg"
  },
  {
    "id": "cc-sb-02",
    "name": "Sandwich Cheese",
    "category": "SANDWICH & BURGER",
    "price": 90.0,
    "image": "assets/sandwich cheese.png"
  },
  {
    "id": "cc-sb-03",
    "name": "Sandwich Chicken",
    "category": "SANDWICH & BURGER",
    "price": 100.0,
    "image": "assets/chicken sandwich.jpg"
  },
  {
    "id": "cc-sb-04",
    "name": "Sandwich Egg",
    "category": "SANDWICH & BURGER",
    "price": 100.0,
    "image": "assets/egg sandwich.webp"
  },
  {
    "id": "cc-sb-05",
    "name": "Sandwich Peri Peri Egg",
    "category": "SANDWICH & BURGER",
    "price": 120.0,
    "image": "assets/egg sandwich.webp"
  },
  {
    "id": "cc-sb-06",
    "name": "Sandwich Chicken & Cheese",
    "category": "SANDWICH & BURGER",
    "price": 120.0,
    "image": "assets/chicken sandwich.jpg"
  },
  {
    "id": "cc-sb-07",
    "name": "Classic Chicken Burger",
    "category": "SANDWICH & BURGER",
    "price": 130.0,
    "image": "assets/big_mac.jpg"
  },
  {
    "id": "cc-sb-08",
    "name": "Chicken 65 Burger",
    "category": "SANDWICH & BURGER",
    "price": 150.0,
    "image": "assets/chicken 65 burger.png"
  },
  {
    "id": "cc-snk-01",
    "name": "Pani Puri",
    "category": "SNACKS",
    "price": 30.0,
    "image": "assets/paani puri.png"
  },
  {
    "id": "cc-snk-02",
    "name": "Butter Bun",
    "category": "SNACKS",
    "price": 35.0,
    "image": "assets/butter bun.webp"
  },
  {
    "id": "cc-snk-03",
    "name": "Chocolate Bun",
    "category": "SNACKS",
    "price": 50.0,
    "image": "assets/chocolate bun.jpeg"
  },
  {
    "id": "cc-snk-04",
    "name": "Bun Butter Jam",
    "category": "SNACKS",
    "price": 50.0,
    "image": "assets/bun butter jamm.png"
  },
  {
    "id": "cc-snk-05",
    "name": "Smileys",
    "category": "SNACKS",
    "price": 70.0,
    "image": "assets/smileys.jpg"
  },
  {
    "id": "cc-snk-06",
    "name": "French Fries",
    "category": "SNACKS",
    "price": 70.0,
    "image": "assets/french_fries.jpg"
  },
  {
    "id": "cc-snk-07",
    "name": "Loaded Cheese Fries",
    "category": "SNACKS",
    "price": 120.0,
    "image": "assets/loaded friess.png"
  },
  {
    "id": "cc-snk-08",
    "name": "Loaded Chicken Fries",
    "category": "SNACKS",
    "price": 150.0,
    "image": "assets/loaded chicken fries.jpg"
  },
  {
    "id": "cc-mag-01",
    "name": "Veg Maggi",
    "category": "MAGGI",
    "price": 60.0,
    "image": "assets/veg maggie.jpg"
  },
  {
    "id": "cc-mag-02",
    "name": "Spicy Tomato Maggi",
    "category": "MAGGI",
    "price": 60.0,
    "image": "assets/spicy tomato maggie.avif"
  },
  {
    "id": "cc-mag-03",
    "name": "Spicy Garlic Maggi",
    "category": "MAGGI",
    "price": 60.0,
    "image": "assets/spicy masala maggie.png"
  },
  {
    "id": "cc-mag-04",
    "name": "Egg Masala Maggi",
    "category": "MAGGI",
    "price": 70.0,
    "image": "assets/spicy masala maggie.png"
  },
  {
    "id": "cc-mag-05",
    "name": "Chilli Cheese Maggi",
    "category": "MAGGI",
    "price": 80.0,
    "image": "assets/chilli cheese maggie.png"
  },
  {
    "id": "cc-mag-06",
    "name": "Mayo Cheese Maggi",
    "category": "MAGGI",
    "price": 150.0,
    "image": "assets/mayo cheese maggie.png"
  },
  {
    "id": "cc-egg-01",
    "name": "Omelette",
    "category": "EGG",
    "price": 20.0,
    "image": "assets/Omelette.webp"
  },
  {
    "id": "cc-egg-02",
    "name": "Plain Egg",
    "category": "EGG",
    "price": 20.0,
    "image": "assets/plain egg.jpg"
  },
  {
    "id": "cc-egg-03",
    "name": "Full Boil",
    "category": "EGG",
    "price": 20.0,
    "image": "assets/full boil.jpg"
  },
  {
    "id": "cc-egg-04",
    "name": "Half Boil",
    "category": "EGG",
    "price": 30.0,
    "image": "assets/half boil.jpg"
  },
  {
    "id": "cc-egg-05",
    "name": "Poriyal",
    "category": "EGG",
    "price": 100.0,
    "image": "assets/Poriyal.avif"
  },
  {
    "id": "cc-egg-06",
    "name": "Butter Garlic Egg",
    "category": "EGG",
    "price": 100.0,
    "image": "assets/Butter Garlic Egg.jpg"
  },
  {
    "id": "cc-br-01",
    "name": "Butter Toast",
    "category": "BREAD & ROLL",
    "price": 50.0,
    "image": "assets/butter toast.jpg"
  },
  {
    "id": "cc-br-02",
    "name": "Garlic Toast",
    "category": "BREAD & ROLL",
    "price": 50.0,
    "image": "assets/garlic toast.jpg"
  },
  {
    "id": "cc-br-03",
    "name": "Bread Chilli",
    "category": "BREAD & ROLL",
    "price": 60.0,
    "image": "assets/bread chilli roll.jpg"
  },
  {
    "id": "cc-br-04",
    "name": "Bread Omelette",
    "category": "BREAD & ROLL",
    "price": 70.0,
    "image": "assets/bread omelete.jpg"
  },
  {
    "id": "cc-br-05",
    "name": "Chinese Egg Roll",
    "category": "BREAD & ROLL",
    "price": 80.0,
    "image": "assets/chinese egg roll.jpg"
  },
  {
    "id": "cc-br-06",
    "name": "Wheat Egg Roll",
    "category": "BREAD & ROLL",
    "price": 90.0,
    "image": "assets/wheat egg roll.png"
  },
  {
    "id": "cc-br-07",
    "name": "Wheat Chicken Roll",
    "category": "BREAD & ROLL",
    "price": 100.0,
    "image": "assets/wheat chicken roll.png"
  },
  {
    "id": "cc-msj-01",
    "name": "Lemon Juice",
    "category": "MILK SHAKE & JUICE",
    "price": 25.0,
    "image": "assets/juice lemon.png"
  },
  {
    "id": "cc-msj-02",
    "name": "Rose Milk",
    "category": "MILK SHAKE & JUICE",
    "price": 40.0,
    "image": "assets/rose milk.jpg"
  },
  {
    "id": "cc-msj-03",
    "name": "Watermelon Juice",
    "category": "MILK SHAKE & JUICE",
    "price": 60.0,
    "image": "assets/watermelon juice.avif"
  },
  {
    "id": "cc-msj-04",
    "name": "Vanilla Milkshake",
    "category": "MILK SHAKE & JUICE",
    "price": 130.0,
    "image": "assets/vanilla milkshake.avif"
  },
  {
    "id": "cc-msj-05",
    "name": "Strawberry Milkshake",
    "category": "MILK SHAKE & JUICE",
    "price": 130.0,
    "image": "assets/strawberry milkshake.jpg"
  },
  {
    "id": "cc-msj-06",
    "name": "Chocolate Milkshake",
    "category": "MILK SHAKE & JUICE",
    "price": 130.0,
    "image": "assets/chocolate milkshake.webp"
  },
  {
    "id": "cc-msj-07",
    "name": "Butterscotch Milkshake",
    "category": "MILK SHAKE & JUICE",
    "price": 130.0,
    "image": "assets/butterscotch milkshake.webp"
  },
  {
    "id": "cc-msj-08",
    "name": "Oreo/Kitkat Milkshake",
    "category": "MILK SHAKE & JUICE",
    "price": 130.0,
    "image": "assets/oreo or kitkat milkshake.jpg"
  },
  {
    "id": "cc-ice-01",
    "name": "One Scoop Ice Cream",
    "category": "ICE CREAM",
    "price": 10.0,
    "image": "assets/one scope icecream.png"

  },
  {
    "id": "cc-ice-02",
    "name": "Vanilla",
    "category": "ICE CREAM",
    "price": 40.0,
    "image": "assets/vanilla ice cream.png"
  },
  {
    "id": "cc-ice-03",
    "name": "Strawberry",
    "category": "ICE CREAM",
    "price": 40.0,
    "image": "assets/strawberry icecream.png"
  },
  {
    "id": "cc-ice-04",
    "name": "Pista",
    "category": "ICE CREAM",
    "price": 50.0,
    "image": "assets/pista ice cream.png"
  },
  {
    "id": "cc-ice-05",
    "name": "Chocolate",
    "category": "ICE CREAM",
    "price": 50.0,
    "image": "assets/chocolate ice cream.png"
  },
  {
    "id": "cc-ice-06",
    "name": "Butterscotch",
    "category": "ICE CREAM",
    "price": 50.0,
    "image": "assets/butterscotch ice cream.png"
  }
];

let MENU_CATALOG = [];

const CATALOG_STORAGE_KEY = 'chiacas_menu_catalog_v7';

function loadCustomCatalog() {
  const storedCatalog = localStorage.getItem(CATALOG_STORAGE_KEY);
  if (storedCatalog) {
    try {
      MENU_CATALOG = JSON.parse(storedCatalog);
      if (!Array.isArray(MENU_CATALOG) || MENU_CATALOG.length === 0) {
        MENU_CATALOG = [...DEFAULT_MENU_CATALOG];
        saveCustomCatalog();
      }
    } catch(e) {
      MENU_CATALOG = [...DEFAULT_MENU_CATALOG];
      saveCustomCatalog();
    }
  } else {
    // Fresh catalog initialization
    try { localStorage.removeItem('mcd_custom_catalog'); } catch(e){}
    MENU_CATALOG = [...DEFAULT_MENU_CATALOG];
    saveCustomCatalog();
  }
}

function saveCustomCatalog() {
  try {
    localStorage.setItem(CATALOG_STORAGE_KEY, JSON.stringify(MENU_CATALOG));
    localStorage.setItem('mcd_custom_catalog', JSON.stringify(MENU_CATALOG));
  } catch(e){}
}

// --- APP GLOBAL STATE ---
let state = {
  currentCategory: 'all',
  searchQuery: '',
  orderType: 'Dine-In',
  soundEnabled: true,
  cart: [],
  orders: [],
  activeCustomItem: null,
  customState: {
    size: 'solo',
    sizePrice: 0,
    toppings: [],
    sauce: 'Special Big Mac Sauce',
    quantity: 1
  },
  selectedPaymentMethod: 'gpay',
  activeSelectedToken: null,
  activeOrderId: null,
  isNewCounterDraft: false,
  tokenCounter: 1,
  merchantUpiId: localStorage.getItem('mcd_merchant_upi_id') || 'chiacas@gpay',
  merchantName: localStorage.getItem('mcd_merchant_name') || "Chiacas Store #4081"
};

// --- AUDIO SYNTHESIZER ---
let audioCtx = null;
function playSound(type) {
  if (!state.soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    const now = audioCtx.currentTime;
    if (type === 'click') {
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.08);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'add') {
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.08);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.2);
    } else if (type === 'success') {
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(554.37, now + 0.1);
      osc.frequency.setValueAtTime(659.25, now + 0.2);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    }
  } catch (e) {
    console.log('Audio Context Error:', e);
  }
}

function toggleAudio() {
  state.soundEnabled = !state.soundEnabled;
  const btn = document.getElementById('sound-btn');
  if (state.soundEnabled) {
    btn.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
    playSound('click');
  } else {
    btn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
  }
}

// --- INITIALIZATION & DUAL WINDOW SYNC ---
document.addEventListener('DOMContentLoaded', () => {
  loadCustomCatalog();
  loadPromoOffer();
  renderCategoryFilterButtons();
  setupDragAndDropUpload();
  renderMenu();
  loadOrdersFromStorage();
  updateCartDisplay();
  updateOrdersBadge();
  renderCounterTopCatalogRow();

  // Check active view from localStorage or URL hash to maintain page state on refresh
  const savedView = localStorage.getItem('mcd_active_view');
  const hashView = window.location.hash === '#counter' ? 'counter' : (window.location.hash === '#kiosk' ? 'kiosk' : null);
  const targetView = savedView || hashView || 'kiosk';

  if (targetView === 'counter') {
    switchView('counter', false);
  } else {
    switchView('kiosk', false);
  }

  window.addEventListener('storage', (e) => {
    if (e.key === 'mcd_orders_data') {
      loadOrdersFromStorage(false);
      renderOrderTicketsList();
      if (state.activeOrderId) {
        selectOrderForEBill(state.activeOrderId);
      } else if (state.activeSelectedToken) {
        selectOrderForEBill(state.activeSelectedToken);
      }
    }
  });
});

function recalculateTokenCounter() {
  const todayStr = new Date().toLocaleDateString();
  const todayOrders = (state.orders || []).filter(o => o.dateStr === todayStr);

  if (!todayOrders || todayOrders.length === 0) {
    state.tokenCounter = 1;
    return;
  }

  let maxNum = 0;
  todayOrders.forEach(o => {
    const num = parseInt(o.token.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(num) && num > maxNum) {
      maxNum = num;
    }
  });

  state.tokenCounter = maxNum + 1;
}

function resetSalesAndStartFromOne() {
  if (confirm("Are you sure you want to clear all sales history and reset the bill counter to start from Bill #1?")) {
    playSound('click');
    state.orders = [];
    state.tokenCounter = 1;
    state.activeOrderId = null;
    state.activeSelectedToken = null;
    state.isNewCounterDraft = false;
    saveOrdersToStorage();

    const ebillCard = document.getElementById('ebill-display-card');
    const noOrdCard = document.getElementById('no-order-selected');
    if (ebillCard) ebillCard.classList.add('hidden');
    if (noOrdCard) noOrdCard.classList.remove('hidden');

    renderOrderTicketsList();
    renderSalesAnalyticsReport();
    updateOrdersBadge();
    renderCounterTopCatalogRow();

    const msg = document.getElementById('merchant-upi-save-msg');
    if (msg) {
      msg.textContent = "✓ Sales history reset! Next bill will start from Bill #1.";
      setTimeout(() => { msg.textContent = ''; }, 4500);
    }
  }
}

function saveOrdersToStorage() {
  localStorage.setItem('mcd_orders_data', JSON.stringify(state.orders));
  localStorage.setItem('mcd_token_counter', state.tokenCounter.toString());
}

function loadOrdersFromStorage(seedIfEmpty = true) {
  const stored = localStorage.getItem('mcd_orders_data');
  let needsSave = false;
  
  if (stored) {
    try {
      state.orders = JSON.parse(stored);
      // Ensure every order has a unique ID (backward compatibility for existing stored orders)
      state.orders.forEach((o, index) => {
        if (!o.id) {
          o.id = 'ord-' + (o.timestamp || (Date.now() - index * 1000)) + '-' + Math.random().toString(36).substr(2, 6);
          needsSave = true;
        }
      });
      if (needsSave) {
        saveOrdersToStorage();
      }
    } catch(e) {
      if (seedIfEmpty) seedInitialOrders();
    }
  } else if (seedIfEmpty) {
    seedInitialOrders();
  }

  if (state.orders.length > 0) {
    if (!state.activeOrderId || !state.orders.some(o => o.id === state.activeOrderId)) {
      state.activeOrderId = state.orders[0].id;
      state.activeSelectedToken = state.orders[0].token;
    }
  } else {
    state.activeOrderId = null;
    state.activeSelectedToken = null;
  }

  recalculateTokenCounter();
}

// --- OFFICIAL GOOGLE PAY WEB API INTEGRATION (INR ₹) ---
let googlePaymentsClient = null;

function getGooglePaymentsClient() {
  if (googlePaymentsClient === null && window.google && window.google.payments) {
    googlePaymentsClient = new google.payments.api.PaymentsClient({
      environment: 'TEST'
    });
  }
  return googlePaymentsClient;
}

function onGooglePayLoaded() {
  console.log('Google Pay Web API SDK Loaded');
}

function launchRealGooglePaySheet(totalAmount) {
  playSound('click');
  const paymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["AMEX", "DISCOVER", "JCB", "MASTERCARD", "VISA"]
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            'gateway': 'example',
            'gatewayMerchantId': 'exampleGatewayMerchantId'
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: "McDonald's India Store"
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPrice: totalAmount.toFixed(2),
      currencyCode: 'INR',
      countryCode: 'IN'
    }
  };

  const client = getGooglePaymentsClient();
  if (client) {
    client.loadPaymentData(paymentDataRequest)
      .then(function(paymentData) {
        console.log('GPay Payment Authorized:', paymentData);
        processOrderPayment('gpay');
      })
      .catch(function(err) {
        console.log('GPay sheet closed or fallback:', err);
        processOrderPayment('gpay');
      });
  } else {
    processOrderPayment('gpay');
  }
}

// --- OWNER SECURITY PIN STATE & LOGIC ---
let OWNER_PIN = localStorage.getItem('chiacas_owner_pin') || '1234';
let enteredPin = '';
let pinTargetAction = 'counter';

function openOwnerPinModal(targetAction = 'counter') {
  playSound('click');
  pinTargetAction = targetAction;
  enteredPin = '';
  updatePinDotsDisplay();
  const errorMsg = document.getElementById('pin-error-msg');
  if (errorMsg) errorMsg.classList.add('hidden');
  const modal = document.getElementById('owner-pin-modal');
  if (modal) modal.classList.add('open');
}

function closeOwnerPinModal() {
  playSound('click');
  const modal = document.getElementById('owner-pin-modal');
  if (modal) modal.classList.remove('open');
  enteredPin = '';
}

function pressPinKey(key) {
  playSound('click');
  if (enteredPin.length < 4) {
    enteredPin += key;
    updatePinDotsDisplay();
    if (enteredPin.length === 4) {
      setTimeout(() => {
        verifyOwnerPin();
      }, 150);
    }
  }
}

function clearPin() {
  playSound('click');
  enteredPin = '';
  updatePinDotsDisplay();
  const errorMsg = document.getElementById('pin-error-msg');
  if (errorMsg) errorMsg.classList.add('hidden');
}

function backspacePin() {
  playSound('click');
  if (enteredPin.length > 0) {
    enteredPin = enteredPin.slice(0, -1);
    updatePinDotsDisplay();
  }
}

function updatePinDotsDisplay() {
  const dots = document.querySelectorAll('#pin-dots-container .pin-dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('filled', index < enteredPin.length);
  });
}

function verifyOwnerPin() {
  const errorMsg = document.getElementById('pin-error-msg');
  if (enteredPin === OWNER_PIN) {
    playSound('success');
    closeOwnerPinModal();
    if (pinTargetAction === 'counter') {
      switchView('counter');
    } else if (pinTargetAction === 'sales') {
      openTodaySalesModal('today');
    } else if (pinTargetAction === 'menu') {
      openOwnerMenuModal();
    }
  } else {
    playSound('error');
    if (errorMsg) errorMsg.classList.remove('hidden');
    enteredPin = '';
    updatePinDotsDisplay();
  }
}

function openChangePinModal() {
  playSound('click');
  const currentInput = document.getElementById('input-current-pin');
  const newInput = document.getElementById('input-new-pin');
  const confirmInput = document.getElementById('input-confirm-pin');

  if (currentInput) currentInput.value = '';
  if (newInput) newInput.value = '';
  if (confirmInput) confirmInput.value = '';

  const modal = document.getElementById('owner-change-pin-modal');
  if (modal) modal.classList.add('open');
}

function closeChangePinModal() {
  playSound('click');
  const modal = document.getElementById('owner-change-pin-modal');
  if (modal) modal.classList.remove('open');
}

function saveNewOwnerPin(e) {
  if (e) e.preventDefault();
  const currentPin = document.getElementById('input-current-pin').value.trim();
  const newPin = document.getElementById('input-new-pin').value.trim();
  const confirmPin = document.getElementById('input-confirm-pin').value.trim();

  if (currentPin !== OWNER_PIN) {
    alert("Incorrect current PIN. Please enter your existing 4-digit PIN.");
    return;
  }
  if (newPin.length !== 4 || isNaN(newPin)) {
    alert("New PIN must be exactly 4 digits (e.g. 1234).");
    return;
  }
  if (newPin !== confirmPin) {
    alert("New PIN and Confirm PIN do not match.");
    return;
  }

  OWNER_PIN = newPin;
  localStorage.setItem('chiacas_owner_pin', newPin);
  playSound('success');
  closeChangePinModal();
  alert(`✓ Security PIN updated successfully! Your new PIN is ${newPin}.`);
}

function resetPinToDefault() {
  if (confirm("Reset Security PIN back to default '1234'?")) {
    OWNER_PIN = '1234';
    localStorage.setItem('chiacas_owner_pin', '1234');
    playSound('success');
    closeChangePinModal();
    alert("✓ Security PIN reset to default: 1234");
  }
}

function lockAndExitCounter() {
  playSound('click');
  switchView('kiosk');
}

// Physical Keyboard Event Listener for Security PIN Entry
document.addEventListener('keydown', (e) => {
  const pinModal = document.getElementById('owner-pin-modal');
  if (pinModal && pinModal.classList.contains('open')) {
    if (e.key >= '0' && e.key <= '9') {
      pressPinKey(e.key);
    } else if (e.key === 'Backspace') {
      backspacePin();
    } else if (e.key === 'Enter') {
      verifyOwnerPin();
    } else if (e.key === 'Escape') {
      closeOwnerPinModal();
    }
  }
});

// --- OWNER PROFILE DROPDOWN MENU HANDLERS ---
function toggleOwnerDropdown(event) {
  if (event) event.stopPropagation();
  playSound('click');
  const menu = document.getElementById('owner-dropdown-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

function handleOwnerDropdownAction(action) {
  playSound('click');
  const menu = document.getElementById('owner-dropdown-menu');
  if (menu) menu.classList.add('hidden');

  if (action === 'sales') {
    openTodaySalesModal('today');
  } else if (action === 'menu') {
    openOwnerMenuModal();
  } else if (action === 'pin') {
    openChangePinModal();
  } else if (action === 'lock') {
    switchView('kiosk');
  }
}

document.addEventListener('click', (e) => {
  const menu = document.getElementById('owner-dropdown-menu');
  const profileWidget = document.getElementById('counter-owner-profile-widget');
  if (menu && !menu.classList.contains('hidden')) {
    if (!menu.contains(e.target) && (!profileWidget || !profileWidget.contains(e.target))) {
      menu.classList.add('hidden');
    }
  }
});

// --- NAVIGATION & VIEW SWITCHING ---
function switchView(viewName, playAudio = true) {
  if (playAudio) playSound('click');
  document.querySelectorAll('.view-panel').forEach(panel => panel.classList.remove('active'));

  const profileWidget = document.querySelector('.owner-profile-widget');
  const counterPosBtn = document.getElementById('kiosk-owner-pos-btn');

  // Save active view state to localStorage so refresh stays on the same page!
  localStorage.setItem('mcd_active_view', viewName);

  if (viewName === 'kiosk') {
    document.body.classList.remove('counter-mode-active');
    document.getElementById('kiosk-view').classList.add('active');
    if (profileWidget) profileWidget.style.display = 'none';
    if (counterPosBtn) counterPosBtn.style.display = 'inline-flex';
    window.location.hash = 'kiosk';
  } else if (viewName === 'counter') {
    document.body.classList.add('counter-mode-active');
    document.getElementById('counter-view').classList.add('active');
    if (profileWidget) profileWidget.style.display = 'flex';
    if (counterPosBtn) counterPosBtn.style.display = 'none';
    window.location.hash = 'counter';
    renderOrderTicketsList();
    renderCounterTopCatalogRow();
    renderCategoryFilterButtons();
    if (state.orders.length > 0 && !state.activeOrderId) {
      selectOrderForEBill(state.orders[0].id);
    }
  }
}

function toggleCounterViewAccess() {
  playSound('click');
  const isCounterActive = document.getElementById('counter-view').classList.contains('active');
  if (isCounterActive) {
    switchView('kiosk');
  } else {
    switchView('counter');
  }
}

function setOrderType(type) {
  playSound('click');
  state.orderType = type;
  document.getElementById('type-dinein').classList.toggle('active', type === 'Dine-In');
  document.getElementById('type-takeout').classList.toggle('active', type === 'Take-Out');
}

// --- MENU RENDERING & FILTERING ---
function filterCategory(cat) {
  playSound('click');
  const targetCat = (cat || 'all').trim();
  state.currentCategory = targetCat;

  const norm = s => (s || '').toLowerCase().replace(/&/g, '/').replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
  const targetNorm = norm(targetCat);

  document.querySelectorAll('#kiosk-category-nav .cat-btn, .category-sidebar .cat-btn').forEach(btn => {
    const btnCat = (btn.dataset.category || '').trim();
    const isAct = (targetNorm === 'all' && norm(btnCat) === 'all') || (targetNorm !== 'all' && norm(btnCat) === targetNorm);
    btn.classList.toggle('active', isAct);
  });
  
  const titleMap = {
    'all': 'All Menu Items',
    'sandwich & burger': 'Sandwiches & Burgers',
    'snacks': 'Snacks & Fries',
    'maggi': 'Maggi Specials',
    'egg': 'Egg Specials',
    'bread & roll': 'Bread & Rolls',
    'milk shake & juice': 'Milkshakes & Fresh Juices',
    'milk shake / juice': 'Milkshakes & Fresh Juices',
    'ice cream': 'Ice Cream Scoops & Flavors'
  };
  const titleElem = document.getElementById('current-category-title');
  if (titleElem) {
    titleElem.textContent = titleMap[targetCat.toLowerCase()] || (targetNorm === 'all' ? 'All Menu Items' : `${targetCat} Menu`);
  }
  renderMenu();
}

function handleSearch(val) {
  state.searchQuery = (val || '').toLowerCase().trim();
  renderMenu();
}

function renderMenu() {
  const container = document.getElementById('menu-grid');
  if (!container) return;
  container.innerHTML = '';

  if (!MENU_CATALOG || !Array.isArray(MENU_CATALOG) || MENU_CATALOG.length === 0) {
    MENU_CATALOG = [...DEFAULT_MENU_CATALOG];
    saveCustomCatalog();
  }

  const targetCat = (state.currentCategory || 'all').trim();
  const searchQ = (state.searchQuery || '').toLowerCase().trim();

  const norm = s => (s || '').toLowerCase().replace(/&/g, '/').replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
  const targetNorm = norm(targetCat);

  const filtered = MENU_CATALOG.filter(item => {
    const itemNorm = norm(item.category);
    const matchesCat = (targetNorm === 'all') || (itemNorm === targetNorm);

    const itemName = (item.name || '').toLowerCase();
    const itemDesc = (item.description || '').toLowerCase();
    const matchesSearch = !searchQ || itemName.includes(searchQ) || itemDesc.includes(searchQ) || itemNorm.includes(searchQ);

    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px; color: var(--text-muted);">
        <i class="fa-solid fa-burger" style="font-size: 3rem; margin-bottom: 12px; color: var(--primary-orange);"></i>
        <h3>No matching menu items found</h3>
        <p>Try choosing another category or clear your search</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'food-card';
    card.onclick = () => openCustomizeModal(item.id);
    card.innerHTML = `
      <div class="food-img-wrapper">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='assets/big_mac.jpg'">
      </div>
      <div class="food-info">
        <h3>${item.name}</h3>
        ${(item.calories || item.tag) ? `
        <div class="food-meta">
          ${item.calories ? `<span><i class="fa-solid fa-fire"></i> ${item.calories}</span>` : ''}
          ${item.tag ? `<span class="card-tag" ${!item.calories ? 'style="margin-left:0;"' : 'style="margin-left:auto;"'}>${item.tag}</span>` : ''}
        </div>` : ''}
      </div>
      <div class="food-footer">
        <span class="food-price">₹${item.price.toFixed(2)}</span>
        <button class="add-food-btn" onclick="quickAddToCart('${item.id}', event)" title="Add to Order">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

function quickAddToCart(itemId, e) {
  if (e) e.stopPropagation();
  playSound('add');
  const item = MENU_CATALOG.find(i => i.id === itemId);
  if (!item) return;

  const existingIdx = state.cart.findIndex(i => i.itemId === item.id);
  if (existingIdx !== -1) {
    state.cart[existingIdx].quantity += 1;
    state.cart[existingIdx].totalPrice = state.cart[existingIdx].quantity * state.cart[existingIdx].unitPrice;
  } else {
    state.cart.push({
      cartId: 'cart-' + Date.now(),
      itemId: item.id,
      name: item.name,
      image: item.image,
      sizeLabel: 'Solo',
      toppings: [],
      sauce: 'Special Big Mac Sauce',
      unitPrice: item.price,
      quantity: 1,
      totalPrice: item.price
    });
  }

  updateCartDisplay();
}

function openCustomizeModal(itemId) {
  playSound('click');
  const item = MENU_CATALOG.find(i => i.id === itemId);
  if (!item) return;

  state.activeCustomItem = item;
  state.customState = {
    size: 'solo',
    sizePrice: item.price,
    toppings: [],
    sauce: 'Special Big Mac Sauce',
    quantity: 1
  };

  const imgEl = document.getElementById('custom-item-img') || document.getElementById('modal-food-img');
  if (imgEl) imgEl.src = item.image;
  const titleEl = document.getElementById('custom-item-name') || document.getElementById('modal-food-title');
  if (titleEl) titleEl.textContent = item.name;
  const descEl = document.getElementById('custom-item-desc') || document.getElementById('modal-food-desc');
  if (descEl) descEl.textContent = item.description || '';
  const priceEl = document.getElementById('custom-base-price');
  if (priceEl) priceEl.textContent = `₹${item.price.toFixed(2)}`;
  const calElem = document.getElementById('custom-item-cal') || document.getElementById('modal-food-cal');
  if (calElem) {
    if (item.calories) {
      calElem.innerHTML = `<i class="fa-solid fa-fire"></i> ${item.calories}`;
      calElem.style.display = 'inline-flex';
    } else {
      calElem.innerHTML = '';
      calElem.style.display = 'none';
    }
  }

  document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector('.size-btn[data-size="solo"]').classList.add('active');

  document.querySelectorAll('.topping-checkbox').forEach(cb => cb.checked = false);

  const sauceSelect = document.getElementById('modal-sauce-select');
  if (sauceSelect) sauceSelect.value = 'Special Big Mac Sauce';

  document.getElementById('custom-qty-val').textContent = '1';

  updateCustomItemPrice();
  document.getElementById('customize-modal').classList.add('open');
}

function closeCustomizeModal() {
  playSound('click');
  document.getElementById('customize-modal').classList.remove('open');
}

function setCustomSize(sizeLabel, extraPrice, elem) {
  playSound('click');
  state.customState.size = sizeLabel;
  document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
  if (elem) elem.classList.add('active');
  updateCustomItemPrice();
}

function adjustCustomQty(delta) {
  playSound('click');
}

const DEFAULT_PROMO_OFFERS = [
  {
    id: 'promo-1',
    title: 'Double Big Mac Combo Deal',
    desc: 'Get extra patties, large crispy fries & cold drink with free McFlurry coupon!',
    price: 499.00,
    isActive: true
  },
  {
    id: 'promo-2',
    title: 'Family Feast Meal Box',
    desc: '2 Big Macs, 2 Spicy McChickens, 2 Large Fries & 4 Chilled Soft Drinks!',
    price: 799.00,
    isActive: false
  },
  {
    id: 'promo-3',
    title: 'Snack Attack Party Combo',
    desc: '10 Pc Chicken McNuggets, Large Fries & Iced McCafé Coffee!',
    price: 299.00,
    isActive: false
  }
];

let PROMO_OFFERS_CATALOG = [];

function loadPromoOffer() {
  const stored = localStorage.getItem('mcd_promo_offers_catalog');
  if (stored) {
    try {
      PROMO_OFFERS_CATALOG = JSON.parse(stored);
    } catch(e) {
      PROMO_OFFERS_CATALOG = [...DEFAULT_PROMO_OFFERS];
    }
  } else {
    PROMO_OFFERS_CATALOG = [...DEFAULT_PROMO_OFFERS];
    savePromoOffersToStorage();
  }
  updatePromoBannerUI();
}

function savePromoOffersToStorage() {
  localStorage.setItem('mcd_promo_offers_catalog', JSON.stringify(PROMO_OFFERS_CATALOG));
}

function getActivePromoOffer() {
  return (PROMO_OFFERS_CATALOG || []).find(p => p.isActive) || null;
}

function updatePromoBannerUI() {
  const bannerElem = document.querySelector('.kiosk-banner');
  if (!bannerElem) return;
  const activeOffer = getActivePromoOffer();
  const titleElem = document.getElementById('banner-title');
  const descElem = document.getElementById('banner-desc');
  const btnElem = document.getElementById('banner-cta-btn');

  if (!activeOffer) {
    if (bannerElem) bannerElem.classList.add('hidden');
  } else {
    if (bannerElem) bannerElem.classList.remove('hidden');
    if (titleElem) titleElem.textContent = activeOffer.title;
    if (descElem) descElem.textContent = activeOffer.desc;
    if (btnElem) btnElem.innerHTML = `Order Meal Deal — <strong>₹${activeOffer.price.toFixed(2)}</strong>`;
  }
}

function quickAddPromo() {
  const activeOffer = getActivePromoOffer();
  playSound('add');
  state.cart.push({
    cartId: 'promo-' + Date.now(),
    itemId: 'promo-' + activeOffer.id,
    name: activeOffer.title,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80',
    sizeLabel: 'Combo Deal',
    toppings: ['Featured Store Deal'],
    sauce: 'Special Sauce',
    unitPrice: activeOffer.price,
    quantity: 1,
    totalPrice: activeOffer.price
  });

  updateCartDisplay();
}


// --- CART STATE MANAGEMENT ---
function updateCartDisplay() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const tax = subtotal * 0.05;
  const grandTotal = subtotal + tax;

  document.getElementById('cart-total-count').textContent = totalCount;
  document.getElementById('cart-item-types').textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
  document.getElementById('cart-subtotal-display').textContent = `₹${subtotal.toFixed(2)}`;

  document.getElementById('pay-now-btn').disabled = state.cart.length === 0;

  const drawerContainer = document.getElementById('cart-drawer-items');
  drawerContainer.innerHTML = '';

  if (state.cart.length === 0) {
    drawerContainer.innerHTML = `
      <div style="text-align: center; margin-top: 60px; color: var(--text-muted);">
        <i class="fa-solid fa-basket-shopping" style="font-size: 3rem; margin-bottom: 10px;"></i>
        <p>Your Kiosk Order is empty</p>
      </div>
    `;
  } else {
    state.cart.forEach(item => {
      const row = document.createElement('div');
      row.className = 'cart-row';
      row.innerHTML = `
        <div class="cart-row-details">
          <h4>${item.name} (${item.sizeLabel})</h4>
          <div class="cart-row-customs">
            ${item.toppings.length > 0 ? item.toppings.join(', ') : 'Standard Recipe'} | ${item.sauce}
          </div>
          <div class="cart-row-price">₹${item.totalPrice.toFixed(2)}</div>
        </div>
        <div class="qty-selector">
          <button class="qty-btn" onclick="updateCartQty('${item.cartId}', -1)"><i class="fa-solid fa-minus"></i></button>
          <span class="qty-val">${item.quantity}</span>
          <button class="qty-btn" onclick="updateCartQty('${item.cartId}', 1)"><i class="fa-solid fa-plus"></i></button>
        </div>
      `;
      drawerContainer.appendChild(row);
    });
  }

  document.getElementById('drawer-subtotal').textContent = `₹${subtotal.toFixed(2)}`;
  document.getElementById('drawer-tax').textContent = `₹${tax.toFixed(2)}`;
  document.getElementById('drawer-grand-total').textContent = `₹${grandTotal.toFixed(2)}`;
  document.getElementById('checkout-payable-total').textContent = `₹${grandTotal.toFixed(2)}`;
}

function updateCartQty(cartId, delta) {
  playSound('click');
  const index = state.cart.findIndex(i => i.cartId === cartId);
  if (index !== -1) {
    state.cart[index].quantity += delta;
    if (state.cart[index].quantity <= 0) {
      state.cart.splice(index, 1);
    } else {
      state.cart[index].totalPrice = state.cart[index].unitPrice * state.cart[index].quantity;
    }
    updateCartDisplay();
  }
}

function clearCart() {
  playSound('click');
  state.cart = [];
  updateCartDisplay();
}

function toggleCartDrawer() {
  playSound('click');
  document.getElementById('cart-modal').classList.toggle('open');
}

// --- CHECKOUT & PAYMENT MODAL ---
function openCheckoutModal() {
  if (state.cart.length === 0) return;
  playSound('click');
  document.getElementById('cart-modal').classList.remove('open');
  document.getElementById('checkout-modal').classList.add('open');

  const gpayCard = document.querySelector('.pay-method-card');
  if (gpayCard) selectPayMethod('gpay', gpayCard);
}

function getUpiPaymentUrl(amount, tokenNum) {
  const vpa = state.merchantUpiId || 'chiacas@gpay';
  const name = state.merchantName || "Chiacas Store";
  const amtStr = parseFloat(amount || 0).toFixed(2);
  const note = tokenNum ? `Bill ${tokenNum}` : 'Chiacas Order';

  return `upi://pay?pa=${encodeURIComponent(vpa)}&pn=${encodeURIComponent(name)}&am=${amtStr}&cu=INR&tn=${encodeURIComponent(note)}`;
}

function saveMerchantUpiSettings() {
  const upiInput = document.getElementById('merchant-upi-id-input');
  const nameInput = document.getElementById('merchant-name-input');
  const msg = document.getElementById('merchant-upi-save-msg');

  if (upiInput && upiInput.value.trim()) {
    state.merchantUpiId = upiInput.value.trim();
    localStorage.setItem('mcd_merchant_upi_id', state.merchantUpiId);
  }
  if (nameInput && nameInput.value.trim()) {
    state.merchantName = nameInput.value.trim();
    localStorage.setItem('mcd_merchant_name', state.merchantName);
  }

  playSound('success');
  if (msg) {
    msg.textContent = `✓ Saved! Original Bank UPI VPA ID: ${state.merchantUpiId} (${state.merchantName}). All QR codes updated!`;
    setTimeout(() => { msg.textContent = ''; }, 4500);
  }

  if (state.activeSelectedToken) {
    selectOrderForEBill(state.activeSelectedToken);
  }
}

function closeCheckoutModal() {
  playSound('click');
  document.getElementById('checkout-modal').classList.remove('open');
}

function selectPayMethod(method, elem) {
  playSound('click');
  state.selectedPaymentMethod = method;
  document.querySelectorAll('.pay-method-card').forEach(card => card.classList.remove('active'));
  if (elem) elem.classList.add('active');

  const subtotal = state.cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const grandTotal = subtotal + (subtotal * 0.05);

  const cardBox = document.getElementById('pay-detail-card');
  const btnLabel = document.getElementById('pay-btn-label');

  if (method === 'gpay') {
    cardBox.innerHTML = `
      <div class="gpay-qr-display">
        <i class="fa-brands fa-google-pay" style="font-size: 3rem; color: #4285F4;"></i>
        <h4 style="color:var(--text-dark); font-weight:800;">Official Google Pay Web API (INR ₹)</h4>
        <p style="color:var(--text-secondary); font-size:0.85rem;">Pay <strong>₹${grandTotal.toFixed(2)}</strong> via GPay app or scan QR Code</p>
        <div class="qr-box-wrapper" style="margin: 8px 0;">
          <canvas id="modal-gpay-qr-canvas"></canvas>
          <div class="qr-amount-overlay">₹${grandTotal.toFixed(2)}</div>
        </div>
        <button class="sim-gpay-btn" onclick="launchRealGooglePaySheet(${grandTotal})">
          <i class="fa-brands fa-google-pay" style="font-size:1.4rem;"></i>
          <span>Pay ₹${grandTotal.toFixed(2)} with Google Pay</span>
        </button>
      </div>
    `;
    setTimeout(() => {
      renderCanvasQR('modal-gpay-qr-canvas', getUpiPaymentUrl(grandTotal, ''));
    }, 50);
    btnLabel.textContent = "Confirm Order & Pay";
  } else if (method === 'cash') {
    cardBox.innerHTML = `
      <div>
        <i class="fa-solid fa-money-bill-wave wifi-icon" style="color: var(--mcd-gold);"></i>
        <p style="font-weight: 800; color: var(--text-dark); font-size:1.1rem;">Pay Cash at Counter</p>
        <p style="color: var(--text-muted); font-size:0.85rem; margin-top:4px;">
          Touching "Confirm" will generate your <strong>Order Token #</strong>.<br>Present token & pay cash at counter register.
        </p>
      </div>
    `;
    btnLabel.textContent = "Confirm Cash Order Token";
  } else {
    cardBox.innerHTML = `
      <div class="card-terminal-animation">
        <i class="fa-solid fa-wifi wifi-icon"></i>
        <p style="font-weight:700; color:var(--text-dark);">Tap Credit/Debit Card on Terminal Reader</p>
        <div class="mock-card-slot">
          <i class="fa-solid fa-credit-card"></i>
          <span>Insert Card / Contactless Tap</span>
        </div>
      </div>
    `;
    btnLabel.textContent = "Pay & Confirm Order";
  }
}

// --- PROCESS ORDER PAYMENT & SHOW DONE SCREEN ---
function processOrderPayment(overrideMethod) {
  playSound('success');
  const payMethodType = overrideMethod || state.selectedPaymentMethod;
  recalculateTokenCounter();
  const tokenNum = `#${state.tokenCounter++}`;
  const subtotal = state.cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const cgst = subtotal * 0.025;
  const sgst = subtotal * 0.025;
  const grandTotal = subtotal + cgst + sgst + 15; // 15 Rupee packaging fee

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const dateStr = now.toLocaleDateString();

  let payMethodLabel = 'Google Pay (GPay API)';
  let isPaid = true;

  if (payMethodType === 'cash') {
    payMethodLabel = 'Counter Cash';
    isPaid = false;
  } else if (payMethodType === 'card') {
    payMethodLabel = 'Card Terminal';
    isPaid = true;
  }

  const newOrder = {
    id: 'ord-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6),
    token: tokenNum,
    dateStr: dateStr,
    timeStr: timeStr,
    timestamp: now.getTime(),
    orderType: state.orderType,
    payMethod: payMethodLabel,
    items: [...state.cart],
    subtotal: subtotal,
    cgst: cgst,
    sgst: sgst,
    ecoFee: 15.00,
    grandTotal: grandTotal,
    isPaid: isPaid,
    status: isPaid ? 'PAID' : 'CASH PENDING'
  };

  state.orders.unshift(newOrder);
  state.activeOrderId = newOrder.id;
  state.activeSelectedToken = tokenNum;
  saveOrdersToStorage();

  state.cart = [];
  updateCartDisplay();
  closeCheckoutModal();

  document.getElementById('success-token-num').textContent = tokenNum;
  document.getElementById('success-payable-amt-display').textContent = `Total Amount: ₹${grandTotal.toFixed(2)}`;
  document.getElementById('success-qr-amount-badge').textContent = `₹${grandTotal.toFixed(2)}`;
  
  const statusPill = document.getElementById('success-paid-pill');

  if (isPaid) {
    statusPill.className = 'ticket-status-badge green-badge';
    statusPill.innerHTML = `<i class="fa-solid fa-circle-check"></i> PAYMENT SUCCESS - PAID (GREEN)`;
    document.getElementById('success-sub-text').textContent = 'Your order is confirmed! Please note your token number.';
  } else {
    statusPill.className = 'ticket-status-badge';
    statusPill.style.background = 'var(--primary-orange)';
    statusPill.style.color = '#ffffff';
    statusPill.innerHTML = `<i class="fa-solid fa-clock"></i> CASH TOKEN ISSUED - PENDING COUNTER PAYMENT`;
    document.getElementById('success-sub-text').textContent = 'Cash Token generated! Please present token to Cashier.';
  }

  renderCanvasQR('success-qr-canvas', getUpiPaymentUrl(grandTotal, tokenNum));
  document.getElementById('success-modal').classList.add('open');

  updateOrdersBadge();
}

// DONE BUTTON HANDLER
function finishOrderAndReset() {
  playSound('click');
  document.getElementById('success-modal').classList.remove('open');
  // Reset cart for next customer
  state.cart = [];
  updateCartDisplay();
  // Return to welcome screen
  const welcomeOverlay = document.getElementById('kiosk-welcome-overlay');
  if (welcomeOverlay) {
    welcomeOverlay.hidden = false;
    welcomeOverlay.removeAttribute('hidden');
    welcomeOverlay.classList.remove('hidden');
    welcomeOverlay.style.removeProperty('display');
    document.body.classList.add('kiosk-welcome-open');
    const vid = document.getElementById('kiosk-welcome-video');
    if (vid) { try { vid.currentTime = 0; vid.play(); } catch(e) {} }
  }
  switchView('kiosk');
}

// --- SEED INITIAL DEMO ORDERS ---
function seedInitialOrders() {
  const todayStr = new Date().toLocaleDateString();
  const demoOrders = [
    {
      id: 'demo-ord-1',
      token: '#1',
      dateStr: todayStr,
      timeStr: '21:52:10',
      timestamp: Date.now() - 900000,
      orderType: 'Dine-In',
      payMethod: 'Google Pay (GPay API)',
      items: [
        { cartId: 'demo-1', itemId: 'mcd-001', name: 'Big Mac®', sizeLabel: 'Med EVM', toppings: ['Extra Cheese'], sauce: 'Special Big Mac Sauce', unitPrice: 379.00, quantity: 1, totalPrice: 379.00 },
        { cartId: 'demo-2', itemId: 'mcd-011', name: 'McFlurry® Oreo®', sizeLabel: 'Solo', toppings: [], sauce: 'N/A', unitPrice: 149.00, quantity: 1, totalPrice: 149.00 }
      ],
      subtotal: 528.00,
      cgst: 13.20,
      sgst: 13.20,
      ecoFee: 15.00,
      grandTotal: 569.40,
      isPaid: true,
      status: 'PAID'
    },
    {
      id: 'demo-ord-2',
      token: '#2',
      dateStr: todayStr,
      timeStr: '22:01:40',
      timestamp: Date.now() - 300000,
      orderType: 'Take-Out',
      payMethod: 'Counter Cash',
      items: [
        { cartId: 'demo-3', itemId: 'mcd-004', name: 'Spicy McChicken®', sizeLabel: 'Solo', toppings: [], sauce: 'Tangy BBQ', unitPrice: 199.00, quantity: 2, totalPrice: 398.00 },
        { cartId: 'demo-4', itemId: 'mcd-007', name: 'World Famous Fries® (L)', sizeLabel: 'Large', toppings: [], sauce: 'N/A', unitPrice: 129.00, quantity: 1, totalPrice: 129.00 }
      ],
      subtotal: 527.00,
      cgst: 13.18,
      sgst: 13.18,
      ecoFee: 15.00,
      grandTotal: 568.36,
      isPaid: false,
      status: 'CASH PENDING'
    }
  ];
  state.orders = demoOrders;
  state.tokenCounter = 3;
  saveOrdersToStorage();
}

function updateOrdersBadge() {
  const pendingCount = state.orders.filter(o => !o.isPaid).length;
  document.getElementById('pending-orders-count').textContent = pendingCount;
  updateTodaySalesHeaderBadge();
}

function updateTodaySalesHeaderBadge() {
  const paidOrders = state.orders.filter(o => o.isPaid);
  const totalRevenue = paidOrders.reduce((sum, o) => sum + o.grandTotal, 0);

  const badge = document.getElementById('header-today-sales-badge');
  if (badge) {
    badge.textContent = `All Sales: ₹${totalRevenue.toFixed(2)}`;
  }
}

// --- COUNTER e-BILL DISPLAY LOGIC ---
function renderOrderTicketsList(filterQuery = '') {
  const listContainer = document.getElementById('order-tickets-list');
  if (!listContainer) return;
  listContainer.innerHTML = '';

  const filtered = state.orders.filter(o => !filterQuery || o.token.toLowerCase().includes(filterQuery.toLowerCase()) || (o.dateStr && o.dateStr.includes(filterQuery)));

  if (filtered.length === 0) {
    listContainer.innerHTML = `<div style="text-align: center; padding: 20px; color: var(--text-muted);">No orders found</div>`;
    return;
  }

  const todayStr = new Date().toLocaleDateString();

  filtered.forEach(ord => {
    const card = document.createElement('div');
    const isSelected = !!ord.id && (state.activeOrderId === ord.id);
    card.className = `ticket-card ${isSelected ? 'selected' : ''}`;
    card.onclick = () => selectOrderForEBill(ord.id);

    const statusClass = ord.isPaid ? 'status-paid-green' : 'status-cash-pending';
    const displayTime = (ord.dateStr && ord.dateStr !== todayStr) ? `${ord.dateStr} ${ord.timeStr}` : ord.timeStr;

    card.innerHTML = `
      <div class="ticket-top">
        <span class="ticket-token">${ord.token}</span>
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="ticket-time">${displayTime}</span>
          <button class="ticket-del-btn" onclick="event.stopPropagation(); deleteActiveBill('${ord.id}')" title="Delete Bill">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      <div class="ticket-meta">
        <span>${ord.orderType} • ₹${ord.grandTotal.toFixed(2)}</span>
        <span class="ticket-status-tag ${statusClass}">${ord.isPaid ? 'PAID (GREEN)' : 'CASH PENDING'}</span>
      </div>
    `;
    listContainer.appendChild(card);
  });
}

function filterTickets(query) {
  renderOrderTicketsList(query);
}

function selectOrderForEBill(targetIdOrToken, isFromTopBar = false) {
  playSound('click');
  if (!isFromTopBar) {
    state.isNewCounterDraft = false;
  }

  let ord = state.orders.find(o => o.id === targetIdOrToken);
  if (!ord) {
    ord = state.orders.find(o => o.token === targetIdOrToken);
  }
  if (!ord) return;

  state.activeOrderId = ord.id;
  state.activeSelectedToken = ord.token;
  renderOrderTicketsList();

  document.getElementById('no-order-selected').classList.add('hidden');
  const card = document.getElementById('ebill-display-card');
  card.classList.remove('hidden');

  document.getElementById('ebill-order-type').textContent = ord.orderType.toUpperCase();
  document.getElementById('ebill-token-no').textContent = ord.token;
  document.getElementById('ebill-timestamp').textContent = `${ord.dateStr} ${ord.timeStr}`;
  document.getElementById('ebill-pay-method').textContent = ord.payMethod;

  const statusPill = document.getElementById('ebill-status-pill');
  const statusText = document.getElementById('ebill-pay-status-text');

  const cashBtn = document.getElementById('counter-mark-cash-btn');
  const upiBtn = document.getElementById('counter-mark-upi-btn');
  const addExtraBar = document.getElementById('counter-add-item-bar');

  if (ord.isPaid) {
    statusPill.textContent = 'PAID (GREEN COLOUR)';
    statusPill.className = 'ebill-status-pill status-paid-green';
    statusText.textContent = 'PAID & VERIFIED (GREEN)';
    statusText.className = 'meta-val status-green-text';
    if (cashBtn) cashBtn.style.display = 'none';
    if (upiBtn) upiBtn.style.display = 'none';
    if (addExtraBar) addExtraBar.style.display = 'none';
  } else {
    statusPill.textContent = 'PAYMENT PENDING AT COUNTER';
    statusPill.className = 'ebill-status-pill status-cash-pending';
    statusText.textContent = 'PENDING PAYMENT AT COUNTER';
    statusText.className = 'meta-val';
    if (cashBtn) cashBtn.style.display = 'inline-flex';
    if (upiBtn) upiBtn.style.display = 'inline-flex';
    if (addExtraBar) addExtraBar.style.display = 'block';
  }

  const tbody = document.getElementById('ebill-items-tbody');
  tbody.innerHTML = '';
  ord.items.forEach(item => {
    const tr = document.createElement('tr');
    if (ord.isPaid) {
      tr.innerHTML = `
        <td><strong style="color:var(--mcd-gold); font-size:0.95rem; padding: 0 4px;">${item.quantity}</strong></td>
        <td>
          <div><strong>${item.name}</strong> (${item.sizeLabel})</div>
          <div class="item-customs">${item.toppings.length ? item.toppings.join(', ') : 'Standard'} | Dip: ${item.sauce}</div>
        </td>
        <td class="txt-right">₹${item.unitPrice.toFixed(2)}</td>
        <td class="txt-right"><strong>₹${item.totalPrice.toFixed(2)}</strong></td>
        <td class="txt-right"><span style="color:#94a3b8; font-size:0.8rem;">—</span></td>
      `;
    } else {
      tr.innerHTML = `
        <td>
          <div class="ebill-qty-ctrls">
            <button class="btn-qty-sm" onclick="adjustEbillItemQty('${item.cartId}', -1)" title="Reduce Quantity"><i class="fa-solid fa-minus"></i></button>
            <strong style="color:var(--mcd-gold); font-size:0.9rem;">${item.quantity}</strong>
            <button class="btn-qty-sm" onclick="adjustEbillItemQty('${item.cartId}', 1)" title="Increase Quantity"><i class="fa-solid fa-plus"></i></button>
          </div>
        </td>
        <td>
          <div><strong>${item.name}</strong> (${item.sizeLabel})</div>
          <div class="item-customs">${item.toppings.length ? item.toppings.join(', ') : 'Standard'} | Dip: ${item.sauce}</div>
        </td>
        <td class="txt-right">₹${item.unitPrice.toFixed(2)}</td>
        <td class="txt-right"><strong>₹${item.totalPrice.toFixed(2)}</strong></td>
        <td class="txt-right">
          <button class="btn-qty-sm del" onclick="adjustEbillItemQty('${item.cartId}', -999)" title="Delete Item from Bill">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </td>
      `;
    }
    tbody.appendChild(tr);
  });


  document.getElementById('ebill-subtotal').textContent = `₹${ord.subtotal.toFixed(2)}`;
  document.getElementById('ebill-cgst').textContent = `₹${ord.cgst.toFixed(2)}`;
  document.getElementById('ebill-sgst').textContent = `₹${ord.sgst.toFixed(2)}`;
  document.getElementById('ebill-grand-total').textContent = `₹${ord.grandTotal.toFixed(2)}`;

  // Update Top Center Pay Summary Bar
  const topTokenLbl = document.getElementById('counter-top-token-lbl');
  const topAmtVal = document.getElementById('counter-top-amt-val');
  if (topTokenLbl) topTokenLbl.textContent = ord.token;
  if (topAmtVal) topAmtVal.textContent = `₹${ord.grandTotal.toFixed(2)}`;

  document.getElementById('ebill-qr-token').textContent = ord.token.replace('#MCD-', '');
  document.getElementById('ebill-qr-amt-val').textContent = ord.grandTotal.toFixed(2);
  document.getElementById('ebill-qr-amount-badge').textContent = `₹${ord.grandTotal.toFixed(2)}`;

  renderCanvasQR('ebill-qr-canvas', getUpiPaymentUrl(ord.grandTotal, ord.token));
  renderCounterTopCatalogRow(currentCounterTopCategory);
}

function adjustEbillItemQty(cartId, delta) {
  const activeKey = state.activeOrderId || state.activeSelectedToken;
  if (!activeKey) return;
  const ord = state.orders.find(o => o.id === activeKey || o.token === activeKey);
  if (!ord || ord.isPaid) return;

  const idx = ord.items.findIndex(i => i.cartId === cartId);
  if (idx !== -1) {
    playSound('click');
    if (delta === -999) {
      ord.items.splice(idx, 1);
    } else {
      ord.items[idx].quantity += delta;
      if (ord.items[idx].quantity <= 0) {
        ord.items.splice(idx, 1);
      } else {
        ord.items[idx].totalPrice = ord.items[idx].quantity * ord.items[idx].unitPrice;
      }
    }

    // Recalculate Totals
    const subtotal = ord.items.reduce((sum, i) => sum + i.totalPrice, 0);
    ord.subtotal = subtotal;
    ord.cgst = subtotal * 0.025;
    ord.sgst = subtotal * 0.025;
    ord.grandTotal = ord.items.length === 0 ? 0 : subtotal + ord.cgst + ord.sgst + (ord.ecoFee || 15.00);

    saveOrdersToStorage();
    selectOrderForEBill(ord.id, true);
    renderOrderTicketsList();
  }
}

function counterCollectPayment(payMethod = 'cash') {
  const activeKey = state.activeOrderId || state.activeSelectedToken;
  if (!activeKey) return;
  playSound('success');
  const ord = state.orders.find(o => o.id === activeKey || o.token === activeKey);
  if (!ord) return;

  ord.isPaid = true;
  ord.status = 'PAID';
  if (payMethod === 'gpay') {
    ord.payMethod = 'Google Pay (UPI Scanner)';
  } else {
    ord.payMethod = 'Counter Cash';
  }
  state.isNewCounterDraft = false;
  saveOrdersToStorage();

  selectOrderForEBill(ord.id, true);
  updateOrdersBadge();
}

function counterCollectCash() {
  counterCollectPayment('cash');
}

function manualPrintReceipt() {
  playSound('click');
  window.print();
}

// --- CANVAS DYNAMIC QR CODE DRAWING UTILITY ---
function renderCanvasQR(canvasId, text) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const size = 180;
  canvas.width = size;
  canvas.height = size;

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, size, size);

  const modules = 21;
  const cellSize = size / modules;

  ctx.fillStyle = '#0f172a';

  function drawFinder(row, col) {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        if (r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          ctx.fillRect((col + c) * cellSize, (row + r) * cellSize, cellSize, cellSize);
        }
      }
    }
  }

  drawFinder(0, 0);
  drawFinder(0, modules - 7);
  drawFinder(modules - 7, 0);

  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }

  for (let r = 0; r < modules; r++) {
    for (let c = 0; c < modules; c++) {
      if ((r < 8 && c < 8) || (r < 8 && c >= modules - 8) || (r >= modules - 8 && c < 8)) continue;
      
      const val = (r * 13 + c * 17 + Math.abs(hash)) % 3;
      if (val === 0) {
        ctx.fillRect(c * cellSize, r * cellSize, cellSize - 0.5, cellSize - 0.5);
      }
    }
  }
}

function lockAndExitCounter() {
  playSound('click');
  localStorage.setItem('mcd_active_view', 'kiosk');
  switchView('kiosk');
}

// ================= COUNTER ITEM CATALOG & BILL ADDITION LOGIC =================
let counterAddItemSearchQuery = '';

function openAddItemToActiveBillModal() {
  const activeKey = state.activeOrderId || state.activeSelectedToken;
  if (!activeKey) {
    alert("Please select or create an active order ticket first!");
    return;
  }
  const ord = state.orders.find(o => o.id === activeKey || o.token === activeKey);
  if (ord && ord.isPaid) {
    alert("This bill has already been paid and finalized. Items cannot be added or edited after billing!");
    return;
  }
  playSound('click');
  counterAddItemSearchQuery = '';
  const searchInput = document.getElementById('counter-add-item-search-input');
  if (searchInput) searchInput.value = '';
  renderCounterCatalogGrid('');
  document.getElementById('counter-add-item-modal').classList.add('open');
}

function closeCounterAddItemModal() {
  playSound('click');
  document.getElementById('counter-add-item-modal').classList.remove('open');
}

function handleCounterAddItemSearch(val) {
  counterAddItemSearchQuery = (val || '').toLowerCase().trim();
  renderCounterCatalogGrid(counterAddItemSearchQuery);
}

function renderCounterCatalogGrid(searchQ = '') {
  const container = document.getElementById('counter-catalog-grid');
  if (!container) return;
  container.innerHTML = '';

  const query = (searchQ !== undefined ? searchQ : counterAddItemSearchQuery || '').toLowerCase().trim();

  const filtered = MENU_CATALOG.filter(item => {
    const name = (item.name || '').toLowerCase();
    const cat = (item.category || '').toLowerCase();
    const desc = (item.description || '').toLowerCase();
    return !query || name.includes(query) || cat.includes(query) || desc.includes(query);
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2.2rem; margin-bottom: 8px; color: var(--mcd-gold);"></i>
        <p style="font-weight: 700; font-size: 0.95rem; color: #ffffff;">No menu items match "${query}"</p>
        <p style="font-size: 0.8rem;">Try searching for Big Mac, Fries, McFlurry, or Drink</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'counter-catalog-item-card';
    card.innerHTML = `
      <div>
        <div class="counter-item-title">${item.name}</div>
        <small style="color:var(--text-muted); font-size:0.75rem;">${item.calories ? `${item.calories} • ` : ''}${item.category.toUpperCase()}</small>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
        <span class="counter-item-price">₹${item.price.toFixed(2)}</span>
        <button class="counter-add-btn" onclick="addCounterItemToActiveBill('${item.id}')">
          <i class="fa-solid fa-plus"></i> Add
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

function addCounterItemToActiveBill(itemId) {
  playSound('add');
  const item = MENU_CATALOG.find(i => i.id === itemId);
  if (!item) return;

  const activeKey = state.activeOrderId || state.activeSelectedToken;
  const ord = state.orders.find(o => o.id === activeKey || o.token === activeKey);
  if (!ord) return;

  const existingIdx = ord.items.findIndex(i => i.name === item.name && i.sizeLabel === 'Solo');
  if (existingIdx !== -1) {
    ord.items[existingIdx].quantity += 1;
    ord.items[existingIdx].totalPrice = ord.items[existingIdx].quantity * ord.items[existingIdx].unitPrice;
  } else {
    ord.items.push({
      cartId: 'counter-add-' + Date.now(),
      itemId: item.id,
      name: item.name,
      image: item.image,
      sizeLabel: 'Solo',
      toppings: [],
      sauce: 'Counter Added',
      unitPrice: item.price,
      quantity: 1,
      totalPrice: item.price
    });
  }

  // Recalculate Totals
  const subtotal = ord.items.reduce((sum, i) => sum + i.totalPrice, 0);
  ord.subtotal = subtotal;
  ord.cgst = subtotal * 0.025;
  ord.sgst = subtotal * 0.025;
  ord.grandTotal = subtotal + ord.cgst + ord.sgst + (ord.ecoFee || 15.00);

  saveOrdersToStorage();
  selectOrderForEBill(ord.id);
  closeCounterAddItemModal();
}

function deleteActiveBill(targetKey) {
  const key = targetKey || state.activeOrderId;
  if (!key) return;

  let targetOrd = state.orders.find(o => o.id === key);
  if (!targetOrd) {
    targetOrd = state.orders.find(o => o.token === key);
  }
  if (!targetOrd || !targetOrd.id) return;

  const dateLabel = targetOrd.dateStr ? ` (${targetOrd.dateStr})` : '';
  if (confirm(`Are you sure you want to permanently delete Bill ${targetOrd.token}${dateLabel}?`)) {
    playSound('click');
    const wasActive = (state.activeOrderId === targetOrd.id);

    state.orders = state.orders.filter(o => o.id && o.id !== targetOrd.id);
    
    // Recalculate token counter so deleted bill number is reused for today's bills
    recalculateTokenCounter();
    saveOrdersToStorage();

    if (wasActive) {
      state.isNewCounterDraft = false;
      if (state.orders.length > 0) {
        selectOrderForEBill(state.orders[0].id);
      } else {
        state.activeOrderId = null;
        state.activeSelectedToken = null;
        document.getElementById('ebill-display-card').classList.add('hidden');
        document.getElementById('no-order-selected').classList.remove('hidden');
        renderCounterTopCatalogRow();
      }
    } else {
      renderOrderTicketsList();
    }
    updateOrdersBadge();
  }
}

// ================= ALL DAYS SALES & ANALYTICS REPORT LOGIC =================
let currentSalesFilter = 'all';

function setSalesFilter(filterType, elem) {
  playSound('click');
  currentSalesFilter = filterType;
  document.querySelectorAll('.sales-filter-btn').forEach(btn => btn.classList.remove('active'));
  if (elem) elem.classList.add('active');

  const inputContainer = document.getElementById('sales-date-input-container');
  const singleWrap = document.getElementById('single-date-picker-wrap');
  const durationWrap = document.getElementById('duration-date-picker-wrap');
  const monthWrap = document.getElementById('month-picker-wrap');

  if (singleWrap) singleWrap.classList.add('hidden');
  if (durationWrap) durationWrap.classList.add('hidden');
  if (monthWrap) monthWrap.classList.add('hidden');

  const todayIso = new Date().toISOString().split('T')[0];
  const currentMonthIso = new Date().toISOString().substring(0, 7);

  if (filterType === 'single-date') {
    if (inputContainer) inputContainer.classList.remove('hidden');
    if (singleWrap) singleWrap.classList.remove('hidden');
    const input = document.getElementById('sales-single-date-input');
    if (input) input.value = todayIso;
  } else if (filterType === 'date-range') {
    if (inputContainer) inputContainer.classList.remove('hidden');
    if (durationWrap) durationWrap.classList.remove('hidden');
    const startInput = document.getElementById('sales-start-date-input');
    const endInput = document.getElementById('sales-end-date-input');
    if (startInput && !startInput.value) startInput.value = todayIso;
    if (endInput && !endInput.value) endInput.value = todayIso;
  } else if (filterType === 'month') {
    if (inputContainer) inputContainer.classList.remove('hidden');
    if (monthWrap) monthWrap.classList.remove('hidden');
    const monthInput = document.getElementById('sales-month-input');
    if (monthInput && !monthInput.value) monthInput.value = currentMonthIso;
  } else {
    if (inputContainer) inputContainer.classList.add('hidden');
  }

  updateSalesSubtitleAndHeadings(filterType);
  renderSalesAnalyticsReport();
}

function openCalendarPicker(inputId, e) {
  if (e && e.stopPropagation) {
    e.stopPropagation();
  }
  const input = document.getElementById(inputId);
  if (!input) return;

  playSound('click');
  try {
    input.focus();
    if (typeof input.showPicker === 'function') {
      input.showPicker();
    }
  } catch (err) {
    try {
      input.click();
    } catch(ex) {}
  }
}

const openDatePicker = openCalendarPicker;

function onSalesDateFilterChange() {
  updateSalesSubtitleAndHeadings(currentSalesFilter);
  renderSalesAnalyticsReport();
}

function updateSalesSubtitleAndHeadings(filterType) {
  const subtitle = document.getElementById('sales-report-subtitle');
  const statLbl = document.getElementById('sales-stat-lbl-revenue');
  const itemsHeading = document.getElementById('sales-items-heading');

  const todayIso = new Date().toISOString().split('T')[0];

  if (filterType === 'today') {
    if (subtitle) subtitle.textContent = `Real-time daily sales revenue, payment method analytics, and itemized quantity breakdown for Today (${todayIso}).`;
    if (statLbl) statLbl.textContent = `TODAY'S TOTAL SALES (${todayIso})`;
    if (itemsHeading) itemsHeading.innerHTML = `<i class="fa-solid fa-burger" style="color:var(--mcd-gold);"></i> Itemized Quantity Sold Breakdown (Today Only)`;
  } else if (filterType === 'yesterday') {
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yIso = yesterdayDate.toISOString().split('T')[0];
    if (subtitle) subtitle.textContent = `Real-time daily sales revenue, payment method analytics, and itemized quantity breakdown for Yesterday (${yIso}).`;
    if (statLbl) statLbl.textContent = `YESTERDAY'S TOTAL SALES (${yIso})`;
    if (itemsHeading) itemsHeading.innerHTML = `<i class="fa-solid fa-burger" style="color:var(--mcd-gold);"></i> Itemized Quantity Sold Breakdown (Yesterday Only)`;
  } else if (filterType === 'single-date') {
    const dVal = document.getElementById('sales-single-date-input')?.value || todayIso;
    const isToday = (dVal === todayIso);
    const dateLabel = isToday ? `Today (${dVal})` : dVal;

    if (subtitle) subtitle.textContent = `Sales revenue and itemized analytics for ${dateLabel}.`;
    if (statLbl) statLbl.textContent = `SALES FOR ${dateLabel.toUpperCase()}`;
    if (itemsHeading) itemsHeading.innerHTML = `<i class="fa-solid fa-burger" style="color:var(--mcd-gold);"></i> Itemized Quantity Sold Breakdown (${dateLabel})`;
  } else if (filterType === 'date-range') {
    const sVal = document.getElementById('sales-start-date-input')?.value || 'Start';
    const eVal = document.getElementById('sales-end-date-input')?.value || 'End';
    if (subtitle) subtitle.textContent = `Sales revenue and itemized analytics from ${sVal} to ${eVal}.`;
    if (statLbl) statLbl.textContent = `TOTAL SALES (${sVal} to ${eVal})`;
    if (itemsHeading) itemsHeading.innerHTML = `<i class="fa-solid fa-burger" style="color:var(--mcd-gold);"></i> Itemized Quantity Sold Breakdown (${sVal} to ${eVal})`;
  } else if (filterType === 'month') {
    const mVal = document.getElementById('sales-month-input')?.value || 'Selected Month';
    if (subtitle) subtitle.textContent = `Sales revenue and itemized analytics for ${mVal}.`;
    if (statLbl) statLbl.textContent = `MONTHLY SALES (${mVal})`;
    if (itemsHeading) itemsHeading.innerHTML = `<i class="fa-solid fa-burger" style="color:var(--mcd-gold);"></i> Itemized Quantity Sold Breakdown (${mVal})`;
  } else {
    if (subtitle) subtitle.textContent = "Real-time revenue, payment method analytics, and itemized quantity breakdown across all days.";
    if (statLbl) statLbl.textContent = "TOTAL SALES (ALL DAYS)";
    if (itemsHeading) itemsHeading.innerHTML = `<i class="fa-solid fa-burger" style="color:var(--mcd-gold);"></i> Itemized Quantity Sold Breakdown (All Days)`;
  }
}

function openTodaySalesModal(filterPeriod = 'today') {
  playSound('click');
  currentSalesFilter = filterPeriod;

  // Pre-fill merchant bank account settings inputs
  const upiInput = document.getElementById('merchant-upi-id-input');
  const nameInput = document.getElementById('merchant-name-input');
  if (upiInput) upiInput.value = state.merchantUpiId || 'chiacas@gpay';
  if (nameInput) nameInput.value = state.merchantName || "Chiacas Store #4081";

  // Reset pill UI
  document.querySelectorAll('.sales-filter-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtnId = filterPeriod === 'today' ? 'filter-today' : (filterPeriod === 'yesterday' ? 'filter-yesterday' : (filterPeriod === 'single-date' ? 'filter-single-date' : (filterPeriod === 'date-range' ? 'filter-date-range' : (filterPeriod === 'month' ? 'filter-month' : 'filter-all-days'))));
  const activeBtn = document.getElementById(activeBtnId);
  if (activeBtn) activeBtn.classList.add('active');

  const inputContainer = document.getElementById('sales-date-input-container');
  const singleWrap = document.getElementById('single-date-picker-wrap');
  const todayIso = new Date().toISOString().split('T')[0];

  if (filterPeriod === 'single-date') {
    if (inputContainer) inputContainer.classList.remove('hidden');
    if (singleWrap) singleWrap.classList.remove('hidden');
    const input = document.getElementById('sales-single-date-input');
    if (input) input.value = todayIso;
  } else {
    if (inputContainer) inputContainer.classList.add('hidden');
  }

  updateSalesSubtitleAndHeadings(currentSalesFilter);
  renderSalesAnalyticsReport();
  document.getElementById('today-sales-modal').classList.add('open');
}

function closeTodaySalesModal() {
  playSound('click');
  document.getElementById('today-sales-modal').classList.remove('open');
}

function renderSalesAnalyticsReport() {
  let targetOrders = state.orders;
  const now = new Date();

  if (currentSalesFilter === 'today') {
    const todayDateStr = now.toLocaleDateString();
    const todayIso = now.toISOString().split('T')[0];
    const startMs = new Date(todayIso + 'T00:00:00').getTime();
    const endMs = new Date(todayIso + 'T23:59:59.999').getTime();
    targetOrders = state.orders.filter(o => {
      if (o.timestamp) {
        return o.timestamp >= startMs && o.timestamp <= endMs;
      }
      return o.dateStr === todayDateStr;
    });
  } else if (currentSalesFilter === 'yesterday') {
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterdayDateStr = yesterdayDate.toLocaleDateString();
    const yIso = yesterdayDate.toISOString().split('T')[0];
    const startMs = new Date(yIso + 'T00:00:00').getTime();
    const endMs = new Date(yIso + 'T23:59:59.999').getTime();
    targetOrders = state.orders.filter(o => {
      if (o.timestamp) {
        return o.timestamp >= startMs && o.timestamp <= endMs;
      }
      return o.dateStr === yesterdayDateStr;
    });
  } else if (currentSalesFilter === 'single-date') {
    const todayIso = now.toISOString().split('T')[0];
    const val = document.getElementById('sales-single-date-input')?.value || todayIso;
    if (val) {
      const startMs = new Date(val + 'T00:00:00').getTime();
      const endMs = new Date(val + 'T23:59:59.999').getTime();
      targetOrders = state.orders.filter(o => o.timestamp >= startMs && o.timestamp <= endMs);
    }
  } else if (currentSalesFilter === 'date-range') {
    const sVal = document.getElementById('sales-start-date-input')?.value;
    const eVal = document.getElementById('sales-end-date-input')?.value;
    if (sVal && eVal) {
      const startMs = new Date(sVal + 'T00:00:00').getTime();
      const endMs = new Date(eVal + 'T23:59:59.999').getTime();
      targetOrders = state.orders.filter(o => o.timestamp >= startMs && o.timestamp <= endMs);
    }
  } else if (currentSalesFilter === 'month') {
    const mVal = document.getElementById('sales-month-input')?.value;
    if (mVal) {
      const parts = mVal.split('-');
      const year = parseInt(parts[0], 10);
      const monthIdx = parseInt(parts[1], 10) - 1;
      const startMs = new Date(year, monthIdx, 1, 0, 0, 0, 0).getTime();
      const endMs = new Date(year, monthIdx + 1, 0, 23, 59, 59, 999).getTime();
      targetOrders = state.orders.filter(o => o.timestamp >= startMs && o.timestamp <= endMs);
    }
  }

  const paidOrders = targetOrders.filter(o => o.isPaid);

  const totalRevenue = paidOrders.reduce((sum, o) => sum + o.grandTotal, 0);
  const gpayTotal = paidOrders.filter(o => o.payMethod.includes('Google') || o.payMethod.includes('GPay')).reduce((sum, o) => sum + o.grandTotal, 0);
  const cashTotal = paidOrders.filter(o => o.payMethod.includes('Cash')).reduce((sum, o) => sum + o.grandTotal, 0);

  const revElem = document.getElementById('sales-total-revenue');
  const paidElem = document.getElementById('sales-paid-count');
  const gpayElem = document.getElementById('sales-gpay-total');
  const cashElem = document.getElementById('sales-cash-total');

  if (revElem) revElem.textContent = `₹${totalRevenue.toFixed(2)}`;
  if (paidElem) paidElem.textContent = paidOrders.length;
  if (gpayElem) gpayElem.textContent = `₹${gpayTotal.toFixed(2)}`;
  if (cashElem) cashElem.textContent = `₹${cashTotal.toFixed(2)}`;

  // Itemized Sales Breakdown across selected period (Every item listed separately!)
  const itemSalesMap = {};

  // Pre-initialize ALL items from MENU_CATALOG so every item is shown separately
  MENU_CATALOG.forEach(item => {
    itemSalesMap[item.name] = {
      name: item.name,
      category: item.category.toUpperCase(),
      unitPrice: item.price,
      qty: 0,
      total: 0
    };
  });

  // Accumulate quantity sold and revenue for target orders
  targetOrders.forEach(ord => {
    if (ord.items) {
      ord.items.forEach(i => {
        if (!itemSalesMap[i.name]) {
          itemSalesMap[i.name] = {
            name: i.name,
            category: 'CUSTOM / EXTRA',
            unitPrice: i.unitPrice || 0,
            qty: 0,
            total: 0
          };
        }
        itemSalesMap[i.name].qty += i.quantity;
        itemSalesMap[i.name].total += i.totalPrice;
      });
    }
  });

  const tbody = document.getElementById('sales-items-tbody');
  if (tbody) {
    tbody.innerHTML = '';
    const salesList = Object.values(itemSalesMap).sort((a, b) => b.qty - a.qty || a.name.localeCompare(b.name));

    if (salesList.length === 0) {
      tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:20px; color:var(--text-muted);">No sales recorded for selected period</td></tr>`;
    } else {
      salesList.forEach(item => {
        const tr = document.createElement('tr');
        const hasSales = item.qty > 0;
        const qtyBadgeStyle = hasSales 
          ? 'background:rgba(255,188,13,0.18); color:var(--mcd-gold); border:1px solid var(--border-gold);' 
          : 'background:rgba(255,255,255,0.04); color:var(--text-muted); border:1px solid rgba(255,255,255,0.1);';

        tr.innerHTML = `
          <td><strong style="color:${hasSales ? '#ffffff' : 'var(--text-secondary)'}">${item.name}</strong></td>
          <td>
            <span style="font-size:0.75rem; color:var(--text-secondary); font-weight:700;">${item.category}</span>
            <div style="font-size:0.75rem; color:var(--text-muted);">@ ₹${item.unitPrice.toFixed(2)} each</div>
          </td>
          <td class="txt-right">
            <span style="padding:4px 10px; border-radius:12px; font-weight:800; font-size:0.82rem; display:inline-block; ${qtyBadgeStyle}">
              ${item.qty} sold
            </span>
          </td>
          <td class="txt-right"><strong style="color:${hasSales ? '#ffffff' : 'var(--text-muted)'}; font-size:0.9rem;">₹${item.total.toFixed(2)}</strong></td>
        `;
        tbody.appendChild(tr);
      });
    }
  }
}

function openCounterNewBillModal() {
  playSound('click');
  const tokenNum = `#${state.tokenCounter++}`;
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const dateStr = now.toLocaleDateString();

  const newOrder = {
    id: 'ord-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6),
    token: tokenNum,
    dateStr: dateStr,
    timeStr: timeStr,
    timestamp: now.getTime(),
    orderType: 'Counter Direct',
    payMethod: 'Counter Cash',
    items: [],
    subtotal: 0,
    cgst: 0,
    sgst: 0,
    ecoFee: 15.00,
    grandTotal: 15.00,
    isPaid: false,
    status: 'CASH PENDING'
  };

  state.orders.unshift(newOrder);
  state.activeOrderId = newOrder.id;
  state.activeSelectedToken = tokenNum;
  state.isNewCounterDraft = true;
  saveOrdersToStorage();

  renderOrderTicketsList();
  selectOrderForEBill(newOrder.id);
}

// ================= TOP CENTER QUICK ITEM CATALOG BAR LOGIC =================
let currentCounterTopCategory = 'all';

function renderCounterTopCatalogRow(cat = 'all') {
  const container = document.getElementById('counter-top-items-row');
  if (!container) return;
  container.innerHTML = '';

  const activeOrd = state.orders.find(o => o.token === state.activeSelectedToken);

  const norm = s => (s || '').toLowerCase().replace(/&/g, '/').replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
  const targetNorm = norm(cat);
  const filtered = MENU_CATALOG.filter(item => {
    return targetNorm === 'all' || norm(item.category) === targetNorm;
  });

  filtered.forEach(item => {
    let currentQty = 0;
    if (activeOrd && activeOrd.items) {
      activeOrd.items.forEach(i => {
        if (i.itemId === item.id || i.name === item.name) {
          currentQty += i.quantity;
        }
      });
    }

    const card = document.createElement('div');
    card.className = `counter-top-item-card ${currentQty > 0 ? 'has-qty' : ''}`;
    card.onclick = () => handleCounterTopItemClick(item.id);
    card.innerHTML = `
      <div class="c-top-img-wrap">
        <img src="${item.image}" alt="${item.name}" class="c-top-thumb" onerror="this.src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80'">
        ${currentQty > 0 ? `<span class="c-top-qty-badge">${currentQty}x</span>` : ''}
      </div>
      <div class="c-top-info">
        <h4 title="${item.name}">${item.name}</h4>
      </div>
      <div class="c-top-bottom">
        <span class="c-top-price">₹${item.price.toFixed(2)}</span>
        <div class="c-top-controls">
          ${currentQty > 0 ? `
            <button class="c-top-minus-btn" onclick="event.stopPropagation(); handleCounterTopItemReduce('${item.id}')" title="Reduce Quantity">
              <i class="fa-solid fa-minus"></i>
            </button>
          ` : ''}
          <button class="c-top-add-btn" onclick="event.stopPropagation(); handleCounterTopItemClick('${item.id}')" title="Add to Active Bill">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function handleCounterTopItemReduce(itemId) {
  if (!state.activeSelectedToken) return;
  const ord = state.orders.find(o => o.token === state.activeSelectedToken);
  if (!ord || !ord.items || ord.items.length === 0) return;

  const item = MENU_CATALOG.find(i => i.id === itemId);
  if (!item) return;

  const ordItem = ord.items.find(i => i.itemId === itemId || i.name === item.name);
  if (ordItem) {
    adjustEbillItemQty(ordItem.cartId, -1);
  }
}

function filterCounterTopCatalog(cat, elem) {
  playSound('click');
  currentCounterTopCategory = cat;
  document.querySelectorAll('.counter-cat-pill').forEach(pill => pill.classList.remove('active'));
  if (elem) elem.classList.add('active');
  renderCounterTopCatalogRow(cat);
}

function handleCounterTopItemClick(itemId) {
  playSound('click');
  const currentOrd = state.orders.find(o => o.token === state.activeSelectedToken);
  const shouldCreateNewBill = !currentOrd || currentOrd.isPaid || !state.isNewCounterDraft;

  if (shouldCreateNewBill) {
    recalculateTokenCounter();
    const tokenNum = `#${state.tokenCounter++}`;
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const dateStr = now.toLocaleDateString();

    const newOrder = {
      id: 'ord-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6),
      token: tokenNum,
      dateStr: dateStr,
      timeStr: timeStr,
      timestamp: now.getTime(),
      orderType: 'Counter Direct',
      payMethod: 'Counter Cash',
      items: [],
      subtotal: 0,
      cgst: 0,
      sgst: 0,
      ecoFee: 15.00,
      grandTotal: 15.00,
      isPaid: false,
      status: 'CASH PENDING'
    };

    state.orders.unshift(newOrder);
    state.activeOrderId = newOrder.id;
    state.activeSelectedToken = tokenNum;
    state.isNewCounterDraft = true;
    saveOrdersToStorage();
    renderOrderTicketsList();
  }

  addCounterItemToActiveBill(itemId);
}

// --- DYNAMIC CATEGORY BUTTON RENDERING & DRAG & DROP PHOTO UPLOAD ---
let currentUploadedImageDataUrl = null;
let currentOwnerMenuCategory = 'all';

function renderCategoryFilterButtons() {
  const defaultCats = [
    { slug: 'SANDWICH & BURGER', label: 'SANDWICH & BURGER', icon: 'fa-burger' },
    { slug: 'SNACKS', label: 'SNACKS', icon: 'fa-cookie-bite' },
    { slug: 'MAGGI', label: 'MAGGI', icon: 'fa-bowl-food' },
    { slug: 'EGG', label: 'EGG', icon: 'fa-egg' },
    { slug: 'BREAD & ROLL', label: 'BREAD & ROLL', icon: 'fa-bread-slice' },
    { slug: 'MILK SHAKE & JUICE', label: 'MILK SHAKE & JUICE', icon: 'fa-wine-glass' },
    { slug: 'ICE CREAM', label: 'ICE CREAM', icon: 'fa-ice-cream' }
  ];

  const norm = s => (s || '').toLowerCase().replace(/&/g, '/').replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();

  // Find any extra custom categories created by owner
  const customCats = [];
  (MENU_CATALOG || []).forEach(item => {
    if (item.category) {
      const itemNorm = norm(item.category);
      const isDef = defaultCats.some(c => norm(c.slug) === itemNorm);
      if (!isDef && !customCats.some(c => norm(c) === itemNorm)) {
        customCats.push(item.category);
      }
    }
  });

  // 1. Render Kiosk left sidebar category navigation
  const kioskCatNav = document.getElementById('kiosk-category-nav');
  if (kioskCatNav) {
    const curNorm = norm(state.currentCategory);
    let navHtml = `
      <button class="cat-btn ${curNorm === 'all' ? 'active' : ''}" data-category="all" onclick="filterCategory('all')">
        <i class="fa-solid fa-utensils"></i>
        <span>All Items</span>
      </button>
    `;

    defaultCats.forEach(c => {
      const isAct = curNorm === norm(c.slug);
      navHtml += `
        <button class="cat-btn ${isAct ? 'active' : ''}" data-category="${c.slug}" onclick="filterCategory('${c.slug}')">
          <i class="fa-solid ${c.icon}"></i>
          <span>${c.label}</span>
        </button>
      `;
    });

    customCats.forEach(catName => {
      const isAct = curNorm === norm(catName);
      navHtml += `
        <button class="cat-btn ${isAct ? 'active' : ''}" data-category="${catName}" onclick="filterCategory('${catName}')">
          <i class="fa-solid fa-tag"></i>
          <span>${catName.toUpperCase()}</span>
        </button>
      `;
    });

    kioskCatNav.innerHTML = navHtml;
  }

  // 2. Render Counter top bar category filter pills
  const counterCatRow = document.getElementById('counter-top-cat-pills');
  if (counterCatRow) {
    const curCounterNorm = norm(currentCounterTopCategory);
    let pillsHtml = `
      <button class="counter-cat-pill ${curCounterNorm === 'all' ? 'active' : ''}" onclick="filterCounterTopCatalog('all', this)">
        <i class="fa-solid fa-border-all"></i> All Items
      </button>
    `;

    defaultCats.forEach(c => {
      const isAct = curCounterNorm === norm(c.slug);
      pillsHtml += `
        <button class="counter-cat-pill ${isAct ? 'active' : ''}" onclick="filterCounterTopCatalog('${c.slug}', this)">
          <i class="fa-solid ${c.icon}"></i> ${c.label}
        </button>
      `;
    });

    customCats.forEach(catName => {
      const isAct = curCounterNorm === norm(catName);
      pillsHtml += `
        <button class="counter-cat-pill ${isAct ? 'active' : ''}" onclick="filterCounterTopCatalog('${catName}', this)">
          <i class="fa-solid fa-tag"></i> ${catName}
        </button>
      `;
    });

    counterCatRow.innerHTML = pillsHtml;
  }

  // 3. Render Item Form category dropdown options
  const selectElem = document.getElementById('form-item-category-select');
  if (selectElem) {
    let optHtml = `
      <option value="SANDWICH & BURGER">SANDWICH & BURGER</option>
      <option value="SNACKS">SNACKS</option>
      <option value="MAGGI">MAGGI</option>
      <option value="EGG">EGG</option>
      <option value="BREAD & ROLL">BREAD & ROLL</option>
      <option value="MILK SHAKE & JUICE">MILK SHAKE & JUICE</option>
      <option value="ICE CREAM">ICE CREAM</option>
    `;
    customCats.forEach(catName => {
      optHtml += `<option value="${catName}">${catName}</option>`;
    });
    optHtml += `<option value="NEW_CUSTOM_CATEGORY" style="color:var(--mcd-gold); font-weight:bold;">+ Type & Create New Category...</option>`;
    selectElem.innerHTML = optHtml;
  }

  // 4. Render Owner Menu Manager Category Pills
  const ownerPillsContainer = document.getElementById('owner-menu-category-pills');
  if (ownerPillsContainer) {
    const curOwnerNorm = norm(currentOwnerMenuCategory);
    let ownerPillsHtml = `
      <button class="counter-cat-pill ${curOwnerNorm === 'all' ? 'active' : ''}" onclick="filterOwnerMenuCatalogCategory('all', this)">
        All (${(MENU_CATALOG || []).length})
      </button>
    `;

    defaultCats.forEach(c => {
      const count = (MENU_CATALOG || []).filter(i => norm(i.category) === norm(c.slug)).length;
      const isAct = curOwnerNorm === norm(c.slug);
      ownerPillsHtml += `
        <button class="counter-cat-pill ${isAct ? 'active' : ''}" onclick="filterOwnerMenuCatalogCategory('${c.slug}', this)">
          ${c.label} (${count})
        </button>
      `;
    });

    customCats.forEach(catName => {
      const count = (MENU_CATALOG || []).filter(i => norm(i.category) === norm(catName)).length;
      const isAct = curOwnerNorm === norm(catName);
      ownerPillsHtml += `
        <button class="counter-cat-pill ${isAct ? 'active' : ''}" onclick="filterOwnerMenuCatalogCategory('${catName}', this)">
          ${catName} (${count})
        </button>
      `;
    });

    ownerPillsContainer.innerHTML = ownerPillsHtml;
  }
}

function triggerBrowsePhoto(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const fileInput = document.getElementById('form-item-file-input');
  if (fileInput) {
    fileInput.click();
  }
}

function handleFileInputChange(e) {
  if (e && e.target && e.target.files && e.target.files.length > 0) {
    processPhotoFile(e.target.files[0]);
  }
}

function handleImageInputUrlChange(urlVal) {
  const url = (urlVal || '').trim();
  const previewContainer = document.getElementById('upload-preview-container');
  const previewImg = document.getElementById('upload-preview-img');

  if (url) {
    currentUploadedImageDataUrl = url;
    if (previewImg) previewImg.src = url;
    if (previewContainer) previewContainer.classList.remove('hidden');
  } else {
    currentUploadedImageDataUrl = null;
    if (previewImg) previewImg.src = '';
    if (previewContainer) previewContainer.classList.add('hidden');
  }
}

function setupDragAndDropUpload() {
  const dropzone = document.getElementById('item-image-dropzone');
  const fileInput = document.getElementById('form-item-file-input');

  if (!dropzone || !fileInput) return;

  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropzone.classList.add('dragover');
  });

  dropzone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropzone.classList.remove('dragover');
  });

  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropzone.classList.remove('dragover');

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      processPhotoFile(files[0]);
    }
  });

  fileInput.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

function processPhotoFile(file) {
  if (!file || !file.type.startsWith('image/')) {
    alert('Please select a valid image file (JPEG, PNG, WebP, etc.).');
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    currentUploadedImageDataUrl = e.target.result;
    
    const previewContainer = document.getElementById('upload-preview-container');
    const previewImg = document.getElementById('upload-preview-img');
    const formImgInput = document.getElementById('form-item-image');

    if (previewImg) previewImg.src = currentUploadedImageDataUrl;
    if (previewContainer) previewContainer.classList.remove('hidden');
    if (formImgInput) formImgInput.value = currentUploadedImageDataUrl;
  };
  reader.readAsDataURL(file);
}

function clearUploadedPhoto(e) {
  if (e) e.stopPropagation();
  currentUploadedImageDataUrl = null;
  const previewContainer = document.getElementById('upload-preview-container');
  const previewImg = document.getElementById('upload-preview-img');
  const formImgInput = document.getElementById('form-item-image');
  const fileInput = document.getElementById('form-item-file-input');

  if (previewImg) previewImg.src = '';
  if (previewContainer) previewContainer.classList.add('hidden');
  if (formImgInput) formImgInput.value = '';
  if (fileInput) fileInput.value = '';
}

function handleCategorySelectChange() {
  const selectElem = document.getElementById('form-item-category-select');
  const customWrap = document.getElementById('custom-category-input-wrap');
  const customInput = document.getElementById('form-custom-category-input');

  if (selectElem && selectElem.value === 'NEW_CUSTOM_CATEGORY') {
    if (customWrap) customWrap.classList.remove('hidden');
    if (customInput) customInput.focus();
  } else {
    if (customWrap) customWrap.classList.add('hidden');
    if (customInput) customInput.value = '';
  }
}

// --- OWNER MENU CATALOG & PRICES MANAGEMENT LOGIC ---
function openOwnerMenuModal() {
  playSound('click');
  renderCategoryFilterButtons();
  renderOwnerMenuTable();
  renderPromoOffersTable();
  hideItemEditorForm();
  hidePromoEditorForm();

  document.getElementById('owner-menu-manager-modal').classList.add('open');
}

function closeOwnerMenuModal() {
  playSound('click');
  document.getElementById('owner-menu-manager-modal').classList.remove('open');
}

function renderOwnerMenuTable() {
  const tbody = document.getElementById('owner-menu-items-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const norm = s => (s || '').toLowerCase().replace(/&/g, '/').replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
  const targetNorm = norm(currentOwnerMenuCategory);
  const filtered = MENU_CATALOG.filter(item => {
    return targetNorm === 'all' || norm(item.category) === targetNorm;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:16px; color:var(--text-muted);">No menu items found in this category</td></tr>`;
    return;
  }

  filtered.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${item.name}</strong></td>
      <td><span style="font-size:0.75rem; color:var(--text-secondary); text-transform:uppercase; font-weight:700;">${item.category}</span></td>
      <td><strong style="color:var(--mcd-gold);">₹${item.price.toFixed(2)}</strong></td>
      <td><span style="font-size:0.75rem; color:var(--text-muted);">${item.tag || 'NONE'}</span></td>
      <td class="txt-right">
        <button class="btn-edit-sm" onclick="editMenuItem('${item.id}')"><i class="fa-solid fa-pen"></i> Edit</button>
        <button class="btn-del-sm" onclick="deleteMenuItem('${item.id}')"><i class="fa-solid fa-trash"></i> Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function showAddNewItemForm() {
  playSound('click');
  renderCategoryFilterButtons();
  document.getElementById('edit-item-id-hidden').value = '';
  document.getElementById('item-editor-form-title').innerHTML = `<i class="fa-solid fa-plus" style="color:var(--mcd-gold);"></i> Add New Menu Item`;
  document.getElementById('form-item-name').value = '';

  const catSelect = document.getElementById('form-item-category-select');
  if (catSelect) {
    catSelect.value = currentOwnerMenuCategory !== 'all' ? currentOwnerMenuCategory : 'burgers';
  }
  handleCategorySelectChange();

  document.getElementById('form-item-price').value = '';
  document.getElementById('form-item-calories').value = '';
  document.getElementById('form-item-tag').value = '';
  document.getElementById('form-item-image').value = '';
  document.getElementById('form-item-desc').value = '';

  clearUploadedPhoto();
  document.getElementById('item-editor-form-box').classList.remove('hidden');
}

function hideItemEditorForm() {
  const box = document.getElementById('item-editor-form-box');
  if (box) box.classList.add('hidden');
}

function editMenuItem(id) {
  playSound('click');
  const item = MENU_CATALOG.find(i => i.id === id);
  if (!item) return;

  renderCategoryFilterButtons();

  document.getElementById('edit-item-id-hidden').value = item.id;
  document.getElementById('item-editor-form-title').innerHTML = `<i class="fa-solid fa-pen-to-square" style="color:var(--mcd-gold);"></i> Edit Menu Item (${item.name})`;
  document.getElementById('form-item-name').value = item.name;

  const catSelect = document.getElementById('form-item-category-select');
  if (catSelect) {
    catSelect.value = item.category.toLowerCase();
    handleCategorySelectChange();
  }

  document.getElementById('form-item-price').value = item.price;
  document.getElementById('form-item-calories').value = item.calories || '';
  document.getElementById('form-item-tag').value = item.tag || '';
  document.getElementById('form-item-image').value = item.image || '';
  document.getElementById('form-item-desc').value = item.description || '';

  if (item.image) {
    currentUploadedImageDataUrl = item.image;
    const previewContainer = document.getElementById('upload-preview-container');
    const previewImg = document.getElementById('upload-preview-img');
    if (previewImg) previewImg.src = item.image;
    if (previewContainer) previewContainer.classList.remove('hidden');
  } else {
    clearUploadedPhoto();
  }

  document.getElementById('item-editor-form-box').classList.remove('hidden');
}

function deleteMenuItem(id) {
  const item = MENU_CATALOG.find(i => i.id === id);
  if (!item) return;

  if (confirm(`Are you sure you want to remove "${item.name}" from your store menu?`)) {
    playSound('click');
    MENU_CATALOG = MENU_CATALOG.filter(i => i.id !== id);
    saveCustomCatalog();
    renderCategoryFilterButtons();
    renderOwnerMenuTable();

    // Re-render all views live
    renderMenu();
    renderCounterCatalogGrid();
    renderCounterTopCatalogRow();
    renderSalesAnalyticsReport();
  }
}

function saveMenuItemForm(e) {
  if (e) e.preventDefault();
  playSound('success');

  const editId = document.getElementById('edit-item-id-hidden').value;
  const name = document.getElementById('form-item-name').value.trim();

  const catSelectVal = document.getElementById('form-item-category-select').value;
  let finalCategory = catSelectVal;

  if (catSelectVal === 'NEW_CUSTOM_CATEGORY') {
    const customCategoryTyped = document.getElementById('form-custom-category-input').value.trim();
    if (!customCategoryTyped) {
      alert('Please type the name for your new category.');
      return;
    }
    finalCategory = customCategoryTyped.toLowerCase();
  }

  const price = parseFloat(document.getElementById('form-item-price').value) || 0;
  const cal = document.getElementById('form-item-calories').value.trim() || '300 Cal';
  const tag = document.getElementById('form-item-tag').value.trim() || 'SPECIAL';

  const manualImgUrl = document.getElementById('form-item-image').value.trim();
  const img = currentUploadedImageDataUrl || manualImgUrl || 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80';

  const desc = document.getElementById('form-item-desc').value.trim() || 'Delicious store special item prepared fresh.';

  if (!name || price <= 0) {
    alert('Please enter a valid item name and price.');
    return;
  }

  if (editId) {
    const idx = MENU_CATALOG.findIndex(i => i.id === editId);
    if (idx !== -1) {
      MENU_CATALOG[idx] = {
        ...MENU_CATALOG[idx],
        name: name,
        category: finalCategory,
        price: price,
        calories: cal,
        tag: tag,
        image: img,
        description: desc
      };
    }
  } else {
    const newId = 'custom-' + Date.now();
    MENU_CATALOG.push({
      id: newId,
      name: name,
      category: finalCategory,
      price: price,
      calories: cal,
      tag: tag,
      image: img,
      description: desc
    });
  }

  saveCustomCatalog();
  renderCategoryFilterButtons();
  renderOwnerMenuTable();
  hideItemEditorForm();

  // Re-render UI components live
  renderMenu();
  renderCounterCatalogGrid();
  renderCounterTopCatalogRow();
  renderSalesAnalyticsReport();

  alert(`✓ Menu item "${name}" saved! Category: ${finalCategory.toUpperCase()}, Price: ₹${price.toFixed(2)}.`);
}

// --- MULTI PROMO OFFERS MANAGER LOGIC ---
function renderPromoOffersTable() {
  const tbody = document.getElementById('promo-offers-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (!PROMO_OFFERS_CATALOG || PROMO_OFFERS_CATALOG.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:20px; color:var(--text-muted);">No promo offers defined yet. Click "+ Add New Promo Offer" to create one.</td></tr>`;
    return;
  }

  PROMO_OFFERS_CATALOG.forEach(offer => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <button type="button" class="btn-edit-sm" style="${offer.isActive ? 'background:var(--mcd-green); color:#fff; border-color:var(--mcd-green); font-weight:800;' : 'background:rgba(255,255,255,0.06); color:var(--text-muted); border-color:rgba(255,255,255,0.15);'}" onclick="togglePromoOfferStatus('${offer.id}')" title="Click to toggle Active / Inactive status">
          ${offer.isActive ? '<i class="fa-solid fa-circle-check"></i> ACTIVE (ON)' : '<i class="fa-solid fa-circle-xmark"></i> INACTIVE (OFF)'}
        </button>
      </td>
      <td><strong>${offer.title}</strong></td>
      <td><strong style="color:var(--mcd-gold);">₹${offer.price.toFixed(2)}</strong></td>
      <td><span style="font-size:0.75rem; color:var(--text-secondary);">${offer.desc}</span></td>
      <td class="txt-right">
        <button type="button" class="btn-edit-sm" onclick="editPromoOffer('${offer.id}')"><i class="fa-solid fa-pen"></i> Edit</button>
        <button type="button" class="btn-del-sm" onclick="deletePromoOffer('${offer.id}')"><i class="fa-solid fa-trash"></i> Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function showAddPromoForm() {
  playSound('click');
  document.getElementById('edit-promo-id-hidden').value = '';
  document.getElementById('promo-editor-title').textContent = '+ Create New Kiosk Promo Offer';
  document.getElementById('promo-form-title').value = '';
  document.getElementById('promo-form-price').value = '';
  document.getElementById('promo-form-desc').value = '';
  document.getElementById('promo-editor-form-box').classList.remove('hidden');
}

function hidePromoEditorForm() {
  const box = document.getElementById('promo-editor-form-box');
  if (box) box.classList.add('hidden');
}

function editPromoOffer(id) {
  playSound('click');
  const offer = PROMO_OFFERS_CATALOG.find(p => p.id === id);
  if (!offer) return;

  document.getElementById('edit-promo-id-hidden').value = offer.id;
  document.getElementById('promo-editor-title').textContent = `Edit Promo Offer (${offer.title})`;
  document.getElementById('promo-form-title').value = offer.title;
  document.getElementById('promo-form-price').value = offer.price;
  document.getElementById('promo-form-desc').value = offer.desc;

  document.getElementById('promo-editor-form-box').classList.remove('hidden');
}

function deletePromoOffer(id) {
  playSound('click');
  PROMO_OFFERS_CATALOG = PROMO_OFFERS_CATALOG.filter(p => p.id !== id);
  savePromoOffersToStorage();
  updatePromoBannerUI();
  renderPromoOffersTable();
}

function togglePromoOfferStatus(id) {
  playSound('click');
  const offer = PROMO_OFFERS_CATALOG.find(p => p.id === id);
  if (offer) {
    const isCurrentlyActive = offer.isActive;
    PROMO_OFFERS_CATALOG.forEach(p => p.isActive = false);
    if (!isCurrentlyActive) {
      offer.isActive = true;
    }
  }
  savePromoOffersToStorage();
  updatePromoBannerUI();
  renderPromoOffersTable();
}

function deactivateAllPromoOffers() {
  playSound('click');
  PROMO_OFFERS_CATALOG.forEach(p => p.isActive = false);
  savePromoOffersToStorage();
  updatePromoBannerUI();
  renderPromoOffersTable();
  alert("✓ All promo offers deactivated! Top offer banner is now hidden on Customer Kiosk.");
}

function setActivePromoOffer(id) {
  togglePromoOfferStatus(id);
}

function savePromoOfferForm(e) {
  if (e) e.preventDefault();
  playSound('success');

  const editId = document.getElementById('edit-promo-id-hidden').value;
  const title = document.getElementById('promo-form-title').value.trim();
  const price = parseFloat(document.getElementById('promo-form-price').value) || 0;
  const desc = document.getElementById('promo-form-desc').value.trim();

  if (!title || price <= 0 || !desc) {
    alert("Please enter a valid title, price, and description.");
    return;
  }

  if (editId) {
    const idx = PROMO_OFFERS_CATALOG.findIndex(p => p.id === editId);
    if (idx !== -1) {
      PROMO_OFFERS_CATALOG[idx].title = title;
      PROMO_OFFERS_CATALOG[idx].price = price;
      PROMO_OFFERS_CATALOG[idx].desc = desc;
    }
  } else {
    const newId = 'promo-' + Date.now();
    PROMO_OFFERS_CATALOG.push({
      id: newId,
      title: title,
      desc: desc,
      price: price,
      isActive: true
    });
    // Set new offer active
    PROMO_OFFERS_CATALOG.forEach(p => p.isActive = (p.id === newId));
  }

  savePromoOffersToStorage();
  updatePromoBannerUI();
  renderPromoOffersTable();
  hidePromoEditorForm();
  alert(`✓ Promo offer "${title}" saved and activated on Kiosk!`);
}






// ==================== ADDITIVE WELCOME SCREEN FLOW ====================
// Keeps the existing menu, cart, checkout, counter POS, and storage logic intact.
function startKioskOrder(orderType) {
  try {
    const overlay = document.getElementById('kiosk-welcome-overlay');
    if (overlay) {
      overlay.hidden = true;
      overlay.setAttribute('hidden', '');
      overlay.classList.add('hidden');
      overlay.style.setProperty('display', 'none', 'important');
    }
    const vid = document.getElementById('kiosk-welcome-video');
    if (vid) { try { vid.pause(); } catch(e) {} }

    document.body.classList.remove('kiosk-welcome-open');
    document.body.className = (document.body.className || '').replace(/\bkiosk-welcome-open\b/g, '').trim();

    const header = document.querySelector('.app-header');
    const main = document.querySelector('.main-content');
    const cartBar = document.querySelector('.kiosk-cart-bar');
    if (header) header.style.removeProperty('display');
    if (main) main.style.removeProperty('display');
    if (cartBar) cartBar.style.removeProperty('display');

    if (typeof state !== 'undefined' && state) {
      state.orderType = orderType === 'Take-Out' ? 'Take-Out' : 'Dine-In';
    }

    // Keep the existing checkout order-type controls in sync when they are present.
    const dineInControl = document.getElementById('type-dinein');
    const takeoutControl = document.getElementById('type-takeout');
    if (dineInControl) dineInControl.classList.toggle('active', orderType !== 'Take-Out');
    if (takeoutControl) takeoutControl.classList.toggle('active', orderType === 'Take-Out');

    try { localStorage.setItem('chiacas_last_order_type', orderType === 'Take-Out' ? 'Take-Out' : 'Dine-In'); } catch (error) { /* Storage may be disabled in private kiosk contexts. */ }

    if (typeof renderMenu === 'function') {
      try { renderMenu(); } catch (e) {}
    }
  } catch (err) {
    console.error('startKioskOrder error:', err);
  }
}
window.startKioskOrder = startKioskOrder;

// The welcome screen is shown on each fresh page load so the next customer starts cleanly.
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.search.includes('order=now')) {
    startKioskOrder('Dine-In');
    return;
  }
  const welcomeOverlay = document.getElementById('kiosk-welcome-overlay');
  if (welcomeOverlay) {
    welcomeOverlay.hidden = false;
    document.body.classList.add('kiosk-welcome-open');
  }
});
