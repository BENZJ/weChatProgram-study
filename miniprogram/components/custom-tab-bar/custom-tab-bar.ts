// components/custom-tab-bar.ts
Component({

  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {
    // 组件的内部数据
    active: 0,
    list: [
      {
        pagePath: "/pages/index/index",
        text: "首页",
        // iconPath: "./assets/home.png",
        // selectedIconPath: "./assets/home-active.png"
      },
      {
        pagePath: "/pages/store/store",
        text: "商城",
        // iconPath: "./assets/user.png",
        // selectedIconPath: "./assets/user-active.png"
      },
      {
        pagePath: "/pages/shopping-cart/shopping-cart",
        text: "购物车",
        // iconPath: "./assets/user.png",
        // selectedIconPath: "./assets/user-active.png"
      },
      {
        pagePath: "/pages/logs/logs",
        text: "我的",
        // iconPath: "./assets/user.png",
        // selectedIconPath: "./assets/user-active.png"
      }
    ]
  },

  pageLifetimes: {
    show() {
      this.updateActiveTab();
    }
  },

  /**
   * Component methods
   */
  methods: {
    onChange(event: any) {
      const url = this.data.list[event.currentTarget.dataset.index].pagePath;
      wx.redirectTo({ url });
      this.setData({ active: event.currentTarget.dataset.index});
    },
    updateActiveTab() {
      // 获取当前页面栈
      const pages = getCurrentPages();
      console.log(pages)
      const currentPage = pages[pages.length - 1].route;
      console.log(currentPage)
      
      // 匹配当前页面与tab列表，更新active状态
      const list = this.data.list;
      const activeIndex = list.findIndex(item => `/${currentPage}` === item.pagePath);
      if (activeIndex !== -1) {
        this.setData({ active: activeIndex });
      }
    },
    init() {
      // 初始化数据
    }
  }
})