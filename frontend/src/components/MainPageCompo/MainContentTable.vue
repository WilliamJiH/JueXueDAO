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
      cards: [
        {
          title: '基于深度学习的图像分类方法研究',
          authors: ['孟丹 '],
          date: '2021-05-01',
          category: '计算机科学',
          desc: '图像分类是模式识别、机器学习和人工智能的重要基础,图像分类一般包括感兴趣区域选取、特征提取以及分类器建模三个步骤,其中,图像的特征提取是完成其他任务的重要基础。而在多数模式识别场景下,合适的特征表达是其中的关键环节,直接影响着整个分类系统的性能。图像分类是模式识别、机器学习和人工智能的重要基础,图像分类一般包括感兴趣区域选取、特征提取以及分类器建模三个步骤,其中,图像的特征提取是完成其他任务的重要基础。而在多数模式识别场景下,合适的特征表达是其中的关键环节,直接影响着整个分类系统的性能图像分类是模式识别、机器学习和人工智能的重要基础,图像分类一般包括感兴趣区域选取、特征提取以及分类器建模三个步骤,其中,图像的特征提取是完成其他任务的重要基础。而在多数模式识别场景下,合适的特征表达是其中的关键环节,直接影响着整个分类系统的性能',
          imgSrc: '',
        },
        {
          title: '自然语言处理技术下电网敏感客户画像多特征提取方法',
          authors: ['刘振华', '苏立伟', '苏华权'],
          date: '2021-05-01',
          category: '计算机科学',
          desc: '为快速、准确地识别和认知电网客户,并制定针对性、精细化、个性化的服务方案,从而提升服务质量与效率,该文提出一种自然语言处理技术下电网敏感客户画像多特征提取方法。基于电力系统业务需求方向,选取头脑风暴方式确定电网敏感客户画像标签本相,利用德尔菲法确定和完善与电网业务具有高度相关的标签,由此获取具有应用性的电网敏感客户画像标签。',
          imgSrc: '',
        },
        {
          title: '基于深度学习的图像分类方法研究',
          authors: ['孟丹 '],
          date: '2021-05-01',
          category: '计算机科学',
          desc: '图像分类是模式识别、机器学习和人工智能的重要基础,图像分类一般包括感兴趣区域选取、特征提取以及分类器建模三个步骤,其中,图像的特征提取是完成其他任务的重要基础。而在多数模式识别场景下,合适的特征表达是其中的关键环节,直接影响着整个分类系统的性能。',
          imgSrc: 'https://picsum.photos/600/300/?image=25',
        },
      ],
    }
  },
}
</script>

<style>
.table-caption {
  margin: 0rem 1rem;
  font-size: 1.5rem;
}
</style>
