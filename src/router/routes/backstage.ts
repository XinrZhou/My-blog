import { createRouter } from "vue-router"

export default [
    {
        name: 'login',
        path: '',
        component: () => import('@/views/backstage/Login.vue'),
    },
    {
        name: 'backindex',
        path: 'index',
        component: () => import('@/views/backstage/index.vue'),
        children: [
            {
                name: 'usercenter',
                path: '',
                component: () => import('@/views/backstage/UserCenter.vue')
            },
            {
                name: 'blogmanagement',
                path: 'blogmanagement',
                component: () => import('@/views/backstage/BlogManagement.vue'),
                children:[
                    {
                        name: 'list',
                        path: '',
                        component: () => import('@/views/backstage/BlogManagement/BlogList.vue')
                    },
                    {
                        name: 'edit',
                        path: 'edit',
                        component: () => import('@/views/backstage/BlogManagement/BlogEdit.vue')
                    }
                ]
            },
            {
                name: 'pagemanagement',
                path: 'pagemanagement',
                component: () => import('@/views/backstage/PageManagement.vue')
            },
        ],
        meta: {
            role: 'ADMIN'
        }
    }
]