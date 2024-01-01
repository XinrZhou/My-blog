<template>
    <h2>页面管理</h2>
    <el-button type="primary" text @click="dialogVisible = true">
        <el-icon><Plus /></el-icon>
        添加页面
    </el-button>
    <el-dialog
        v-model="dialogVisible"
        width="40%"
        center
        align-center
    >
        <el-form :model="pageInfo" label-width="60px" class="form-dialog">
            <el-form-item label="Name">
                <el-input v-model="page.name" clearable />
            </el-form-item>
            <el-form-item label="Description">
                <el-input v-model="page.description" clearable />
            </el-form-item>
            <el-form-item label="BackgroundUrl">
                <el-input v-model="page.backgroundUrl" clearable />
            </el-form-item>
        </el-form>
        <template #footer>
        <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="createPage">添加</el-button>
        </span>
        </template>
    </el-dialog>
    <div class="info-card" v-for="pageInfo in pageInfoList" :key="pageInfo.id">
        <el-form :model="pageInfo" label-width="60px">
            <el-form-item label="Name">
                <el-input v-model="pageInfo.name" clearable />
            </el-form-item>
            <el-form-item label="Description">
                <el-input v-model="pageInfo.description" clearable />
            </el-form-item>
            <el-form-item label="BackgroundUrl">
                <el-input v-model="pageInfo.backgroundUrl" clearable />
            </el-form-item>
        </el-form>
        <el-button color="#5d7430" plain @click="savePageInfo">Save</el-button>
        <el-divider />
    </div>
</template>

<script lang="ts" setup>
    import { Plus } from '@element-plus/icons-vue'
    import { usePageInfoStore } from '@/store/usePageInfoStore'
    import { ref, computed, watch, toRaw } from 'vue'
    import { PageInfo } from '@/types/type'
    import { ElMessage } from "element-plus"

    let store = usePageInfoStore()
    store.getPageInfoList()

    let page = ref < PageInfo >({})
    let pageInfoList = ref < PageInfo >({})
    let dialogVisible = ref <Boolean>(false)

    watch(() => store.pageInfoList, () => {
        pageInfoList.value = store.pageInfoList
    })

    let savePageInfo = () => {
        store.postPageInfo(toRaw(pageInfo.value))
    }

</script>


<style scoped>
    .el-button {
        margin: 20px 0;
        margin-right: 30px;
        border-radius: 10px;
    }

    .form-dialog {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .info-card {
        margin: 20px auto;
    }

    .el-input {
        width: 400px;
    }
</style>