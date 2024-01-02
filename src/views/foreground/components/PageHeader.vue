<template>
    <div 
      class="background-div" 
      :style="{ backgroundImage: `url(data:image/jpeg;base64,${pageInfoR.backgroundUrl})`}"
    >
      <h1 style="font-size:60px;">{{ pageInfoR?.description }}</h1>
    </div>
</template>

<script lang="ts" setup>
    import { usePageInfoStore } from '@/store/usePageInfoStore'
    import { PAGE_TYPE } from '@/types/Const'
    import { PageInfo } from '@/types/type'
    import { defineProps, computed, ref, watch } from 'vue'

    let pageInfoStore = usePageInfoStore()

    let pageInfoR = ref < PageInfo >({})

    watch(() => pageInfoStore.pageInfo, () => {
        pageInfoR.value = pageInfoStore.pageInfo
    })

    const pageInfo = computed(() => pageInfoStore.pageInfo)
    const props = defineProps(['pageName'])

    pageInfoStore.getPageInfoByName(props.pageName)

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
    .background-div {
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        align-items: center;
        color: white;
        margin-bottom: 40px;
        background-repeat: no-repeat;
        background-size: cover;
        -moz-background-size: 100% 100%;
    }
</style>