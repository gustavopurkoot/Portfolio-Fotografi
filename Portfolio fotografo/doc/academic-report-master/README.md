# Academic Report LaTeX Template

![ABNT Compliance](https://img.shields.io/badge/ABNT-Compliant-brightgreen)
![LaTeX](https://img.shields.io/badge/LaTeX-Template-blue)

A complete LaTeX template for academic reports following Brazilian standards (ABNT NBR 14724). Designed for undergraduate projects, research papers, and technical documentation.


📂 Estrutura do Projeto

PORTFOLIO-FOTOGRAFO/
├── doc/
│   └── academic-report-master/
│       ├── Chapters/          # Capítulos do documento
│       ├── Classes/           # Classes LaTeX personalizadas
│       ├── Figures/           # Figuras do documento
│       ├── Others/            # Arquivos auxiliares
│       ├── References/        # Referências bibliográficas
│       ├── a-report.tex       # Arquivo principal LaTeX
│       ├── a-report.bbl       # Arquivo de bibliografia compilada
│       └── ...                # Outros arquivos auxiliares LaTeX
├── Imagens/                  # Imagens para o portfolio
├── index.html                # Página principal do portfolio
├── script.js                 # JavaScript do site
├── style.css                 # Folha de estilos
└── README.md                 # Documentação do projeto
```

⚙️ Instalação

Linux (Ubuntu/Debian)
sudo apt install texlive-full abntex
sudo tlmgr install abntex2
```

Windows
1. Instale [MikTeX](https://miktex.org/)
2. Instale o pacote `abntex2` pelo MikTeX Console

🏗️ Como Compilar


# Compilação básica
pdflatex main.tex

# Compilação completa (com referências)
pdflatex main.tex && bibtex main && pdflatex main.tex && pdflatex main.tex
```

✨ Funcionalidades

✔ Formatação automática ABNT  
✔ Gerenciamento de referências bibliográficas  
✔ Listas de figuras e tabelas automáticas  
✔ Suporte a múltiplos arquivos para organização  
✔ Templates para elementos pré-textuais  

📝 Boas Práticas

1. Mantenha todas as figuras na pasta `Figuras/` (formato PDF ou PNG)
2. Organize as referências no arquivo `referencias.bib`
3. Use comandos `\input{}` para dividir o conteúdo
4. Adicione ao `.gitignore`:
   ```
   *.aux
   *.log
   *.out
   *.toc
   *.pdf
   ```

🤝 Como Contribuir
1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona xyz'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

📜 Licença
Distribuído sob licença MIT. Veja `LICENSE` para mais informações.

---

✉ **Dúvidas?** Contate: [gustavopurkoot04053357@gmail.com](mailto:gustavopurkoot04053357@gmail.com)
```
