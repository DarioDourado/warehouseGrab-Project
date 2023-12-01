⁡⁢⁢⁢warehouseGrab-Project⁡​
Projecto Backend


    ​‌‍​‌‌‍Regras de Negócio​​

    ​‌‍‌Utilizadores​
[x] O utilizador não deve poder registar-se com um email já existente ou duplicado.
[x] O Utilizador deve de necessitar de se autenticar para visualizar o seu perfil.


    ​‌‍‌Produtos - CRUD​
[x]	Deve ser possível de Visualizar Lista com todos os produtos.
[x]	⁡⁣⁣⁢Deve ser possível entrar nos detalhes do produto selecionado (Front-end) (preparado para entrar atravez de ID)⁡.
[x]	Deve ser possível editar um produto já criado.
[x]	Deve ser possível adicionar Produtos á lista de produtos.
[x]	Deve ser possível remover Produtos da lista de produtos.
[x]	Não deve ser possível criar um producto com um SKU já existente nada tabela de produtos.
[x]	Não deve ser possível criar um producto com um UPC já existente nada tabela de produtos.
[x]	Não deve ser possível criar um producto na tabela de produtos sem UPC (Universal Product Code).
[x]	Não deve ser possível criar um producto na tabela de produtos sem SKU (Internal Code).
[x]	Deve ser possível escolher se um produto dá entrada em formato pack ou individual.
[x]	Deve ser possível pesquisar um produto através do seu UPC e obter todos os dados referentes ao mesmo.
[x]	Deve ser possível pesquisar um produto através do seu ID e obter todos os dados referentes ao mesmo.

	Deve ser possível visualizar os seguintes alertas de produtos:
[ ]	⁡⁢⁢⁢Verde⁡ – ⁡⁣⁣⁢Tudo OK com o produto, definida no campo próprio. Esta quantidade é definida em campo próprio na criação de produtos (Front-end) (Condição dada ao front-end, info em QSR, Alerta 1 e alerta 2). (Front-end)⁡
[ ]	⁡⁣⁣⁢Amarelo⁡ / Alerta 1 – ⁡⁣⁣⁢Atenção, produto deverá de ser encomendado. Este alerta é definido em campo próprio na criação de produtos, ou caso não definida pelo utilizador, quando os valores de stock se encontram 30% abaixo da QMS. (Condição dada ao front-end, info em QSR, Alerta 1 e alerta 2). (Front-end)⁡
[ ]	⁡⁢⁣⁢Vermelho⁡ / Alerta 2 – ⁡⁣⁣⁢Rotura de Stock, brevemente este produto ficará esgotado. Este alerta é definido em campo próprio na criação de produtos, ou caso não definida pelo utilizador, quando os valores de stock se encontram 60% abaixo da QMS. (Condição dada ao front-end, info em QSR, Alerta 1 e alerta 2). (Front-end)⁡

    ​‌‍‌Fornecedores - CRUD​
[x]	Deve ser possível visualizar Lista com Todos os Fornecedores.
[x]	Deve ser possível Criar um Fornecedor.
[x]	Não Deve ser possível Criar um Fornecedor com um email ou NIF já existentes na Base de Dados.
[x]	⁡⁣⁣⁢Deve ser possível entrar nos detalhes do fornecedor selecionado (Front-end) (preparado para entrar atravez de ID)⁡.
[x]	Deve ser possível editar um fornecedor.
[x]	Deve ser possível adicionar um fornecedor.
[x]	Deve ser possível remover qualquer fornecedor.

    ​‌‍‌Utilizador - CRUD​
[x]	Deve ser possível visualizar Lista com Todos os utilizador.
[x]	Deve ser possível Criar um utilizador.
[x]	Não Deve ser possível Criar um utilizador com um email já existente na Base de Dados.
[x]	⁡⁣⁣⁢Deve ser possível entrar nos detalhes do utilizador selecionado (Front-end) (preparado para entrar atravez de ID)⁡.
[x]	Deve ser possível editar um utilizador.
[x]	Deve ser possível adicionar um utilizador.
[x]	Deve ser possível remover qualquer utilizador.
[x]	Deve ser possível o utilizador autentificar-se.
[x]	Deve ser possível receber os dados profile apenas se o utilizador estiver autenticado.

    ​‌‍‌Tabela de Impostos - CRUD​
[x]	Deve ser possível visualizar Lista com todos os dados da tabela de impostos.
[x]	⁡⁣⁣⁢Deve ser possível entrar nos detalhes do imposto selecionado (Front-end) (preparado para entrar atravez de ID).⁡
[x]	Deve ser possível editar um detalhe de impostos.
[x]	Deve ser possível adicionar um detalhe de impostos.
[x]	Deve ser possível remover qualquer um impostos.

    ​‌‍‌Categoria de Produtos - CRUD​
[x]	Deve ser possível visualizar Lista com todas as categorias de produto.
[x]	⁡⁣⁣⁢Deve ser possível entrar nos detalhes do imposto selecionado (Front-end) (preparado para entrar atravez de ID)⁡.
[x]	Deve ser possível editar um detalhe de categorias de produto.
[x]	Deve ser possível adicionar um detalhe de categorias de produto.
[x]	Deve ser possível remover qualquer categorias de produto.

    ​‌‍‌Postos - CRUD​
[x]	Deve ser possível de Visualizar a lista da totalidade de postos.
[x]	⁡⁣⁣⁢Deve de ser possível entrar no posto selecionado (Front-end) (preparado para entrar atravez de ID)⁡.
[x]	Deve ser possível editar um posto já criado.
[x]	Deve ser possível criar um posto.
[x]	Deve ser possível remover um posto.

    ​‌‍‌Dashboard​
Deve ser possível de Visualizar os seguintes resumos.
[ ]	Alertas de Stock Tipo 1.
[ ]	Alertas de Stock Tipo 2.
[ ]	Lista total de Produtos e Respetivos Stocks.


    ​‌‍‌Stock Control​
Stock control será responsável pelo controlo das quantidades de entradas e saídas de stock dos diversos postos.
[x] Deve de ser possível introduzir o código de barras UPC e o sistema retornar a informação referente ao produto.
[ ]	⁡⁣⁣⁢Deve de ser possível ter de um modo visual rápido de status do produto, através de alteração de cor. (Front-end)⁡
[x]	Deve de ser possível dar entrada de um produto em stock.
[x]	Deve de ser possível dar saida de um produto de stock.
[x]	Deve de ser possível dar entrada de um produto num determinado local Storage.
[x]	Deve de ser possível dar saida de um produto num determinado local Storage.
[x]	Deve de ser possível apagar qualquer movimento (entrada / saída) um produto em stock.
[x]	Deve de ser possível editar qualquer movimento (entrada / saída) um produto em stock.
[x]	Deve de ser possível obter uma lista de movimentos de stock.
[ ]	Deve de ser possível obter um resumo de entradas e saidas de qualquer produto.


    Requisitos não funcionais
[x]	Os dados da aplicação precisam de estar persistidos numa base de dados PostgresSQL
[ ]	Todas as listas precisam de estar paginadas com 30 registos
[x]	O Utilizador deve de ser identificado por um JWT (JSON Web Token)
