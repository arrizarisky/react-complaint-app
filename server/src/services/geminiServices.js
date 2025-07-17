const axios = require('axios');

async function getGeminiResponse(message, apiKey) {
    const prompt = `Keluhan pelanggan:\n"${message}"\n\nBuatkan balasan yang sopan, profesional, dan solutif terhadap keluhan tersebut. Jangan tambahkan salam pembuka, kalimat pengantar seperti "Berikut balasan", atau placeholder seperti [Nama Pelanggan], [Nama Toko], [Detail Alamat]. Jawaban langsung mulai dari inti respons.`;
    const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
            contents: [
                {
                    parts: [
                        { text: prompt }
                    ]
                }
            ]
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    return response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from Gemini';
}

module.exports = { getGeminiResponse };