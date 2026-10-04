// =============================================
// Momently – Main App Logic
// Navigation, Auth, Shared Components
// =============================================

// Global currency formatter
function formatPrice(amount) {
  if (amount === undefined || amount === null || isNaN(amount)) return '0₫';
  const num = Number(amount);
  return num.toLocaleString('vi-VN') + '₫';
}

// ---- Navbar Component ----
function renderNavbar(activePage) {
  const user = getUser();
  const nav = document.getElementById('navbar');
  if (!nav) return;

  const currentLang = getLang();

  nav.innerHTML = `
    <div class="navbar-inner">
      <a href="index.html" class="navbar-logo">
        <span class="logo-icon">✨</span>
        Momently<span class="logo-dot">.</span>
      </a>
      <nav class="navbar-nav" id="navMenu">
        <a href="index.html" class="${activePage === 'home' ? 'active' : ''}" data-i18n="nav_home">${t('nav_home')}</a>
        <a href="explore.html" class="${activePage === 'explore' ? 'active' : ''}" data-i18n="nav_explore">${t('nav_explore')}</a>
        <a href="vendors.html" class="${activePage === 'vendors' ? 'active' : ''}" data-i18n="nav_vendors">${t('nav_vendors')}</a>
        <a href="about.html" class="${activePage === 'about' ? 'active' : ''}" data-i18n="nav_about">${t('nav_about')}</a>
        ${user ? `<a href="profile.html" class="${activePage === 'profile' ? 'active' : ''}" data-i18n="nav_profile">${t('nav_profile')}</a>` : ''}
        ${user ? `<a href="#" class="mobile-auth-btn" style="display:none;" onclick="logout()" data-i18n="nav_logout">${t('nav_logout')}</a>` : `<a href="login.html" class="mobile-auth-btn" style="display:none;" data-i18n="nav_login">${t('nav_login')}</a>`}
      </nav>
      <div class="navbar-actions">
        <!-- Explicit Dual-Pill Language Switcher: 100% Clear & Active Highlighted -->
        <div class="lang-switch-pills" style="display:inline-flex;align-items:center;background:rgba(255,255,255,0.95);border:1.5px solid var(--color-border);border-radius:var(--radius-full);padding:2px;box-shadow:0 2px 6px rgba(0,0,0,0.06);margin-right:6px;">
          <button type="button" class="lang-pill-btn ${currentLang === 'vi' ? 'active' : ''}" data-lang="vi" onclick="setLang('vi'); renderNavbar('${activePage}'); renderFooter(); if(typeof onLangChange === 'function') onLangChange();" style="border:none;background:${currentLang === 'vi' ? 'linear-gradient(135deg, #0284c7, #ec4899)' : 'transparent'};color:${currentLang === 'vi' ? '#fff' : 'var(--color-secondary)'};font-size:11.5px;font-weight:700;padding:5px 12px;border-radius:var(--radius-full);cursor:pointer;transition:all 0.2s;box-shadow:${currentLang === 'vi' ? '0 2px 8px rgba(2,132,199,0.3)' : 'none'};" title="Chuyển toàn bộ sang Tiếng Việt">
            🇻🇳 Tiếng Việt
          </button>
          <button type="button" class="lang-pill-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en" onclick="setLang('en'); renderNavbar('${activePage}'); renderFooter(); if(typeof onLangChange === 'function') onLangChange();" style="border:none;background:${currentLang === 'en' ? 'linear-gradient(135deg, #0284c7, #ec4899)' : 'transparent'};color:${currentLang === 'en' ? '#fff' : 'var(--color-secondary)'};font-size:11.5px;font-weight:700;padding:5px 12px;border-radius:var(--radius-full);cursor:pointer;transition:all 0.2s;box-shadow:${currentLang === 'en' ? '0 2px 8px rgba(2,132,199,0.3)' : 'none'};" title="Switch entire website to English">
            🇬🇧 English
          </button>
        </div>

        ${user 
          ? `<div style="display:flex;align-items:center;gap:10px;">
               <a href="profile.html" class="btn btn-sm btn-secondary" style="display:inline-flex;align-items:center;gap:8px;text-decoration:none;" title="${currentLang === 'vi' ? 'Tài khoản & Lịch sử tìm kiếm' : 'Account & Saved Searches'}">
                 ${user.avatar && user.avatar.startsWith('http') 
                   ? `<img src="${user.avatar}" alt="" style="width:22px;height:22px;border-radius:50%;object-fit:cover;display:inline-block;vertical-align:middle;">` 
                   : `<span style="font-size:14px;line-height:1;">${(user.avatar && user.avatar.length <= 2) ? user.avatar : '👤'}</span>`}
                 <span style="font-weight:600;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${user.name || 'Tài khoản'}</span>
                 ${user.searches && user.searches.length ? `<span style="background:var(--color-primary);color:#fff;font-size:11px;padding:2px 7px;border-radius:10px;font-weight:600;">${user.searches.length}</span>` : ''}
               </a>
               <button class="btn btn-sm btn-outline" onclick="logout()" data-i18n="nav_logout">${t('nav_logout')}</button>
             </div>`
          : `<div style="display:flex;align-items:center;gap:8px;">
               <a href="login.html" class="btn btn-sm btn-primary navbar-auth-btn" data-i18n="nav_login">${t('nav_login')}</a>
             </div>`
        }
      </div>
      <button class="mobile-menu-btn" id="mobileMenuBtn" onclick="toggleMobileMenu()">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

  // Scroll effect
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });
}

function toggleMobileMenu() {
  const menu = document.getElementById('navMenu');
  const btn = document.getElementById('mobileMenuBtn');
  menu.classList.toggle('open');
  btn.classList.toggle('active');
  // Show mobile auth buttons
  document.querySelectorAll('.mobile-auth-btn').forEach(el => {
    el.style.display = menu.classList.contains('open') ? 'block' : 'none';
  });
}

// ---- Footer Component ----
function renderFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="navbar-logo">
            <span class="logo-icon">✨</span>
            Momently<span class="logo-dot">.</span>
          </div>
          <p data-i18n="footer_tagline">${t('footer_tagline')}</p>
          <div class="footer-social">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="TikTok">🎵</a>
            <a href="#" aria-label="Email">📧</a>
          </div>
        </div>
        <div>
          <h4 data-i18n="footer_quick_links">${t('footer_quick_links')}</h4>
          <ul>
            <li><a href="index.html" data-i18n="nav_home">${t('nav_home')}</a></li>
            <li><a href="explore.html" data-i18n="nav_explore">${t('nav_explore')}</a></li>
            <li><a href="vendors.html" data-i18n="nav_vendors">${t('nav_vendors')}</a></li>
            <li><a href="about.html" data-i18n="nav_about">${t('nav_about')}</a></li>
          </ul>
        </div>
        <div>
          <h4 data-i18n="footer_services">${t('footer_services')}</h4>
          <ul>
            <li><a href="explore.html?event=proposal" data-i18n="event_proposal">${t('event_proposal')}</a></li>
            <li><a href="explore.html?event=birthday" data-i18n="event_birthday">${t('event_birthday')}</a></li>
            <li><a href="explore.html?event=graduation" data-i18n="event_graduation">${t('event_graduation')}</a></li>
            <li><a href="explore.html?event=anniversary" data-i18n="event_anniversary">${t('event_anniversary')}</a></li>
            <li><a href="explore.html?event=farewell" data-i18n="event_farewell">${t('event_farewell')}</a></li>
          </ul>
        </div>
        <div>
          <h4 data-i18n="footer_contact">${t('footer_contact')}</h4>
          <ul>
            <li data-i18n="footer_address_hn">${t('footer_address_hn')}</li>
            <li data-i18n="footer_hotline">${t('footer_hotline')}</li>
            <li>✉️ nhitdnf14.38ftu@gmail.com</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span data-i18n="footer_rights">${t('footer_rights')}</span>
        <div class="footer-bottom-links">
          <a href="#" data-i18n="footer_privacy">${t('footer_privacy')}</a>
          <a href="#" data-i18n="footer_terms">${t('footer_terms')}</a>
        </div>
      </div>
    </div>
  `;
}

