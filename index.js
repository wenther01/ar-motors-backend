const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const productosRoutes = require('./routes/productos');
const ventasRoutes = require('./routes/ventas');
const ordenesRoutes = require('./routes/ordenes');

app.use('/api/productos', productosRoutes);
app.use('/api/ventas', ventasRoutes);
app.use('/api/ordenes', ordenesRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4
})
.then(() => {
  console.log('✅ Conectado a MongoDB');
  app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
})
.catch(err => console.error('❌ Error conectando a MongoDB:', err));
