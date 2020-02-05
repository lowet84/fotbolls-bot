const Messenger = require('messenger-node')

let webhook_config = {
  verify_token: process.env.WEBHOOK_VERIFY_TOKEN
}

const Webhook = new Messenger.Webhook(webhook_config)