// ---- Auth System (localStorage mock) ----
function initDemoData() {
  if (!localStorage.getItem('momently_users')) {
    const demoUser = {
      id: 'u-demo',
      name: 'Nguyễn Yến Nhi',
      email: 'nhitdnf14.38ftu@gmail.com',
      phone: '0859062212',
      password: '123',
      searches: [
        {
          event: 'proposal',
          budget: '5to10',
          style: 'romantic',
          date: '2026-10-20',
          timestamp: new Date(Date.now() - 3600000 * 2).toISOString()
        },
        {
          event: 'birthday',
          budget: '10to20',
          style: 'bohemian',
          date: '2026-11-15',
          timestamp: new Date(Date.now() - 86400000).toISOString()
        }
      ],
      bookings: [
        {
          id: 'MMT-8821',
          packageId: 'pkg-001',
          packageName: 'Sunset Rooftop Proposal',
          packageNameVi: 'Cầu hôn Hoàng hôn Rooftop',
          total: 8500000,
          date: '2026-10-20',
          guests: 2,
          paymentMethod: 'momo',
          status: 'confirmed',
          createdAt: new Date(Date.now() - 86400000 * 3).toISOString()
        }
      ]
    };
    localStorage.setItem('momently_users', JSON.stringify([demoUser]));
  }
}
initDemoData();

