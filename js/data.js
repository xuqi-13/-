/* ============ 乐选购商城 - 数据层 ============ */
// 学号：24215220111  姓名：张乐

const JDData = {
    // ============ 商品分类 ============
    categories: [
        { id: 1, name: '手机通讯', icon: '📱' },
        { id: 2, name: '电脑办公', icon: '💻' },
        { id: 3, name: '家用电器', icon: '🏠' },
        { id: 4, name: '服饰鞋靴', icon: '👗' },
        { id: 5, name: '食品生鲜', icon: '🍎' },
        { id: 6, name: '美妆护肤', icon: '💄' },
        { id: 7, name: '运动户外', icon: '⚽' },
        { id: 8, name: '图书文娱', icon: '📚' },
        { id: 9, name: '家居家装', icon: '🛋️' },
        { id: 10, name: '汽车用品', icon: '🚗' },
        { id: 11, name: '母婴玩具', icon: '🍼' },
        { id: 12, name: '医药健康', icon: '💊' },
    ],

    // ============ 商品列表 ============
    products: [
        // 手机通讯
        { id: 1, name: '华为 Mate 70 Pro 智能手机 12GB+512GB 雅丹黑 5G旗舰 卫星通信', category: 1, price: 6999, oldPrice: 7999, imgColor: '#1a1a2e', img: 'images/huawei-mate70.png', sold: 28600, tag: '自营', rating: 4.9, desc: '搭载最新麒麟芯片，支持卫星通信，超感知徕卡影像系统', features: ['卫星通信', '昆仑玻璃', 'IP68防水', '100W快充', '徕卡四摄', '3D人脸识别'] },
        { id: 2, name: 'iPhone 16 Pro Max 256GB 原色钛金属 5G手机', category: 1, price: 9999, oldPrice: 10999, imgColor: '#2d2d2d', img: 'images/iphone16promax.png', sold: 52000, tag: '自营', rating: 4.8, desc: 'A18 Pro芯片，钛金属设计，4800万像素主摄', features: ['A18 Pro芯片', '钛金属', '4800万主摄', 'USB-C', '操作按钮', '灵动岛'] },
        { id: 3, name: '小米14 Ultra 徕卡光学 骁龙8Gen3 16GB+1TB', category: 1, price: 6499, oldPrice: 6999, imgColor: '#0a0a0a', img: 'images/xiaomi14-ultra.png', sold: 18500, tag: '新品', rating: 4.7, desc: '骁龙8Gen3处理器，徕卡全焦段四摄', features: ['骁龙8Gen3', '徕卡光学', '1英寸大底', '90W快充', '2K屏幕', '卫星通信'] },

        // 电脑办公
        { id: 4, name: 'MacBook Pro 14英寸 M4 Pro芯片 18GB/512GB', category: 2, price: 14999, oldPrice: 15999, imgColor: '#1d1d1f', img: 'images/macbook-pro14.png', sold: 12300, tag: '自营', rating: 4.9, desc: 'M4 Pro芯片，Liquid Retina XDR显示屏', features: ['M4 Pro', 'XDR屏', '18GB内存', '长达17h续航', '雷雳5', 'MagSafe'] },
        { id: 5, name: '联想 ThinkPad X1 Carbon 2025款 酷睿Ultra 7', category: 2, price: 10999, oldPrice: 12999, imgColor: '#2c2c2c', img: 'images/thinkpad-x1.png', sold: 8900, tag: '商务', rating: 4.7, desc: '轻薄商务本，14英寸2.8K OLED屏，仅重1.09kg', features: ['酷睿Ultra 7', '2.8K OLED', '1.09kg', '军规认证', 'LTE上网', '指纹识别'] },
        { id: 6, name: '华为 MatePad Pro 13.2英寸 平板电脑 12GB+512GB', category: 2, price: 5699, oldPrice: 6199, imgColor: '#e8d5b7', img: 'images/matepad-pro.png', sold: 15000, tag: '热卖', rating: 4.8, desc: 'OLED柔性屏，天生会画，鸿蒙生产力', features: ['13.2英寸OLED', '鸿蒙OS', '天生会画', '星闪连接', '10000mAh', '88W快充'] },

        // 家用电器
        { id: 7, name: '海尔 滚筒洗衣机全自动 10公斤 直驱变频 洗烘一体', category: 3, price: 4299, oldPrice: 5299, imgColor: '#f5f5f5', img: 'images/haier-washer.png', sold: 32000, tag: '自营', rating: 4.8, desc: '直驱变频电机，微蒸汽空气洗，智能投放', features: ['10公斤', '直驱变频', '洗烘一体', '空气洗', '智能投放', '一级能效'] },
        { id: 8, name: '格力 空调 大1.5匹 云锦三代 新一级能效 变频冷暖', category: 3, price: 3599, oldPrice: 4299, imgColor: '#ffffff', img: 'images/gree-ac.png', sold: 45000, tag: '自营', rating: 4.9, desc: '新一级能效，56℃高温自洁，WiFi智控', features: ['大1.5匹', '新一级能效', '56℃自洁', 'WiFi智控', '变频冷暖', '低噪18dB'] },
        { id: 9, name: '戴森 V15 Detect 无绳吸尘器 激光探测 智能显示', category: 3, price: 4990, oldPrice: 5490, imgColor: '#f5c518', img: 'images/dyson-v15.png', sold: 9800, tag: '进口', rating: 4.7, desc: '激光探测微尘，LCD屏实时显示，整机HEPA过滤', features: ['激光探测', 'LCD显示', 'HEPA过滤', '60分钟续航', '防缠绕', '整机过滤'] },

        // 服饰鞋靴
        { id: 10, name: 'Nike Air Jordan 1 Low 男子运动鞋 复古篮球鞋', category: 4, price: 899, oldPrice: 1099, imgColor: '#c41e3a', img: 'images/nike-aj1.png', sold: 23000, tag: '品牌', rating: 4.8, desc: '经典Air Jordan 1 Low鞋型，Air缓震技术', features: ['Air缓震', '皮革鞋面', '橡胶外底', '经典鞋型', '舒适内衬', '耐磨防滑'] },
        { id: 11, name: '优衣库 男士轻薄羽绒服 高级轻型 便携式', category: 4, price: 399, oldPrice: 599, imgColor: '#2c3e50', img: 'images/uniqlo-down.png', sold: 56000, tag: '爆款', rating: 4.6, desc: '轻量保暖，可收纳至便携袋，防水处理', features: ['90%白鸭绒', '轻量保暖', '可收纳', '防水处理', '弹性袖口', '多色可选'] },

        // 食品生鲜
        { id: 12, name: '三只松鼠 坚果大礼包 每日坚果混合 30袋装', category: 5, price: 129, oldPrice: 199, imgColor: '#8b4513', img: 'images/squirrels-nuts.png', sold: 89000, tag: '爆款', rating: 4.8, desc: '每日坚果混合装，科学配比，新鲜健康', features: ['30袋装', '6种坚果', '科学配比', '独立小包', '新鲜日期', '无添加'] },
        { id: 13, name: '智利进口车厘子 JJ级 2.5kg原箱 顺丰冷链', category: 5, price: 299, oldPrice: 399, imgColor: '#8b0000', img: 'images/cherries.png', sold: 34000, tag: '生鲜', rating: 4.7, desc: '智利原箱进口，果径28-30mm，顺丰冷链直达', features: ['JJ级', '2.5kg', '顺丰冷链', '果径28-30mm', '原箱进口', '新鲜直达'] },

        // 美妆护肤
        { id: 14, name: '兰蔻 小黑瓶精华肌底液 50ml 第二代 修护维稳', category: 6, price: 1080, oldPrice: 1280, imgColor: '#1a1a2e', img: 'images/lancome-serum.png', sold: 21000, tag: '自营', rating: 4.9, desc: '第二代小黑瓶，修护肌肤屏障，维稳强韧', features: ['50ml', '第二代', '修护屏障', '强韧肌底', '适合所有肤质', '法国进口'] },
        { id: 15, name: 'SK-II 神仙水 护肤精华露 230ml 经典版', category: 6, price: 1370, oldPrice: 1590, imgColor: '#c0c0c0', img: 'images/skii-essence.png', sold: 18000, tag: '自营', rating: 4.8, desc: '超过90%天然酵母精粹PITERA™，改善肤质', features: ['230ml', 'PITERA™', '改善肤质', '细腻毛孔', '提亮肤色', '日本进口'] },

        // 运动户外
        { id: 16, name: '迪卡侬 山地自行车 ST100 27.5英寸 21速 铝合金', category: 7, price: 1499, oldPrice: 1799, imgColor: '#ff6600', img: 'images/decathlon-bike.png', sold: 6700, tag: '运动', rating: 4.5, desc: '铝合金车架，21速变速，机械碟刹，避震前叉', features: ['27.5英寸', '21速', '铝合金', '机械碟刹', '避震前叉', '承重120kg'] },
        { id: 17, name: '李宁 跑步鞋 超轻21代 男款 䨻科技 透气减震', category: 7, price: 499, oldPrice: 699, imgColor: '#00a8ff', img: 'images/lining-shoes.png', sold: 31000, tag: '国货', rating: 4.7, desc: '䨻科技中底，轻量透气，䨻丝鞋面', features: ['䨻科技', '超轻21代', '透气鞋面', '减震回弹', '耐磨外底', '280g超轻'] },

        // 家居家装
        { id: 18, name: '网易严选 人体工学椅 电脑椅 办公椅 可躺转椅', category: 9, price: 1299, oldPrice: 1699, imgColor: '#4a4a4a', img: 'images/chair-ergonomic.png', sold: 12000, tag: '自营', rating: 4.6, desc: '人体工学设计，4档后仰锁定，透气网布', features: ['人体工学', '4档锁定', '透气网布', '可调扶手', 'SGS认证', '承重150kg'] },
        { id: 19, name: '全友家居 现代简约 真皮沙发 三人位 小户型', category: 9, price: 3299, oldPrice: 4599, imgColor: '#d4a574', img: 'images/sofa-leather.png', sold: 5400, tag: '家具', rating: 4.5, desc: '头层牛皮，高回弹海绵，实木框架，小户型首选', features: ['头层牛皮', '高回弹海绵', '实木框架', '三人位', '免安装', '质保3年'] },

        // 母婴玩具
        { id: 20, name: '乐高 机械组 兰博基尼 Sián FKP 37 拼装积木', category: 11, price: 2999, oldPrice: 3699, imgColor: '#4caf50', img: 'images/lego-lambo.png', sold: 4200, tag: '玩具', rating: 4.9, desc: '3696颗粒，1:8比例还原，可动V12引擎', features: ['3696颗粒', '1:8比例', '可动引擎', '18岁+', '收藏级', '意大利超跑'] },
    ],

    // ============ 轮播图 ============
    banners: [
        { title: '618狂欢节', subtitle: '全场低至5折，爆款直降', bg: 'linear-gradient(135deg, #e1251b, #ff6b6b)' },
        { title: '手机超级品牌日', subtitle: '华为/苹果/小米 最高立减2000元', bg: 'linear-gradient(135deg, #0a5ca8, #4a90e2)' },
        { title: '家电以旧换新', subtitle: '最高补贴1000元 免费上门回收', bg: 'linear-gradient(135deg, #2ba14b, #5dcb73)' },
        { title: '乐选购超市周年庆', subtitle: '满199减100 买一送一', bg: 'linear-gradient(135deg, #e6a81c, #f0c050)' },
        { title: '图书每满100减50', subtitle: '百万好书 畅享阅读', bg: 'linear-gradient(135deg, #8b3a8b, #c060c0)' },
    ],

    // ============ 秒杀商品（取前5个） ============
    get seckillProducts() {
        return this.products.slice(0, 5);
    },

    // ============ 楼层分类 ============
    floors: [
        { id: 1, name: '手机通讯', icon: '📱', categoryId: 1 },
        { id: 2, name: '电脑办公', icon: '💻', categoryId: 2 },
        { id: 3, name: '家用电器', icon: '🏠', categoryId: 3 },
        { id: 4, name: '服饰鞋靴', icon: '👗', categoryId: 4 },
    ],

    // ============ 获取某分类商品 ============
    getProductsByCategory(categoryId) {
        return this.products.filter(p => p.category === categoryId);
    },

    // ============ 获取商品详情 ============
    getProductById(id) {
        return this.products.find(p => p.id === parseInt(id));
    },

    // ============ 搜索商品 ============
    searchProducts(keyword) {
        const kw = keyword.toLowerCase();
        return this.products.filter(p =>
            p.name.toLowerCase().includes(kw) ||
            p.desc.toLowerCase().includes(kw)
        );
    },
};

