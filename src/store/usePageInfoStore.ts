import { defineStore } from "pinia"
import { reqGetPageInfoByName, reqGetPageInfo, reqPostPageInfo } from "@/api/index.ts"
import { PageInfo } from '@/types/type'
import { ElMessage } from "element-plus"

export const usePageInfoStore = defineStore('pageInfo', {
    state: () => {
        return {
            pageInfo: {} as PageInfo,
            pageInfoList: [],
        }
    },
    actions: {
        // 获取页面信息（前台） --name
        getPageInfoByName(name: string) {
            reqGetPageInfoByName(name).then(res => {
                this.pageInfo = res.data.data.pageInfo
            }).catch(err => Promise.reject(err))
        },

        // 获取页面信息
        getPageInfoList() {
            reqGetPageInfo().then(res => {
                this.pageInfoList = res.data.data.pages
            }).catch(err => Promise.reject(err))
        },

        // 修改/创建页面
        postPageInfo(data: PageInfo) {
            reqPostPageInfo(data).then(res => {
                ElMessage.success(res.data.message)
            }).catch(err => Promise.reject(err))
        },

    }
})