//账单
import Balance from '@/views/Mine/balance/balance'
import Recharge from '@/views/Mine/balance/recharge'
import Record from '@/views/Mine/balance/record'
import Carry from '@/views/Mine/balance/carry'

const dtmine = [
	{
		path: '/balance',
		name: "balance",
		component: Balance,
		meta: {
			index: 1
		},
	},
	{
		path: '/balance/recharge',
		name: "recharge",
		component: Recharge,
		meta: {
			index: 2
		},
	},
	{
		path: '/balance/recharge/record',
		name: "record",
		component: Record,
		meta: {
			index: 3
		},
	},
	{
		path: '/balance/carry',
		name: "Carry",
		component: Carry,
		meta: {
			index: 2
		},
	},
]

export default dtmine;