document.addEventListener('DOMContentLoaded', function() {
  // Ativa a classe loaded para as animações
  document.documentElement.classList.add('loaded');
  
  // Configura as letras da palavra "Fotografia"
  document.querySelectorAll('.photography-letter').forEach((letter, index) => {
    letter.style.setProperty('--i', index);
    letter.style.transitionDelay = `${index * 0.05}s`;
  });

  // Efeito de hover no nome
  const nameContainer = document.querySelector('.name-container');
  if (nameContainer) {
    nameContainer.addEventListener('mousemove', (e) => {
      const rect = nameContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      nameContainer.style.setProperty('--mouse-x', `${x}px`);
      nameContainer.style.setProperty('--mouse-y', `${y}px`);
    });
  }

  // Menu mobile
  const menuToggle = document.createElement('button');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  document.body.appendChild(menuToggle);
  
  menuToggle.addEventListener('click', () => {
    document.querySelector('.floating-nav').classList.toggle('active');
    menuToggle.innerHTML = document.querySelector('.floating-nav').classList.contains('active') 
      ? '<i class="fas fa-times"></i>' 
      : '<i class="fas fa-bars"></i>';
  });

  // Filtro do portfólio
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = [];
  
  // Dados do portfólio
  const portfolioData = [
    {
      id: 1,
      title: "Mesa do Casamento",
      category: "casamento",
      image: "Imagens/mesa-do-casamento.jpg"
    },
    {
      id: 2,
      title: "Retrato em Preto e Branco",
      category: "retrato",
      image: "Imagens/retrato.jpg"
    },
    {
      id: 3,
      title: "Pôr do Sol Montanhoso",
      category: "paisagem",
      image: "Imagens/por-do-sol-montanhoso.jpg"
    },
    {
      id: 4,
      title: "Cerimônia de Casamento",
      category: "casamento",
      image: "Imagens/cerimonia-casamento.jpg"
    },
    {
      id: 5,
      title: "Retrato de Estúdio",
      category: "retrato",
      image: "Imagens/retrato-estudio.jpg"
    },
    {
      id: 6,
      title: "Floresta Nebulosa",
      category: "paisagem",
      image: "Imagens/floresta.jpg"
    },
    {
      id: 7,
      title: "Evento Corporativo",
      category: "evento",
      image: "Imagens/evento-corporativo.jpg"
    },
    {
      id: 8,
      title: "Noiva no Espelho",
      category: "casamento",
      image: "Imagens/noiva-espelho.jpg"
    },
    
    {
      id: 9,
      title: "Retrato Urbano",
      category: "retrato",
      image: "Imagens/retrato-urbano.jpg"
    }
  ];
  
  // Carrega os itens do portfólio
  function loadPortfolioItems() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    portfolioGrid.innerHTML = '';
    
    portfolioData.forEach(item => {
      const portfolioItem = document.createElement('div');
      portfolioItem.className = `portfolio-item ${item.category}`;
      portfolioItem.dataset.category = item.category;
      
      portfolioItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="portfolio-img">
        <div class="portfolio-overlay">
          <h3 class="portfolio-title">${item.title}</h3>
          <p class="portfolio-category">${item.category}</p>
        </div>
      `;
      
      portfolioGrid.appendChild(portfolioItem);
      portfolioItems.push(portfolioItem);
      
      // Adiciona evento de clique para o lightbox
      portfolioItem.addEventListener('click', () => {
        openLightbox(item.image, item.title, item.category);
      });
    });
  }
  
  // Filtra os itens do portfólio
  function filterPortfolio(category) {
    portfolioItems.forEach(item => {
      if (category === 'all' || item.dataset.category === category) {
        item.style.display = 'block';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        }, 50);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });
  }
  
  // Adiciona eventos aos botões de filtro
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      filterPortfolio(button.dataset.filter);
    });
  });
  
  // Lightbox
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox.querySelector('img');
  const lightboxTitle = lightbox.querySelector('.lightbox-title');
  const lightboxCategory = lightbox.querySelector('.lightbox-category');
  const closeLightbox = lightbox.querySelector('.close-lightbox');
  
  function openLightbox(imgSrc, title, category) {
    lightboxImg.src = imgSrc;
    lightboxTitle.textContent = title;
    lightboxCategory.textContent = category;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  function closeLightboxFunc() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
  
  closeLightbox.addEventListener('click', closeLightboxFunc);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightboxFunc();
    }
  });
  
  // Contador animado
  const statNumbers = document.querySelectorAll('.stat-number');
  
  function animateStats() {
    statNumbers.forEach(number => {
      const target = parseInt(number.dataset.count);
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      
      const counter = setInterval(() => {
        current += step;
        if (current >= target) {
          clearInterval(counter);
          current = target;
        }
        number.textContent = Math.floor(current);
      }, 16);
    });
  }
  
  // Observador de interseção para animações
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('about-stats')) {
          animateStats();
        }
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.about-stats, .service-card, .portfolio-item').forEach(el => {
    observer.observe(el);
  });
  
  // Scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Fecha o menu mobile se estiver aberto
        if (document.querySelector('.floating-nav').classList.contains('active')) {
          document.querySelector('.floating-nav').classList.remove('active');
          menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
      }
    });
  });
  
  // Efeito de scroll no header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      document.querySelector('.floating-nav').classList.add('scrolled');
    } else {
      document.querySelector('.floating-nav').classList.remove('scrolled');
    }
  });
  
  // Inicializa o portfólio
  loadPortfolioItems();
});