// ============ 用户数据管理 ============
const UserManager = {
    // 获取所有用户
    getUsers() {
        const users = localStorage.getItem('jd_users');
        return users ? JSON.parse(users) : [];
    },

    // 注册
    register(userData) {
        const users = this.getUsers();
        if (users.find(u => u.username === userData.username)) {
            return { success: false, message: '用户名已存在' };
        }
        if (users.find(u => u.email === userData.email)) {
            return { success: false, message: '邮箱已被注册' };
        }
        const newUser = {
            ...userData,
            id: Date.now(),
            avatar: userData.username.charAt(0).toUpperCase(),
            level: '普通会员',
            createTime: new Date().toISOString(),
        };
        users.push(newUser);
        localStorage.setItem('jd_users', JSON.stringify(users));
        return { success: true, message: '注册成功' };
    },

    // 登录
    login(username, password) {
        const users = this.getUsers();
        const user = users.find(u => u.username === username && u.password === password);
        if (!user && !users.find(u => u.email === username && u.password === password)) {
            return { success: false, message: '用户名或密码错误' };
        }
        const foundUser = users.find(u =>
            (u.username === username || u.email === username) && u.password === password
        );
        localStorage.setItem('jd_currentUser', JSON.stringify(foundUser));
        return { success: true, message: '登录成功', user: foundUser };
    },

    // 退出
    logout() {
        localStorage.removeItem('jd_currentUser');
    },

    // 获取当前用户
    getCurrentUser() {
        const user = localStorage.getItem('jd_currentUser');
        return user ? JSON.parse(user) : null;
    },

    // 更新用户信息
    updateUser(userData) {
        const users = this.getUsers();
        const index = users.findIndex(u => u.id === userData.id);
        if (index !== -1) {
            users[index] = { ...users[index], ...userData };
            localStorage.setItem('jd_users', JSON.stringify(users));
            localStorage.setItem('jd_currentUser', JSON.stringify(users[index]));
            return { success: true, message: '更新成功' };
        }
        return { success: false, message: '用户不存在' };
    },
};

