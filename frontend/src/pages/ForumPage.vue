<template>
  <div>
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
    />

    <div class="container">
      <div class="row clearfix">
        <div class="col-lg-12">
          <div class="card chat-app">
            <div id="plist" class="people-list">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><i class="fa fa-search"></i
                  ></span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                />
              </div>
              <ul class="list-unstyled chat-list mt-2 mb-0">
                <li class="clearfix">
                  <div class="row">
                    <div
                      class="col-3 p-0"
                      style="display: flex; justify-content: center"
                    >
                      <img
                        src="../assets/images/user_article4.png"
                        alt="avatar"
                      />
                    </div>
                    <div class="col-9 p-0">
                      <div class="about">
                        <div class="name">绝学Dao社区搭建与规则创建</div>
                        <div class="status">
                          <i class="fa fa-circle online"></i> 5人上线
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="clearfix">
                  <div class="row">
                    <div
                      class="col-3 p-0"
                      style="display: flex; justify-content: center"
                    >
                      <img
                        src="https://hbr.org/resources/images/article_assets/2016/11/R1701J_MOHAMED_A.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div class="col-9 p-0">
                      <div class="about">
                        <div class="name">区块链技术研究</div>
                        <div class="status">
                          <i class="fa fa-circle online"></i> 10人上线
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="clearfix">
                  <div class="row">
                    <div
                      class="col-3 p-0"
                      style="display: flex; justify-content: center"
                    >
                      <img
                        src="https://s.yimg.com/ny/api/res/1.2/C2X8_79YIyZozRoEm9fm2A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://s.yimg.com/os/creatr-uploaded-images/2022-09/1a4d69d0-3373-11ed-bbff-696e46a8c2af"
                        alt="avatar"
                      />
                    </div>
                    <div class="col-9 p-0">
                      <div class="about">
                        <div class="name">别搞学术了来玩游戏吧！</div>
                        <div class="status">
                          <i class="fa fa-circle online"></i> 100人上线
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="clearfix">
                  <div class="row">
                    <div
                      class="col-3 p-0"
                      style="display: flex; justify-content: center"
                    >
                      <img
                        src="https://images.chinatimes.com/newsphoto/2019-11-18/656/20191118001939.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div class="col-9 p-0">
                      <div class="about">
                        <div class="name">振兴生化环材学术研究讨论小组</div>
                        <div class="status">
                          <i class="fa fa-circle offline"></i> 无人上线
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="chat">
              <div class="chat-header clearfix">
                <div class="row">
                  <div
                    class="col-lg-6"
                    style="
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    "
                  >
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#view_info"
                    >
                      <img
                        src="../assets/images/user_article4.png"
                        alt="avatar"
                      />
                    </a>
                    <div class="chat-about">绝学Dao社区搭建与规则创建</div>
                  </div>
                  <div class="col-lg-6 hidden-sm text-right">
                    <a
                      href="javascript:void(0);"
                      class="btn btn-outline-secondary"
                      ><i class="fa fa-camera"></i
                    ></a>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-outline-primary"
                      ><i class="fa fa-image"></i
                    ></a>
                    <a href="javascript:void(0);" class="btn btn-outline-info"
                      ><i class="fa fa-cogs"></i
                    ></a>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-outline-warning"
                      ><i class="fa fa-question"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="chat-history">
                <ul class="m-b-0">
                  <li class="clearfix">
                    <div class="message-data text-left">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="avatar"
                      />
                      <span class="message-data-time">黄兴德教授</span>
                    </div>
                    <div class="message other-message float-left">
                      我提议把社区的规则写在一个文档里，方便大家查看。
                    </div>
                  </li>
                  <li class="clearfix">
                    <div class="message-data text-left"></div>
                    <div class="message my-message float-right">
                      写一个白皮书？好呀好呀！
                    </div>
                  </li>
                  <li class="clearfix">
                    <div class="message-data text-left"></div>
                    <div class="message my-message float-right">
                      放在哪里呢? github上?
                    </div>
                  </li>
                  <li class="clearfix">
                    <div class="message-data text-left">
                      <img
                        src="https://www.nicepng.com/png/detail/180-1804731_zero-two-v-pink-haired-anime-girl-with.png"
                        alt="avatar"
                      />
                      <span class="message-data-time">李明德</span>
                    </div>
                    <div class="message other-message float-left">
                      这个提议好！
                    </div>
                  </li>
                  <li class="clearfix" v-if="newContent !== ''">
                    <div class="message-data text-left"></div>
                    <div class="message my-message float-right">
                      {{ newContent }}
                    </div>
                  </li>
                </ul>
              </div>
              <div class="chat-message clearfix">
                <div class="input-group mb-0">
                  <div class="input-group-prepend">
                    <span class="input-group-text"
                      ><i class="fa fa-send"></i
                    ></span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    v-model="msg"
                    v-on:keyup.enter="onEnter"
                    placeholder="Enter text here..."
                    ref="textInput"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForumPage',
  data() {
    return {
      newContent: '',
      msg: '',
    }
  },
  methods: {
    onEnter: function () {
      this.newContent = this.msg;
      this.$refs["textInput"].value = '';
      this.msg = '';
      console.log(this.$refs["textInput"])
    },
  },
}
</script>

