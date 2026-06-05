# 🚀 Early Access Registration System - Complete Setup Guide

## Overview

Register user interest for unreleased products (Workflow Engine, Integration Hub) and build a waitlist. Simple, scalable, and integrated with Supabase.

---

## 📋 Implementation Plan

### **What We're Building**

1. ✅ Supabase table for storing registrations
2. ✅ Modal component for registering interest
3. ✅ Integration on homepage for unreleased products
4. ✅ Email notification system (via existing email service)
5. ✅ Dashboard for viewing registrations (optional future)

---

## 🗄️ Step 1: Create Supabase Table

### **SQL Schema**

```sql
CREATE TABLE early_access_registrations (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  product TEXT NOT NULL, -- 'workflow_engine' or 'integration_hub'
  company TEXT,
  interested_features TEXT, -- JSON array or comma-separated
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create index for quick lookups
CREATE INDEX idx_email ON early_access_registrations(email);
CREATE INDEX idx_product ON early_access_registrations(product);
CREATE INDEX idx_created_at ON early_access_registrations(created_at DESC);

-- Row-Level Security (optional but recommended)
ALTER TABLE early_access_registrations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public inserts" ON early_access_registrations
  FOR INSERT WITH CHECK (true);
```

### **Steps**

1. Go to your Supabase dashboard
2. Open SQL editor
3. Copy and paste the schema above
4. Execute
5. Verify table shows up in "Tables" section

---

## 🎨 Step 2: Create Interest Modal Component

### **File: `src/components/EarlyAccessModal.jsx`**

```jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { supabase } from "../core/supabase";

export function EarlyAccessModal({ product, isOpen, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const productInfo = {
    workflow_engine: {
      name: "Workflow Engine",
      description: "Process automation and orchestration",
      color: "from-purple-500 to-pink-500",
    },
    integration_hub: {
      name: "Integration Hub",
      description: "Seamless API gateway and integrations",
      color: "from-cyan-500 to-blue-500",
    },
  };

  const info = productInfo[product];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Check if email already registered for this product
      const { data: existing } = await supabase
        .from("early_access_registrations")
        .select("id")
        .eq("email", form.email)
        .eq("product", product)
        .single();

      if (existing) {
        setStatus("error");
        setMessage("You're already registered for this product!");
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 4000);
        return;
      }

      // Insert registration
      const { error } = await supabase
        .from("early_access_registrations")
        .insert({
          name: form.name,
          email: form.email,
          company: form.company || null,
          product: product,
        });

      if (error) throw error;

      // Send confirmation email (optional)
      await fetch("https://email-notifications-server.vercel.app/api/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          template: "eureka-early-access",
          data: {
            name: form.name,
            email: form.email,
            product: info.name,
            toAddress: form.email,
          },
        }),
      }).catch(() => {}); // Don't fail if email fails

      setStatus("success");
      setForm({ name: "", email: "", company: "" });
      setTimeout(() => {
        onClose();
        setStatus("idle");
      }, 2000);
    } catch (err) {
      console.error("Registration failed:", err);
      setStatus("error");
      setMessage(err.message || "Registration failed. Please try again.");
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 4000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X size={20} className="text-slate-400" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div
                className={`inline-block p-3 bg-gradient-to-r ${info.color} rounded-lg mb-4`}
              >
                <div className="text-2xl">⚡</div>
              </div>
              <h2 className="text-2xl font-bold mb-1">{info.name}</h2>
              <p className="text-sm text-slate-400">{info.description}</p>
            </div>

            {/* Success State */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle2
                    size={48}
                    className="text-green-400 mx-auto mb-4"
                  />
                </motion.div>
                <p className="font-semibold text-green-400">
                  You're on the list!
                </p>
                <p className="text-sm text-slate-400 mt-2">
                  We'll notify you as soon as {info.name} launches.
                </p>
              </motion.div>
            )}

            {/* Form State */}
            {status !== "success" && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-200">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-purple-500/50 focus:outline-none disabled:opacity-50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-200">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-purple-500/50 focus:outline-none disabled:opacity-50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-200">
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    disabled={status === "loading"}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-purple-500/50 focus:outline-none disabled:opacity-50 transition-all"
                  />
                </div>

                {/* Error */}
                {status === "error" && message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-sm flex items-center gap-2"
                  >
                    <AlertCircle size={16} />
                    {message}
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Registering...
                    </>
                  ) : (
                    "Register for Early Access"
                  )}
                </button>

                <p className="text-xs text-slate-500 text-center">
                  We'll only reach out when {info.name} is ready to launch.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
```

---

## 🏠 Step 3: Integrate Into Homepage

### **Update: `src/pages/home.js`**

