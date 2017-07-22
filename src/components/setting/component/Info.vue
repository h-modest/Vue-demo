<template>
    <div class="info">
        <goback-header :title="title"></goback-header>
        <form class="form-group">
            <div class="form-field">
                <label class="title">姓名</label>
                <input />            
            </div>
            <div class="form-field">
                <label class="title">性别</label>
                <span class="form-data"></span>
            </div>
            <div class="form-field">
                <label class="title">生日</label>
                <input />            
            </div>
            <div class="form-field">
                <label class="title">身份</label>
                <input />            
            </div>
            <div class="form-field">
                <label class="title">签名</label>
                <textarea></textarea>            
            </div>
            <div class="form-field save" @click="save">保存</div>
        </form>
    </div>
</template>

<script>

    import gobackHeader from '@/components/common/gobackHeader'

    export default {
        name: 'info',
        data(){
            return {
                title: '个人信息',
                name: '',
                sex: '男',
                date: '19900924',
            }
        },
        methods: {
            save(){
                
            }
        },
        components: {
            gobackHeader,
        }
    }
</script>