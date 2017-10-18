import path from 'path';

export default {
    app: {
        host: '0.0.0.0',
        port: 8000,
        jwtKey: 'zEqUku5qXoER5crZdlKQ2S9+NyIcOJr18LIFwtvW2K4=',//process.env.JWT_KEY,
        defaultCurrency: 'COP'
    },
    database: {
        servers: [
            {
                host: process.env.DB_PORT_28015_TCP_ADDR || 'localhost',
                port: process.env.DB_PORT_28015_TCP_PORT || 28015
            }
        ],
        name: 'atlas'
    },
    logs: {
        folder: path.join(__dirname, '../logs/'),
        streams: [
            {
                level: 'debug',
                stream: process.stdout // log INFO and above to stdout
            }
        ]
    },
    uploads: {
        provider: 'atlas',
        folder: path.join(process.cwd(), 'uploads'),
        baseUrl: 'localhost:8000/uploads'
    },
    emails: {
        from: {
            name: 'ElParaísoRojo.com',
            email: 'elparaisorojo.shop@gmail.com.com'
        }
    },
    storefront: {
        label: 'elparaisorojo.com',
        baseUrl: 'http://localhost:3000',
        defaultLocale: 'es'
    },
    switchPayments: {
        enabled: true,
        baseUrl: 'https://api-test.switchpayments.com/v2',
        accountId: process.env.SWITCH_ACCOUNT_ID,
        privateKey: process.env.SWITCH_PRIVATE_KEY
    },
    mailgun: {
        domain: process.env.MAILGUN_DOMAIN,
        apiKey: process.env.MAILGUN_API_KEY
    }
}
