const express = require('express');
const router = express.Router();
const { getGeminiResponse } = require('../services/geminiServices');

router.post('/', async (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'Gemini API key not set in .env' });
    }

    try {
        const ai_response = await getGeminiResponse(message, apiKey);
        return res.json({ ai_response });
    } catch (error) {
        console.error('❌ Error:', error?.response?.data || error.message);
        return res.status(500).json({
            error: 'Something went wrong',
            detail: error?.response?.data || error.message
        });
    }
});

module.exports = router;