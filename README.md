# 👗 Loja Feminina - Sistema de Vendas

Um sistema completo de gerenciamento de vendas e despesas para lojas femininas, desenvolvido com **React** + **Vite** + **Tailwind CSS**.

## ✨ Funcionalidades

- ✅ **Registro de Vendas**: Adicione vendas com informações completas (produto, cliente, quantidade, valor, forma de pagamento e parcelamento)
- ✅ **Gerenciamento de Despesas**: Controle todas as suas despesas (aluguel, estoque, salários, utilidades, etc.)
- ✅ **Dashboard com KPIs**: Visualize o total de vendas, despesas e lucro líquido em tempo real
- ✅ **Histórico de Transações**: Consulte todas as vendas e despesas registradas
- ✅ **Exclusão de Registros**: Remova vendas e despesas facilmente
- ✅ **Interface Responsiva**: Design moderno e adaptável para todos os dispositivos
- ✅ **Validação de Formulários**: Garanta dados corretos antes de registrar

## 🚀 Como Executar

### Pré-requisitos
- Node.js (v14+)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/brunorgtr/Andr-a-Serpa.git
cd Andr-a-Serpa
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra seu navegador e acesse:
```
http://localhost:5173
```

## 📦 Dependências

- **React 18.2+**: Biblioteca JavaScript para interfaces de usuário
- **Vite 5+**: Build tool moderno e rápido
- **Tailwind CSS 3.3+**: Framework CSS utilitário
- **@tailwindcss/vite**: Plugin oficial do Tailwind para Vite
- **Lucide React**: Ícones SVG de alta qualidade

## 🏗️ Estrutura do Projeto

```
Andr-a-Serpa/
├── src/
│   ├── components/
│   │   └── LojaFemininaSystem.jsx    # Componente principal
│   ├── App.jsx                       # App wrapper
│   ├── App.css                       # Estilos da aplicação
│   ├── index.css                     # Estilos globais com Tailwind
│   └── main.jsx                      # Entrada da aplicação
├── index.html                        # HTML principal
├── vite.config.js                    # Configuração Vite
├── package.json                      # Dependências do projeto
└── README.md                         # Este arquivo
```

## 🎨 Design

O projeto utiliza um design moderno com:
- **Cores**: Rosa e branco como cores principais
- **Ícones**: Lucide React para ícones bonitos
- **Responsividade**: Layout grid que se adapta a diferentes tamanhos de tela
- **Animações**: Transições suaves e hover effects

## 💰 Funcionalidades Detalhadas

### Adicionar Venda
- Nome do Produto
- Nome do Cliente
- Quantidade
- Valor Unitário
- Forma de Pagamento (Dinheiro, Débito, Crédito, PIX)
- Parcelamento
- Data automática

### Adicionar Despesa
- Descrição
- Categoria (Aluguel, Estoque, Salários, Contas, Marketing, Transporte, Outro)
- Valor

### Dashboard
- **Total de Vendas**: Soma de todas as vendas registradas
- **Total de Despesas**: Soma de todas as despesas registradas
- **Lucro Líquido**: Diferença entre vendas e despesas

## 🔧 Build para Produção

Para gerar a versão otimizada:
```bash
npm run build
```

Para visualizar a versão de produção:
```bash
npm run preview
```

## 📱 Responsividade

O sistema é totalmente responsivo e funciona perfeitamente em:
- 📱 Dispositivos móveis
- 📊 Tablets
- 💻 Desktops

## 🎯 Próximos Passos (Sugestões de Melhoria)

- [ ] Implementar persistência de dados (LocalStorage ou banco de dados)
- [ ] Adicionar gráficos e relatórios
- [ ] Exportar dados em PDF/Excel
- [ ] Sistema de autenticação
- [ ] Integração com APIs de pagamento
- [ ] Dark mode
- [ ] Filtros avançados

## 📝 Licença

Este projeto é de código aberto e está disponível para uso pessoal e comercial.

## 👩‍💻 Autor

Desenvolvido com ❤️ para apoiar pequenas lojas femininas

---

**Dúvidas ou sugestões?** Abra uma issue no repositório!
