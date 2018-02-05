<template>
  <header>
      <div class="head-container">
          <span class="logo-big"></span>
          <ul class="navi-list">
              <li class="navi-list-item"><span>home</span></li>
              <li class="navi-list-item"><span>videos</span></li>
              <li class="navi-list-item"><span>donate</span></li>
          </ul>
          <span class="login"></span>
      </div>
  </header>
</template>

<script>
export default {
  name: 'navi',
  data () {
    return {
      me: 'lyx'
    }
  }
}
</script>

<style scoped>
    header {
        background-color: green;
    }

    div.head-container {
        max-width: 1024px;
        margin: 0 auto;
    }

    span.logo-big {
        height: 46px;
        width: 224px;
        background-image: url('../assets/logo.png');
        background-position: -1px -1px;
        background-repeat: no-repeat;
        display: inline-block;
        cursor: pointer;
        margin-bottom: -4.8px;
    }

    span.logo-big:hover {
        background-position: -1px -48px;
    }

    ul.navi-list {
        list-style: none;
        display: block;
        float: right;
    }

    li.navi-list-item {
        display: inline-block;
        line-height: 1.5;
        padding: 8px 6px 8px 6px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
    }

    li > span:hover {
        color: white;
        cursor: pointer;
    }

</style>
