// components/category-side-bar.ts
Component({
  properties: {
    categories: {
      type: Array,
      value: ['分类1', '分类2', '分类3', '分类4'], // 示例分类数据
    },
    selectedCategory: {
      type: String,
      value: '',
    },
  },
  methods: {
    selectCategory(event: WechatMiniprogram.TouchEvent) {
      const category = event.currentTarget.dataset.category;
      this.setData({
        selectedCategory: category,
      });
      this.triggerEvent('onCategoryChange', { category });
    },
  },
});