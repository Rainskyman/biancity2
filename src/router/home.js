//账单
import Bill from '@/views/Home/children/bill'
import Bill_list from '@/views/Home/children/bill-list'
import Record from '@/views/Home/children/record'

const dthome = [

	{
		path: '/bill',
		name: "bill",
		component: Bill,
		meta: {
			index: 1
		},
	},
	{
		path: '/bill_list',
		name: "bill_list",
		component: Bill_list,
		meta: {
			index: 2
		},
	},
	{
		path: '/record',
		name: "record",
		component: Record,
		meta: {
			index: 1
		},
	}
]

export default dthome;