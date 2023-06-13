import { Component } from "react";
import { View, Text, Slider } from '@tarojs/components';
import Taro from '@tarojs/taro';
import {
  Sticky, Icon, Button
} from "@nutui/nutui-react-taro";
import './read.scss'

class Read extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      is_setup: false,
      is_setup_senior: false,
      read_font_size: 20,
      theme_index: 0,
      themes: [
        {
          backgroundColor: '#d7e3d7',
          color: '#2e8a57',
          consoleColor: '#e4eee5',
        },
        {
          backgroundColor: '#f8eee5',
          color: '#a87800',
          consoleColor: '#fbf7f4',
        },
        {
          backgroundColor: '#d5c39f',
          color: '#8e5b00',
          consoleColor: '#ccb991',
        },
        {
          backgroundColor: '#e8cba3',
          color: '#774100',
          consoleColor: '#d2a679',
        },
        {
          backgroundColor: '#ffe3df',
          color: '#bc4e50',
          consoleColor: '#fff1f0',
        },
        {
          backgroundColor: '#f8eee5',
          color: '#a77900',
          consoleColor: '#fbf7f4',
        },
      ],
      title: "第1章 开局退婚，喜大普奔（新书求支持）",
      content: [
        "中世纪的城堡为了追求防御力，用巨大岩石堆砌而成，窗户很小，采光条件很差。",
        "特别是索托斯堡的大厅，哪怕是白天，都要点着很多蜡烛。",
        "亚伦站在角落中，坐视父亲与大哥，还有一干骑士激烈争论着什么，双目却望着那些白色的蜡烛。",
        "‘在这个生产力低下的世界，平民也用蜡烛或者油灯照明，不过城堡使用的是蜂蜡蜡烛，燃烧时极少产生烟熏，而平民只能用石蜡蜡烛或者动物油脂……用多了说不定眼睛都会被熏瞎掉。’",
        "至于父亲与幕僚们的争论，以及与隔壁领地的矛盾，亚伦心里一清二楚。",
        "说起来，他实在很佩服前世小说中的穿越者们，那种一个人就能促进科技大发展，甚至产业升级，宛若脑海之中装了百科全书般的博学。",
        "到了他这里，作为一个文科僧，却只能回忆起一些极为有限的残缺资料。",
        "当然，即使是极为有限的资料，在这个时代也异常珍贵。",
        "但怎么说呢，亚伦·索托斯实在提不起劲来。",
        "毕竟，有着正统继承人柯林存在，作为老牌贵族的西奥多，根本不可能让自己继承领地，而为了集权，西奥多也排斥一切割裂领土的行为。",
        "作为家族次子，长大之后最多获得一点微薄的钱财馈赠，然后就要自谋生路。",
        "亚伦也尝试过一次，经历不少失败，才摸索出便宜耐用纸张的制作方法，从而建造起了一个造纸作坊。",
        "然后他名义上的那位父亲大人，只是口头夸奖了一句，就命令管家将作坊收归公有了。",
        "这一举动立即令亚伦死了心，也明白了自己的处境。",
        "虽然投胎技术不错，但终究差了点。",
        "不仅仅古代东方礼教吃人，西方的规矩同样如此。",
        "在领地之中，领主的话就是法律！任何没有实力的抗争都是笑话！",
        "甚至，他还需要庆幸，庆幸自己不是平民乃至最底层的农奴。",
        "曾经，亚伦就看到过一个聪明的农奴孩子，趁着柯林巡视农田的时候，想要举报税务官贪污的问题。",
        "然后，对方还没有冲到柯林身边，就因为用肮脏的身体挡住了高贵大人的去路，被卫兵直接踢得半死！",
        "至于呼喊的内容，柯林根本不屑去听！",
        "从那以后，亚伦就变得更加谨慎，或者说沉默。",
        "至于搞死柯林，直接上位？",
        "说实话，他动过这个念头，不过衡量一下双方的支持者，以及在西奥多心中的地位，还是放弃了这个不太诱人的想法。",
        "毕竟，因为自己的示弱，柯林虽然不太看得惯自己，也没有直接下杀手，让他先发制人，还是有些心里过不去。",
        "不过区区一座造纸作坊，就当做白吃白喝这么多年的报酬了。",
        "而索托斯家族与戴维斯家族的矛盾，也是因为这座作坊而起。",
        "因为造纸作坊的利润，引起了戴维斯家族的觊觎，之前就派过一些探子，后来双方族长讨论过几次，终于签订了和平协议，双方嫡系的婚约就是标志。",
        "但如今……",
        "“戴维斯家族不满足于我们之前的方案，想要更多……”",
        "西奥多拔出匕首，狠狠钉在木桌上，末端还在不断颤抖：“我们要让他们知道，他们犯了一个巨大的错误！”",
        "厅堂里的男人们野蛮地嚎叫了起来，其中以柯林最为脸红脖子粗。",
        "亚伦也跟着喊了几句口号，兴致寥寥。",
        "西奥多却不知为何，向角落扫了一眼：“亚伦，你也十六岁，是大人了，该上战场获取属于你的功勋。”",
        "“是，父亲。”亚伦沉默了一下，坦然回应道。",
        "这毕竟是两个领主为了一头野猪都能打起来的社会，自己拖到此时才上战场，已经足够幸运了。",
        "……",
        "夜幕降临。",
        "“虽然如此，但柯林被退婚，我却要为他上战场，真是不爽啊，刀箭无眼，说不定就挂了……我舍不得家里的女仆小姐姐……”",
        "亚伦赤着上身，挥挥手，让一个脸上带着红晕的美丽女仆走出房间，望着关闭的房门，暗自想着。",
        "此时的亚伦，感觉心中无欲无求，宛若一位贤者，闭上眼睛就进入了梦乡。",
        "他睡眠质量一直不错，基本上沾着枕头就能睡着。",
        "“我闭上眼睛世界就不存在……”",
        "……",
        "身体在下坠，猛地一个激灵。",
        "亚伦睁开双目，看到了一片蔚蓝的海洋：“又是这里，又是这个梦！”",
        "作为一名穿越者，他还是有个金手指的，虽然很废物，就是一睡着就会进入这个梦中，并且，维持着清醒，宛若在做清明梦一样的状态。",
        "在还是婴儿的时候，亚伦就进入了这个梦中，看到了蔚蓝的大海。",
        "而他自己，则是处于一种十分奇异的状态，似乎悬浮于海面之上，又似乎没有一点重量。",
        "他仿佛一个幽灵，任何物体都能从他身上穿过，而自己则没有一分力量，拿不起一粒微尘。",
        "就好像是……一个纯粹的观察者，一个被固定位置的囚徒。",
        "亚伦甚至怀疑，这只是一个特殊的梦境，而并非什么金手指。",
        "直到他后来多次尝试，发现进入的都是同一片梦境，才终于不得不承认，这里，或许并不是梦，而是一个异世界。",
        "“但是……为什么定位在一片大海中？”",
        "亚伦很是无语，他看着海平面都快看吐了。",
        "不过，伴随着时间的流逝，他发觉，自己的意识似乎在一点点变强。",
        "或者说，每晚的入梦，都是在增强意识的力量。",
        "直到今晚！",
        "十六年的积蓄，似乎终于达到了某个极限！",
        "轰隆！",
        "亚伦·索托斯感受到了一种难以言喻的触感。",
        "他的意识无限膨胀，宛若打破了某个桎梏，无远弗届地延伸、膨胀……",
        "无序、混沌……自身宛若处于一片虚无的中央，有扭曲的残影伴随着碧绿的火焰与疯狂的笛声起舞……",
        "强大的力量在心中涌动，似乎自己一伸手，就可以改变眼前的一切！",
        "他笑了笑，望着似乎十六年不变的海平面，以及天空中那一轮太阳，略带些疯狂地想着：“如果能改变的话，这太阳看着好无趣，如果是红色的就好了！”",
        "念头刚刚一动，亚伦就感觉自己的意识之中宛若开了一个闸门，积蓄了十六年的力量倾泻而出！",
        "天空之中，那一颗似乎亘古不变的恒星，表面蓦然爬上一个个猩红的斑点，斑点继而连接成块，将整个太阳染红！",
        "猩红色的光芒照射而下，遍及大地、海洋……",
        "在这光芒之中，似乎隐藏着难以言喻的恐怖与诡异。",
        "哗啦啦！",
        "海平面分开，一条条海鱼浮现在海面上，继而鳞片炸开，似乎有诸多线虫在血肉之下蠕动，长出锋利的爪子与牙齿……",
        "怪鱼们聚集起来，互相撕咬、吞食、融合……",
        "不远处，更大的阴影浮现，一条类似鲸鱼的生物成为了最终胜利者，开始更加疯狂的血肉畸变……",
        "“我……我不是故意的啊……”",
        "感受着意识中似乎回到了婴儿时期的虚弱，还有渐渐摆脱疯狂的清醒，亚伦欲哭无泪。",
        "这时候，在他心中，一道道残破的信息浮现出来：",
        "【我是梦，是熵，是一切！】",
        "【我独立于所有维度之外，我不可描述、难以名状！】",
        "【我无所不能！】",
        "【我是……‘梦中造物主’！】",
      ]
    }
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  setThemes(index) {
    this.setState({
      theme_index: index,
    })
  }
  backNav() {
    Taro.navigateBack()
  }
  fontSizeAdd() {
    this.setState({
      read_font_size: this.state.read_font_size++,
    })
  }
  fontSizeSub() {
    this.setState({
      read_font_size: this.state.read_font_size < 14 ? this.state.read_font_size : this.state.read_font_size--,
    })
  }
  setupShow(senior){
    console.log('senior',senior)
    this.setState({
      is_setup: senior?senior:!this.state.is_setup,
      is_setup_senior: senior
    })
  }
  setUp() {
    if (this.state.is_setup)
      if (!this.state.is_setup_senior)
        return (
          <>
            <View className="setup base">
              <View className="nav" style={{ backgroundColor: this.state.themes[this.state.theme_index].consoleColor }}>
                <View className="back" onClick={this.backNav.bind(this)}>
                  <Icon color={this.state.themes[this.state.theme_index].color} name="rect-left"></Icon>
                </View>
                <Icon color={this.state.themes[this.state.theme_index].color} name="more-x"></Icon>
              </View>
              <View className="join"><View className="btn" style={{ backgroundColor: this.state.themes[this.state.theme_index].color }}>加入书库</View></View>
              <View className="console" style={{ backgroundColor: this.state.themes[this.state.theme_index].consoleColor }}>
                <View className="chapter">
                  <View style={{ color: this.state.themes[this.state.theme_index].color }}>上一章</View>
                  <View className="progress">
                    <Slider activeColor={this.state.themes[this.state.theme_index].color} backgroundColor={this.state.themes[this.state.theme_index].color} step={1} value={100} min={1} max={100} />
                  </View>
                  <View style={{ color: this.state.themes[this.state.theme_index].color }}>下一章</View>
                </View>
                <View className="btns">
                  <View className="btn">
                    <View><Icon className="icon" color={this.state.themes[this.state.theme_index].color} name="order"></Icon></View>
                    <Text style={{ color: this.state.themes[this.state.theme_index].color }}>目录</Text>
                  </View>
                  <View className="btn">
                    <View><Icon className="icon nut-icon-am-breathe  nut-icon-am-infinite" color={this.state.themes[this.state.theme_index].color} name="fabulous"></Icon></View>
                    <Text style={{ color: this.state.themes[this.state.theme_index].color }}>点赞</Text>
                  </View>
                  <View className="btn">
                    <View><Icon className="icon" color={this.state.themes[this.state.theme_index].color} name="eye"></Icon></View>
                    <Text style={{ color: this.state.themes[this.state.theme_index].color }}>夜间</Text>
                  </View>
                  <View onClick={this.setupShow.bind(this,true)} className="btn">
                    <View><Icon className="icon" color={this.state.themes[this.state.theme_index].color} name="setting"></Icon></View>
                    <Text style={{ color: this.state.themes[this.state.theme_index].color }}>设置</Text>
                  </View>
                </View>
              </View>
            </View>
          </>
        )
      else
        return (
          <>

            <View className="setup senior">
              <View className="console" style={{ backgroundColor: this.state.themes[this.state.theme_index].consoleColor }}>
                <View className="chapter">
                  <View style={{ color: this.state.themes[this.state.theme_index].color }}>字号</View>
                  <View className="typeface">
                    <Button onClick={this.fontSizeSub.bind(this)} style={{ backgroundColor: this.state.themes[this.state.theme_index].consoleColor }} color={this.state.themes[this.state.theme_index].color} plain type="primary">A-</Button> <Text className="fontsize" style={{ color: this.state.themes[this.state.theme_index].color }}>{this.state.read_font_size}</Text> <Button onClick={this.fontSizeAdd.bind(this)} style={{ backgroundColor: this.state.themes[this.state.theme_index].consoleColor }} color={this.state.themes[this.state.theme_index].color} plain type="primary">A+</Button>
                  </View>
                </View>
                <View className="chapter">
                  <View style={{ color: this.state.themes[this.state.theme_index].color }}>背景</View>
                  <View className="background">
                    {this.state.themes.map((item, key) => {
                      return <View key={key} onClick={this.setThemes.bind(this, key)} className={this.state.theme_index == key ? "color active" : "color"} style={{ borderColor: this.state.theme_index == key ? item.color : 'transparent', backgroundColor: item.backgroundColor }}></View>;
                    })}
                  </View>
                </View>
              </View>
            </View>
          </>
        )
  }
  render() {
    return (
      <View className="read" style={{ backgroundColor: this.state.themes[this.state.theme_index].backgroundColor }}>
        {
          this.setUp()
        }
        <Sticky>
          <View className="title" style={{ backgroundColor: this.state.themes[this.state.theme_index].backgroundColor }}>{this.state.title}</View>
        </Sticky>
        <View className="content" onClick={this.setupShow.bind(this,false)} style={{ fontSize: this.state.read_font_size + "px" }}>
          {
            this.state.content.map((text, key) => {
              return <View className="text" key={key}>{text}</View>
            })
          }
        </View>
      </View>
    );
  }
}
export default Read
