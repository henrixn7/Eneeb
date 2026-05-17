-- Execute no Supabase > SQL Editor.
-- Isso cria o bucket público para imagens dos produtos e libera upload/leitura.

insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do update set public = true;

create policy "Allow public read product images"
on storage.objects
for select
using (bucket_id = 'product-images');

create policy "Allow public upload product images"
on storage.objects
for insert
with check (bucket_id = 'product-images');

create policy "Allow public update product images"
on storage.objects
for update
using (bucket_id = 'product-images')
with check (bucket_id = 'product-images');

create policy "Allow public delete product images"
on storage.objects
for delete
using (bucket_id = 'product-images');
