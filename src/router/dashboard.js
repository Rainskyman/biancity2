import Home from "@/views/Home/index"
import Mine from "@/views/Mine/index"

export const routes = [{
		path: '/dashboard',
		redirect: '/dashboard/home'
	},
	{
		path: 'home',
		name: "home",
		component: Home,
		meta: {
			index: 0
		},
	},
	{
		path: 'mine',
		name: "mine",
		component: Mine,
		meta: {
			index: 0
		},
	}
];

export default routes;