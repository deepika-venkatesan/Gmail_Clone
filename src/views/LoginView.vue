<template>
    <div id="LoginView" class="grid h-screen place-items-center">
        <div>
            {{ userStore }}
            <img width="280" src="img/glog.png" alt="">
            <div class="flex justify-center">
                <GoogleLogin :callback="callback" />

            </div>
        </div>

    </div>
</template>

<script setup>

    import  {useRouter} from 'vue-router'
    import { useUserStore } from '@/store/user-store';

    const router=useRouter()
    const userStore=useUserStore()



    const callback= async(response)=>{
        await userStore.getUserDetailsFromGoogle(response)
        setTimeout(() => { router.push('/email')}, 200)
}
</script>

<style lang="scss">
#UserComponent{
    .custom-shadow{
        box-shadow: -1px 1px 6px -2px rgba(36,36,36,0.58);
        -webkit-box-shadow: -1px 1px 6px -2px rgba(36,36,36,0.58);
        -moz-box-shadow: -1px 1px 6px -2px rgba(36,36,36,0.58);
    }
}
</style>