// ============ 购物车管理 ============
const CartManager = {
    getCart() {
        const cart = localStorage.getItem('jd_cart');
        if (!cart) return [];
        try {
            return JSON.parse(cart);
        } catch (e) {
            console.error('购物车数据解析错误:', e);
            return [];
        }
    },

    saveCart(cart) {
        localStorage.setItem('jd_cart', JSON.stringify(cart));
        this.updateCartCount();
    },

    addItem(productId, quantity = 1, spec = '默认') {
        const cart = this.getCart();
        const product = JDData.getProductById(productId);
        if (!product) return { success: false, message: '商品不存在' };
        
        const existing = cart.find(item => item.productId === parseInt(productId) && item.spec === spec);
        if (existing) {
            existing.quantity += quantity;
            // 同步更新商品最新信息（防止旧数据缺少字段）
            existing.name = product.name;
            existing.price = product.price;
            existing.imgColor = product.imgColor;
            existing.img = product.img || '';
        } else {
            cart.push({
                id: Date.now(),
                productId: parseInt(productId),
                name: product.name,
                price: product.price,
                imgColor: product.imgColor,
                img: product.img || '',
                quantity,
                spec,
                checked: true,
            });
        }
        this.saveCart(cart);
        return { success: true, message: '已加入购物车' };
    },

    removeItem(cartItemId) {
        let cart = this.getCart();
        cart = cart.filter(item => item.id !== cartItemId);
        this.saveCart(cart);
    },

    clearCart() {
        localStorage.setItem('jd_cart', '[]');
        this.updateCartCount();
    },

    updateQuantity(cartItemId, quantity) {
        const cart = this.getCart();
        const item = cart.find(i => i.id === cartItemId);
        if (item) {
            item.quantity = Math.max(1, parseInt(quantity));
            this.saveCart(cart);
        }
    },

    toggleCheck(cartItemId) {
        const cart = this.getCart();
        const item = cart.find(i => i.id === cartItemId);
        if (item) {
            item.checked = !item.checked;
            this.saveCart(cart);
        }
    },

    toggleAllCheck(checked) {
        const cart = this.getCart();
        cart.forEach(item => item.checked = checked);
        this.saveCart(cart);
    },

    getCheckedItems() {
        return this.getCart().filter(item => item.checked);
    },

    getTotalPrice() {
        return this.getCheckedItems().reduce((sum, item) => sum + item.price * item.quantity, 0);
    },

    getTotalCount() {
        return this.getCart().reduce((sum, item) => sum + item.quantity, 0);
    },

    getCheckedCount() {
        return this.getCheckedItems().reduce((sum, item) => sum + item.quantity, 0);
    },

    clearChecked() {
        let cart = this.getCart();
        cart = cart.filter(item => !item.checked);
        this.saveCart(cart);
    },

    updateCartCount() {
        const count = this.getTotalCount();
        const els = document.querySelectorAll('.cart-count');
        els.forEach(el => { el.textContent = count; el.style.display = count > 0 ? 'inline' : 'none'; });
    },
};

