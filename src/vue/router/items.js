const tab_class = () => import(/* webpackChunkName: "tabbar-class" */ '@/views/items/tabbar-class.vue');
const ItemSearch = () => import(/* webpackChunkName: "item-search" */ '@/views/items/search/');
const ItemList = () => import(/* webpackChunkName: "item-list" */ '@/views/items/list/');
const ItemDetail = () => import(/* webpackChunkName: "item-detail" */ '@/views/items/detail/');

const Tabbar = () => import(/* webpackChunkName: "Tabbar" */ '@/vue/components/Tabbar/');


export default [{
			path: "/items",
			name: "class",
			components: {default: tab_class, tabbar: Tabbar }
	},{
			path: "/items/search",
			name: "search",
			component: ItemSearch
	},{
			path: "/items/detail/:itemId",
			name: "detail",
			props: true,
			component: ItemDetail
	},{
			path: "/items/list",
			name: "list",
			component: ItemList,
			props: (route) => (route.query)
	}]