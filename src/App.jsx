import React, { useState, useMemo } from "react";

const D1=[
  {id:"D101",cn:"北欧极简",mj:"Scandinavian minimalist, clean pale tones"},
  {id:"D102",cn:"意式感性",mj:"Italian sensual sculptural curves"},
  {id:"D103",cn:"德式精密",mj:"German precision, taut engineering surfaces"},
  {id:"D104",cn:"日式侘寂",mj:"Japanese wabi-sabi imperfect beauty"},
  {id:"D105",cn:"美式力量",mj:"American muscular bold proportions"},
  {id:"D106",cn:"东方未来",mj:"Chinese neo-oriental futurism, jade surfaces"},
];
const D2=[
  {id:"D201",cn:"赛博朋克",mj:"cyberpunk neon angular dystopian"},
  {id:"D202",cn:"新古典主义",mj:"neo-classical noble symmetry"},
  {id:"D203",cn:"新装饰主义",mj:"neo art deco geometric chrome luxury"},
  {id:"D204",cn:"数字原生",mj:"digital-native born-digital aesthetic"},
  {id:"D205",cn:"有机未来",mj:"organic futurism biomimetic flowing"},
  {id:"D206",cn:"产品化设计",mj:"Apple-like simplicity tech-gadget precision"},
];
const GA=[
  {id:"A01",cn:"单体巨石",mj:"monolithic single-volume continuous surface"},
  {id:"A02",cn:"后驱推背",mj:"cab-rearward long dash-to-axle extended hood"},
  {id:"A04",cn:"隆起臀部",mj:"rear fenders swelling muscular haunches"},
  {id:"A06",cn:"悬浮分体",mj:"upper lower volumes separated floating"},
  {id:"A10",cn:"前倾猎姿",mj:"nose-down predatory raking forward"},
  {id:"A11",cn:"感性纯粹",mj:"voluptuous curved no character lines pebble-smooth"},
  {id:"A13",cn:"宝石切割",mj:"multiple flat facets sharp creases cut-gemstone"},
  {id:"A22",cn:"纸折锐面",mj:"razor-sharp origami creases geometric"},
  {id:"A23",cn:"密封面孔",mj:"completely sealed front no visible intake"},
  {id:"A31",cn:"方盒直立",mj:"upright box-section vertical sides flat roof"},
  {id:"A37",cn:"鹅卵石圆润",mj:"smooth pebble-shaped friendly form"},
];
const GB=[
  {id:"B01",cn:"参数化镶嵌",mj:"parametric tessellation covering panels"},
  {id:"B09",cn:"充气体量",mj:"air-inflated puffy marshmallow volumes"},
  {id:"B14",cn:"修道院简约",mj:"absolute absence of ornament supreme restraint"},
  {id:"B16",cn:"极光渐变",mj:"continuous chromatic gradient aurora spectral"},
  {id:"B19",cn:"低多边形",mj:"visible low-polygon triangular facets"},
  {id:"B22",cn:"外骨骼",mj:"structural exoskeleton insect-carapace"},
  {id:"B24",cn:"石化流体",mj:"frozen mid-flow solidified liquid metal"},
  {id:"B26",cn:"精密仪器",mj:"zero-gap knurled metal watchmaker craft"},
  {id:"B27",cn:"陶瓷烧制",mj:"ceramic glaze kiln-fired porcelain depth"},
  {id:"B30",cn:"漆器深度",mj:"extraordinary depth lacquer layers urushi"},
  {id:"B33",cn:"特瑞尔光",mj:"diffused volumetric light Turrell luminescence"},
  {id:"B35",cn:"越野装甲",mj:"rugged off-road armor exposed skid plates"},
];
const GC=[
  {id:"C01",cn:"发光体量",mj:"headlamp as glowing volume luminous corner"},
  {id:"C03",cn:"材料诚实",mj:"every material in honest state"},
  {id:"C07",cn:"屏幕融入",mj:"exterior integrating e-ink display"},
  {id:"C08",cn:"后镀铬",mj:"chrome replaced with dark gunmetal PVD"},
  {id:"C09",cn:"厚薄对比",mj:"massive body with paper-thin blade details"},
  {id:"C10",cn:"友善机器",mj:"rounded friendly face large eye-like lamps"},
  {id:"C13",cn:"软体机器人",mj:"soft deformable body silicone robot"},
  {id:"C14",cn:"新复古混搭",mj:"retro cue hybridized contemporary surfaces"},
  {id:"C15",cn:"隐形科技",mj:"all sensors hidden clean uninterrupted surface"},
];

