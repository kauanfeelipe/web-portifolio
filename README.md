# 🚀 Portfólio Pessoal - Kauan Felipe

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **Portfólio pessoal desenvolvido com React.js, Vite e Tailwind CSS para apresentar projetos, habilidades e experiência profissional.**

## 📖 Sobre o Projeto

Este portfólio foi desenvolvido para apresentar minha jornada como desenvolvedor, exibindo projetos desenvolvidos, formação acadêmica e habilidades técnicas. O design é responsivo e moderno, com foco na experiência do usuário e apresentação profissional.

### ✨ Características Principais

- 🎨 **Design Responsivo** - Adaptável a todos os dispositivos
- ⚡ **Performance Otimizada** - Construído com Vite para máxima velocidade
- 🎭 **Animações Suaves** - Framer Motion e TypeAnimation para interações
- 📱 **Mobile-First** - Carrossel Swiper para dispositivos móveis
- 🎯 **SEO Friendly** - Estrutura semântica e meta tags otimizadas
- 🌙 **Tema Escuro** - Interface moderna com tema slate

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- **React.js 19.1.1** - Biblioteca JavaScript para interfaces
- **Vite 7.1.2** - Build tool e dev server ultra-rápido
- **Tailwind CSS 3.4.17** - Framework CSS utilitário

### **Bibliotecas**
- **Framer Motion 12.23.12** - Animações e transições
- **React Type Animation 3.2.0** - Efeitos de digitação
- **Swiper 11.2.10** - Carrossel responsivo

### **Ferramentas de Desenvolvimento**
- **ESLint 9.33.0** - Linting de código
- **PostCSS 8.5.6** - Processamento CSS
- **Autoprefixer 10.4.21** - Prefixos CSS automáticos

## 🚀 Como Executar o Projeto

### **Pré-requisitos**
- Node.js (versão 18 ou superior)
- npm ou yarn

### **Instalação**

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/meu-portfolio-novo.git
cd meu-portfolio-novo
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em modo de desenvolvimento**
```bash
npm run dev
```

4. **Abra no navegador**
```
http://localhost:5173
```

### **Scripts Disponíveis**

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Constrói para produção
npm run preview      # Preview da build de produção
npm run lint         # Executa ESLint
npm run deploy       # Deploy para GitHub Pages
```

## 📁 Estrutura do Projeto

```
meu-portfolio-novo/
├── public/                 # Arquivos estáticos
│   ├── img/               # Imagens dos projetos
│   ├── minha-foto.png     # Foto de perfil
│   └── curri_kauanzera.pdf # Currículo
├── src/
│   ├── components/        # Componentes React
│   │   ├── Navbar.jsx     # Navegação principal
│   │   ├── Hero.jsx       # Seção de apresentação
│   │   ├── Projects.jsx   # Lista de projetos
│   │   ├── ProjectCard.jsx # Card individual de projeto
│   │   ├── About.jsx      # Seção de formação
│   │   ├── Contact.jsx    # Seção de contato
│   │   └── Footer.jsx     # Rodapé
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Ponto de entrada
│   └── index.css          # Estilos globais
├── package.json           # Dependências e scripts
├── vite.config.js         # Configuração do Vite
├── tailwind.config.js     # Configuração do Tailwind
└── eslint.config.js       # Configuração do ESLint
```

## 🎯 Funcionalidades

### **Seções Principais**

1. **🏠 Hero** - Apresentação pessoal com foto e links sociais
2. **💼 Projetos** - Grid responsivo com carrossel mobile
3. **🎓 Formação** - Histórico acadêmico e habilidades
4. **📧 Contato** - Informações de contato e redes sociais

### **Recursos Técnicos**

- **Navegação Suave** - Scroll automático para seções
- **Menu Mobile** - Navegação responsiva com hambúrguer
- **Animações** - Transições suaves e efeitos visuais
- **Carrossel** - Swiper para visualização mobile de projetos
- **Links Externos** - Abertura em nova aba com segurança

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints otimizados:

- **Mobile**: < 768px - Layout em coluna única com carrossel
- **Tablet**: 768px - 1024px - Layout intermediário
- **Desktop**: > 1024px - Layout completo com grid de projetos

## 🚀 Deploy

### **GitHub Pages**
O projeto está configurado para deploy automático no GitHub Pages:

```bash
npm run deploy
```

### **Outras Plataformas**
- **Vercel**: Conecte o repositório para deploy automático
- **Netlify**: Arraste a pasta `dist` para deploy
- **Firebase Hosting**: Configure com `firebase.json`

## 🔧 Configurações

### **Vite**
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/web-portifolio/', // Ajuste conforme necessário
})
```

### **Tailwind CSS**
```javascript
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
}
```



## 👨‍💻 Autor

**Kauan Felipe**
- GitHub: [@kauanfeelipe](https://github.com/kauanfeelipe)
- LinkedIn: [kauanfeelipe](https://www.linkedin.com/in/kauanfeelipe/)
- Email: kauan_nup@outlook.com

## 🙏 Agradecimentos

- [React](https://reactjs.org/) - Biblioteca JavaScript
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Framer Motion](https://www.framer.com/motion/) - Animações
- [Swiper](https://swiperjs.com/) - Carrossel responsivo

---

⭐ **Se este projeto te ajudou, considere dar uma estrela!**
