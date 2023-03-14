Page({

  /**
   * 页面的初始数据
   */
  data: {
    //视频详情
    videoInfo: null,
    //推荐视频
    othersList: [],
    //评论列表
    commentData: null
  },

  /**
   * 根据视频id获取视频详情
   */
  getCurrentVideo(videoId) {
    let that = this
    wx.request({
      url: `https://www.fastmock.site/mock/5f4767c8e73c0e9f4b120d0f9fd76ca3/bili/videoDetail?id=${videoId}`,
      success(res) {
        if(res.data.code===0) {
          // console.log(res.data.data.videoInfo)
          that.setData({
            videoInfo: res.data.data.videoInfo
          })
        }
      }
    })
  },
  /**
   * 根据视频id获取推荐视频
   */
  getOthersList(videoId) {
    let that = this
    wx.request({
      url: `https://www.fastmock.site/mock/5f4767c8e73c0e9f4b120d0f9fd76ca3/bili/othersList?id=${videoId}`,
      success(res) {
        if(res.data.code===0) {
          that.setData({
            othersList: res.data.data.othersList
          })
        }
      }
    })
  },
  /**
   * 根据视频id获取评论列表
   */
  getCommentList(videoId) {
    let that = this
    wx.request({
      url: `https://www.fastmock.site/mock/5f4767c8e73c0e9f4b120d0f9fd76ca3/bili/commentsList?id=${videoId}`,
      success(res) {
        console.log(res.data)
        if(res.data.code===0) {
          console.log(res.data.data.commentData);
          that.setData({
            commentData: res.data.data.commentData
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    let videoId = options.id
    this.getCurrentVideo(videoId)
    this.getOthersList(videoId)
    this.getCommentList(videoId)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})