<template>
  <div>
    <div class="table-caption">热门文章</div>
    <b-form-group>
      <b-form-radio-group
        class="content-table-radio-group"
        id="btn-radios-2"
        v-model="selected"
        button-variant="outline-primary"
        size="sm"
        name="radio-btn-outline"
        buttons
      >
        <b-form-radio
          style="
            margin: 0.5rem 1rem;
            border-radius: 0.4rem;
            box-shadow: rgb(136 136 136 / 11%) 3px 4px;
          "
          value="计算机科学"
          >计算机科学</b-form-radio
        >
        <b-form-radio
          style="
            margin: 0.5rem 1rem;
            border-radius: 0.4rem;
            box-shadow: rgb(136 136 136 / 11%) 3px 4px;
          "
          value="工程管理"
          >工程管理</b-form-radio
        >
        <b-form-radio
          style="
            margin: 0.5rem 1rem;
            border-radius: 0.4rem;
            box-shadow: rgb(136 136 136 / 11%) 3px 4px;
          "
          value="农林渔牧"
          >农林渔牧</b-form-radio
        >
        <b-form-radio
          style="
            margin: 0.5rem 1rem;
            border-radius: 0.4rem;
            box-shadow: rgb(136 136 136 / 11%) 3px 4px;
          "
          value="社会心理"
          >社会心理</b-form-radio
        >
        <b-form-radio
          style="
            margin: 0.5rem 1rem;
            border-radius: 0.4rem;
            box-shadow: rgb(136 136 136 / 11%) 3px 4px;
          "
          value="新能源"
          >新能源</b-form-radio
        >
      </b-form-radio-group>
    </b-form-group>
    <div class="row">
      <div class="col-md-6" v-for="(card, index) in cards" :key="index">
        <MainContentCard v-bind="card" />
      </div>
    </div>
  </div>
</template>

<script>
import MainContentCard from './MainContentCard.vue'
export default {
  name: 'MainContentTable',
  components: {
    MainContentCard,
  },
  data() {
    return {
      selected: '计算机科学',
      cards: [],
    }
  },
  mounted() {
    this.cards = this.$store.getters.getCards
  },
}
</script>

<style>
.table-caption {
  margin: 0rem 1rem;
  font-size: 1.5rem;
}
</style>
