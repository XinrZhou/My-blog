<template>
    <PageHeader :pageName="PAGE_TYPE.ABOUT" />
        <el-row  justify="center">
            <el-col :xs="22" :sm="20" :md="20" :lg="13" >
                <div>
                    <p style="text-align: center; margin: 20px;">
                        <el-icon style="margin-right: 5px">
                            <Clock />
                        </el-icon>更新于：{{articles[0]?.updateTime}}
                    </p>
                    <v-md-editor :model-value="articles[0]?.content" mode="preview" style="background-color: #f9f9f9;"></v-md-editor>
                </div>
            </el-col>
        </el-row>
</template>

<script setup lang='ts'>
    import PageHeader from '@/views/foreground/components/PageHeader.vue'
    import { ref, computed } from 'vue'
    import { useArticleStore } from '@/store/useArticleStore'
    import { StarFilled, Message } from '@element-plus/icons-vue'
    import { Clock } from '@element-plus/icons-vue'
    import { useUserInfoStore } from '@/store/useUserInfoStore'
    import router from '@/router'
    import { PAGE_TYPE } from '@/types/Const'

    const articleStore = useArticleStore()
    const userStore = useUserInfoStore()

    const user = computed(() => userStore.user)
    const articles = computed(() => articleStore.articles)
    const label = ref('myself')


    userStore.getUserInfo()
    articleStore.getArticleByLabel(label.value)


    const goArticleDetail = (aid: String) => {
        router.push({
            path: '/articles/detail',
            query: {
                id: aid
            }
        })
    }

</script>

<style scoped>
    /* Phone */
    @media screen and (max-width: 993px) {
        .background-div {
            height: 300px;
        }
    }

    /* PC */
    @media screen and (min-width: 992px) {
        .background-div {
            height: 460px;
        }
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", STHeiti, "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif;
    }

    .background-div {
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        color: white;
        border-radius: 10px;
        background-repeat: no-repeat;
        background-size: cover;
        -moz-background-size: 100% 100%;
    }

    .el-row {
        margin: 60px 0;
    }


    .about-avatar {
        width: 180px;
        height: 140px;
        border-radius: 8px;
        object-fit: cover;
    }

    .about-sign {
        margin-left: 10px;
        font: large bolder;
        color: gray;
    }

    .item-title {
        margin-top: 30px;
        margin-bottom: 20px;
    }

    /* connect */
    .connect-link {
        margin: 10px;
    }

</style>