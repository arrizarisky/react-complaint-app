function validateMessage(message) {
    if (!message || typeof message !== 'string' || message.trim() === '') {
        return { valid: false, error: 'Message is required and must be a non-empty string' };
    }
    return { valid: true };
}

module.exports = { validateMessage };