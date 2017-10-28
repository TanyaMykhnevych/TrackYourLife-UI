import {AppEnums} from "./app.constants";

export const MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'My Dashboard',
            icon: null, //'fa fa-file-text-o',
            img: 'dist/assets/img/my dashboard_active.svg',
            unactiveimg: 'dist/assets/img/my dashboard_unactive.svg',
            selected: true,
            expanded: false,
            order: 0,
            claims: [AppEnums.claims.MyDashboard]
          }
        }
      },

      {
        path: ['tests'],
        data: {
          menu: {
            title: 'Testing',
            icon: null, //'fa fa-file-text-o',
            img: 'dist/assets/img/testing_active.svg',
            unactiveimg: 'dist/assets/img/testing_unactive.svg',
            selected: true,
            expanded: false,
            order: 0,
            claims: []
          }
        },
        children: [
          {
            path: 'scheduling',
            data: {
              menu: {
                title: 'Scheduling',
                icon: 'fa fa-chevron-right',
                notificationCount: 0,
                claims: [AppEnums.claims.Scheduling]
              }
            }
          },
          {
            path: 'test-scheduled',
            data: {
              menu: {
                title: 'Scheduled Tests',
                icon: 'fa fa-chevron-right',
                notificationCount: 0,
                claims: [AppEnums.claims.ScheduledTests]
              }
            }
          }
        ]
      }
    ]
  }
];
