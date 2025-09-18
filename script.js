// 全局变量
let currentDemoVideoIndex = 0;
let currentOrgIndex = 0;
let currentCharacterIndex = 0;
let currentArtIndex = 0;
let currentPage = 0;
let isFlipping = false;
let hideTimer;
let itemsPerPage = 24;
let time = 2000;

// 应用配置设置
function applyConfig() {
    if (typeof CONFIG !== 'undefined') {
        itemsPerPage = CONFIG.features.charactersPerPage;
        time = CONFIG.features.characterInfoDisplayTime;
        
        // 设置页面标题
        document.title = CONFIG.content.siteTitle;
        
        // 设置音频源
        const bgMusicSource = document.getElementById('bgMusicSource');
        const bgMusic = document.getElementById('bgMusic');
        if (bgMusicSource && bgMusic) {
            bgMusicSource.src = CONFIG.audio.backgroundMusic;
            bgMusic.load(); // 重新加载音频
            console.log('音频源已设置:', CONFIG.audio.backgroundMusic);
        }
        
        // 设置LOGO
        const navLogo = document.getElementById('navLogo');
        if (navLogo) {
            navLogo.src = CONFIG.images.navLogo;
        }
        
        const heroLogo = document.getElementById('heroLogo');
        if (heroLogo) {
            heroLogo.src = CONFIG.images.heroLogo;
        }
        
        // 设置文本内容
        const navTitle = document.getElementById('navTitle');
        if (navTitle) {
            navTitle.textContent = CONFIG.content.hero.title;
        }
        
        const heroTitle = document.getElementById('heroTitle');
        if (heroTitle) {
            heroTitle.textContent = CONFIG.content.hero.title;
        }
        
        const heroSubtitle = document.getElementById('heroSubtitle');
        if (heroSubtitle) {
            heroSubtitle.textContent = CONFIG.content.hero.subtitle;
        }
        
        // 设置首页背景媒体（支持视频和图片）
        const heroSection = document.getElementById('hero');
        if (heroSection && typeof MediaUtils !== 'undefined') {
            MediaUtils.initSectionBackground('#hero', CONFIG.backgrounds.heroBackground);
            console.log('首页背景媒体已初始化');
        } else if (heroSection) {
            // 传统方式兼容处理
            setTraditionalBackground('#hero', CONFIG.backgrounds.heroBackground);
        }
        
        // 设置背景媒体（支持视频和图片）
        if (typeof MediaUtils !== 'undefined') {
            // 初始化演示区域背景媒体
            MediaUtils.initSectionBackground('#DemoVideos', CONFIG.backgrounds.demoVideoBackground);
            console.log('演示区域背景媒体已初始化');
            
            // 初始化组织活动区域背景媒体
            MediaUtils.initSectionBackground('#organizations', CONFIG.backgrounds.organizationVideoBackground);
            console.log('组织活动区域背景媒体已初始化');
        } else {
            console.warn('MediaUtils 未加载，使用传统方式设置背景');
            // 传统方式兼容处理
            setTraditionalBackground('#DemoVideos', CONFIG.backgrounds.demoVideoBackground);
            setTraditionalBackground('#organizations', CONFIG.backgrounds.organizationVideoBackground);
        }
        
        // 应用动态CSS样式
        applyDynamicStyles();
    }
}

