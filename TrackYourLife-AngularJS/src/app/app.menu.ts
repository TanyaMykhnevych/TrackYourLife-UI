import {AppEnums} from "./app.constants";

const r = AppEnums.routes;
export const MENU = [
  {
    path: r.pages,
    children: [
      {
        path: r.manage,
        data: {
          menu: {
            title: 'Manage',
            icon: null,
            selected: true,
            expanded: false,
            order: 0,
            roles: [AppEnums.roles.admin]
          }
        },
        children: [
          {
            path: [r.clinics],
            data: {
              menu: {
                title: 'Clinics',
                selected: true,
                expanded: false,
                order: 0,
                roles: [AppEnums.roles.admin]
              }
            }
          }
        ]
      }
    ]
  }
];
