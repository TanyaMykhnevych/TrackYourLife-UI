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
            path: r.myDonorRequests,
            data: {
              menu: {
                title: 'My Donor Requests',
                icon: null,
                selected: true,
                expanded: false,
                order: 0,
                roles: [AppEnums.roles.donor]
              }
            },
          },
          {
            path: r.manageDonorRequests,
            data: {
              menu: {
                title: 'Manage Donor Requests',
                icon: null,
                selected: true,
                expanded: false,
                order: 0,
                roles: [AppEnums.roles.medicalEmployee]
              }
            },
          },
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
            path: r.managePatientRequests,
            data: {
              menu: {
                title: 'Manage Recipient Requests',
                icon: null,
                selected: true,
                expanded: false,
                order: 0,
                roles: [AppEnums.roles.medicalEmployee]
              }
            },
          },
          {
            path: r.myPatientRequests,
            data: {
              menu: {
                title: 'My Recipient Requests',
                icon: null,
                selected: true,
                expanded: false,
                order: 0,
                roles: [AppEnums.roles.patient]
              }
            },
          }
        ]
      }
    ]
  }
];