// 应用动态CSS样式
function applyDynamicStyles() {
    // 创建动态样式表
    const styleSheet = document.createElement('style');
    styleSheet.id = 'dynamic-config-styles';
    
    // 构建CSS规则
    const cssRules = `
        /* 配置文件动态样式 */
        :root {
            --primary-color: ${CONFIG.colors.primary.main};
            --secondary-color: ${CONFIG.colors.primary.secondary};
            --accent-color: ${CONFIG.colors.primary.accent};
            --container-width: ${CONFIG.layout.containerWidth};
            --transition-duration: ${CONFIG.animations.transitionDuration};
        }
        
        /* 导航栏样式 */
        .navbar {
            background: ${CONFIG.colors.navbar.background} !important;
        }
        
        .navbar.scrolled {
            background: ${CONFIG.colors.navbar.backgroundScrolled} !important;
        }
        
        .nav-link {
            color: ${CONFIG.colors.navbar.textColor} !important;
        }
        
        .nav-link:hover {
            color: ${CONFIG.colors.navbar.textHoverColor} !important;
        }
        
        /* 按钮样式 */
        .btn-primary {
            background: ${CONFIG.colors.buttons.primary.background} !important;
            color: ${CONFIG.colors.buttons.primary.color} !important;
        }
        
        .btn-secondary {
            background: ${CONFIG.colors.buttons.secondary.background} !important;
            color: ${CONFIG.colors.buttons.secondary.color} !important;
            border-color: ${CONFIG.colors.buttons.secondary.border} !important;
        }
        
        /* 音乐播放器样式 */
        .bg-music-player {
            background: ${CONFIG.colors.musicPlayer.background} !important;
        }
        
        .bg-music-player:hover {
            background: ${CONFIG.colors.musicPlayer.backgroundHover} !important;
        }
        
        .music-icon {
            background: ${CONFIG.colors.musicPlayer.playButton} !important;
        }
        
        .music-icon.playing {
            background: ${CONFIG.colors.musicPlayer.pauseButton} !important;
        }
        
        /* 区域背景 */
        #about {
            background-color: ${CONFIG.colors.sections.about} !important;
        }
        
        .footer {
            background-color: ${CONFIG.colors.sections.footer} !important;
        }
        
        .video-section-spacer {
            background-color: ${CONFIG.colors.sections.sectionSpacer} !important;
        }
        
        /* 角色列表样式 */
        .character-list {
            background: ${CONFIG.colors.characterList.background} !important;
        }
        
        .character-list-item:hover,
        .character-list-item.active {
            background: ${CONFIG.colors.characterList.itemHover} !important;
        }
        
        /* 遮罩层样式 */
        .hero-overlay {
            background: ${CONFIG.colors.overlays.hero} !important;
        }
        
        .section-overlay {
            background: ${CONFIG.colors.overlays.video} !important;
        }
        
        .org-card,
        .org-card-img {
            background: ${CONFIG.colors.overlays.card} !important;
        }
        
        /* 角色区域背景 */
        .character-art {
            background: ${CONFIG.backgrounds.characterBackground} !important;
        }
        
        /* 字体设置 */
        body {
            font-family: ${CONFIG.typography.fontFamily} !important;
        }
        
        .hero-title {
            font-size: ${CONFIG.typography.heroTitle} !important;
            text-shadow: ${CONFIG.typography.textShadow.hero} !important;
        }
        
        .section-title {
            font-size: ${CONFIG.typography.sectionTitle} !important;
            text-shadow: ${CONFIG.typography.textShadow.section} !important;
        }
        
        #character-name {
            font-size: ${CONFIG.typography.characterInfo.name.fontSize} !important;
            color: ${CONFIG.typography.characterInfo.name.color} !important;
            text-align: ${CONFIG.typography.characterInfo.name.textAlign} !important;
            text-shadow: ${CONFIG.typography.characterInfo.name.textShadow} !important;
            font-weight: ${CONFIG.typography.characterInfo.name.fontWeight} !important;
            letter-spacing: ${CONFIG.typography.characterInfo.name.letterSpacing} !important;
        }
        
        .character-title {
            font-size: ${CONFIG.typography.characterInfo.title.fontSize} !important;
            color: ${CONFIG.typography.characterInfo.title.color} !important;
            text-align: ${CONFIG.typography.characterInfo.title.textAlign} !important;
            text-shadow: ${CONFIG.typography.characterInfo.title.textShadow} !important;
            font-weight: ${CONFIG.typography.characterInfo.title.fontWeight} !important;
            letter-spacing: ${CONFIG.typography.characterInfo.title.letterSpacing} !important;
            margin-top: ${CONFIG.typography.characterInfo.title.marginTop} !important;
            margin-bottom: ${CONFIG.typography.characterInfo.title.marginBottom} !important;
        }
        
        .character-desc {
            font-size: ${CONFIG.typography.characterInfo.description.fontSize} !important;
            color: ${CONFIG.typography.characterInfo.description.color} !important;
            text-align: ${CONFIG.typography.characterInfo.description.textAlign} !important;
            text-shadow: ${CONFIG.typography.characterInfo.description.textShadow} !important;
            font-weight: ${CONFIG.typography.characterInfo.description.fontWeight} !important;
            letter-spacing: ${CONFIG.typography.characterInfo.description.letterSpacing} !important;
            line-height: ${CONFIG.typography.characterInfo.description.lineHeight} !important;
            max-width: ${CONFIG.typography.characterInfo.description.maxWidth} !important;
            margin: ${CONFIG.typography.characterInfo.description.margin} !important;
            padding: ${CONFIG.typography.characterInfo.description.padding} !important;
        }
        
        /* 动画设置 */
        * {
            transition-duration: ${CONFIG.animations.transitionDuration} !important;
        }
        
        html {
            scroll-behavior: ${CONFIG.animations.scrollBehavior} !important;
        }
        
        .hero-title {
            animation-duration: ${CONFIG.animations.titleGlowDuration} !important;
        }
        
        .character-flip-container {
            transition: transform ${CONFIG.animations.flipDuration} ease-in-out !important;
        }
    `;
    
    styleSheet.textContent = cssRules;
    
    // 移除旧的动态样式表（如果存在）
    const oldStyleSheet = document.getElementById('dynamic-config-styles');
    if (oldStyleSheet) {
        oldStyleSheet.remove();
    }
    
    // 添加新的样式表
    document.head.appendChild(styleSheet);
}

