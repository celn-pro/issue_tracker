import {User, BarChart, Lock, Share, Layout, LogOut, Settings, Moon,
	 Crown, Badge, Speech, Megaphone, ArrowUpWideNarrow, PinIcon, ShieldQuestion,BarChart2, Home} from 'lucide-react'

export const sectionInfo = [
	{name: 'Home', message: 'Home', icon: <Home className='w-[15px]' />},
	{name: 'Analytics', message: 'Analytics', icon: <BarChart2 className='w-[15px]' />},
	{name: 'WelcomeHod', message: 'Hod', icon: <Crown className='w-[15px]' />},
	{name: 'WelcomeStaff', message: 'Staff', icon: <Badge className='w-[15px]' />},
	{name: 'Track', message: 'Track', icon: <PinIcon className='w-[15px]' />},
	{name: 'Submit', message: 'Submit', icon: <ArrowUpWideNarrow className='w-[15px]' />},
	{name: 'FAQs', message: 'Faqs', icon: <Speech className='w-[15px]' />},
	{name: 'Feedback', message: 'feedback', icon: <Megaphone className='w-[15px]' />},
	]


 export const ICONS_INFO = [
	  {name: 'undo', togglePrevSelectedNav: true, toggleSelectedNav: true, source:'icons/undo.png'},
	  {name: 'redo', togglePrevSelectedNav: true, toggleSelectedNav: true, source: 'icons/redo.png'},
	  {name: 'brightness-and-contrast',darkTheme: true, source: 'icons/brightness-and-contrast.png'},
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
	{name: 'Stats', icon: <BarChart className='w-[15px]'/>},
	{name:'Aunthenticate', icon: <Lock className='w-[15px]' />},
	{name:'Delegate', icon: <Share className='w-[15px]' />},
	{name:'WorkBoard', icon: <Layout className='w-[15px]' />},
	{name:'Logout', icon: <LogOut className='w-[15px]' />},
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

export const statsDatas = [{
	w: {name: '7 days', change: 8, on_progress: 30, closed: 10, never_attended: 50},
	m: {name: 'last month', change: 11, on_progress: 40, closed: 80, never_attended: 90},
	y: {name: 'last year', change: 5, on_progress: 100, closed: 150, never_attended: 300},
	all: {name: 'all', change: 2, on_progress: 500, closed: 250, never_attended: 900},

}]

export const textList = ['dit-J0jK-RUvF-kU4m', 'dit-EWPT-OMRs-VHXZ', 'dit-GtvN-87HU-HjsA']

export const PERSON = [
	{name: 'Name', text:'Maganga SN'},
	{name: 'Email', text:'magangasn@gmail.com'},
	{name: 'password', text: '********'}
]

export const faq = [
	{
		title: 'what is odd22?',
		answer: 'odd22 is a simple yet powerfull system for submitting and tracking challenges that student meet at our campas'
	}, 
	{
		title: 'who is behind odd22?',
		answer: 'odd22 is owned by the campass iteself, though it was developed by odd22 enrolled students'
	},
	{
		title: 'who is behind odd22?',
		answer: 'odd22 is owned by the campass iteself, though it was developed by odd22 enrolled students'
	},
	{
		title: 'who is behind odd22?',
		answer: 'odd22 is owned by the campass iteself, though it was developed by odd22 enrolled students'
	},
	{
		title: 'who is behind odd22?',
		answer: 'odd22 is owned by the campass iteself, though it was developed by odd22 enrolled students'
	},
	{
		title: 'who is behind odd22?',
		answer: 'odd22 is owned by the campass iteself, though it was developed by odd22 enrolled students'
	},
]

export const inputText = [
	{index:0, name: 'name', placeholder: 'Enter Your Name'},
	{index:1, name: 'regId', placeholder: 'Registration #'},
	{index:2, name: 'class', placeholder: 'Your class i.e OD22COE'},
	{index:3, name: 'title', placeholder: 'Title of your problem'},
	{index:4, name: 'contact', placeholder: 'ie 0754-765-987'},
]

export const inputSignup = [
	{index: 0, placeholder: 'Your Name'},
	{index: 1, placeholder: 'Password'},
	{index: 2,placeholder: 'Verify password'},
	{index: 3, placeholder: 'Email'},
	{index: 4, placeholder: 'Aunthentication key #'},
]

export const department = ['COMPUTER', 'CIVIL', 'GS']
export const course = ['COE', 'IT', 'ETE']