function getUser() {
  const data = localStorage.getItem('momently_user');
  return data ? JSON.parse(data) : null;
}

function loginUser(email, password) {
  const users = JSON.parse(localStorage.getItem('momently_users') || '[]');
  let user = users.find(u => u.email.toLowerCase() === email.trim().toLowerCase());
  
  // Require account to exist on Momently
  if (!user) {
    return {
      error: getLang() === 'vi' 
        ? 'Tài khoản chưa tồn tại trên Momently. Vui lòng đăng ký tài khoản mới!' 
        : 'Account does not exist on Momently. Please sign up!'
    };
  } else if (user.password && user.password !== password) {
    return { error: getLang() === 'vi' ? 'Sai mật khẩu' : 'Incorrect password' };
  }

  localStorage.setItem('momently_user', JSON.stringify(user));
  return { success: true, user };
}

function registerUser(name, email, phone, password) {
  const users = JSON.parse(localStorage.getItem('momently_users') || '[]');
  if (users.find(u => u.email.toLowerCase() === email.trim().toLowerCase())) {
    return { error: getLang() === 'vi' ? 'Email này đã được đăng ký' : 'Email already registered' };
  }
  const newUser = { id: 'u-' + Date.now(), name, email: email.trim(), phone, password, searches: [], bookings: [] };
  users.push(newUser);
  localStorage.setItem('momently_users', JSON.stringify(users));
  localStorage.setItem('momently_user', JSON.stringify(newUser));
  return { success: true, user: newUser };
}

function logout() {
  localStorage.removeItem('momently_user');
  window.location.href = 'index.html';
}

function saveSearch(searchData) {
  const user = getUser();
  if (!user) return;
  user.searches = user.searches || [];
  
  // Avoid duplicate adjacent search
  const isDuplicate = user.searches.length > 0 &&
    user.searches[0].event === searchData.event &&
    user.searches[0].budget === searchData.budget &&
    user.searches[0].style === searchData.style;
    
  if (!isDuplicate) {
    user.searches.unshift({ ...searchData, timestamp: new Date().toISOString() });
    if (user.searches.length > 20) user.searches = user.searches.slice(0, 20);
    localStorage.setItem('momently_user', JSON.stringify(user));
    
    // Also update users list
    const users = JSON.parse(localStorage.getItem('momently_users') || '[]');
    const idx = users.findIndex(u => u.id === user.id);
    if (idx >= 0) {
      users[idx] = user;
      localStorage.setItem('momently_users', JSON.stringify(users));
    }
  }
}

function saveBooking(bookingData) {
  const user = getUser();
  if (user) {
    user.bookings = user.bookings || [];
    user.bookings.unshift(bookingData);
    localStorage.setItem('momently_user', JSON.stringify(user));
    const users = JSON.parse(localStorage.getItem('momently_users') || '[]');
    const idx = users.findIndex(u => u.id === user.id);
    if (idx >= 0) { users[idx] = user; localStorage.setItem('momently_users', JSON.stringify(users)); }
  } else {
    // Guest booking storage
    const guestBookings = JSON.parse(localStorage.getItem('momently_guest_bookings') || '[]');
    guestBookings.unshift(bookingData);
    localStorage.setItem('momently_guest_bookings', JSON.stringify(guestBookings));
  }
}

