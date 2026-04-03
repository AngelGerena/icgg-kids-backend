// ✝️ ICGG Kids Ministry — Main Server
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import prayerRoutes       from './routes/prayer.js';
import visitorRoutes      from './routes/visitor.js';
import childrenRoutes     from './routes/children.js';
import checkinsRoutes     from './routes/checkins.js';
import notificationRoutes from './routes/notifications.js';

dotenv.config();
const app  = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin:'*', methods:['GET','POST','PATCH'], allowedHeaders:['Content-Type'] }));
app.use(express.json());

app.get('/', (req, res) => res.json({ status:'✅ ICGG Kids API is running!', version:'2.0.0' }));

app.use('/api/prayer',        prayerRoutes);
app.use('/api/visitor',       visitorRoutes);
app.use('/api/children',      childrenRoutes);
app.use('/api/checkins',      checkinsRoutes);
app.use('/api/notifications', notificationRoutes);

app.use((req, res) => res.status(404).json({ success:false, message:'Route not found.' }));

app.listen(PORT, () => {
  console.log('\n✝️  ────────────────────────────────────');
  console.log(`🚀  ICGG Kids API → http://localhost:${PORT}`);
  console.log('👶  Children:       /api/children');
  console.log('✅  Check-in:       /api/checkins');
  console.log('📢  Notifications:  /api/notifications');
  console.log('🙏  Prayer:         /api/prayer');
  console.log('✝️  ────────────────────────────────────\n');
});
