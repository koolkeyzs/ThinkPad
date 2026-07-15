const rateLimit = require('express-rate-limit')

// Create limiter
const limiter = rateLimit({
    windowMs: 60 * 1000,        // 10 seconds
    max: 100,                      // 5 requests per windowMs
    message: 'Too many requests, please try again later',
    standardHeaders: true,       // Return rate limit info in headers
    legacyHeaders: false         // Disable X-RateLimit-* headers
})

module.exports = limiter