-- Insert Character '我'
INSERT INTO public.characters (char, pinyin, definition, stroke_count, hsk_level)
VALUES ('我', 'wǒ', 'I; me; my', 7, 1)
ON CONFLICT (char) DO NOTHING;

-- Insert Sentences for '我'
WITH char_row AS (SELECT id FROM public.characters WHERE char = '我')
INSERT INTO public.sentences (char_id, chinese, pinyin, english)
SELECT id, '我爱你。', 'Wǒ ài nǐ.', 'I love you.'
FROM char_row
UNION ALL
SELECT id, '我是学生。', 'Wǒ shì xuésheng.', 'I am a student.'
FROM char_row;