const CATS = [
  { key: "D1", label: "D1·文化", data: D1, color: "#22d3ee" },
  { key: "D2", label: "D2·范式", data: D2, color: "#f472b6" },
  { key: "A", label: "A·形态", data: GA, color: "#a78bfa" },
  { key: "B", label: "B·质感", data: GB, color: "#34d399" },
  { key: "C", label: "C·趋势", data: GC, color: "#fbbf24" },
];

const VEHS = ["full-size luxury SUV","mid-size SUV","compact electric SUV","coupe-style SUV","mid-size sedan","full-size luxury sedan","performance electric supercar","grand touring coupe","compact city car","off-road adventure vehicle"];
const VEHS_CN = ["C级豪华SUV","B级中型SUV","A级紧凑SUV","轿跑SUV","B级中型轿车","C级豪华轿车","电动超跑","GT跑车","微型城市车","硬派越野车"];
const MOODS = ["silent power","playful curiosity","rebellious defiance","serene zen","raw primal energy","futuristic optimism","mysterious dark elegance"];
const MOODS_CN = ["沉默权力","好奇温暖","叛逆不羁","宁静禅意","野性能量","未来乐观","暗黑优雅"];
const SCENES = ["pristine white studio","wet city streets neon night","vast salt flat dramatic sky","misty mountain road dawn","brutalist concrete parking"];
const SCENES_CN = ["纯白摄影棚","霓虹雨夜","盐湖荒原","雾中山路","粗野车库"];
const ANGLES = ["front three-quarter view","profile side view","rear three-quarter view","dead-on front view","ultra-low worms-eye front","tracking motion blur"];
const ANGLES_CN = ["前45°","正侧","后45°","正前","极低仰视","动态追拍"];

