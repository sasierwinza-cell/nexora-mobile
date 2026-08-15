# Nexora Mobile — GitHub-ready Final Version

Nexora Mobile is a phone-first e-commerce + POS + inventory + delivery + IMEI/warranty management project.

## Current technology
- HTML5
- CSS3
- Vanilla JavaScript
- LocalStorage demo adapter
- Supabase-ready PostgreSQL schema included in `supabase/schema.sql`

## Run locally
Use VS Code **Live Server** and open `index.html`.

## Manager demo login
- Email: `admin@nexora.local`
- Password: `123456`

## Customer flow
Home → Brand Showroom / Phones → Product Detail → Compare / Wishlist → Cart → Checkout → KBZPay/WavePay proof → My Orders

## Admin flow
Dashboard → Payment Verification → Online Orders → Inventory → Delivery → IMEI/Warranty → Reports

## POS flow
Search product → Add to current sale → Cash / KBZPay / WavePay → optional IMEI → Complete Sale → stock reduces immediately

## Stock rules
- Pending online order: stock is not reserved.
- Confirmed / Packing / Rider Assigned / Out for Delivery: stock is reserved.
- Cancelled or rejected workflow can release reservation.
- POS sale: physical stock decreases immediately.
- Low-stock alert: available stock <= 5.

## Product data
Apple, Samsung and vivo contain more demo models. Supporting brands contain around five models each.

## Important
The frontend currently uses LocalStorage for easy classroom demo and testing on one browser.
For real shared phone/laptop data, connect Supabase using the included schema and replace the LocalStorage adapter in `js/core/db.js` with Supabase queries.


## FINAL-FINAL GitHub version

This build includes:
- premium customer navigation,
- showroom-style Phones page,
- Payment Verification reject fix,
- redesigned Sales Intelligence reports,
- dashboard hover interactions,
- Order Success page with Copy Order ID,
- recent-order recovery by phone number on the same device,
- Admin → View Store shortcuts,
- readable line-by-line HTML/CSS/JavaScript.

### Database note

The included UI runs in LocalStorage mode immediately.

For true shared customer-phone ↔ manager-laptop data, connect your own Supabase project using `supabase/schema.sql`.

See `docs/SUPABASE_SETUP.md`.


## FINAL LOCKED FEATURES

This GitHub base contains the final discussed feature set:

- Premium showroom customer UI
- Apple / Samsung / vivo expanded phone selection
- Supporting phone brands
- Expanded accessories:
  Headphones, Speakers, Chargers, Power Banks, Smart Watches and More Accessories
- Variant-aware RAM / Storage / Color
- Variant price and stock changes instantly when selected
- Out-of-stock variant disabling
- Admin-controlled discounts
- Admin-controlled free gifts
- Payment Settings for KBZPay / WavePay owner/shop phone numbers
- Separate Payment Proof upload section
- Payment Verification with working Reject action
- POS variant selection
- POS manual discount
- POS receipt generated immediately after sale
- IMEI linked to sold phone, sale ID and warranty expiry
- Variant-aware Inventory / Reserved / Available stock
- Delivery / Rider tracking
- Premium Reports dashboard
- Order Success + Copy Order ID
- Same-device recent order recovery by phone number
- Admin View Store shortcut
- Contact Us
- Supabase-ready schema

The code is intentionally formatted line-by-line for team editing.


## FINAL UI/UX LOCK

This base has been redesigned to avoid repetitive, overlong pages:

- Apple, Samsung and vivo now use deliberately different showroom compositions.
- Only one main brand is open at a time.
- Other phone brands use a compact horizontal selector + model rail.
- Accessories open one category at a time instead of one endless catalog.
- Payment Settings uses premium wallet cards, active/inactive switches, copy number and modal editing.
- Dashboard is now task-focused: revenue, pending orders, payment proof, monthly expenses, low-stock and recent activity.
- POS keeps automatic stock deduction and instant receipt generation, with a cleaner counter layout.
- Inventory keeps variant-level Total / Reserved / Available stock with a compact command area.
- Reports now include Revenue, Expenses and Net Profit alongside POS vs Online, best sellers and low stock.
- Basic Expenses module added: category, amount, date, note, delete and report integration.
- Full accounting features such as tax/payables are intentionally out of scope.

Feature behavior from the previous final base is preserved.
