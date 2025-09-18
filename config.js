// 石榴声项目配置文件
// 在这里可以方便地修改各种设置

const CONFIG = {
    // ==================== 音频设置 ====================
    audio: {
        // 背景音乐文件路径
        backgroundMusic: "Music/background.mp3",
        // 默认音量 (0-1)
        defaultVolume: 0.3,
        // 是否自动播放
        autoPlay: true,
        // 是否循环播放
        loop: true
    },

    // ==================== 背景媒体设置 ====================
    backgrounds: {
        // 首页区域背景媒体（支持视频和图片）
        heroBackground: {
            url: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757934976767_qdqqd_flnpsb.png",
            type: "auto", // "auto" | "video" | "image" - auto会自动检测文件类型
            fallback: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/background/background1.avif" // 备用图片
        },
        
        // 视频展示区域背景媒体（支持视频和图片）
        demoVideoBackground: {
            url: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757928465724_qdqqd_a09o24.png",
            type: "auto", // "auto" | "video" | "image" - auto会自动检测文件类型
            fallback: "https://www.yysls.cn/pc/gw/20220815175950/img/mhys/bz/17_33f9186.jpg?image_process=format,jpg" // 备用图片
        },
        
        // 组织活动区域背景媒体（支持视频和图片）
        organizationVideoBackground: {
            url: "https://coss.yupoo.com/upchat/2025-09-18/1758196431339.mp4",
            type: "auto", // "auto" | "video" | "image" - auto会自动检测文件类型
            fallback: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/background/background1.avif" // 备用图片
        },
        
        // 角色区域背景渐变（可以设置为图片URL或渐变色）
        characterBackground: "linear-gradient(135deg, rgba(154, 103, 211, 0.2) 10%, rgba(0, 0, 0, 0.8) 100%)"
    },

    // ==================== 媒体处理设置 ====================
    media: {
        // 支持的视频格式
        videoFormats: ['.mp4', '.webm', '.ogg', '.avi', '.mov', '.wmv', '.flv', '.mkv'],
        
        // 支持的图片格式
        imageFormats: ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg', '.bmp'],
        
        // 视频播放设置
        video: {
            autoplay: true,     // 自动播放
            muted: true,        // 静音播放
            loop: true,         // 循环播放
            controls: false,    // 显示控制条
            preload: "auto"     // 预加载策略
        },
        
        // 图片显示设置
        image: {
            objectFit: "cover", // 图片适应方式: "cover" | "contain" | "fill" | "scale-down"
            loading: "lazy"     // 懒加载策略
        }
    },

    // ==================== 颜色主题设置 ====================
    colors: {
        // 主色调
        primary: {
            main: "#F7FAFC",        // 主要颜色 - 浅灰白色
            secondary: "#E2E8F0",   // 次要颜色 - 中灰色
            accent: "#2D3748"       // 强调色 - 深灰色
        },
        
        // 导航栏颜色
        navbar: {
            background: "#1A202C",          // 导航栏默认背景色（半透明深灰）
            backgroundScrolled: "rgba(26, 32, 44, 0.98)",  // 滚动后导航栏背景色（更深的灰色）
            textColor: "#E2E8F0",                          // 导航栏文字颜色
            textHoverColor: "#F7FAFC"                      // 导航栏文字悬停颜色
        },
        
        // 按钮颜色
        buttons: {
            primary: {
                background: "linear-gradient(135deg, #F7FAFC, #E2E8F0)",  // 主按钮背景渐变
                color: "#2D3748",                                         // 主按钮文字颜色
                shadow: "rgba(247, 250, 252, 0.3)"                       // 主按钮阴影颜色
            },
            secondary: {
                background: "transparent",  // 次要按钮背景（透明）
                color: "#F7FAFC",          // 次要按钮文字颜色
                border: "#F7FAFC"          // 次要按钮边框颜色
            }
        },
        
        // 音乐播放器颜色
        musicPlayer: {
            background: "rgba(0, 0, 0, 0.7)",                          // 播放器背景色（半透明黑色）
            backgroundHover: "rgba(0, 0, 0, 0.9)",                     // 播放器悬停背景色（更深的黑色）
            playButton: "linear-gradient(135deg, #ff6b6b, #ee5a52)",   // 播放按钮颜色（红色渐变）
            pauseButton: "linear-gradient(135deg, #51cf66, #37b24d)"   // 暂停按钮颜色（绿色渐变）
        },
        
        // 区域背景颜色
        sections: {
            about: "#1A202C",        // 关于我们区域背景色（深蓝灰）
            footer: "#1A202C",       // 页脚背景色（深蓝灰）
            sectionSpacer: "#1A202C" // 区域间隔背景色（深蓝灰）
        },
        
        // 角色列表颜色
        characterList: {
            background: "#1A202C",                                        // 角色列表背景色（深蓝灰）
            itemHover: "linear-gradient(135deg, #2D3748 60%, #4A5568 100%)", // 角色项悬停背景（灰色渐变）
            textColor: "#ffffff"                                          // 角色列表文字颜色（白色）
        },
        
        // 遮罩层颜色
        overlays: {
            // 首页域遮罩（深灰到紫色的渐变）
            hero: "linear-gradient(135deg, rgba(26, 32, 44, 0.7) 0%, rgba(141, 54, 212, 0.3) 50%, rgba(74, 85, 104, 0.3) 100%)",
            // 视频区域遮罩（紫色到黑色的渐变）
            video: "linear-gradient(135deg, rgba(154, 103, 211, 0.3) 10%, rgba(0, 0, 0, 0.5) 100%)",
            // 卡片遮罩（紫色到黑色的渐变）
            card: "linear-gradient(135deg, rgb(189, 131, 255, 0.3) 0%, rgb(0, 0, 0, 1) 100%)"
        }
    },

    // ==================== 布局设置 ====================
    layout: {
        // 容器最大宽度 - 内容区域的最大宽度限制
        containerWidth: "1200px",
        
        // 最小页面宽度 - 页面的最小宽度（适配大屏幕）
        minPageWidth: "1920px",
        
        // 最小页面高度 - 页面的最小高度（适配大屏幕）
        minPageHeight: "1080px",
        
        // 导航栏高度 - 固定导航栏的高度
        navbarHeight: "70px",
        
        // 区域间距 - 各个内容区域之间的垂直间距
        sectionSpacing: "250px"
    },

    // ==================== 动画设置 ====================
    animations: {
        // 过渡动画时长 - 所有CSS过渡效果的默认时长
        transitionDuration: "0.3s",
        
        // 标题发光动画时长 - 首页域标题的发光动画循环时间
        titleGlowDuration: "3s",
        
        // 3D翻转动画时长 - 角色立绘翻转效果的动画时间
        flipDuration: "0.5s",
        
        // 滚动动画 - 页面滚动的平滑效果（smooth/auto）
        scrollBehavior: "smooth"
    },

    // ==================== 字体设置 ====================
    typography: {
        // 主字体 - 整个网站使用的字体族（可改为其他字体如"Microsoft YaHei", "SimHei"等）
        fontFamily: "Arial, sans-serif",
        
        // 标题字体大小
        heroTitle: "4.5rem",      // 首页域标题字体大小（72px）
        sectionTitle: "3rem",     // 区域标题字体大小（48px）
        
        // 文本阴影效果
        textShadow: {
            hero: "3px 3px 6px rgba(0, 0, 0, 0.5)",                    // 首页域文字阴影（深色阴影）
            section: "2px 2px 4px rgba(0, 0, 0, 0.1)",                 // 区域标题文字阴影（浅色阴影）
            character: "0 0 5px #000, 0 0 10px #000, 0 0 15px #000"    // 角色名称文字阴影（发光效果）
        },
        
        // 角色信息文字样式配置
        characterInfo: {
            // 角色名称样式
            name: {
                fontSize: "8.0rem",                                        // 角色名称字体大小
                color: "#ffffff",                                          // 角色名称颜色（白色）
                textAlign: "left",                                       // 文字对齐方式（left/center/right）对应（左靠齐）（居中）（右靠齐）
            },
            // 角色职位样式
            title: {
                fontSize: "2.5rem",                                        // 角色职位字体大小
                color: "#E2E8F0",                                          // 角色职位颜色（浅灰色）
                textAlign: "left",                                       // 文字对齐方式（左靠齐）（居中）（右靠齐）
            },
            // 角色描述样式
            description: {
                fontSize: "1.8rem",                                        // 角色描述字体大小
                color: "#CBD5E0",                                          // 角色描述颜色（中灰色）
                textAlign: "left",                                       // 文字对齐方式（左靠齐）（居中）（右靠齐）
            }
        }
    },

    // ==================== 功能设置 ====================
    features: {
        // 角色分页设置 - 每页显示的角色数量（建议12-36之间）
        charactersPerPage: 24,
        
        // 角色信息显示时长（毫秒）- 鼠标离开后多久隐藏角色信息
        characterInfoDisplayTime: 2000,
        
        // 是否启用图片预加载 - 提前加载角色图片以提升用户体验
        enableImagePreload: true,
        
        // 是否启用3D翻转效果 - 点击角色立绘时的3D翻转动画
        enable3DFlip: true
    },

    // ==================== LOGO和图片设置 ====================
    images: {
        // 导航栏LOGO - 显示在页面顶部导航栏的LOGO图片
        navLogo: "https://www.yysls.cn/pc/gw/20220815175950/img/logo2_97a4294.png",
        
        // 首页域LOGO - 显示在首屏首页域的大LOGO图片
        heroLogo: "https://www.yysls.cn/pc/gw/20220815175950/img/logo3_e2ad630.png",
        
        // 轮播按钮图片 - 视频和组织轮播的上一页/下一页按钮图标
        carouselPrev: "https://www.yysls.cn/pc/fab/20250723194326/img/feature_prev_d3634779.png?image_process=format,png",
        carouselNext: "https://www.yysls.cn/pc/fab/20250723194326/img/feature_next_6f404b40.png?image_process=format,png"
    },

    // ==================== 文本内容设置 ====================
    content: {
        // 网站标题 - 显示在浏览器标签页的标题
        siteTitle: "石榴声 - 燕云十六声百业搜索",
        
        // 首页域文本 - 首屏显示的主要标题和副标题
        hero: {
            title: "石榴声",                                    // 主标题
            subtitle: "向百业战第一冲刺"      // 副标题/描述
        },
        
        // 区域标题 - 各个内容区域的标题和副标题设置
        sections: {
            demoVideo: {
                title: "百业混剪",              // 视频展示区域的主标题
                subtitle: "生而微末者，侠为其声"  // 视频展示区域的副标题
            },
            organizations: {
                title: "百业活动",              // 组织活动区域的主标题
                subtitle: "各行各业，精彩纷呈"    // 组织活动区域的副标题
            },
            characters: {
                title: "百业人员",              // 角色展示区域的主标题
                subtitle: "精英人才，各展风采"    // 角色展示区域的副标题
            },
            about: {
                title: "加入我们",              // 关于我们区域的主标题
                subtitle: "燕云十六声百业搜索"    // 关于我们区域的副标题
            }
        },
        
        // 页脚文本 - 页面底部显示的各种信息
        footer: {
            title: "石榴声",                          // 页脚主标题
            description: "展示各流派咸鱼人才，弘扬咸鱼精神",  // 页脚描述文字
            joinUs: "加入我们，共建美好燕云",              // 加入我们的文字
            social: "抖音：十月份的喵",                       // 社交媒体信息
            copyright: "© 2025 石榴声. 保留所有权利."    // 版权信息
        }
    }
};