// ---- Scroll Reveal Animation ----
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// ---- Toast Notification ----
function showToast(message, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ---- Package Card Component ----
function renderPackageCard(pkg) {
  const lang = getLang();
  const name = (lang === 'vi' ? pkg.name_vi : pkg.name_en) || pkg.name_vi || '';
  const eventObj = typeof eventTypes !== 'undefined' ? eventTypes.find(e => e.id === pkg.event) : null;
  const eventLabel = (eventObj ? (lang === 'vi' ? eventObj.name_vi : eventObj.name_en) : '') || t('event_' + pkg.event) || (lang === 'vi' ? 'Sự kiện đặc biệt' : 'Special Event');
  const discount = Math.round((1 - pkg.price / pkg.originalPrice) * 100);
  const cityObj = typeof cities !== 'undefined' ? cities.find(c => c.id === pkg.city) : null;
  const cityName = cityObj ? (lang === 'vi' ? cityObj.name_vi : cityObj.name_en) : (lang === 'vi' ? 'Thủ đô Hà Nội' : 'Hanoi Capital');
  const distObj = cityObj && cityObj.districts ? cityObj.districts.find(d => d.id === pkg.district) : null;
  const distName = distObj ? (lang === 'vi' ? distObj.name_vi : distObj.name_en) : '';
  const locationTag = pkg.ward ? `${pkg.ward}, ${lang === 'vi' ? 'Hà Nội' : 'Hanoi'}` : (distName ? `${distName}, ${lang === 'vi' ? 'Hà Nội' : 'Hanoi'}` : (lang === 'vi' ? 'Hà Nội' : 'Hanoi'));
  const featuredTag = lang === 'vi' ? 'Nổi bật' : 'Featured';

  return `
    <div class="card package-card" onclick="window.location.href='package-detail.html?id=${pkg.id}'">
      <div class="card-image-wrapper">
        <img src="${pkg.image}" alt="${name}" class="card-image" loading="lazy">
        ${pkg.featured ? `<span class="card-badge">⭐ ${featuredTag}</span>` : ''}
      </div>
      <div class="card-body">
        <div style="display:flex;align-items:center;flex-wrap:wrap;gap:6px;margin-bottom:8px;">
          <span style="font-size:var(--text-xs);background:rgba(236,72,153,0.1);color:#BE185D;padding:2px 10px;border-radius:var(--radius-full);font-weight:600;">${eventLabel}</span>
          <span style="font-size:var(--text-xs);background:rgba(2,132,199,0.1);color:#0369A1;padding:2px 10px;border-radius:var(--radius-full);font-weight:600;">📍 ${locationTag}</span>
        </div>
        <h3 class="card-title">${name}</h3>
        <div style="font-size:11px;color:var(--color-text-muted);margin-bottom:8px;line-height:1.4;display:flex;align-items:flex-start;justify-content:space-between;gap:6px;">
          <span>📌 ${(lang === 'vi' ? pkg.address_vi : pkg.address_en) || ''}</span>
          <div style="display:flex;gap:4px;flex-shrink:0;">
            <button type="button" class="btn btn-sm btn-outline" style="font-size:10px;padding:2px 8px;border-radius:12px;white-space:nowrap;cursor:pointer;" onclick="event.stopPropagation(); openDirectionsModal('${name.replace(/'/g, "\\'")}', '${((lang === 'vi' ? pkg.address_vi : pkg.address_en) || '').replace(/'/g, "\\'")}', '${((lang === 'vi' ? pkg.directions_vi : pkg.directions_en) || '').replace(/'/g, "\\'")}', '${pkg.mapUrl || ''}')">
              ${t('directions_btn')}
            </button>
            <a href="${pkg.mapUrl || ('https://maps.google.com/?q=' + encodeURIComponent((lang === 'vi' ? pkg.address_vi : pkg.address_en) || name))}" target="_blank" rel="noopener" class="btn btn-sm btn-pink-blue" style="font-size:10px;padding:2px 8px;border-radius:12px;white-space:nowrap;cursor:pointer;text-decoration:none;" onclick="event.stopPropagation();" title="${lang === 'vi' ? 'Mở trực tiếp trên Google Maps' : 'Open directly on Google Maps'}">
              🗺️ Maps
            </a>
          </div>
        </div>
        <div class="card-meta">
          <span>👥 ${pkg.maxGuests} ${t('common_guests')}</span>
          <span>📦 ${pkg.services.length} ${t('common_services')}</span>
        </div>
      </div>
      <div class="card-footer">
        <div>
          <span class="card-price">${formatPrice(pkg.price)}</span>
          <span class="card-price-original">${formatPrice(pkg.originalPrice)}</span>
          <span style="font-size:var(--text-xs);color:var(--color-success);font-weight:600;margin-left:4px;">-${discount}%</span>
        </div>
        <div class="package-rating">
          <span class="star">★</span> ${pkg.rating}
          <span class="package-booked">(${pkg.booked} ${t('featured_booked')})</span>
        </div>
      </div>
    </div>
  `;
}

// ---- Sparkle Cursor Effect ("Con trỏ lướt đến đâu lấp lánh đến đó") ----
function initSparkleCursor() {
  if (document.getElementById('sparkleCursorCanvas')) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'sparkleCursorCanvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '999999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const sparkleColors = ['#0284C7', '#38BDF8', '#EC4899', '#F43F5E', '#FBBF24', '#C084FC', '#E879F9', '#FFFFFF'];
  let mouse = { x: -100, y: -100 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    // Spawn 2-3 shimmering particles on mouse movement
    const count = Math.random() < 0.7 ? 2 : 3;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: mouse.x + (Math.random() - 0.5) * 14,
        y: mouse.y + (Math.random() - 0.5) * 14,
        vx: (Math.random() - 0.5) * 1.6,
        vy: (Math.random() - 0.5) * 1.6 - 0.4,
        size: Math.random() * 5 + 3,
        color: sparkleColors[Math.floor(Math.random() * sparkleColors.length)],
        alpha: 1,
        life: 0,
        maxLife: Math.random() * 25 + 20,
        spin: Math.random() * Math.PI,
        spinSpeed: (Math.random() - 0.5) * 0.15,
        isStar: Math.random() > 0.4
      });
    }
  });

  function drawStar(context, cx, cy, spikes, outerRadius, innerRadius, rotation) {
    let rot = Math.PI / 2 * 3 + rotation;
    let x = cx;
    let y = cy;
    let step = Math.PI / spikes;

    context.beginPath();
    context.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      context.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      context.lineTo(x, y);
      rot += step;
    }
    context.lineTo(cx, cy - outerRadius);
    context.closePath();
    context.fill();
  }

  function renderSparkles() {
    ctx.clearRect(0, 0, width, height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.life++;
      p.x += p.vx;
      p.y += p.vy;
      p.spin += p.spinSpeed;
      p.alpha = Math.max(0, 1 - p.life / p.maxLife);
      p.size = Math.max(0.1, p.size * 0.96);

      if (p.life >= p.maxLife || p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;

      if (p.isStar) {
        drawStar(ctx, p.x, p.y, 4, p.size, p.size * 0.35, p.spin);
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    requestAnimationFrame(renderSparkles);
  }

  requestAnimationFrame(renderSparkles);
}

// ---- Shared Modal: Directions & Map Guide ----
function openDirectionsModal(title, address, directions, mapUrl) {
  let modal = document.getElementById('globalDirectionsModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'globalDirectionsModal';
    modal.className = 'modal-overlay';
    modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('active'); };
    modal.innerHTML = `
      <div class="modal" onclick="event.stopPropagation()" style="max-width:680px;">
        <div class="modal-header">
          <div>
            <h3 id="gDirTitle" style="color:var(--color-primary);font-size:var(--text-xl);"></h3>
            <p style="font-size:var(--text-xs);color:var(--color-text-muted);margin-top:2px;" data-i18n="directions_modal_subtitle">${t('directions_modal_subtitle')}</p>
          </div>
          <span class="modal-close" onclick="document.getElementById('globalDirectionsModal').classList.remove('active')">&times;</span>
        </div>
        <div class="modal-body">
          <div style="background:var(--color-bg-alt);border:1px solid var(--color-border);border-radius:var(--radius-lg);padding:var(--space-md);margin-bottom:var(--space-md);">
            <div style="font-size:var(--text-xs);font-weight:700;color:var(--color-primary);text-transform:uppercase;margin-bottom:4px;" data-i18n="directions_address">${t('directions_address')}</div>
            <div id="gDirAddress" style="font-size:var(--text-sm);font-weight:600;color:var(--color-secondary);"></div>
          </div>

          <div style="margin-bottom:var(--space-lg);">
            <div style="font-size:var(--text-xs);font-weight:700;color:var(--color-primary);text-transform:uppercase;margin-bottom:6px;" data-i18n="directions_transport">${t('directions_transport')}</div>
            <div id="gDirGuide" style="font-size:var(--text-sm);color:var(--color-text);line-height:1.7;white-space:pre-line;"></div>
          </div>

          <div style="display:flex;justify-content:flex-end;gap:10px;border-top:1px solid var(--color-border-light);padding-top:var(--space-md);">
            <button class="btn btn-secondary" onclick="document.getElementById('globalDirectionsModal').classList.remove('active')" data-i18n="directions_close">${t('directions_close')}</button>
            <a id="gDirMapLink" href="#" target="_blank" rel="noopener" class="btn btn-pink-blue" data-i18n="directions_open_map">${t('directions_open_map')}</a>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  document.getElementById('gDirTitle').textContent = title;
  document.getElementById('gDirAddress').textContent = address;
  document.getElementById('gDirGuide').textContent = directions;
  document.getElementById('gDirMapLink').href = mapUrl || `https://maps.google.com/?q=${encodeURIComponent(address)}`;
  
  // Re-translate modal labels to current language
  modal.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (k) el.textContent = t(k);
  });

  modal.classList.add('active');
}