// ============ 订单管理 ============
const OrderManager = {
    getOrders() {
        const orders = localStorage.getItem('jd_orders');
        return orders ? JSON.parse(orders) : [];
    },

    saveOrders(orders) {
        localStorage.setItem('jd_orders', JSON.stringify(orders));
    },

    createOrder(orderData) {
        const orders = this.getOrders();
        const order = {
            id: 'JD' + Date.now(),
            ...orderData,
            status: '待付款',
            createTime: new Date().toISOString(),
        };
        orders.unshift(order);
        this.saveOrders(orders);
        return order;
    },

    getUserOrders() {
        const user = UserManager.getCurrentUser();
        if (!user) return [];
        return this.getOrders().filter(o => o.userId === user.id);
    },

    getOrderById(orderId) {
        return this.getOrders().find(o => o.id === orderId);
    },

    updateOrderStatus(orderId, status) {
        const orders = this.getOrders();
        const order = orders.find(o => o.id === orderId);
        if (order) {
            order.status = status;
            this.saveOrders(orders);
        }
    },
};

// ============ 地址管理 ============
const AddressManager = {
    getAddresses() {
        const addrs = localStorage.getItem('jd_addresses');
        return addrs ? JSON.parse(addrs) : [
            { id: 1, name: '张三', phone: '138****8888', province: '广东省', city: '深圳市', district: '南山区', detail: '科技园路1号乐选购大厦', isDefault: true, tag: '公司' },
        ];
    },

    saveAddresses(addrs) {
        localStorage.setItem('jd_addresses', JSON.stringify(addrs));
    },

    addAddress(addr) {
        const addrs = this.getAddresses();
        addr.id = Date.now();
        if (addr.isDefault) {
            addrs.forEach(a => a.isDefault = false);
        }
        addrs.push(addr);
        this.saveAddresses(addrs);
    },
};

