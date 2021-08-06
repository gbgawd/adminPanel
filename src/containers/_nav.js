export default [
  {
    _name: 'CSidebarNav',
    _children: [      
      {
        _name: 'CSidebarNavTitle',
        _children: ['Хэрэглэгч']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Статистик',
        to: '/dashboard',
        icon: 'cil-speedometer',        
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Хэрэглэгчид харах',
        to: '/users',
        icon: 'cil-user'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Мэдээллээ шинчлэх',
        to: '/editCard',
        icon: 'cil-pencil'
      },      
      {
        _name: 'CSidebarNavTitle',
        _children: ['Админ']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Карт удирдах',
        to: '/cards',
        icon: 'cil-user'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Хэрэглэгчийн хүсэлт',
        to: '/requests',
        icon: 'cil-pencil'
      }          
    ]
  }
]