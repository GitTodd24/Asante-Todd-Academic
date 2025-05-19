import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY); // Securely loads public key

//Keep all client-side files inside src/, especially any files imported directly into React components. This keeps your build clean and avoids path resolution issues during deployment.

// This is a public key, so it’s safe to expose in the client-side code.
// The secret key should never be exposed to the client-side code. Always keep it on the server-side.

//React (frontend) files can only import from within the src/ directory unless explicitly configured otherwise.

//Files like stripeClient.js and stripeConfig.js that are imported into React components must live inside src/ to avoid Vite build errors.

//Anything outside of src/ (like a root-level config/) is usually assumed to be backend-only or build-time code.

export default stripePromise;

