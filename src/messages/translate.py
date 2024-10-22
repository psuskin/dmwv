from deep_translator import GoogleTranslator
import json

targetLanguages = ['es', 'fr', 'it', 'ru', 'ar', 'tr']

def translate_text(text, source_language, target_language):
    try:
        translated_text = GoogleTranslator(source=source_language, target=target_language).translate(text)
        print("Translating text: ", text)
        if translated_text.startswith('/'):
            return text
        return translated_text
    except Exception as e:
        print(f"Error translating text: {text}")
        print(e)
        return text

def crawl_and_translate(data, source_language, target_language):
    if isinstance(data, dict):
        return {key: crawl_and_translate(value, source_language, target_language) for key, value in data.items()}
    elif isinstance(data, list):
        return [crawl_and_translate(item, source_language, target_language) for item in data]
    elif isinstance(data, str):
        return translate_text(data, source_language, target_language)
    else:
        return data

with open('en.json') as f:
    data = json.load(f)

for language in targetLanguages:
    translated_data = crawl_and_translate(data, 'en', language)
    with open(f'{language}.json', 'w', encoding='utf-8') as f:
        json.dump(translated_data, f, ensure_ascii=False, indent=4)