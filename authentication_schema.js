```javascript
// Import necessary libraries
const mongoose = require('mongoose');

// Define User schema
const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

// Define Client schema
const ClientSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  clientId: { type: String, unique: true, required: true },
  clientSecret: { type: String, required: true }
});

// Define Token schema
const TokenSchema = new mongoose.Schema({
  accessToken: { type: String, unique: true, required: true },
  accessTokenExpiresAt: { type: Date, required: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

// Define models
const User = mongoose.model('User', UserSchema);
const Client = mongoose.model('Client', ClientSchema);
const Token = mongoose.model('Token', TokenSchema);

// Export models
module.exports = {
  User,
  Client,
  Token
};
```
