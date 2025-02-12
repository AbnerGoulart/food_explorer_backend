insert into
    sections (
        name,
        label
    )
values
    (
        'meals',
        'Refeições'
    ),
    (
        'desserts',
        'Sobremesas'
    ),
    (
        'drinks',
        'Bebidas'
    );

insert into
    dishes (
        title,
        description,
        photo,
        price,
        section_id,
        enabled
    )
values
    -- Meals
    (
        'Salada Ravanello',
        'Rabanetes, folhas verdes e molho adridoce salpicados com gergelim.',
        'salada-ravanello.png',
        49.97,
        (select id from sections where label = 'Refeições' limit 1),
        1
    ),
    (
        'Spaguetti Gambe',
        'Massa fresca com camarões e pesto.',
        'spaguetti-gambe.png',
        79.97,
        (select id from sections where label = 'Refeições' limit 1),
        1
    ),
    (
        'Torradas de Parma',
        'Presunto de parma e rúcula em um pão com fermentação natural.',
        'torradas-de-parma.png',
        25.97,
        (select id from sections where label = 'Refeições' limit 1),
        1
    ),
    (
        'Salada Molla',
        'Massa fresca com camarões e pesto.',
        'salada-molla.png',
        79.97,
        (select id from sections where label = 'Refeições' limit 1),
        1
    ),
    -- Desserts
    (
        'Prugna Pie',
        'Torta de ameixa com massa amanteigada, polvilho em açúcar.',
        'prugna-pie.png',
        79.97,
        (select id from sections where label = 'Sobremesas' limit 1),
        1
    ),
    (
        'Peachy pastrie',
        'Delicioso folheado de pêssego com folhas de hortelã.',
        'peachy-pastrie.png',
        32.97,
        (select id from sections where label = 'Sobremesas' limit 1),
        1
    ),
    (
        'Macarons',
        'Farinha de amêndoas, manteiga, claras e açúcar.',
        'macarons.png',
        79.97,
        (select id from sections where label = 'Sobremesas' limit 1),
        1
    ),
    (
        'Bolo de damasco',
        'Damascos frescos em uma massa sem glúten.',
        'bolo-de-damasco.png',
        19.97,
        (select id from sections where label = 'Sobremesas' limit 1),
        1
    ),
    -- Drinks
    (
        'Espresso',
        'Café cremoso feito na temperatura e pressões perfeitas.',
        'espresso.png',
        15.97,
        (select id from sections where label = 'Bebidas' limit 1),
        1
    ),
    (
        'Suco de maracujá',
        'Suco de maracujá gelado, cremoso, docinho.',
        'suco-de-maracuja.png',
        13.97,
        (select id from sections where label = 'Bebidas' limit 1),
        1
    ),
    (
        'Tè d''autunno',
        'Chá de anis, canela e limão. Sinta o outono italiano.',
        'te-dautunno.png',
        19.97,
        (select id from sections where label = 'Bebidas' limit 1),
        1
    ),
    (
        'Pomo bourbon',
        'Maçã, whisky, canela. On the rocks.',
        'pomo-bourbon.png',
        79.97,
        (select id from sections where label = 'Bebidas' limit 1),
        1
    );

INSERT INTO tags (name, dish_id)
SELECT 'Salada', id FROM dishes WHERE title = 'Salada Ravanello'
UNION ALL
SELECT 'Vegano', id FROM dishes WHERE title = 'Salada Ravanello'
UNION ALL
SELECT 'Fresco', id FROM dishes WHERE title = 'Salada Ravanello'
UNION ALL
SELECT 'Massa', id FROM dishes WHERE title = 'Spaguetti Gambe'
UNION ALL
SELECT 'Camarão', id FROM dishes WHERE title = 'Spaguetti Gambe'
UNION ALL
SELECT 'Pesto', id FROM dishes WHERE title = 'Spaguetti Gambe'
UNION ALL
SELECT 'Presunto Parma', id FROM dishes WHERE title = 'Torradas de Parma'
UNION ALL
SELECT 'Rúcula', id FROM dishes WHERE title = 'Torradas de Parma'
UNION ALL
SELECT 'Artesanal', id FROM dishes WHERE title = 'Torradas de Parma'
UNION ALL
SELECT 'Salada', id FROM dishes WHERE title = 'Salada Molla'
UNION ALL
SELECT 'Camarão', id FROM dishes WHERE title = 'Salada Molla'
UNION ALL
SELECT 'Pesto', id FROM dishes WHERE title = 'Salada Molla'
UNION ALL
SELECT 'Torta', id FROM dishes WHERE title = 'Prugna Pie'
UNION ALL
SELECT 'Ameixa', id FROM dishes WHERE title = 'Prugna Pie'
UNION ALL
SELECT 'Doce', id FROM dishes WHERE title = 'Prugna Pie'
UNION ALL
SELECT 'Folheado', id FROM dishes WHERE title = 'Peachy pastrie'
UNION ALL
SELECT 'Pêssego', id FROM dishes WHERE title = 'Peachy pastrie'
UNION ALL
SELECT 'Hortelã', id FROM dishes WHERE title = 'Peachy pastrie'
UNION ALL
SELECT 'Doce', id FROM dishes WHERE title = 'Macarons'
UNION ALL
SELECT 'Amêndoas', id FROM dishes WHERE title = 'Macarons'
UNION ALL
SELECT 'Gourmet', id FROM dishes WHERE title = 'Macarons'
UNION ALL
SELECT 'Bolo', id FROM dishes WHERE title = 'Bolo de damasco'
UNION ALL
SELECT 'Damasco', id FROM dishes WHERE title = 'Bolo de damasco'
UNION ALL
SELECT 'Sem Glúten', id FROM dishes WHERE title = 'Bolo de damasco'
UNION ALL
SELECT 'Café', id FROM dishes WHERE title = 'Espresso'
UNION ALL
SELECT 'Cremoso', id FROM dishes WHERE title = 'Espresso'
UNION ALL
SELECT 'Intenso', id FROM dishes WHERE title = 'Espresso'
UNION ALL
SELECT 'Suco', id FROM dishes WHERE title = 'Suco de maracujá'
UNION ALL
SELECT 'Maracujá', id FROM dishes WHERE title = 'Suco de maracujá'
UNION ALL
SELECT 'Doce', id FROM dishes WHERE title = 'Suco de maracujá'
UNION ALL
SELECT 'Chá', id FROM dishes WHERE title = 'Tè d''autunno'
UNION ALL
SELECT 'Anis', id FROM dishes WHERE title = 'Tè d''autunno'
UNION ALL
SELECT 'Canela', id FROM dishes WHERE title = 'Tè d''autunno'
UNION ALL
SELECT 'Whisky', id FROM dishes WHERE title = 'Pomo bourbon'
UNION ALL
SELECT 'Maçã', id FROM dishes WHERE title = 'Pomo bourbon'
UNION ALL
SELECT 'Canela', id FROM dishes WHERE title = 'Pomo bourbon';