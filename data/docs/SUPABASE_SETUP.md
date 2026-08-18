# Nexora Mobile — Supabase Setup

The final UI can run immediately with LocalStorage.

For real multi-device data sharing between:
- customer phone,
- manager laptop,
- POS,
- team members,

connect Supabase before production/demo across multiple devices.

## 1. Create a Supabase project

Create a free Supabase project and open the SQL Editor.

## 2. Run the schema

Copy the SQL from:

`supabase/schema.sql`

and run it in the Supabase SQL Editor.

## 3. Front-end credentials

Use only the public Project URL and public anon/publishable key in the browser.

Never put a Supabase service-role key in this repository.

## 4. Why this is still LocalStorage by default

This ZIP does not contain the user's own Supabase Project URL/key, so it cannot connect to a specific cloud database automatically.

The current LocalStorage mode is useful for UI and workflow testing on one browser/device.

## 5. Order recovery

The customer now has:
- Order success page,
- Copy Order ID button,
- recent-order recovery by phone number on the same device.

After Supabase is connected, the same phone-number lookup can be changed to query shared cloud orders so it also works from another device.


### Expenses
The final schema also includes a simple `expenses` table for store operating costs and net-profit reporting.
