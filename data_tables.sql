create table public.characters (
  id uuid default gen_random_uuid() primary key, -- 唯一ID
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  char text not null,          -- 汉字 (如 "爱")
  pinyin text,                 -- 拼音 (如 "ài")
  definition text,             -- 释义
  stroke_count int,            -- 笔画数
  hsk_level int,               -- HSK等级 (1-6/9)
  
  image_url text,              -- 图片链接 (存 Storage 里的地址)
  stroke_data jsonb,           -- 核心！存笔画SVG数据 (Makemeahanzi 格式)
  
  -- 设置约束：同一个汉字不能重复录入
  constraint characters_char_key unique (char)
);

-- 2. 创建例句表 (sentences)
create table public.sentences (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  -- 外键关联：这就建立了 "一对多" 关系
  char_id uuid references public.characters(id) on delete cascade not null,
  
  chinese text not null,       -- 中文例句
  pinyin text,                 -- 例句拼音
  english text,                -- 英文翻译
  audio_url text               -- 例句发音 (可选)
);