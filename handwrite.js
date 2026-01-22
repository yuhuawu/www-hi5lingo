// 1. getStaticPaths: 告诉 Astro 要生成哪些页面
export async function getStaticPaths() {
  // 从 Supabase 获取所有汉字
  const { data: chars } = await supabase.from('characters').select('char');
  
  // 返回列表：[{params: {hanzi: '爱'}}, {params: {hanzi: '我'}}...]
  return chars.map(c => ({ params: { hanzi: c.char } }));
}

// 2. 获取当前页面的数据
const { hanzi } = Astro.params;
// 查询详细信息 + 例句
const { data: charData } = await supabase
  .from('characters')
  .select('*, sentences(*)')
  .eq('char', hanzi)
  .single();
---

<html>
  <head>
    <title>Learn to write {charData.char} - Hi5Lingo</title>
    </head>
  <body>
    <h1>{charData.char} ({charData.pinyin})</h1>
    <img src={charData.image_url} alt="Illustration of {charData.char}" />
    
    <div id="character-target-div"></div>

    <p>{charData.definition}</p>

    <ul>
      {charData.sentences.map(s => (
        <li>{s.chinese} - {s.english}</li>
      ))}
    </ul>

    <script define:vars={{ strokeData: charData.stroke_data }}>
      // 使用客户端 JS 渲染动画
      import HanziWriter from 'hanzi-writer';
      const writer = HanziWriter.create('character-target-div', {
        charDataLoader: () => strokeData // 直接使用数据库里的数据，不发网络请求
      });
      writer.animateCharacter();
    </script>
  </body>
</html>