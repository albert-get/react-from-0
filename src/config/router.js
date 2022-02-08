import Login from '../pages/login'
import Order from '../pages/order'

const router =[
    {
        fid:'01',
        path:'/query',
        name:'工单查询',
        component:Order
    },
    {
        fid:'0201',
        path:'/order',
        name:'审核',
        component:Order
    },
    {
        fid:'0202',
        path:'/order',
        name:'定时任务管理',
        component:Order
    },
    {
        fid:'0205',
        path:'/distribution',
        name:'待分配的工单管理',
        component:Order
    },
    {
        fid:'0701',
        path:'/newCheckTask',
        name:'新建质检任务',
        component:Order
    },
    {
        fid:'0702',
        path:'/reviewCheckTask',
        name:'查看质检任务',
        component:Order
    },
    {
        fid:'0703',
        path:'/spotCheckResult',
        name:'质检抽查结果',
        component:Order
    },
    {
        fid:'0401',
        path:'/questionnaire',
        name:'问卷维护',
        component:Order
    },
    {
        fid:'0402',
        path:'/brokerage',
        name:'佣金模板设置',
        component:Order
    },
    {
        fid:'0403',
        path:'/notice',
        name:'通知管理',
        component:Order
    },
    {
        fid:'0404',
        path:'/documentation',
        name:'业务操作文档',
        component:Order
    },
    {
        fid:'0405',
        path:'/depositoryBank',
        name:'三方存管银行排序',
        component:Order
    },
    {
        fid:'0406',
        path:'/idcard',
        name:'身份证识别错误查询',
        component:Order
    },
    {
        fid:'0407',
        path:'/review',
        name:'审核要点',
        component:Order
    },
    {
        fid:'0408',
        path:'/united',
        name:'分公司派单配置',
        component:Order
    },
    {
        fid:'0409',
        path:'/fault',
        name:'故障备用线路配置',
        component:Order
    },
    {
        fid:'0301',
        path:'/userRoles',
        name:'系统角色',
        component:Order
    },
    {
        fid:'0302',
        path:'/perm',
        name:'权限管理',
        component:Order
    },
    {
        fid:'08',
        path:'/checkResult',
        name:'我的质检结果',
        component:Order
    },
    {
        fid:'05',
        path:'/history',
        name:'历史数据查询',
        component:Order
    },
    {
        path:'/userDocument',
        name:'业务操作文档',
        component:Order
    },
    {
        path:'/myNotice',
        name:'我的通知',
        component:Order
    },
]

export default router