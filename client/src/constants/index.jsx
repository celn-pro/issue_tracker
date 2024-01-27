import {User, BarChart, Lock, Share, Layout, LogOut, Settings, Moon} from 'lucide-react'

export const sectionInfo = [
		{ name: 'WelcomeHod', message: 'Head of Department (HOD)'},
		{ name: 'WelcomeStaff', message: 'Staff' },
		{ name: 'FAQs', message: 'Faqs' },
		{ name: 'Feedback', message: 'feedback' },
		{ name: 'Submit', message: 'Submit' },
		{nam: 'Analytics', message:'Analytics'},
		{ name: 'Track', message: 'Track' },
		
	]


 export const ICONS_INFO = [
	  { name: 'undo', togglePrevSelectedNav: true, toggleSelectedNav: true, source:'icons/undo.png'},
	  { name: 'redo', togglePrevSelectedNav: true, toggleSelectedNav: true, source: 'icons/redo.png' },
	  { name: 'brightness-and-contrast',darkTheme: true, source: 'icons/brightness-and-contrast.png' },
  ]

  export const SELECTED_PAGES = [
	{name: 'Home', togglePrevSelectedNav: true, toggleSelectedNav: true, setChangeMenu: true, setIsOpen:true},
	{name: 'Submit', togglePrevSelectedNav: true, toggleSelectedNav: true, setChangeMenu: true, setIsOpen:true},
	{name: 'Track', togglePrevSelectedNav: true, toggleSelectedNav: true, setChangeMenu: true, setIsOpen:true},
	{name: 'SignupHod',label: 'Signup', togglePrevSelectedNav: true, toggleSelectedNav: true, setChangeMenu: true, setIsOpen:true},
	{name: 'LoginHod', label: 'Login',togglePrevSelectedNav: true, toggleSelectedNav: true, setChangeMenu: true, setIsOpen:true},
	{name: 'SignupStaff', label: 'Signup',togglePrevSelectedNav: true, toggleSelectedNav: true, setChangeMenu: true, setIsOpen:true},
	{name: 'LoginStaff', label:'Login',togglePrevSelectedNav: true, toggleSelectedNav: true, setChangeMenu: true, setIsOpen:true}
  ]

  export const ADMIN_SIDEBAR = [
	{name: 'Profile', icon: <User className='w-[15px]' />},
	{name: 'Stats', icon: <BarChart clas='w-[15px]sName'/>},
	{name:'Aunthenticate', icon: <Lock className='w-[15px]' />},
	{name:'Delegate', icon: <Share className='w-[15px]' />},
	{name:'WorkBoard', icon: <Layout className='w-[15px]' /> },
	{name:'Logout', icon: <LogOut className='w-[15px]' /> },
	{name:'Settings', icon: <Settings className='w-[15px]' />},
	{name:'Dark', icon: <Moon className='w-[15px]' />}
  ]

  export const DATA = [
	{
		title: 'i just got hacked', desc: 'i just cant login to my account the main problem is that the system is just annoying all the time i just cant login to my account the main problem is that the system is just annoying all the time i just cant login to my account the main problem is that the system is just annoying all the time i just cant login to my account the main problem is that the system is just annoying all the time',
		name: 'Stanslaus Kiman', status: 'closed', date: '2024-01-24 11:12', regNo: 873667762, clas: 'OD22COE', phone: '0621345678', frame: '1y', category: 'od', scope: 'accademic'
	},
	{
		title: 'No way i got no id card', desc: 'i just cant login to my account the main problem is that the system is just annoying all the time',
		name: 'Ayubu Joseph', status: 'open', date: '2024-01-24 11:12', frame: '1w', category: 'beng', scope: 'accademic'
	},
	{
		title: 'No way i got no id card', desc: 'i just cant login to my account the main problem is that the system is just annoying all the time',
		name: 'Sally Issa', status: 'open', date: '2024-01-24 11:12', frame: '1m', category: 'beng', scope: 'accademic'
	},
	{
		title: 'No way i got no id card', desc: 'i just cant login to my account the main problem is that the system is just annoying all the time',
		name: 'Mit Shigon', status: 'closed', date: '2024-01-24 11:12', frame: '1y', category: 'beng', scope: 'accademic'
	},
	{
		title: 'No way i got no id card', desc: 'i just cant login to my account the main problem is that the system is just annoying all the time',
		name: 'Ayubu Joseph', status: 'open', date: '2024-01-24 11:12', frame: '1w', category: 'od', scope: 'accademic'
	},
	{
		title: 'No way i got no id card', desc: 'i just cant login to my account the main problem is that the system is just annoying all the time',
		name: 'Ayubu Joseph', status: 'open', date: '2024-01-24 11:12', frame: '1y', category: 'od', scope: 'accademic'
	},
	{
		title: 'No way i got no id card', desc: 'i just cant login to my account the main problem is that the system is just annoying all the time',
		name: 'James John', status: 'never attended', date: '2024-01-24 11:12', frame: '1m', category: 'beng', scope: 'others'
	},
	{
		title: 'No way i got no id card', desc: 'i just cant login to my account the main problem is that the system is just annoying all the time',
		name: 'James John', status: 'open', date: '2024-01-24 11:12', frame: '1m', category: 'beng', scope: 'fees'
	},
	{
		title: 'i just got hacked', desc: 'i just cant login to my account the main problem is that the system is just annoying all the time i just cant login to my account the main problem is that the system is just annoying all the time i just cant login to my account the main problem is that the system is just annoying all the time i just cant login to my account the main problem is that the system is just annoying all the time',
		name: 'Kimbo Jr', status: 'closed', date: '2024-01-24 11:12', regNo: 873667762, clas: 'OD22COE', phone: '0621345678', frame: '1y', category: 'od', scope: 'accademic'
	},
	{
		title: 'No way i got no id card', desc: 'i just cant login to my account the main problem is that the system is just annoying all the time',
		name: 'Mathew Matt', status: 'open', date: '2024-01-24 11:12', frame: '1w', category: 'beng', scope: 'fees'
	},
	{
		title: 'No way i got no id card', desc: 'i just cant login to my account the main problem is that the system is just annoying all the time',
		name: 'Richal Son', status: 'never attended', date: '2024-01-24 11:12', frame: '1w', category: 'od', scope: 'fees'
	},
	{
		title: 'No way i got no id card', desc: 'i just cant login to my account the main problem is that the system is just annoying all the time',
		name: 'Kattie chow', status: 'open', date: '2024-01-24 11:12', frame: '1m', category: 'beng', scope: 'others'
	},
]