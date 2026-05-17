-- OPCIONAL: rode este SQL se quiser cadastrar alguns produtos iniciais no Supabase.
-- Se já tiver produtos iguais, pode criar duplicados.

insert into public.products (nome, preco, imagem, categoria, "desc", tag, status, promocao, lancamento, tamanhos)
values
('Camisa Vermelha Premium', 129.90, 'imagens/camisa-vermelha.png', 'camisas', 'Camisa masculina vermelha com caimento premium.', 'Premium', 'disponivel', false, true, 'P, M, G, GG'),
('Tênis Casual Branco', 219.90, 'imagens/tenis-branco.png', 'calcados', 'Tênis casual moderno para compor looks elegantes.', 'Novo', 'disponivel', false, true, '38, 39, 40, 41, 42'),
('Calças Premium', 139.90, 'imagens/calcas.png', 'calcas', 'Calças masculinas em várias cores.', 'Mais vendido', 'disponivel', false, false, '38, 40, 42, 44'),
('Calça Preta Slim', 139.90, 'imagens/calcapreta.png', 'calcas', 'Calça preta com visual elegante e versátil.', 'Clássico', 'disponivel', false, false, '38, 40, 42, 44'),
('Look Vinho Premium', 299.90, 'imagens/lookvinho.png', 'looks', 'Conjunto vinho elegante e marcante.', 'Premium', 'disponivel', false, true, 'P, M, G, GG'),
('Bonés Premium', 79.90, 'imagens/bones.png', 'acessorios', 'Bonés em várias cores para completar seu visual.', 'Acessório', 'disponivel', false, false, 'Único');
