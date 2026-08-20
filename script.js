// ===============================
// FoodBridge - Supabase Connection
// ===============================

const SUPABASE_URL = "https://fnnogzkxdhqosafnwchl.supabase.co";

// Paste your PUBLISHABLE key between the quotes
const SUPABASE_KEY =" sb_publishable_GnbcANoxYMbFwcqj2B--ZQ_pnkHJERx";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


// ===============================
// Get Started Button
// ===============================

function getStarted() {
    alert("Welcome to FoodBridge! 🍔");
}