// ============ 工具函数 ============
function showToast(message, duration = 2000) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), duration);
}

function formatPrice(price) {
    return '¥' + price.toFixed(2);
}

function getUrlParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// ============ 初始化公共头部 ============
function initCommonHeader() {
    const user = UserManager.getCurrentUser();
    const topBarHTML = `
        <div class="top-bar">
            <div class="container">
                <div class="location">
                    <a href="index.html">📍 送至 深圳</a>
                </div>
                <div class="user-links">
                    ${user
                        ? `<span style="color:#ccc;">你好，${user.username}</span>
                           <span class="sep">|</span>
                           <a href="profile.html">个人中心</a>
                           <span class="sep">|</span>
                           <a href="order.html">我的订单</a>
                           <span class="sep">|</span>
                           <a href="#" onclick="UserManager.logout();location.reload();">退出</a>`
                        : `<a href="login.html">你好，请登录</a>
                           <span class="sep">|</span>
                           <a href="register.html">免费注册</a>`
                    }
                    <span class="sep">|</span>
                    <a href="order.html">我的订单</a>
                    <span class="sep">|</span>
                    <a href="profile.html">客户服务</a>
                </div>
            </div>
        </div>
    `;

    const headerHTML = `
        <div class="header">
            <div class="container">
                <div class="logo">
                    <a href="index.html"><h1>乐选购<span>LEXUAN.COM</span></h1></a>
                </div>
                <div class="search-box">
                    <input type="text" id="searchInput" placeholder="搜索乐选购商品，如：手机、电脑、家电..." onkeydown="if(event.key==='Enter') doSearch()">
                    <button onclick="doSearch()">🔍</button>
                </div>
                <a href="cart.html" class="cart-icon">
                    🛒 我的购物车
                    <span class="cart-count" style="display:${CartManager.getTotalCount() > 0 ? 'inline' : 'none'}">${CartManager.getTotalCount()}</span>
                </a>
            </div>
        </div>
        <div class="nav">
            <div class="container">
                <div class="all-category">
                    全部商品分类 ▼
                    <ul class="category-dropdown">
                        ${JDData.categories.map(c => `<li onclick="location.href='search.html?cat=${c.id}'">${c.icon} ${c.name}</li>`).join('')}
                    </ul>
                </div>
                <div class="nav-links">
                    <a href="index.html" class="active">首页</a>
                    <a href="search.html?cat=1">手机</a>
                    <a href="search.html?cat=2">电脑</a>
                    <a href="search.html?cat=3">家电</a>
                    <a href="search.html?cat=4">服饰</a>
                    <a href="search.html?cat=5">生鲜</a>
                    <a href="search.html?cat=6">美妆</a>
                </div>
            </div>
        </div>
    `;

    document.getElementById('commonTopBar').innerHTML = topBarHTML;
    document.getElementById('commonHeader').innerHTML = headerHTML;
}

function doSearch() {
    const keyword = document.getElementById('searchInput').value.trim();
    if (keyword) {
        window.location.href = 'search.html?q=' + encodeURIComponent(keyword);
    }
}

// ============ 初始化测试账号 ============
function initTestAccount() {
    const users = UserManager.getUsers();
    if (!users.find(u => u.username === 'zhangle')) {
        UserManager.register({
            username: 'zhangle',
            email: 'zhangle@qq.com',
            phone: '13800138000',
            password: 'ZhangLe123',
        });
    }
}

// 页面加载时更新购物车数量
document.addEventListener('DOMContentLoaded', () => {
    initTestAccount();
    CartManager.updateCartCount();
});