// ---- Studio Ghibli Falling Botanical Petals & Spores Effect ----
function initGhibliBotanicals() {
  if (document.getElementById('ghibliBotanicalCanvas')) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'ghibliBotanicalCanvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '1';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petals = [];
  const petalColors = [
    'rgba(242, 132, 130, 0.7)',
    'rgba(252, 234, 222, 0.85)',
    'rgba(231, 111, 81, 0.65)',
    'rgba(82, 183, 136, 0.55)',
    'rgba(244, 162, 97, 0.7)',
    'rgba(255, 255, 255, 0.9)'
  ];

  for (let i = 0; i < 28; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 6 + 4,
      vx: Math.random() * 1.2 + 0.5,
      vy: Math.random() * 1.5 + 0.8,
      angle: Math.random() * Math.PI * 2,
      vAngle: (Math.random() - 0.5) * 0.04,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      petalType: Math.random() > 0.4 ? 'petal' : 'spore'
    });
  }

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    if (p.petalType === 'petal') {
      ctx.moveTo(0, -p.r);
      ctx.bezierCurveTo(p.r * 0.9, -p.r * 0.5, p.r * 0.9, p.r * 0.5, 0, p.r);
      ctx.bezierCurveTo(-p.r * 0.9, p.r * 0.5, -p.r * 0.9, -p.r * 0.5, 0, -p.r);
    } else {
      ctx.arc(0, 0, p.r * 0.4, 0, Math.PI * 2);
    }
    ctx.fill();
    ctx.restore();
  }

  function animatePetals() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < petals.length; i++) {
      const p = petals[i];
      p.x += p.vx + Math.sin(p.angle) * 0.6;
      p.y += p.vy;
      p.angle += p.vAngle;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) {
        p.x = -20;
      }
      drawPetal(p);
    }
    requestAnimationFrame(animatePetals);
  }

  requestAnimationFrame(animatePetals);
}