const HK=[
  {id:"H01",n:"科技权威",i:"⚡",s:"最强科技 = 最强车",dm:0,ds:0,
    t:"用户将技术领先等同于产品领先。造型必须编码「精密·整合·未来」三重信号——每条缝隙都被用审视 iPhone 的眼光评判。",
    segs:[
      {type:"C级豪华SUV",ref:"问界M9 · 理想MEGA",vi:0,
        genes:[{id:"D106",w:"文化底气——中国科技叙事的造型自信"},{id:"D206",w:"苹果级整合感 = 用户心中的「高级」"},{id:"A01",w:"单体巨石 = 技术整合度的视觉隐喻"},{id:"A23",w:"不需进气 = 纯电先进性的直接证明"},{id:"B26",w:"零缝隙 = 制造精度 = 技术实力的物化"},{id:"C15",w:"传感器隐藏 = 科技已内化"}]},
      {type:"B级运动轿车",ref:"小米SU7 · 智界S7",vi:4,
        genes:[{id:"D106",w:"东方科技美学——新势力的文化王牌"},{id:"D206",w:"消费电子思维降维打击传统车企"},{id:"A10",w:"前倾猎姿 = 性能暗示"},{id:"A23",w:"封闭面孔 = 电动原生最强符号"},{id:"B26",w:"精密仪器质感 = 研发实力物化"},{id:"C15",w:"隐形传感 = 设计完整度极致"}]},
    ]},
  {id:"H02",n:"感官沉溺",i:"🌊",s:"每次触碰都是享受",dm:6,ds:3,
    t:"购买理由不是参数而是体感。「看一眼就想摸、摸了就不想放手」的物理吸引力。",
    segs:[
      {type:"GT轿跑",ref:"阿斯顿马丁DB12",vi:7,
        genes:[{id:"D102",w:"意式感性——雕塑感比工程感更重要"},{id:"D205",w:"有机未来——曲面是情绪的载体"},{id:"A04",w:"隆起臀部 = 最原始的力量性感"},{id:"B24",w:"石化流体——光影永不停歇地流动"},{id:"B30",w:"漆器深度——颜色有纵深"},{id:"C09",w:"厚薄对比——丰满与锋利的张力"}]},
      {type:"C级纯电轿车",ref:"奔驰EQS · 智己L7",vi:5,
        genes:[{id:"D102",w:"感性曲线传递豪华"},{id:"D205",w:"有机形态 = 以人为本 = 真奢侈"},{id:"A11",w:"纯净无棱线 = 自信到不需装饰"},{id:"B24",w:"流体凝固承载变幻光影"},{id:"B27",w:"陶瓷质感——触觉暗示突破视觉"},{id:"C03",w:"材料诚实——真皮真木真铝"}]},
    ]},
  {id:"H03",n:"情感陪伴",i:"🤗",s:"车是家人不是工具",dm:1,ds:0,
    t:"Z世代的第一台车。不要「驾驶机器」要「移动伙伴」。圆润、友善、有点呆萌但绝不幼稚。",
    segs:[
      {type:"A级小型车",ref:"五菱缤果 · smart精灵#1",vi:8,
        genes:[{id:"D104",w:"侘寂——不完美才亲切"},{id:"D206",w:"像拥有手机一样自然地拥有它"},{id:"A37",w:"鹅卵石 = 安全感的原始形状"},{id:"B09",w:"充气体量——激发「想捏」的冲动"},{id:"C10",w:"大眼友善面孔 = 信任感捷径"},{id:"C13",w:"软体质感——机器也可以温柔"}]},
      {type:"B级紧凑SUV",ref:"极氪X · 沃尔沃EX30",vi:2,
        genes:[{id:"D101",w:"北欧温暖——功能主义也有温度"},{id:"D206",w:"家电化降低汽车的距离感"},{id:"A37",w:"圆润体量让SUV不再「凶」"},{id:"B14",w:"修道院简约——简单 = 信任"},{id:"C10",w:"友善面孔——停着也在微笑"},{id:"C15",w:"隐形科技不制造疏离"}]},
    ]},
  {id:"H04",n:"叛逆宣言",i:"🔥",s:"我拒绝无聊",dm:2,ds:1,
    t:"反对无聊、反对从众。争议即流量——叛逆必须有体系，否则只是丑。",
    segs:[
      {type:"轿跑SUV",ref:"兰博基尼Urus · 极氪001",vi:3,
        genes:[{id:"D106",w:"跳过西方经典，直接创造新的"},{id:"D201",w:"赛博朋克——亚文化破圈主流"},{id:"A22",w:"纸折锐面挑衅视觉惯性"},{id:"B19",w:"低多边形——游戏美学入侵现实"},{id:"B22",w:"外骨骼——结构外露 = 无所隐藏"},{id:"C07",w:"车身本身就是一块屏幕"}]},
      {type:"电动超跑",ref:"仰望U9 · 特斯拉Roadster",vi:6,
        genes:[{id:"D105",w:"暴力美学不需要解释"},{id:"D204",w:"为社交媒体而设计"},{id:"A10",w:"永远在进攻的姿态"},{id:"B01",w:"参数化纹理——算法生成之美"},{id:"B22",w:"外骨骼——科幻战甲隐喻"},{id:"C07",w:"停着也是一场灯光秀"}]},
    ]},
  {id:"H05",n:"新贵低调",i:"🏛️",s:"低调但你懂的",dm:3,ds:4,
    t:"厌倦LOGO和镀铬。「只有懂的人才看得出」的隐性奢华，克制本身是最大炫耀。",
    segs:[
      {type:"C级豪华轿车",ref:"迈巴赫 · 保时捷Taycan",vi:5,
        genes:[{id:"D101",w:"北欧克制——装饰都是多余"},{id:"D202",w:"新古典——完美比例即权力"},{id:"A02",w:"后驱推背——不可伪造的血统"},{id:"B14",w:"修道院简约——至简 = 至奢"},{id:"B27",w:"陶瓷质感——远超金属的克制"},{id:"C03",w:"好材料不需要装饰"}]},
      {type:"C级豪华SUV",ref:"库里南 · 蔚来ES8",vi:0,
        genes:[{id:"D103",w:"德式严肃感 = 价值感"},{id:"D202",w:"古典比例——权力的永恒语言"},{id:"A01",w:"单体巨石——体量即无声力量"},{id:"B14",w:"极简——删除不必要元素"},{id:"B30",w:"漆器深度——颜色成为奢侈品"},{id:"C08",w:"去铬——上个时代的符号"}]},
    ]},
  {id:"H06",n:"冒险召唤",i:"🏔️",s:"生活在别处",dm:4,ds:2,
    t:"90%越野车不离开铺装路，但那10%的可能性就是全部理由。「看着就想出发」。",
    segs:[
      {type:"硬派越野",ref:"坦克500 · 路虎卫士",vi:9,
        genes:[{id:"D105",w:"美式力量——荒野生存文化原型"},{id:"D202",w:"致敬黄金时代越野传奇"},{id:"A31",w:"方盒直立——空间最大化"},{id:"B35",w:"越野装甲——防护件即装饰"},{id:"C03",w:"该露的螺栓大方露出"},{id:"C14",w:"老灵魂装进新技术躯壳"}]},
      {type:"科技越野SUV",ref:"仰望U8 · Rivian R1S",vi:9,
        genes:[{id:"D105",w:"城市丛林也需要底气"},{id:"D204",w:"用科技重新定义户外"},{id:"A01",w:"单体巨石——现代感替代复古"},{id:"B35",w:"装甲元素符号化"},{id:"B26",w:"精密仪器——科技越野≠粗糙"},{id:"C15",w:"智能无缝融入粗犷外表"}]},
    ]},
  {id:"H07",n:"暗夜魅惑",i:"🌑",s:"越暗越耀眼",dm:6,ds:1,
    t:"「夜晚比白天更好看」——深色光影层次、氛围灯戏剧性、暗色材质的无底深邃。",
    segs:[
      {type:"轿跑SUV",ref:"奥迪Q8 e-tron · 极氪007",vi:3,
        genes:[{id:"D102",w:"曲面在暗光下最性感"},{id:"D203",w:"暗色需精致细节来破局"},{id:"A13",w:"宝石切割——每个切面捕捉不同光"},{id:"B30",w:"黑色不是平的，它有层次"},{id:"B33",w:"特瑞尔光——光本身成为材质"},{id:"C08",w:"暗色金属替代亮银"}]},
      {type:"电动轿车",ref:"蔚来ET7 · 极星2",vi:4,
        genes:[{id:"D101",w:"北欧暗色系——克制的优雅"},{id:"D203",w:"精致装饰线——暗中有光"},{id:"A11",w:"大面积暗色必须保持纯净"},{id:"B27",w:"陶瓷质感——暗色下依然温润"},{id:"B33",w:"贯穿灯带赋予夜间仪式感"},{id:"C01",w:"灯组是暗夜里的身份标识"}]},
    ]},
  {id:"H08",n:"复古重生",i:"📻",s:"黄金时代的回响",dm:5,ds:3,
    t:"用今天的技术重演昨天的精神。购买的是「时间胶囊」。",
    segs:[
      {type:"电动小车",ref:"MINI Cooper SE · 菲亚特500e",vi:8,
        genes:[{id:"D103",w:"经典轮廓需要精确复刻"},{id:"D202",w:"致敬原作但绝不抄袭"},{id:"A37",w:"60年代的圆润感回归"},{id:"B27",w:"复古色彩的现代最佳载体"},{id:"C14",w:"新复古混搭——核心基因"},{id:"C10",w:"经典车都有自己的表情"}]},
      {type:"GT轿跑",ref:"保时捷911 · 日产Z",vi:7,
        genes:[{id:"D103",w:"每代都是上代的精密升华"},{id:"D202",w:"经典比例不可谈判"},{id:"A02",w:"后驱推背——GT永恒DNA"},{id:"A04",w:"宽臀——性能图腾"},{id:"C14",w:"轮廓致敬经典，细节属于当代"},{id:"C09",w:"经典丰满 + 现代锐利的碰撞"}]},
    ]},
];

