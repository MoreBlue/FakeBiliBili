// pages/indexBili/indexBili.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 首页导航数据
    navList:[],

    // 被点击的首页导航的菜单的索引
    currentIndexNav:0,

    // 轮播图数据
    swiperList:[],

    // 获取视频列表
    videoList:[]
  },
  // 点击首页导航按钮
  activeNav(e){
    this.setData({
      currentIndexNav:e.target.dataset.index
    });
  },
  /**
   * 获取首页导航数据
   */
  getNavList(){
    let that = this;
    //利用小程序内置发送请求的方法
    wx.request({
      url: 'https://www.fastmock.site/mock/5f4767c8e73c0e9f4b120d0f9fd76ca3/bili/navList',
      success(res){
        // console.log(res);
        if (res.data.code == 0) {
          that.setData({navList:res.data.data.navList});
        }
      }
    })
  },

  /**
   * 获取首页轮播图数据
   */
  getSwiperList(){
    let that = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/5f4767c8e73c0e9f4b120d0f9fd76ca3/bili/swiperList',
      success(res){
        if (res.data.code===0) {
          that.setData({
            swiperList:res.data.data.swiperList
          })
        }
      }
    })
  },
  /**
   * 获取视频列表
   */
  getVideoList(){
    let that = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/5f4767c8e73c0e9f4b120d0f9fd76ca3/bili/videosList',
      success(res){
        if (res.data.code === 0) {
          that.setData({
            videoList:res.data.data.videosList
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 1. 获取首页导航数据
    this.getNavList();

    //2. 获取轮播图数据
    this.getSwiperList();

    //3. 获取视频列表
    this.getVideoList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})