const dotenv = require("dotenv");
const Stripe = require("stripe")

dotenv.config();

const stripe = Stripe(process.env.STRIPE_SECRET)

const StripePayment = async(req, res) => {
    try {
        const session  = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Dr Name',
                        // images: ['https://example.com/image/123'],
                    },
                    unit_amount: 1000,
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: `http://localhost:5173/success`,
            cancel_url: `http://localhost:5173/cancel`,
        });

        res.json({id:session.id})

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = { StripePayment }