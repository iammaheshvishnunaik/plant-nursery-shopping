import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const { useState } = React;

function PlantNurseryApp() {
    const [page, setPage] = useState("landing");
    const [cart, setCart] = useState([]);

    const plants = [
        {
            id: 1,
            name: "Lavender",
            type: "Aromatic Plants",
            description: "Calming fragrance, great for relaxation.",
            cost: 10,
            img: "https://static.vecteezy.com/system/resources/thumbnails/049/646/825/small_2x/a-field-of-purple-lavender-flowers-with-a-pink-and-orange-sky-in-the-background-the-flowers-are-in-full-bloom-and-are-arranged-in-a-way-that-creates-a-sense-of-harmony-and-balance-photo.jpg"
        },
        {
            id: 2,
            name: "Basil",
            type: "Aromatic Plants",
            description: "Fresh aroma, perfect for cooking.",
            cost: 8,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQbNZllbpwcsVLhTHiE2QfMqscfMMKccp3vg&s"
        },
        {
            id: 3,
            name: "Aloe Vera",
            type: "Medicinal Plants",
            description: "Healing plant for skin and burns.",
            cost: 12,
            img: "https://as2.ftcdn.net/jpg/04/11/90/25/1000_F_411902551_1UNnLtfs8tqZi05sR3MvxL4dvltWX8KO.webp"
        },
        {
            id: 4,
            name: "Mint",
            type: "Medicinal Plants",
            description: "Great for digestion and fresh breath.",
            cost: 9,
            img: "data:image/jpeg;base64,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"
        },
        {
            id: 5,
            name: "Neem",
            type: "Medicinal Plants",
            description: "Anti-inflammatory and analgesic properties.",
            cost: 15,
            img: "https://catchfoundation.in/_next/image?url=https%3A%2F%2Fcatch-foundation-s3-bucket-production.s3.ap-south-1.amazonaws.com%2FNeem_tree_0b97906e2e.jpg&w=1920&q=75"
        },
        {
            id: 6,
            name: "Ginger",
            type: "Medicinal Plants",
            description: "Aid digestion and reduce inflammation. ",
            cost: 18,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsFOpXjfbYh5enL0uZ-byY2-Tf8OOj7mid6A&s"
        }
    ];

    const addToCart = (plant) => {
        setCart(prev => {
            const exists = prev.find(p => p.id === plant.id);
            if (exists) {
                return prev.map(p => p.id === plant.id ? { ...p, quantity: p.quantity + 1 } : p);
            }
            return [...prev, { ...plant, quantity: 1 }];
        });
        // jQuery animation example
        //$("nav").fadeOut(100).fadeIn(200);
    };

    const updateQuantity = (id, change) => {
        setCart(prev => prev.map(p =>
            p.id === id ? { ...p, quantity: Math.max(1, p.quantity + change) } : p
        ));
    };

    const deleteItem = (id) => setCart(prev => prev.filter(p => p.id !== id));

    const total = cart.reduce((sum, p) => sum + p.cost * p.quantity, 0);

    return (
        <div>
            <nav>
                <div><strong>Plant Nursery Shop</strong></div>
                <div>
                    <button onClick={() => setPage("landing")}>Home</button>
                    <button onClick={() => setPage("products")}>Products</button>
                    <button onClick={() => setPage("cart")}>Cart ({cart.length})</button>
                </div>
            </nav>

            {page === "landing" && (
                <div className="container bg-image">
                    <h1>Welcome to the Green World!</h1>
                    <p>We are an online nursery dedicated to providing healthy, high-quality plants grown with care and delivered with love. Whether you're a seasoned gardener or just starting your plant journey, we offer a wide selection of indoor plants, outdoor varieties, succulents, herbs, and rare finds—carefully curated to thrive in your space.

                        Our mission is to make plant parenthood simple, joyful, and accessible. From easy ordering to expert care guidance, we’re here to help you grow your green haven, one plant at a time.  Discover our collection of aromatic and medicinal plants. We are in this industry since 15 years serving 100000+ customers.</p>
                    <button onClick={() => setPage("products")}>View Products</button>
                </div>
            )}

            {page === "products" && (
                <div className="container">
                    <div className="section">
                        <h2>Aromatic Plants</h2>
                        {plants.filter(p => p.type === "Aromatic Plants").map(p => (
                            <div key={p.id} className="card">
                                <img src={p.img} alt={p.name} />
                                <div className="card-content">
                                    <h3>{p.name}</h3>
                                    <p>{p.description}</p>
                                    <p><strong>${p.cost}</strong></p>
                                    <button onClick={() => addToCart(p)}>Add to Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="section">
                        <h2>Medicinal Plants</h2>
                        {plants.filter(p => p.type === "Medicinal Plants").map(p => (
                            <div key={p.id} className="card">
                                <img src={p.img} alt={p.name} />
                                <div className="card-content">
                                    <h3>{p.name}</h3>
                                    <p>{p.description}</p>
                                    <p><strong>${p.cost}</strong></p>
                                    <button onClick={() => addToCart(p)}>Add to Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {page === "cart" && (
                <div className="container">
                    <h2>Your Shopping Cart</h2>
                    {cart.length === 0 && <p>Your cart is empty.</p>}
                    {cart.map(item => (
                        <div key={item.id} className="cart-card">
                            <img src={item.img} alt={item.name} />
                            <div className="cart-details">
                                <h4>{item.name}</h4>
                                <p>Unit Price: ${item.cost}</p>
                                <p>Total: ${item.cost * item.quantity}</p>
                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                <button onClick={() => deleteItem(item.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                    {cart.length > 0 && (
                        <div>
                            <div className="total">Total: ${total}</div>
                            <button onClick={() => setPage("products")}>Continue Shopping</button>
                            <button onClick={() => alert("Proceeding to Checkout...")}>Checkout</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<PlantNurseryApp />);
reportWebVitals();
