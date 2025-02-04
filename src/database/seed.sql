insert into
    dishes (
        title,
        description,
        photo,
        price,
        section,
        section_title,
        enabled
    )
values
    -- Meals
    (
        'Strogonoff de Frango',
        'Frango em cubos cozido em um molho cremoso de creme de leite, ketchup e mostarda, acompanhado de batata palha e arroz branco.',
        'strogonoff_frango.png',
        32.9,
        'meals',
        'Refeições',
        1
    ),
    (
        'Panqueca de Carne',
        'Panquecas macias recheadas com carne moída temperada e cobertas com molho de tomate caseiro e queijo gratinado.',
        'panqueca_carne.png',
        27.9,
        'meals',
        'Refeições',
        1
    ),
    (
        'Camarão ao Alho e Óleo',
        'Camarões salteados no azeite de oliva com alho dourado, ervas frescas e um toque de pimenta. Simples e delicioso.',
        'camarao_alho_oleo.png',
        39.9,
        'meals',
        'Refeições',
        1
    ),
    -- Main Dishes
    (
        'Picanha Grelhada',
        'Corte suculento de picanha grelhada na brasa, servido com farofa, arroz branco e vinagrete.',
        'picanha_grelhada.png',
        59.9,
        'main_dishes',
        'Pratos Principais',
        1
    ),
    (
        'Tilápia ao Molho de Ervas',
        'Filé de tilápia grelhado e regado com um delicado molho de ervas frescas, acompanhado de legumes salteados.',
        'tilapia_ervas.png',
        42.9,
        'main_dishes',
        'Pratos Principais',
        1
    ),
    (
        'Escondidinho de Carne Seca',
        'Delicioso escondidinho de carne seca desfiada, coberto com um purê de mandioca cremoso e queijo gratinado.',
        'escondidinho_carne_seca.png',
        34.9,
        'main_dishes',
        'Pratos Principais',
        1
    ),
    -- drinks
    (
        'Suco de Abacaxi com Hortelã',
        'Refrescante combinação de abacaxi natural com o toque aromático de hortelã. Ideal para acompanhar qualquer refeição.',
        'suco_abacaxi_hortela.png',
        10.9,
        'drinks',
        'Bebidas',
        1
    ),
    (
        'Suco Detox Verde',
        'Mistura saudável de couve, maçã, limão e gengibre, perfeita para revitalizar o seu dia.',
        'suco_detox_verde.png',
        12.9,
        'drinks',
        'Bebidas',
        1
    ),
    (
        'Suco de Manga',
        'Suco doce e cremoso de manga, feito com frutas selecionadas. Um clássico tropical que agrada a todos.',
        'suco_manga.png',
        9.9,
        'drinks',
        'Bebidas',
        1
    );

INSERT INTO tags (name, dish_id)
SELECT 'Frango', id FROM dishes WHERE title = 'Strogonoff de Frango'
UNION ALL
SELECT 'Creme de Leite', id FROM dishes WHERE title = 'Strogonoff de Frango'
UNION ALL
SELECT 'Batata Palha', id FROM dishes WHERE title = 'Strogonoff de Frango'
UNION ALL
SELECT 'Carne Moída', id FROM dishes WHERE title = 'Panqueca de Carne'
UNION ALL
SELECT 'Queijo', id FROM dishes WHERE title = 'Panqueca de Carne'
UNION ALL
SELECT 'Molho de Tomate', id FROM dishes WHERE title = 'Panqueca de Carne'
UNION ALL
SELECT 'Camarão', id FROM dishes WHERE title = 'Camarão ao Alho e Óleo'
UNION ALL
SELECT 'Alho', id FROM dishes WHERE title = 'Camarão ao Alho e Óleo'
UNION ALL
SELECT 'Azeite de Oliva', id FROM dishes WHERE title = 'Camarão ao Alho e Óleo'
UNION ALL
SELECT 'Picanha', id FROM dishes WHERE title = 'Picanha Grelhada'
UNION ALL
SELECT 'Farofa', id FROM dishes WHERE title = 'Picanha Grelhada'
UNION ALL
SELECT 'Vinagrete', id FROM dishes WHERE title = 'Picanha Grelhada'
UNION ALL
SELECT 'Tilápia', id FROM dishes WHERE title = 'Tilápia ao Molho de Ervas'
UNION ALL
SELECT 'Molho de Ervas', id FROM dishes WHERE title = 'Tilápia ao Molho de Ervas'
UNION ALL
SELECT 'Legumes', id FROM dishes WHERE title = 'Tilápia ao Molho de Ervas'
UNION ALL
SELECT 'Carne Seca', id FROM dishes WHERE title = 'Escondidinho de Carne Seca'
UNION ALL
SELECT 'Purê de Mandioca', id FROM dishes WHERE title = 'Escondidinho de Carne Seca'
UNION ALL
SELECT 'Queijo Gratinado', id FROM dishes WHERE title = 'Escondidinho de Carne Seca'
UNION ALL
SELECT 'Abacaxi', id FROM dishes WHERE title = 'Suco de Abacaxi com Hortelã'
UNION ALL
SELECT 'Hortelã', id FROM dishes WHERE title = 'Suco de Abacaxi com Hortelã'
UNION ALL
SELECT 'Refrescante', id FROM dishes WHERE title = 'Suco de Abacaxi com Hortelã'
UNION ALL
SELECT 'Couve', id FROM dishes WHERE title = 'Suco Detox Verde'
UNION ALL
SELECT 'Gengibre', id FROM dishes WHERE title = 'Suco Detox Verde'
UNION ALL
SELECT 'Limão', id FROM dishes WHERE title = 'Suco Detox Verde'
UNION ALL
SELECT 'Manga', id FROM dishes WHERE title = 'Suco de Manga'
UNION ALL
SELECT 'Doce', id FROM dishes WHERE title = 'Suco de Manga'
UNION ALL
SELECT 'Tropical', id FROM dishes WHERE title = 'Suco de Manga';