// 音乐播放器类
class MusicPlayer {
    constructor() {
        this.bgMusic = document.getElementById('bgMusic');
        this.musicIcon = document.getElementById('musicIcon');
        this.volumeInput = document.getElementById('volumeInput');
        this.isPlaying = false;
        this.volume = 0.3;
        this.init();
    }

    init() {
        // 从配置文件获取设置
        if (typeof CONFIG !== 'undefined') {
            this.volume = CONFIG.audio.defaultVolume;
            this.bgMusic.loop = CONFIG.audio.loop;
            this.volumeInput.value = this.volume;
        }
        
        this.bgMusic.volume = this.volume;
        this.bindEvents();
        
        // 根据配置决定是否自动播放
        if (typeof CONFIG === 'undefined' || CONFIG.audio.autoPlay) {
            this.tryAutoPlay();
        }
        
        // 添加用户交互监听器，以应对浏览器自动播放限制
        this.addUserInteractionListener();
    }
    
    addUserInteractionListener() {
        const startPlayOnInteraction = () => {
            if (!this.isPlaying && (typeof CONFIG === 'undefined' || CONFIG.audio.autoPlay)) {
                this.tryAutoPlay();
            }
            // 移除监听器，只需要一次用户交互
            document.removeEventListener('click', startPlayOnInteraction);
            document.removeEventListener('keydown', startPlayOnInteraction);
            document.removeEventListener('touchstart', startPlayOnInteraction);
        };
        
        // 监听用户的第一次交互
        document.addEventListener('click', startPlayOnInteraction);
        document.addEventListener('keydown', startPlayOnInteraction);
        document.addEventListener('touchstart', startPlayOnInteraction);
    }

    bindEvents() {
        this.musicIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMusic();
        });

        this.volumeInput.addEventListener('input', () => {
            this.updateVolume();
        });

        this.volumeInput.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        this.bgMusic.addEventListener('play', () => {
            this.isPlaying = true;
            this.updateIcon();
        });

        this.bgMusic.addEventListener('pause', () => {
            this.isPlaying = false;
            this.updateIcon();
        });

        this.bgMusic.addEventListener('ended', () => {
            this.isPlaying = false;
            this.updateIcon();
        });

        this.bgMusic.addEventListener('canplaythrough', () => {
            this.tryAutoPlay();
        });
    }

    async tryAutoPlay() {
        // 检查配置是否允许自动播放
        if (typeof CONFIG !== 'undefined' && !CONFIG.audio.autoPlay) {
            console.log('配置禁用了自动播放');
            return;
        }
        
        try {
            // 确保音频已加载
            if (this.bgMusic.readyState >= 2) {
                await this.bgMusic.play();
                this.isPlaying = true;
                this.updateIcon();
                console.log('自动播放成功，图标已更新');
            } else {
                console.log('音频尚未加载完成，等待加载');
            }
        } catch (error) {
            console.error("自动播放失败:", error);
            console.log("可能的原因：浏览器阻止了自动播放，需要用户交互");
            this.isPlaying = false;
            this.updateIcon();
        }
    }

    async toggleMusic() {
        if (!this.bgMusic) return;
        
        try {
            if (this.isPlaying) {
                await this.bgMusic.pause();
            } else {
                await this.bgMusic.play();
            }
        } catch (error) {
            console.error("播放控制失败:", error);
        }
    }

    updateVolume() {
        this.volume = parseFloat(this.volumeInput.value);
        if (this.bgMusic) {
            this.bgMusic.volume = this.volume;
        }
    }

    updateIcon() {
        // 获取图标元素（可能是play-icon或pause-icon）
        let iconElement = this.musicIcon.querySelector('.play-icon') || this.musicIcon.querySelector('.pause-icon');
        
        if (!iconElement) {
            // 如果没有找到图标元素，创建一个
            iconElement = document.createElement('span');
            iconElement.className = 'play-icon';
            this.musicIcon.appendChild(iconElement);
        }
        
        if (this.isPlaying) {
            // 播放中：显示暂停图标
            this.musicIcon.classList.add('playing');
            iconElement.textContent = '⏸';
            iconElement.className = 'pause-icon';
            console.log('音乐播放器图标已更新为暂停状态');
        } else {
            // 暂停中：显示播放图标
            this.musicIcon.classList.remove('playing');
            iconElement.textContent = '▶';
            iconElement.className = 'play-icon';
            console.log('音乐播放器图标已更新为播放状态');
        }
    }
}

