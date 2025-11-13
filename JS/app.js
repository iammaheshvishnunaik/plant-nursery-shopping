const { useState } = React;

function App() {
    const [page, setPage] = useState("landing");
    const [cart, setCart] = useState([]);

    const plants = [
        {
            id: 1,
            name: "Lavender",
            type: "Aromatic Plants",
            description: "Calming fragrance, great for relaxation.",
            cost: 10,
            img: "images/lavender.jpg"
        },
        {
            id: 2,
            name: "Basil",
            type: "Aromatic Plants",
            description: "Fresh aroma, perfect for cooking.",
            cost: 8,
            img: "images/basil.jpg"
        },
        {
            id: 3,
            name: "Aloe Vera",
            type: "Medicinal Plants",
            description: "Healing plant for skin and burns.",
            cost: 12,
            img: "images/aloe.jpg"
        },
        {
            id: 4,
            name: "Mint",
            type: "Medicinal Plants",
            description: "Great for digestion and fresh breath.",
            cost: 9,
            img: "images/mint.jpg"
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
        $("nav").fadeOut(100).fadeIn(200);
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
                <div><strong>🌿 Plant Shop</strong></div>
                <div>
                    <a href="#" onClick={() => setPage("landing")}>Home</a>
                    <a href="#" onClick={() => setPage("products")}>Products</a>
                    <a href="#" onClick={() => setPage("cart")}>Cart ({cart.length})</a>
                </div>
            </nav>

            {page === "landing" && (
                <div className="container">
                    <h1>Welcome to the Green World!</h1>
                    <p>Discover our collection of aromatic and medicinal plants.</p>
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

ReactDOM.createRoot(document.getElementById("root")).render(<App />);