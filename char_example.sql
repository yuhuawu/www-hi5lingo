INSERT INTO public.characters (
  char, 
  pinyin, 
  definition, 
  stroke_count, 
  hsk_level, 
  stroke_data
) VALUES (
  '我',                               -- 汉字
  'wǒ',                               -- 拼音
  'I; me; my',                        -- 释义
  7,                                  -- 笔画数
  1,                                  -- HSK 等级
  '{
    "strokes": [
      "M100,100 L200,200", 
      "M200,100 L100,200"
    ],
    "medians": [
      [[100,100], [200,200]],
      [[200,100], [100,200]]
    ]
  }'::jsonb                           -- 注意：这里暂时用了假坐标来测试 JSON 格式是否通过, 有问题。要用真实数据，否则画不出来。
);

-- 顺便给 "我" 插入一条例句 (我们需要先动态获取刚才插入的 ID)
INSERT INTO public.sentences (char_id, chinese, pinyin, english)
SELECT 
  id, 
  '我爱你。', 
  'Wǒ ài nǐ.', 
  'I love you.'
FROM public.characters 
WHERE char = '我';