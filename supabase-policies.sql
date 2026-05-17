-- Execute isto no Supabase em SQL Editor para liberar o site/painel.
-- ATENÇÃO: isso libera leitura/escrita pública usando a anon key.
-- É suficiente para teste/início, mas para produção o ideal é login admin real.

alter table public.products enable row level security;

create policy "Allow public read products"
on public.products
for select
using (true);

create policy "Allow public insert products"
on public.products
for insert
with check (true);

create policy "Allow public update products"
on public.products
for update
using (true)
with check (true);

create policy "Allow public delete products"
on public.products
for delete
using (true);