// 导航栏滚动效果
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(26, 32, 44, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.background = 'rgba(45, 55, 72, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
}

// 平滑滚动到指定区域
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 演示视频轮播功能
function updateDemoVideoCarousel() {
    const cards = document.querySelectorAll('.demo-video-card');
    cards.forEach((card, idx) => {
        card.style.display = (idx === currentDemoVideoIndex) ? 'flex' : 'none';
        
        // 如果是当前显示的卡片，设置视频源
        if (idx === currentDemoVideoIndex && demoVideos[idx]) {
            const iframe = card.querySelector('iframe');
            const video = card.querySelector('video source');
            
            if (iframe && demoVideos[idx].video) {
                iframe.src = demoVideos[idx].video;
            }
            
            if (video && demoVideos[idx].video) {
                video.src = demoVideos[idx].video;
                const videoElement = card.querySelector('video');
                if (videoElement) {
                    videoElement.load(); // 重新加载视频
                }
            }
        }
    });
}

function prevDemoVideo() {
    currentDemoVideoIndex = (currentDemoVideoIndex - 1 + demoVideos.length) % demoVideos.length;
    updateDemoVideoCarousel();
}

function nextDemoVideo() {
    currentDemoVideoIndex = (currentDemoVideoIndex + 1) % demoVideos.length;
    updateDemoVideoCarousel();
}

// 组织活动轮播功能
function updateOrgCarousel() {
    const cards = document.querySelectorAll('.organization-card');
    cards.forEach((card, idx) => {
        card.style.display = (idx === currentOrgIndex) ? 'flex' : 'none';
    });
}

function prevOrgCard() {
    currentOrgIndex = (currentOrgIndex - 1 + organizationsData.length) % organizationsData.length;
    updateOrgCarousel();
}

function nextOrgCard() {
    currentOrgIndex = (currentOrgIndex + 1) % organizationsData.length;
    updateOrgCarousel();
}

// 角色管理功能
function getTotalPages() {
    return Math.ceil(characterData.length / itemsPerPage);
}

function getCurrentPageCharacters() {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return characterData.slice(start, end);
}

function renderCharacterList() {
    const characterList = document.getElementById('character-list');
    const currentPageChars = getCurrentPageCharacters();
    
    // 清空现有的角色项目（保留分页控件）
    const existingItems = characterList.querySelectorAll('.character-list-item');
    existingItems.forEach(item => item.remove());
    
    // 添加当前页的角色
    currentPageChars.forEach((character, pageIndex) => {
        const globalIndex = currentPage * itemsPerPage + pageIndex;
        const item = document.createElement('div');
        item.className = `character-list-item ${globalIndex === currentCharacterIndex ? 'active' : ''}`;
        item.onclick = () => selectCharacter(pageIndex);
        
        item.innerHTML = `
            <img src="${character.avatar}" alt="${character.name}">
            <span>${character.name}</span>
        `;
        
        // 在分页控件之前插入
        const paginationControls = characterList.querySelector('.pagination-controls');
        characterList.insertBefore(item, paginationControls);
    });
}

function renderPageIndicators() {
    const pageIndicators = document.getElementById('pageIndicators');
    pageIndicators.innerHTML = '';
    
    const totalPages = getTotalPages();
    for (let i = 0; i < totalPages; i++) {
        const indicator = document.createElement('span');
        indicator.className = `page-indicator ${currentPage === i ? 'active' : ''}`;
        indicator.textContent = i + 1;
        indicator.onclick = () => goToPage(i);
        pageIndicators.appendChild(indicator);
    }
}

