<template>
    <div class="info" :class="{ 'on-selected': selectOpen }">
        <goback-header :title="title"></goback-header>
        <form class="form-group">
          <div class="form-field">
              <label class="title">姓名</label>
              <input v-model="form.name" />
          </div>
          <div class="form-field" @click="select">
              <label class="title">性别</label>
              <span class="form-data">{{ form.sex ? '女' : '男' }}</span>
          </div>
          <div class="form-field">
              <label class="title">生日</label>
              <input type="date" v-model="form.date" />
          </div>
          <div class="form-field">
              <label class="title">身份</label>
              <span class="form-data">{{ form.identity }}</span>
          </div>
          <div class="form-field">
              <label class="title">签名</label>
              <textarea>{{ form.autograph }}</textarea>
          </div>
          <div class="form-field save" @click="save">保存</div>
        </form>
        <div class="select-item">
          <div class="module" @click="select(0)">
            男
          </div>
          <div class="module" @click="select(1)">
            女
          </div>
        </div>
    </div>
</template>

<script>

    import gobackHeader from '@/components/common/gobackHeader'

    export default {
        name: 'info',
        data(){
            return {
                title: '个人信息',
                form: {
                  name: '王某',
                  sex: 0,
                  date: '1990-09-24',
                  identity: '游客',
                  autograph: '你笑诚哥死得早，诚哥笑你日得少'
                },
                selectOpen: false,
            }
        },
        methods: {
            save(){
              browserHistory.goBack()
            },
            select(key){
              this.selectOpen = !this.selectOpen
              this.title = this.selectOpen ? '性别' : '个人信息'
              if (typeof key == 'number')
                this.form.sex = key
            }
        },
        components: {
            gobackHeader,
        }
    }
</script>
