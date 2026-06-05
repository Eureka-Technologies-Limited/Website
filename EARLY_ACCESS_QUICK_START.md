# ⚡ Early Access - Quick Start (5 Minutes)

## 📋 Checklist

### **1. Get Credentials (2 min)**

```
Go to supabase.com → Your Project → Settings → API
Copy: Project URL and anon key
```

### **2. Set Environment Variables (1 min)**

Create `.env.local` in project root:

```env
REACT_APP_SUPABASE_URL=your-url-here
REACT_APP_SUPABASE_ANON_KEY=your-key-here
```

### **3. Create Database Table (1 min)**

Copy-paste this SQL in Supabase SQL Editor and run:

```sql
CREATE TABLE early_access_registrations (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  company TEXT,
  product TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE early_access_registrations
ADD CONSTRAINT unique_email_product UNIQUE(email, product);

CREATE INDEX idx_product ON early_access_registrations(product);
CREATE INDEX idx_created_at ON early_access_registrations(created_at DESC);
CREATE INDEX idx_email ON early_access_registrations(email);

ALTER TABLE early_access_registrations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public inserts" ON early_access_registrations
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public reads" ON early_access_registrations
  FOR SELECT USING (true);
```

### **4. Test (1 min)**

```bash
npm start
# Click "Workflow Engine" on homepage
# Fill form & submit
# Check Supabase dashboard for new row
```

## 🎯 Done

Your early access system is now live:

- ✅ Modal opens when clicking coming-soon products
- ✅ Data saves to Supabase
- ✅ Duplicate prevention works
- ✅ Success/error messages show

## 📊 View Registrations

Supabase Dashboard → Tables → early_access_registrations

## 📧 Launch Products

Query emails: `SELECT email FROM early_access_registrations WHERE product = 'workflow_engine'`

---

**Next Step:** Read EARLY_ACCESS_IMPLEMENTATION.md for full details & options