const ALL_GENES = {};
CATS.forEach(c => c.data.forEach(g => { ALL_GENES[g.id] = g; }));

function getCatKey(id) {
  if (id.startsWith("D1")) return "D1";
  if (id.startsWith("D2")) return "D2";
  return id[0];
}

const catOf = id => {
  const cat = CATS.find(c => c.key === getCatKey(id));
  return cat ? { c: cat.color, l: cat.label } : { c: "#888", l: "?" };
};

export default function App() {
  const [sel, setSel] = useState({ D1: null, D2: null, A: null, B: null, C: null });
  const [tab, setTab] = useState("A");
  const [veh, setVeh] = useState(0);
  const [mood, setMood] = useState(0);
  const [scene, setScene] = useState(0);
  const [angle, setAngle] = useState(0);
  const [copied, setCopied] = useState(false);
  const [hookId, setHookId] = useState(null);
  const [hookSi, setHookSi] = useState(0);

  const pick = (g) => {
    const k = getCatKey(g.id);
    setSel(prev => ({ ...prev, [k]: prev[k]?.id === g.id ? null : g }));
  };
  const clear = (k) => setSel(prev => ({ ...prev, [k]: null }));
  const randomize = () => {
    const r = {};
    CATS.forEach(c => { r[c.key] = c.data[Math.floor(Math.random() * c.data.length)]; });
    setSel(r);
  };

  const applyHookSeg = (hk, sg) => {
    const next = { D1: null, D2: null, A: null, B: null, C: null };
    sg.genes.forEach(gene => {
      const k = getCatKey(gene.id);
      if (ALL_GENES[gene.id] && !next[k]) next[k] = ALL_GENES[gene.id];
    });
    setSel(next);
    if (sg.vi !== undefined) setVeh(sg.vi);
    if (hk.dm !== undefined) setMood(hk.dm);
    if (hk.ds !== undefined) setScene(hk.ds);
  };

  const freq = useMemo(() => {
    const f = {};
    HK.forEach(h => h.segs.forEach(s => s.genes.forEach(g => { f[g.id] = (f[g.id] || 0) + 1; })));
    return f;
  }, []);

  const hook = HK.find(h => h.id === hookId);
  const hookSeg = hook ? hook.segs[hookSi] : null;

  const alsoIn = useMemo(() => {
    if (!hookSeg || !hookId) return {};
    const r = {};
    hookSeg.genes.forEach(gene => {
      const others = [];
      HK.forEach(h => {
        if (h.id === hookId) return;
        h.segs.forEach(s => { if (s.genes.some(g => g.id === gene.id)) others.push(h.n); });
      });
      r[gene.id] = [...new Set(others)];
    });
    return r;
  }, [hookSeg, hookId]);

  const ids = Object.values(sel).filter(Boolean);
  const hasAny = ids.length > 0;
  const isFull = sel.A && sel.B && sel.C;

  const prompt = useMemo(() => {
    if (!hasAny) return "";
    const parts = [VEHS[veh]];
    CATS.forEach(c => { if (sel[c.key]) parts.push(sel[c.key].mj); });
    parts.push(MOODS[mood] + " mood");
    parts.push(ANGLES[angle]);
    parts.push(SCENES[scene]);
    parts.push("editorial automotive photography");
    return parts.join(", ") + " --ar 16:9 --v 6.1";
  }, [sel, veh, mood, scene, angle, hasAny]);

  const doCopy = () => {
    if (!prompt) return;
    try { navigator.clipboard.writeText(prompt); } catch (e) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const catObj = CATS.find(c => c.key === tab);
  const catColor = catObj?.color || "#fff";

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", color: "#e5e5e5", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: 16 }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div>
            <h1 style={{ fontSize: 18, fontWeight: 800, margin: 0 }}>🧬 五维基因杂交器</h1>
            <p style={{ fontSize: 11, color: "#666", margin: "2px 0 0" }}>5维基因选择 → Midjourney Prompt</p>
          </div>
          <button onClick={randomize} style={{ padding: "6px 14px", background: "#1e1e2e", border: "1px solid #333", borderRadius: 8, color: "#aaa", fontSize: 12, cursor: "pointer" }}>
            🎲 随机
          </button>
        </div>

        {/* 五个选槽 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6, marginBottom: 12 }}>
          {CATS.map(c => {
            const s = sel[c.key];
            return (
              <div key={c.key} onClick={() => setTab(c.key)}
                style={{ padding: "8px 6px", borderRadius: 8, cursor: "pointer",
                  background: s ? c.color + "15" : tab === c.key ? "#1a1a2e" : "#111118",
                  border: `1px solid ${s ? c.color + "60" : tab === c.key ? "#444" : "#222"}`,
                }}>
                <div style={{ fontSize: 10, color: s ? c.color : "#666", fontWeight: 600 }}>{c.label}</div>
                {s ? (
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 2 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>{s.cn}</span>
                    <span onClick={(e) => { e.stopPropagation(); clear(c.key); }} style={{ fontSize: 10, color: "#666", cursor: "pointer" }}>✕</span>
                  </div>
                ) : (
                  <div style={{ fontSize: 11, color: "#444", marginTop: 2 }}>选择</div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tab 切换 */}
        <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
          {CATS.map(c => (
            <button key={c.key} onClick={() => setTab(c.key)}
              style={{ padding: "4px 10px", borderRadius: 6, fontSize: 11, cursor: "pointer", border: "none",
                background: tab === c.key ? c.color + "25" : "#16161e",
                color: tab === c.key ? c.color : "#555",
                fontWeight: tab === c.key ? 700 : 400,
              }}>
              {c.label}
            </button>
          ))}
          <button onClick={() => setTab("H")}
            style={{ padding: "4px 10px", borderRadius: 6, fontSize: 11, cursor: "pointer", border: "none",
              background: tab === "H" ? "#fbbf2425" : "#16161e",
              color: tab === "H" ? "#fbbf24" : "#555",
              fontWeight: tab === "H" ? 700 : 400,
            }}>
            🎣钩子解码
          </button>
        </div>

        {/* 基因列表 或 钩子解码 */}
        <div style={{ background: "#111118", border: "1px solid #222", borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
          {tab === "H" ? (
            <div style={{ padding: 10, maxHeight: 420, overflowY: "auto" }}>
              {!hook ? (
                <>
                  <div style={{ fontSize: 10, color: "#555", marginBottom: 8, lineHeight: 1.6 }}>从购买动机倒推设计基因，点击「使用」一键填入选槽 ↓</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    {HK.map(h => (
                      <div key={h.id} onClick={() => { setHookId(h.id); setHookSi(0); }}
                        style={{ background: "#0d0d14", border: "1px solid #2a2a35", borderRadius: 8, padding: 10, cursor: "pointer", transition: "border-color 0.2s" }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = "#444"}
                        onMouseLeave={e => e.currentTarget.style.borderColor = "#2a2a35"}>
                        <div style={{ fontSize: 22, marginBottom: 4 }}>{h.i}</div>
                        <div style={{ fontWeight: 700, fontSize: 13, color: "#fff", marginBottom: 2 }}>{h.n}</div>
                        <div style={{ fontSize: 11, color: "#666", marginBottom: 6 }}>{h.s}</div>
                        <div style={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                          {h.segs.map((s, i) => (
                            <span key={i} style={{ fontSize: 9, padding: "2px 6px", borderRadius: 3, background: "#14141e", color: "#555", border: "1px solid #222" }}>{s.type}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  {/* Hook detail */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <div onClick={() => setHookId(null)}
                      style={{ width: 28, height: 28, borderRadius: 6, background: "#0d0d14", border: "1px solid #2a2a35", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 13, color: "#888", flexShrink: 0 }}>
                      ←
                    </div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 800 }}>{hook.i} {hook.n}</div>
                      <div style={{ fontSize: 11, color: "#666" }}>{hook.s}</div>
                    </div>
                  </div>

                  <div style={{ background: "#0d0d14", border: "1px solid #1e1a2e", borderRadius: 8, padding: "10px 12px", marginBottom: 10 }}>
                    <div style={{ fontSize: 9, color: "#7c3aed", fontWeight: 700, letterSpacing: 1, marginBottom: 4 }}>💡 设计洞察</div>
                    <div style={{ fontSize: 11, color: "#888", lineHeight: 1.7 }}>{hook.t}</div>
                  </div>

                  <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
                    {hook.segs.map((s, i) => (
                      <div key={i} onClick={() => setHookSi(i)}
                        style={{ flex: 1, padding: "8px", borderRadius: 7, cursor: "pointer",
                          background: hookSi === i ? "#12101e" : "#0d0d14",
                          border: `1px solid ${hookSi === i ? "#7c3aed40" : "#2a2a35"}` }}>
                        <div style={{ fontSize: 11, fontWeight: 600, color: hookSi === i ? "#fff" : "#555" }}>{s.type}</div>
                        <div style={{ fontSize: 9, color: hookSi === i ? "#a78bfa" : "#444", marginTop: 2 }}>{s.ref}</div>
                      </div>
                    ))}
                  </div>

                  {hookSeg && (
                    <>
                      <div style={{ display: "flex", gap: 2, marginBottom: 8, height: 3, borderRadius: 2, overflow: "hidden" }}>
                        {hookSeg.genes.map((g, i) => <div key={i} style={{ flex: 1, background: catOf(g.id).c, opacity: 0.6 }} />)}
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 10 }}>
                        {hookSeg.genes.map(gene => {
                          const { c, l } = catOf(gene.id);
                          const g = ALL_GENES[gene.id];
                          const f = freq[gene.id] || 0;
                          const rare = f <= 2;
                          const also = alsoIn[gene.id] || [];
                          return (
                            <div key={gene.id} style={{ background: "#0d0d14", border: "1px solid #1a1a24", borderRadius: 7, padding: "9px 11px" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 4, flexWrap: "wrap" }}>
                                <span style={{ fontSize: 8, padding: "1px 5px", borderRadius: 3, background: c + "18", color: c, fontWeight: 700 }}>{l}</span>
                                <span style={{ fontSize: 9, color: "#444", fontFamily: "monospace" }}>{gene.id}</span>
                                <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>{g?.cn}</span>
                                {rare && <span style={{ fontSize: 8, padding: "1px 5px", borderRadius: 3, background: "#ef444418", color: "#ef4444", fontWeight: 600 }}>稀有</span>}
                              </div>
                              <div style={{ fontSize: 11, color: "#888", lineHeight: 1.6 }}>{gene.w}</div>
                              {also.length > 0 && (
                                <div style={{ fontSize: 9, color: "#444", marginTop: 4, paddingTop: 4, borderTop: "1px solid #1a1a24" }}>
                                  同基因钩子: {also.join(" · ")}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      <button onClick={() => applyHookSeg(hook, hookSeg)}
                        style={{ width: "100%", padding: "8px 0", borderRadius: 7, background: "#7c3aed18", border: "1px solid #7c3aed40", color: "#a78bfa", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                        使用此基因组 → 填入选槽
                      </button>
                      <div style={{ fontSize: 9, color: "#333", textAlign: "center", marginTop: 4 }}>每类取首个基因，同时设置车型/情绪/场景</div>
                    </>
                  )}
                </>
              )}
            </div>
          ) : (
            <div style={{ padding: 10, maxHeight: 280, overflowY: "auto" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 }}>
                {catObj?.data.map(g => {
                  const isSel = sel[tab]?.id === g.id;
                  return (
                    <button key={g.id} onClick={() => pick(g)}
                      style={{ padding: "8px 6px", borderRadius: 8, textAlign: "left", cursor: "pointer",
                        background: isSel ? catColor + "18" : "#0d0d14",
                        border: `1px solid ${isSel ? catColor + "60" : "#2a2a35"}`,
                      }}>
                      <div style={{ fontSize: 10, color: isSel ? catColor : "#555", fontFamily: "monospace" }}>{g.id}</div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#fff", marginTop: 1 }}>{g.cn}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* 参数 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 12 }}>
          <div>
            <div style={{ fontSize: 10, color: "#555", marginBottom: 3 }}>车型</div>
            <select value={veh} onChange={e => setVeh(+e.target.value)} style={{ width: "100%", background: "#16161e", border: "1px solid #2a2a35", borderRadius: 6, padding: "5px 4px", color: "#ccc", fontSize: 11 }}>
              {VEHS.map((v, i) => <option key={v} value={i}>{VEHS_CN[i]}</option>)}
            </select>
          </div>
          <div>
            <div style={{ fontSize: 10, color: "#555", marginBottom: 3 }}>情绪</div>
            <select value={mood} onChange={e => setMood(+e.target.value)} style={{ width: "100%", background: "#16161e", border: "1px solid #2a2a35", borderRadius: 6, padding: "5px 4px", color: "#ccc", fontSize: 11 }}>
              {MOODS.map((m, i) => <option key={m} value={i}>{MOODS_CN[i]}</option>)}
            </select>
          </div>
          <div>
            <div style={{ fontSize: 10, color: "#555", marginBottom: 3 }}>场景</div>
            <select value={scene} onChange={e => setScene(+e.target.value)} style={{ width: "100%", background: "#16161e", border: "1px solid #2a2a35", borderRadius: 6, padding: "5px 4px", color: "#ccc", fontSize: 11 }}>
              {SCENES.map((s, i) => <option key={s} value={i}>{SCENES_CN[i]}</option>)}
            </select>
          </div>
          <div>
            <div style={{ fontSize: 10, color: "#555", marginBottom: 3 }}>视角</div>
            <select value={angle} onChange={e => setAngle(+e.target.value)} style={{ width: "100%", background: "#16161e", border: "1px solid #2a2a35", borderRadius: 6, padding: "5px 4px", color: "#ccc", fontSize: 11 }}>
              {ANGLES.map((a, i) => <option key={a} value={i}>{ANGLES_CN[i]}</option>)}
            </select>
          </div>
        </div>

        {/* Prompt 输出 */}
        <div style={{
          borderRadius: 12, padding: 16,
          background: isFull ? "#12121f" : "#0d0d14",
          border: `1px solid ${isFull ? "#7c3aed50" : "#222"}`,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <span style={{ fontSize: 13, fontWeight: 600 }}>
              {isFull ? "✨ 杂交完成" : hasAny ? "⏳ 部分选择" : "选择基因开始"}
            </span>
            {prompt && (
              <button onClick={doCopy}
                style={{ padding: "5px 12px", borderRadius: 6, fontSize: 11, cursor: "pointer", border: "none",
                  background: copied ? "#16a34a30" : "#7c3aed25",
                  color: copied ? "#4ade80" : "#a78bfa",
                }}>
                {copied ? "✓ 已复制" : "📋 复制"}
              </button>
            )}
          </div>
          {prompt ? (
            <div style={{ background: "#08080d", borderRadius: 8, padding: 12, fontSize: 11, color: "#999", lineHeight: 1.7, fontFamily: "monospace", wordBreak: "break-all" }}>
              {prompt}
            </div>
          ) : (
            <div style={{ textAlign: "center", color: "#444", fontSize: 13, padding: 20 }}>
              从上方选择基因后自动生成 Prompt
            </div>
          )}
          {isFull && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 10, paddingTop: 10, borderTop: "1px solid #222" }}>
              {CATS.map(c => sel[c.key] && (
                <span key={c.key} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, background: c.color + "15", color: c.color }}>
                  {sel[c.key].cn}
                </span>
              ))}
            </div>
          )}
        </div>

        <p style={{ textAlign: "center", fontSize: 10, color: "#333", marginTop: 12 }}>v8 · 五维基因杂交器 + 钩子解码</p>
      </div>
    </div>
  );
}
