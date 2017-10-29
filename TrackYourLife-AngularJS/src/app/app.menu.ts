import {AppEnums} from "./app.constants";

const r = AppEnums.routes;
export const MENU = [
  {
    path: r.pages,
    children: [
      {
        path: r.home,
        data: {
          menu: {
            title: 'Home',
            icon: null,
            selected: true,
            expanded: false,
            order: 0,
            claims: []
          }
        }
      },

      {
        path: ['tests'],
        data: {
          menu: {
            title: 'Testing',
            icon: null,
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
            },
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