// ==================== 媒体处理工具函数 ====================
const MediaUtils = {
    /**
     * 检测URL的媒体类型
     * @param {string} url - 媒体文件URL
     * @returns {string} - "video" | "image" | "unknown"
     */
    detectMediaType(url) {
        if (!url || typeof url !== 'string') return 'unknown';
        
        const lowercaseUrl = url.toLowerCase();
        
        // 检查是否为视频格式
        if (CONFIG.media.videoFormats.some(format => lowercaseUrl.includes(format))) {
            return 'video';
        }
        
        // 检查是否为图片格式
        if (CONFIG.media.imageFormats.some(format => lowercaseUrl.includes(format))) {
            return 'image';
        }
        
        return 'unknown';
    },

    /**
     * 获取背景媒体配置
     * @param {string|object} backgroundConfig - 背景配置
     * @returns {object} - 标准化的媒体配置对象
     */
    getBackgroundMediaConfig(backgroundConfig) {
        // 获取默认备用图片
        const getDefaultFallback = () => {
            const heroConfig = CONFIG.backgrounds.heroBackground;
            if (typeof heroConfig === 'string') {
                return heroConfig;
            } else if (typeof heroConfig === 'object' && heroConfig.url) {
                return heroConfig.url;
            }
            return 'https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/background/background1.avif';
        };
        
        // 如果是字符串（旧格式兼容）
        if (typeof backgroundConfig === 'string') {
            const detectedType = this.detectMediaType(backgroundConfig);
            return {
                url: backgroundConfig,
                type: detectedType,
                fallback: getDefaultFallback()
            };
        }
        
        // 如果是对象（新格式）
        if (typeof backgroundConfig === 'object' && backgroundConfig.url) {
            const actualType = backgroundConfig.type === 'auto' 
                ? this.detectMediaType(backgroundConfig.url) 
                : backgroundConfig.type;
            
            return {
                url: backgroundConfig.url,
                type: actualType,
                fallback: backgroundConfig.fallback || getDefaultFallback()
            };
        }
        
        // 默认返回
        const defaultFallback = getDefaultFallback();
        return {
            url: defaultFallback,
            type: 'image',
            fallback: defaultFallback
        };
    },

    /**
     * 创建背景媒体元素
     * @param {object} mediaConfig - 媒体配置对象
     * @param {HTMLElement} container - 容器元素
     * @returns {HTMLElement} - 创建的媒体元素
     */
    createBackgroundMediaElement(mediaConfig, container) {
        const config = this.getBackgroundMediaConfig(mediaConfig);
        
        if (config.type === 'video') {
            const video = document.createElement('video');
            video.src = config.url;
            video.autoplay = CONFIG.media.video.autoplay;
            video.muted = CONFIG.media.video.muted;
            video.loop = CONFIG.media.video.loop;
            video.controls = CONFIG.media.video.controls;
            video.preload = CONFIG.media.video.preload;
            video.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                z-index: -1;
            `;
            
            // 视频加载失败时使用备用图片
            video.onerror = () => {
                console.warn(`视频加载失败，使用备用图片: ${config.fallback}`);
                this.setBackgroundImage(container, config.fallback);
                video.remove();
            };
            
            return video;
        } else if (config.type === 'image') {
            this.setBackgroundImage(container, config.url);
            return null; // 背景图片不需要返回元素
        } else {
            console.warn(`未知的媒体类型，使用备用图片: ${config.fallback}`);
            this.setBackgroundImage(container, config.fallback);
            return null;
        }
    },

    /**
     * 设置背景图片
     * @param {HTMLElement} element - 目标元素
     * @param {string} imageUrl - 图片URL
     */
    setBackgroundImage(element, imageUrl) {
        element.style.backgroundImage = `url('${imageUrl}')`;
        element.style.backgroundSize = CONFIG.media.image.objectFit;
        element.style.backgroundPosition = 'center';
        element.style.backgroundRepeat = 'no-repeat';
    },

    /**
     * 初始化区域背景媒体
     * @param {string} selector - CSS选择器
     * @param {string|object} mediaConfig - 媒体配置
     */
    initSectionBackground(selector, mediaConfig) {
        const element = document.querySelector(selector);
        if (!element) {
            console.warn(`未找到元素: ${selector}`);
            return;
        }

        const mediaElement = this.createBackgroundMediaElement(mediaConfig, element);
        if (mediaElement) {
            element.appendChild(mediaElement);
        }
    }
};

// 导出配置对象和工具函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, MediaUtils };
} else {
    window.CONFIG = CONFIG;
    window.MediaUtils = MediaUtils;
}