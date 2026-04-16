CREATE TABLE IF NOT EXISTS gadgets (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(20) CHECK (type IN ('physical', 'digital_badge')),
    impact_description TEXT,
    stock INTEGER DEFAULT 0,
    co2_saved_grams INTEGER DEFAULT 0 -- Gamification for the user
);

CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    gadget_id INTEGER REFERENCES gadgets(id),
    donation_amount DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Initial items
INSERT INTO gadgets (name, type, impact_description, stock, co2_saved_grams)
VALUES 
('Eco-Warrior Digital Badge', 'digital_badge', 'Reduces plastic waste by 100%', 9999, 50),
('Sustainable Water Bottle', 'physical', 'Provides 1 month of water to a community', 100, 0);