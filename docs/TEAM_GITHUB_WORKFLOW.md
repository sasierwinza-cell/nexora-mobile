# Team GitHub Workflow — 5 Members

## Recommended branches
- `main` — stable version only
- `feature/customer-ui`
- `feature/admin-pos`
- `feature/inventory-warranty`
- `feature/delivery-payment`
- `feature/database-testing`

## Daily workflow
1. Pull latest changes from `main`.
2. Work only in your assigned feature branch.
3. Commit small, clear changes.
4. Push your branch.
5. Open a Pull Request.
6. Leader reviews before merging to `main`.

## Avoiding conflicts
Do not let multiple members edit the same shared file at the same time without agreeing first.
Shared files include:
- `css/base.css`
- `js/core/db.js`
- `data/products.js`

## Suggested responsibility split
1. Leader — customer UI/UX and final integration
2. Member 2 — admin dashboard + POS
3. Member 3 — inventory + IMEI + warranty
4. Member 4 — delivery + payment + orders
5. Member 5 — Supabase + testing + deployment
