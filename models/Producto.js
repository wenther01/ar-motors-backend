const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  cost: {
    type: Number,
    required: true,
    min: 0
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  supplier: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true // Agrega campos createdAt y updatedAt automáticamente
});

module.exports = mongoose.model('Producto', productoSchema);