// ---- Initialize on page load ----
function initApp(activePage) {
  renderNavbar(activePage);
  renderFooter();
  initScrollReveal();
  initSparkleCursor();
  initGhibliBotanicals();

  // Ensure all translations are applied immediately on load
  if (typeof setLang === 'function') {
    setLang(getLang());
  }

  // Re-render navbar and footer when language changes
  window.addEventListener('langchange', () => {
    renderNavbar(activePage);
    renderFooter();
  });

  // Check for successful Google Login redirect
  const loginParam = getUrlParam('login');
  if (loginParam === 'google') {
    const user = getUser();
    const isVi = getLang() === 'vi';
    const userName = user && user.name ? user.name : (isVi ? 'bạn' : 'you');
    setTimeout(() => {
      showToast(
        isVi 
          ? `🎉 Đăng nhập Google thành công! Chào mừng ${userName} đến với Momently!`
          : `🎉 Signed in with Google! Welcome ${userName} to Momently!`,
        'success'
      );
    }, 350);

    // Clean URL query param cleanly without page reload
    try {
      const url = new URL(window.location.href);
      url.searchParams.delete('login');
      window.history.replaceState({}, document.title, url.pathname + (url.search ? url.search : ''));
    } catch (e) {}
  }
}

// ---- URL helpers ----
function getUrlParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