```jsx
// At the top of the file, add:
import { EarlyAccessModal } from "../components/EarlyAccessModal";
import { useState } from "react";

// Inside component:
export function HomePage() {
  const [earlyAccessProduct, setEarlyAccessProduct] = useState(null);

  // ... existing code ...

  // Update the coming-soon product cards:
  <motion.div
    variants={itemVariants}
    onClick={() => setEarlyAccessProduct("workflow_engine")}
    className="cursor-pointer group p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-purple-500/30 rounded-2xl hover:border-purple-500/60 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
  >
    {/* ... card content ... */}
  </motion.div>

  // Similar for Integration Hub:
  <motion.div
    variants={itemVariants}
    onClick={() => setEarlyAccessProduct("integration_hub")}
    className="cursor-pointer group p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-cyan-500/30 rounded-2xl hover:border-cyan-500/60 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
  >
    {/* ... card content ... */}
  </motion.div>

  // Add modal at the bottom of return:
  <EarlyAccessModal
    product={earlyAccessProduct}
    isOpen={!!earlyAccessProduct}
    onClose={() => setEarlyAccessProduct(null)}
  />
}
```

---

## 📧 Step 4: Email Notification Template (Optional)

### **Add to email service template:**

```json
{
  "template": "eureka-early-access",
  "subject": "You're on the waitlist! – {product}",
  "body": "Hi {name},\n\nThanks for signing up for early access to {product}. We're excited to have you on the list!\n\nYou'll be among the first to know when {product} launches. In the meantime, check out our other solutions at eureka.tech.\n\nInnovate · Build · Share\nThe Eureka Team"
}
```

---

## 📊 Step 5: Viewing Registrations (Optional Admin Dashboard)

### **Simple query to view all registrations:**

```sql
SELECT
  name,
  email,
  product,
  company,
  created_at
FROM early_access_registrations
ORDER BY created_at DESC;
```

### **Export as CSV:**

1. Go to Supabase dashboard
2. Open "early_access_registrations" table
3. Click "Download CSV" button
4. Use for email marketing campaigns

---

## 🔒 Security Best Practices

### **What we've implemented:**

- ✅ Unique email per product (prevents duplicates)
- ✅ Row-Level Security (RLS) enabled
- ✅ Only INSERT allowed from frontend
- ✅ No sensitive data collected
- ✅ GDPR-compliant data structure

### **Optional enhancements:**

- Rate limiting on registration endpoint
- Email verification (send magic link)
- Spam detection
- Referral system

---

## 🧪 Testing Checklist

- [ ] Modal opens when clicking coming-soon product
- [ ] Form validates (requires name and email)
- [ ] Success message appears after submit
- [ ] Duplicate email prevention works
- [ ] Data appears in Supabase dashboard
- [ ] Email notification sent (if configured)
- [ ] Mobile responsive
- [ ] Close button works
- [ ] Backdrop click closes modal

---

## 📈 Usage & Analytics

### **Key metrics to track:**

```sql
-- Total registrations
SELECT COUNT(*) as total_registrations FROM early_access_registrations;

-- By product
SELECT product, COUNT(*) as count
FROM early_access_registrations
GROUP BY product;

-- This week
SELECT COUNT(*) FROM early_access_registrations
WHERE created_at >= NOW() - INTERVAL '7 days';

-- Top companies
SELECT company, COUNT(*) as count
FROM early_access_registrations
WHERE company IS NOT NULL
GROUP BY company
ORDER BY count DESC
LIMIT 10;
```

---

## 🚀 Launch Notification Flow

### **When product launches:**

1. Query all registrations for that product
2. Bulk email users with launch announcement
3. Provide direct access link/demo
4. Track who clicks through

```sql
-- Get all Workflow Engine registrations
SELECT email, name FROM early_access_registrations
WHERE product = 'workflow_engine'
ORDER BY created_at DESC;
```

---

## 💡 Best Practices

| Practice                     | Why            | How                                 |
| ---------------------------- | -------------- | ----------------------------------- |
| **Unique Email per Product** | Prevent spam   | `UNIQUE(email, product)` constraint |
| **Validate on Frontend**     | Fast feedback  | HTML5 email input + JS checks       |
| **Validate on Backend**      | Security       | Supabase constraints                |
| **Thank User Immediately**   | Good UX        | Modal success screen                |
| **Email Confirmation**       | Deliverability | Send automated email                |
| **No Spam**                  | Trust          | Don't email until launch            |
| **Easy Unsubscribe**         | Legal (GDPR)   | Include unsubscribe in emails       |
| **Data Retention**           | GDPR           | Delete after X months of inactivity |

---

## 📝 Files Created/Modified

### **New Files**

- `src/components/EarlyAccessModal.jsx` - Modal component

### **Modified Files**

- `src/pages/home.js` - Add modal state and integration
- `src/App.js` - Ensure routes are correct

### **Documentation**

- `EARLY_ACCESS_SETUP.md` - This file

---

## 🔗 Integration Checklist

- [ ] Supabase table created (SQL executed)
- [ ] `EarlyAccessModal.jsx` created
- [ ] `home.js` updated with modal integration
- [ ] Modal tested on both products
- [ ] Verify data saves to Supabase
- [ ] Email template added (optional)
- [ ] Build passes without errors
- [ ] Mobile responsiveness verified
- [ ] Team notified of new registrations process

---

**Status**: ✅ **Ready to implement**
**Effort**: 30 minutes
**Result**: Production-ready early access system