function goToPage(page) {
    if (page >= 0 && page < getTotalPages()) {
        currentPage = page;
        currentCharacterIndex = page * itemsPerPage;
        renderCharacterList();
        renderPageIndicators();
        updateCharacterDisplay();
    }
}

function prevPage() {
    if (currentPage === 0) {
        goToPage(getTotalPages() - 1);
    } else {
        goToPage(currentPage - 1);
    }
}

function nextPage() {
    if (currentPage === getTotalPages() - 1) {
        goToPage(0);
    } else {
        goToPage(currentPage + 1);
    }
}

function selectCharacter(pageIndex) {
    const globalIndex = currentPage * itemsPerPage + pageIndex;
    currentCharacterIndex = globalIndex;
    currentArtIndex = 0;
    isFlipping = false;
    
    renderCharacterList();
    updateCharacterDisplay();
    showCharacterInfo();
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hideCharacterInfo, time);
}

function updateCharacterDisplay() {
    const character = characterData[currentCharacterIndex];
    if (!character) return;
    
    // 更新角色信息
    document.getElementById('character-name').textContent = character.name;
    document.getElementById('character-title').textContent = character.title;
    document.getElementById('character-desc').textContent = character.desc;
    
    // 更新标签
    const tagsContainer = document.getElementById('character-tags');
    tagsContainer.innerHTML = '';
    character.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });
    
    // 更新立绘
    const artImg = document.getElementById('character-art-img');
    if (character.art && character.art.length > 0) {
        artImg.src = character.art[currentArtIndex];
        artImg.alt = character.name;
    }
}

function nextCharacterArt() {
    if (isFlipping) return;
    
    const character = characterData[currentCharacterIndex];
    if (character.art.length > 1) {
        isFlipping = true;
        
        const flipContainer = document.getElementById('character-flip-container');
        flipContainer.style.transform = 'perspective(1000px) rotateX(90deg)';
        
        setTimeout(() => {
            currentArtIndex = (currentArtIndex + 1) % character.art.length;
            const artImg = document.getElementById('character-art-img');
            artImg.src = character.art[currentArtIndex];
            flipContainer.style.transform = 'perspective(1000px) rotateX(0deg)';
            
            setTimeout(() => {
                isFlipping = false;
            }, 50);
        }, 500);
    }
}

function showCharacterInfo() {
    const characterInfoPanel = document.getElementById('character-info-panel');
    if (characterInfoPanel) {
        characterInfoPanel.style.opacity = '1';
        characterInfoPanel.style.transition = 'opacity 0.25s ease-in-out';
    }
}

function hideCharacterInfo() {
    const characterInfoPanel = document.getElementById('character-info-panel');
    if (characterInfoPanel) {
        characterInfoPanel.style.opacity = '0';
        characterInfoPanel.style.transition = 'opacity 1s ease-in-out';
    }
}

// 传统背景设置兼容函数
function setTraditionalBackground(selector, backgroundConfig) {
    const element = document.querySelector(selector);
    if (!element) {
        console.warn(`未找到元素: ${selector}`);
        return;
    }

    let backgroundUrl = '';
    
    // 如果是字符串配置（旧格式）
    if (typeof backgroundConfig === 'string') {
        backgroundUrl = backgroundConfig;
    } else if (typeof backgroundConfig === 'object' && backgroundConfig.url) {
        // 新格式但没有 MediaUtils 的情况
        backgroundUrl = backgroundConfig.url;
    }

    if (backgroundUrl) {
        // 对于首页区域，设置背景图片
        if (selector === '#hero') {
            element.style.backgroundImage = `url('${backgroundUrl}')`;
            element.style.backgroundSize = 'cover';
            element.style.backgroundPosition = 'center';
            element.style.backgroundRepeat = 'no-repeat';
            console.log(`传统方式设置首页背景: ${backgroundUrl}`);
        } else {
            // 对于其他区域，尝试设置视频源
            const videoElement = element.querySelector('.section-video');
            if (videoElement) {
                const source = videoElement.querySelector('source');
                if (source) {
                    source.src = backgroundUrl;
                    videoElement.load();
                    console.log(`传统方式设置视频背景: ${backgroundUrl}`);
                }
            } else {
                // 如果没有视频元素，设置背景图片
                element.style.backgroundImage = `url('${backgroundUrl}')`;
                element.style.backgroundSize = 'cover';
                element.style.backgroundPosition = 'center';
                element.style.backgroundRepeat = 'no-repeat';
                console.log(`传统方式设置背景图片: ${backgroundUrl}`);
            }
        }
    }
}

