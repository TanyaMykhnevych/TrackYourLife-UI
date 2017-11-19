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
          },
          {
            path: [r.manageOrganInfos],
            data: {
              menu: {
                title: 'Organ Infos',
                selected: true,
                expanded: false,
                order: 0,
                roles: [AppEnums.roles.admin]
              }
            }
          }
        ]
      },
      {
        path: r.donorRequest,
        data: {
          menu: {
            title: 'Donor Request',
            icon: null,
            selected: true,
            expanded: false,
            order: 0,
            roles: []
          }
        },
        children: [
          {
            path: r.create,
            data: {
              menu: {
                title: 'Create',
                icon: null,
                selected: true,
                expanded: false,
                order: 0,
                roles: [AppEnums.roles.donor]
              }
            },
          },
          {
            path: r.list,
            data: {
              menu: {
                title: 'List',
                icon: null,
                selected: true,
                expanded: false,
                order: 0,
                roles: [AppEnums.roles.donor, AppEnums.roles.medicalEmployee]
              }
            },
          }
        ]
      },
      {
        path: r.patientRequest,
        data: {
          menu: {
            title: 'Recipient Request',
            icon: null,
            selected: false,
            expanded: false,
            order: 0,
            roles: []
          }
        },
        children: [
          {
            path: r.list,
            data: {
              menu: {
                title: 'List',
                icon: null,
                selected: true,
                expanded: false,
                order: 0,
                roles: [AppEnums.roles.patient]
              }
            },
          },
          {
            path: r.create,
            data: {
              menu: {
                title: 'Create',
                icon: null,
                selected: true,
                expanded: false,
                order: 0,
                roles: [AppEnums.roles.medicalEmployee]
              }
            },
          },
          {
            path: r.manage,
            data: {
              menu: {
                title: 'Manage',
                icon: null,
                selected: true,
                expanded: false,
                order: 0,
                roles: [AppEnums.roles.medicalEmployee]
              }
            },
          }
        ]
      }
    ]
  }
];
