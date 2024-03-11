// components/subcategory-card-list/subcategory-card-list.ts
Component({
  properties: {
    subcategoryName: {
      type: String,
      value: '小类名称',
    },
    productList: {
      type: Array,
      value: [
        { id: 1, name: '商品1', image: 'path/to/product1.jpg' },
        { id: 2, name: '商品2', image: 'path/to/product2.jpg' },
        // 更多商品...
      ],
    },
  },
  data: {
    // 组件内部数据
  },
  methods: {
    // 组件方法
  },
});