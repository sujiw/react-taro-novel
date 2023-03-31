import ResizeObserver from 'resize-observer-polyfill';
import { Component, useState, useEffect } from "react";
import { View, Image, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { Button, Icon, PullToRefresh, Sticky } from "@nutui/nutui-react-taro";
import './index.scss'
let myObserver = null
class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bscroll: {},
      readDuration: 10,
      index: 100,
      pullBg: 'background-size: 100% auto',
      topBg: 'background-color: rgba(255, 255, 255, 0)',
      loading: { display: 'none' },
      buttonStyle: {
        color: 'red',
        background: 'rgba(247, 191, 194,0.5)',
        border: '0',
        padding: '10rpx'
      },
      ad: {
        image: 'https://bookcover.yuewen.com/qdbimg/349573/1035943094/180.webp',
        title: '人在蜀山，反清复明',
        desc: '修仙觅长生，热血任逍遥，踏莲曳波涤剑骨，凭虚御风塑圣魂！',
      },
      list: [
        {
          image: 'https://bookcover.yuewen.com/qdbimg/349573/1036016791/300.webp',
          title: '重铸巨龙荣光',
          author: '黑烟滚滚',
          intor: '“您好！敬爱的大夏市民，现向您告知：蓝星联盟有幸与异界神明取得联系，双方友善交流月余。神明一方诚邀大夏市民降临异世界，体验当地风土人情。有意者可购买一周后推出的星界头盔，此头盔可借由神明之力降临异世。”看着手机上发来这么一条短信。陈启不由露出嗤笑，心中大骂骗子愚蠢无聊，却在不久后惊愕的发现，这特么居然是真的！一周后。神明所在的星界。多米兰克星。一头浑身被晶莹蔚蓝鳞片包裹的怪异幼龙顶破龙蛋，一脸懵逼的看着周围一大片颜色各异的龙崽子们。',
          state: '连载',
          newest: '第186章 祖代血脉与雷瀑龙70%',
          unread: '26章未读',
        },
        {
          image: 'https://bookcover.yuewen.com/qdbimg/349573/1036016791/300.webp',
          title: '重铸巨龙荣光',
          author: '黑烟滚滚',
          intor: '“您好！敬爱的大夏市民，现向您告知：蓝星联盟有幸与异界神明取得联系，双方友善交流月余。神明一方诚邀大夏市民降临异世界，体验当地风土人情。有意者可购买一周后推出的星界头盔，此头盔可借由神明之力降临异世。”看着手机上发来这么一条短信。陈启不由露出嗤笑，心中大骂骗子愚蠢无聊，却在不久后惊愕的发现，这特么居然是真的！一周后。神明所在的星界。多米兰克星。一头浑身被晶莹蔚蓝鳞片包裹的怪异幼龙顶破龙蛋，一脸懵逼的看着周围一大片颜色各异的龙崽子们。',
          state: '连载',
          newest: '第186章 祖代血脉与雷瀑龙70%',
          unread: '26章未读',
        },
        {
          image: 'https://bookcover.yuewen.com/qdbimg/349573/1036016791/300.webp',
          title: '重铸巨龙荣光',
          author: '黑烟滚滚',
          intor: '“您好！敬爱的大夏市民，现向您告知：蓝星联盟有幸与异界神明取得联系，双方友善交流月余。神明一方诚邀大夏市民降临异世界，体验当地风土人情。有意者可购买一周后推出的星界头盔，此头盔可借由神明之力降临异世。”看着手机上发来这么一条短信。陈启不由露出嗤笑，心中大骂骗子愚蠢无聊，却在不久后惊愕的发现，这特么居然是真的！一周后。神明所在的星界。多米兰克星。一头浑身被晶莹蔚蓝鳞片包裹的怪异幼龙顶破龙蛋，一脸懵逼的看着周围一大片颜色各异的龙崽子们。',
          state: '连载',
          newest: '第186章 祖代血脉与雷瀑龙70%',
          unread: '26章未读',
        },
        {
          image: 'https://bookcover.yuewen.com/qdbimg/349573/1036016791/300.webp',
          title: '重铸巨龙荣光',
          author: '黑烟滚滚',
          intor: '“您好！敬爱的大夏市民，现向您告知：蓝星联盟有幸与异界神明取得联系，双方友善交流月余。神明一方诚邀大夏市民降临异世界，体验当地风土人情。有意者可购买一周后推出的星界头盔，此头盔可借由神明之力降临异世。”看着手机上发来这么一条短信。陈启不由露出嗤笑，心中大骂骗子愚蠢无聊，却在不久后惊愕的发现，这特么居然是真的！一周后。神明所在的星界。多米兰克星。一头浑身被晶莹蔚蓝鳞片包裹的怪异幼龙顶破龙蛋，一脸懵逼的看着周围一大片颜色各异的龙崽子们。',
          state: '连载',
          newest: '第186章 祖代血脉与雷瀑龙70%',
          unread: '26章未读',
        },
        {
          image: 'https://bookcover.yuewen.com/qdbimg/349573/1036016791/300.webp',
          title: '重铸巨龙荣光',
          author: '黑烟滚滚',
          intor: '“您好！敬爱的大夏市民，现向您告知：蓝星联盟有幸与异界神明取得联系，双方友善交流月余。神明一方诚邀大夏市民降临异世界，体验当地风土人情。有意者可购买一周后推出的星界头盔，此头盔可借由神明之力降临异世。”看着手机上发来这么一条短信。陈启不由露出嗤笑，心中大骂骗子愚蠢无聊，却在不久后惊愕的发现，这特么居然是真的！一周后。神明所在的星界。多米兰克星。一头浑身被晶莹蔚蓝鳞片包裹的怪异幼龙顶破龙蛋，一脸懵逼的看着周围一大片颜色各异的龙崽子们。',
          state: '连载',
          newest: '第186章 祖代血脉与雷瀑龙70%',
          unread: '26章未读',
        },
        {
          image: 'https://bookcover.yuewen.com/qdbimg/349573/1036016791/300.webp',
          title: '重铸巨龙荣光',
          author: '黑烟滚滚',
          intor: '“您好！敬爱的大夏市民，现向您告知：蓝星联盟有幸与异界神明取得联系，双方友善交流月余。神明一方诚邀大夏市民降临异世界，体验当地风土人情。有意者可购买一周后推出的星界头盔，此头盔可借由神明之力降临异世。”看着手机上发来这么一条短信。陈启不由露出嗤笑，心中大骂骗子愚蠢无聊，却在不久后惊愕的发现，这特么居然是真的！一周后。神明所在的星界。多米兰克星。一头浑身被晶莹蔚蓝鳞片包裹的怪异幼龙顶破龙蛋，一脸懵逼的看着周围一大片颜色各异的龙崽子们。',
          state: '连载',
          newest: '第186章 祖代血脉与雷瀑龙70%',
          unread: '26章未读',
        },
        {
          image: 'https://bookcover.yuewen.com/qdbimg/349573/1036016791/300.webp',
          title: '重铸巨龙荣光',
          author: '黑烟滚滚',
          intor: '“您好！敬爱的大夏市民，现向您告知：蓝星联盟有幸与异界神明取得联系，双方友善交流月余。神明一方诚邀大夏市民降临异世界，体验当地风土人情。有意者可购买一周后推出的星界头盔，此头盔可借由神明之力降临异世。”看着手机上发来这么一条短信。陈启不由露出嗤笑，心中大骂骗子愚蠢无聊，却在不久后惊愕的发现，这特么居然是真的！一周后。神明所在的星界。多米兰克星。一头浑身被晶莹蔚蓝鳞片包裹的怪异幼龙顶破龙蛋，一脸懵逼的看着周围一大片颜色各异的龙崽子们。',
          state: '连载',
          newest: '第186章 祖代血脉与雷瀑龙70%',
          unread: '26章未读',
        },
        {
          image: 'https://bookcover.yuewen.com/qdbimg/349573/1036016791/300.webp',
          title: '重铸巨龙荣光',
          author: '黑烟滚滚',
          intor: '“您好！敬爱的大夏市民，现向您告知：蓝星联盟有幸与异界神明取得联系，双方友善交流月余。神明一方诚邀大夏市民降临异世界，体验当地风土人情。有意者可购买一周后推出的星界头盔，此头盔可借由神明之力降临异世。”看着手机上发来这么一条短信。陈启不由露出嗤笑，心中大骂骗子愚蠢无聊，却在不久后惊愕的发现，这特么居然是真的！一周后。神明所在的星界。多米兰克星。一头浑身被晶莹蔚蓝鳞片包裹的怪异幼龙顶破龙蛋，一脸懵逼的看着周围一大片颜色各异的龙崽子们。',
          state: '连载',
          newest: '第186章 祖代血脉与雷瀑龙70%',
          unread: '26章未读',
        },
        {
          image: 'https://bookcover.yuewen.com/qdbimg/349573/1036016791/300.webp',
          title: '重铸巨龙荣光',
          author: '黑烟滚滚',
          intor: '“您好！敬爱的大夏市民，现向您告知：蓝星联盟有幸与异界神明取得联系，双方友善交流月余。神明一方诚邀大夏市民降临异世界，体验当地风土人情。有意者可购买一周后推出的星界头盔，此头盔可借由神明之力降临异世。”看着手机上发来这么一条短信。陈启不由露出嗤笑，心中大骂骗子愚蠢无聊，却在不久后惊愕的发现，这特么居然是真的！一周后。神明所在的星界。多米兰克星。一头浑身被晶莹蔚蓝鳞片包裹的怪异幼龙顶破龙蛋，一脸懵逼的看着周围一大片颜色各异的龙崽子们。',
          state: '连载',
          newest: '第186章 祖代血脉与雷瀑龙70%',
          unread: '26章未读',
        },
      ],
    }
  }
  onPageScroll(res) {
    this.setState({
      topBg: 'background-color: rgba(255,255,255,'+(res.scrollTop/60)+')'
    })
  }
  componentDidMount() {
    myObserver = new ResizeObserver((entries, observer) => {
      //console.log("entries",entries)
      for (let entrie of entries) {
        this.setState({
          pullBg: 'background-size: '+(entrie.contentRect.height/2+100)+'% auto'
        })
      }
    })
    myObserver.observe(document.getElementsByClassName('nut-pulltorefresh-head')[0])

  }
  componentWillUnmount() {
    //取消所有被ResizeObserver对象监听的节点
    myObserver.disconnect()
    //取消被ResizeObserver对象监听的指定dom元素监听
    //myObserver.unobserve(document.body)
  }
  readClick(){
    console.log('readClick')
    Taro.navigateTo({
      url: "/pages/read/read",
    })
  }
  render() {
    return (
      <View className="main" style={this.state.pullBg}>
        <Sticky className="top">
          <View className="search" style={this.state.topBg}>
            <View className="desc">今日已读<Text className="read-duration">{this.state.readDuration}</Text> 分钟</View>
            <Icon className="icon" name="search"></Icon>
            <Icon className="icon" name="more-x"></Icon>
          </View>
        </Sticky>
        <PullToRefresh canReleaseText={
          <View className="loading" >
            <Icon name="loading1" color="red"></Icon>
          </View>
        } className="wrapper">
          <View className="container">
            <View className="block">
              <View className="ad">
                <View className="info">
                  <View className="image">
                    <Image src={this.state.ad.image}></Image>
                  </View>
                  <View className="intro">
                    <View className="title">{this.state.ad.title}</View>
                    <View className="desc">{this.state.ad.desc}</View>
                  </View>
                </View>
                <View className="btn">
                  <Button style={this.state.buttonStyle} size="small">签到福利</Button>
                </View>
              </View>
            </View>
            <View className="content">
              <Sticky top={38}>
              <View className="nav">
                <View className="menus">
                  <View className="menu active">最近阅读<Icon color="#868686" className="icon" size="10" name="rect-up"></Icon></View>
                  <View className="menu">浏览记录</View>
                </View>
                <View className="tools">
                  <View className="tool">管理</View>
                  <View className="tool">筛选<Icon color="#868686" className="icon" size="10" name="setting"></Icon></View>
                </View>
              </View>
              </Sticky>
              {
                this.state.list.map((item, key) => {
                  return <View key={key} className="book" onClick={this.readClick.bind(this)}>
                    <View className="info">
                      <View className="image">
                        <Image src={item.image}></Image>
                      </View>
                      <View className="intro">
                        <View className="intro-flex">
                          <View className="title">{item.title}</View>
                          <Icon color="#868686" className="icon" name="more-s"></Icon>
                        </View>
                        <View className="desc">{item.author} • {item.unread}</View>
                        <View className="desc">{item.state} • {item.newest}</View>
                      </View>
                    </View>
                  </View>
                })
              }
            </View>
          </View>
        </PullToRefresh>
      </View>
    )
  }
}
export default Index