// 图片处理工具函数

/**
 * 处理图片加载，设置合适的object-fit属性
 * @param {Event} event - 图片加载事件
 */
function handleImageLoad(event) {
    const img = event.target;
    
    // 获取图片原始宽高
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    
    // 移除所有可能的类
    img.classList.remove('character-art-img-wide', 'character-art-img-tall-cover', 'character-art-img-tall');
    
    // 计算图片宽高比
    const imgAspectRatio = imgWidth / imgHeight;
    
    if (imgAspectRatio > 1.3) {
        // 宽是高的1.3倍以上，使用cover
        img.classList.add('character-art-img-wide');
    } else {
        // 否则使用contain
        img.classList.add('character-art-img-tall');
    }
}

/**
 * 预加载图片
 * @param {string} src - 图片地址
 * @returns {Promise} - 返回Promise
 */
function preloadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

/**
 * 批量预加载图片
 * @param {Array} srcArray - 图片地址数组
 * @returns {Promise} - 返回Promise
 */
function preloadImages(srcArray) {
    const promises = srcArray.map(src => preloadImage(src));
    return Promise.all(promises);
}

// 预加载角色图片
function preloadCharacterImages() {
    const allImages = [];
    
    // 收集所有角色头像
    characterData.forEach(character => {
        allImages.push(character.avatar);
        // 收集所有立绘
        if (character.art && character.art.length > 0) {
            allImages.push(...character.art);
        }
    });
    
    // 预加载图片
    preloadImages(allImages).then(() => {
        console.log('角色图片预加载完成');
    }).catch(error => {
        console.warn('部分图片预加载失败:', error);
    });
}

// 初始化函数
function initializeApp() {
    // 首先应用配置
    applyConfig();
    
    // 初始化音乐播放器
    new MusicPlayer();
    
    // 绑定滚动事件
    window.addEventListener('scroll', handleNavbarScroll);
    
    // 初始化轮播并设置视频源
    updateDemoVideoCarousel();
    updateOrgCarousel();
    
    // 确保初始视频源已设置
    if (demoVideos.length > 0) {
        const firstCard = document.querySelector('.demo-video-card[data-index="0"]');
        if (firstCard) {
            const iframe = firstCard.querySelector('iframe');
            const video = firstCard.querySelector('video source');
            
            if (iframe && demoVideos[0].video) {
                iframe.src = demoVideos[0].video;
            }
            
            if (video && demoVideos[0].video) {
                video.src = demoVideos[0].video;
                const videoElement = firstCard.querySelector('video');
                if (videoElement) {
                    videoElement.load();
                }
            }
        }
    }
    
    // 初始化角色系统
    renderCharacterList();
    renderPageIndicators();
    updateCharacterDisplay();
    
    // 预加载角色图片
    preloadCharacterImages();
    
    // 绑定导航链接点击事件
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                scrollToSection(href.substring(1));
            }
        });
    });
    
    // 角色信息面板鼠标事件
    const characterInfoPanel = document.getElementById('character-info-panel');
    if (characterInfoPanel) {
        characterInfoPanel.addEventListener('mouseenter', () => {
            clearTimeout(hideTimer);
            showCharacterInfo();
        });

        characterInfoPanel.addEventListener('mouseleave', () => {
            hideTimer = setTimeout(hideCharacterInfo, time);
        });
        
        hideTimer = setTimeout(hideCharacterInfo, time);
    }
    
    // 角色立绘图片加载事件
    const artImg = document.getElementById('character-art-img');
    if (artImg) {
        artImg.addEventListener('load', handleImageLoad);
        if (artImg.complete) {
            handleImageLoad({ target: artImg });
        }
    }
    
    // 处理用户交互后的自动播放
    document.addEventListener('click', () => {
        const bgMusic = document.getElementById('bgMusic');
        if (bgMusic && bgMusic.paused) {
            bgMusic.play().catch(error => {
                console.log("用户交互后播放失败:", error);
            });
        }
    }, { once: true });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initializeApp);

// 全局函数暴露（供HTML内联事件使用）
window.scrollToSection = scrollToSection;
window.prevDemoVideo = prevDemoVideo;
window.nextDemoVideo = nextDemoVideo;
window.prevOrgCard = prevOrgCard;
window.nextOrgCard = nextOrgCard;
window.prevPage = prevPage;
window.nextPage = nextPage;
window.goToPage = goToPage;
window.selectCharacter = selectCharacter;
window.nextCharacterArt = nextCharacterArt;