<style scoped>
body {
  background-color: #f4f7f6;
  margin-top: 20px;
}
.card {
  background: #fff;
  transition: 0.5s;
  border: 0;
  margin-bottom: 30px;
  border-radius: 0.55rem;
  position: relative;
  width: 100%;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
}
.chat-app .people-list {
  width: 280px;
  position: absolute;
  left: 0;
  top: 0;
  padding: 20px;
  z-index: 7;
}

.chat-app .chat {
  margin-left: 280px;
  border-left: 1px solid #eaeaea;
}

.people-list {
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.people-list .chat-list li {
  padding: 10px 15px;
  list-style: none;
  border-radius: 3px;
}

.people-list .chat-list li:hover {
  background: #efefef;
  cursor: pointer;
}

.people-list .chat-list li.active {
  background: #efefef;
}

.people-list .chat-list li .name {
  font-size: 15px;
}

.people-list .chat-list img {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  object-fit: cover;
}

.people-list img {
  float: left;
  border-radius: 50%;
}

.people-list .about {
  float: left;
  padding-left: 8px;
}

.people-list .status {
  color: #999;
  font-size: 13px;
}

.chat .chat-header {
  padding: 15px 20px;
  border-bottom: 2px solid #f4f7f6;
}

.chat .chat-header img {
  float: left;
  border-radius: 40px;
  width: 3.5rem;
  height: 3.5rem;
  object-fit: cover;
}

.chat .chat-header .chat-about {
  float: left;
  padding-left: 10px;
  font-weight: 800;
}

.chat .chat-history {
  padding: 20px;
  border-bottom: 2px solid #fff;
}

.chat .chat-history ul {
  padding: 0;
}

.chat .chat-history ul li {
  list-style: none;
  margin-bottom: 30px;
}

.chat .chat-history ul li:last-child {
  margin-bottom: 0px;
}

.chat .chat-history .message-data {
  margin-bottom: 15px;
}

.chat .chat-history .message-data img {
  border-radius: 40px;
  width: 40px;
}

.chat .chat-history .message-data-time {
  color: #434651;
  padding-left: 6px;
}

.chat .chat-history .message {
  color: #444;
  padding: 18px 20px;
  line-height: 26px;
  font-size: 16px;
  border-radius: 7px;
  display: inline-block;
  position: relative;
}

.chat .chat-history .message:after {
  bottom: 100%;
  left: 7%;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: #fff;
  border-width: 10px;
  margin-left: -10px;
}

.chat .chat-history .other-message {
  background: #efefef;
}

.chat .chat-history .other-message:after {
  bottom: 100%;
  left: 30px;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: #efefef;
  border-width: 10px;
  margin-left: -10px;
}

.chat .chat-history .my-message {
  background: #e8f1f3;
  text-align: right;
}

.chat .chat-history .my-message:after {
  border-bottom-color: #e8f1f3;
  left: 93%;
}

.chat .chat-message {
  padding: 20px;
}

.online,
.offline,
.me {
  margin-right: 2px;
  font-size: 8px;
  vertical-align: middle;
}

.online {
  color: #86c541;
}

.offline {
  color: #e47297;
}

.me {
  color: #1d8ecd;
}

.float-right {
  float: right;
}

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: ' ';
  clear: both;
  height: 0;
}

@media only screen and (max-width: 767px) {
  .chat-app .people-list {
    height: 465px;
    width: 100%;
    overflow-x: auto;
    background: #fff;
    left: -400px;
    display: none;
  }
  .chat-app .people-list.open {
    left: 0;
  }
  .chat-app .chat {
    margin: 0;
  }
  .chat-app .chat .chat-header {
    border-radius: 0.55rem 0.55rem 0 0;
  }
  .chat-app .chat-history {
    height: 300px;
    overflow-x: auto;
  }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
  .chat-app .chat-list {
    height: 650px;
    overflow-x: auto;
  }
  .chat-app .chat-history {
    height: 600px;
    overflow-x: auto;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
  .chat-app .chat-list {
    height: 480px;
    overflow-x: auto;
  }
  .chat-app .chat-history {
    height: calc(100vh - 350px);
    overflow-x: auto;
  }
}
</style>
