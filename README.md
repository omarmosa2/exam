# 🎓 تطبيق اختبار اللغة الإنجليزية المحدّث / Enhanced English Quiz Application

تطبيق ويب تفاعلي لاختبارات اللغة الإنجليزية يعمل بالكامل باستخدام HTML وCSS وJavaScript فقط.

An interactive web application for English language quizzes built entirely with HTML, CSS, and JavaScript.

## 🆕 التحديثات الجديدة / New Updates

### ✨ نظام الشروحات الذكي / Smart Explanation System

**تم إضافة نظام شامل لشرح الإجابات بناءً على قواعد اللغة الإنجليزية!**

**A comprehensive explanation system has been added based on English grammar rules!**

#### المميزات الجديدة / New Features:

1. **📚 القاعدة النحوية / Grammar Rule**
   - عرض القاعدة المُختبرة في كل سؤال
   - Display the grammar rule being tested in each question

2. **✅ شرح الإجابة الصحيحة / Correct Answer Explanation**
   - لماذا الإجابة صحيحة بناءً على القواعد
   - Why the answer is correct based on grammar rules

3. **❌ شرح الإجابات الخاطئة / Wrong Answers Explanation**
   - لماذا كل خيار خاطئ مع التفاصيل
   - Why each option is wrong with details

4. **🌐 شروحات ثنائية اللغة / Bilingual Explanations**
   - جميع الشروحات بالعربية والإنجليزية
   - All explanations in Arabic and English

5. **📖 قواعد معتمدة / Standard Rules**
   - جميع الشروحات مبنية على قواعد اللغة الإنجليزية المعتمدة
   - All explanations based on standard English grammar rules

6. **🎨 تصميم مرئي واضح / Clear Visual Design**
   - ألوان مميزة لكل نوع من الشروحات
   - Distinctive colors for each type of explanation

---

## ✨ المميزات الأساسية / Core Features

### 1. واجهة البداية / Start Interface
- اختيار عدد الأسئلة من خيارات محددة مسبقاً (10، 20، 30، 40، 50، أو الكل)
- إمكانية إدخال عدد مخصص من الأسئلة
- Choose from predefined question counts (10, 20, 30, 40, 50, or all)
- Custom number input option

### 2. اختيار عشوائي للأسئلة / Random Question Selection
- يتم اختيار الأسئلة بشكل عشوائي من ملف JSON
- Questions are randomly selected from a JSON file
- ضمان عدم تكرار نفس الأسئلة في كل اختبار
- Ensures different questions in each quiz attempt

### 3. التفاعل مع الأسئلة / Question Interaction
- ✅ الإجابة الصحيحة تظهر باللون الأخضر
- ❌ الإجابة الخاطئة تظهر باللون الأحمر
- 📝 **جديد:** شرح تفصيلي فوري لكل إجابة
- 📚 **جديد:** عرض القاعدة النحوية المُختبرة
- إمكانية الإجابة على كل سؤال مرة واحدة فقط
- Correct answers highlighted in green
- Wrong answers highlighted in red
- **NEW:** Instant detailed explanation for each answer
- **NEW:** Display of the grammar rule being tested
- Each question can only be answered once

### 4. التنقل بين الأسئلة / Navigation
- أزرار للتنقل بين الأسئلة (السابق/التالي)
- عداد التقدم يوضح السؤال الحالي من إجمالي الأسئلة
- شريط تقدم مرئي
- Previous/Next navigation buttons
- Progress counter showing current question / total
- Visual progress bar

### 5. عرض النتائج / Results Display
- عرض النتيجة النهائية (النقاط المكتسبة من المجموع)
- النسبة المئوية للأداء
- عدد الإجابات الصحيحة والخاطئة
- رسالة أداء بناءً على النتيجة
- Final score display (points earned / total)
- Percentage score
- Correct and wrong answer counts
- Performance message based on results

### 6. مميزات إضافية / Additional Features
- تصميم متجاوب يعمل على جميع الأجهزة
- واجهة مستخدم جذابة وسهلة الاستخدام
- ألوان واضحة لتمييز الإجابات
- دعم اللغتين العربية والإنجليزية
- Responsive design for all devices
- Attractive and user-friendly interface
- Clear color coding for answers
- Bilingual support (Arabic/English)

## 🚀 كيفية الاستخدام / How to Use

### التشغيل / Running the Application

1. **افتح الملف / Open the File**
   ```
   افتح ملف index.html في أي متصفح ويب
   Open index.html in any web browser
   ```

2. **اختر عدد الأسئلة / Choose Question Count**
   - انقر على أحد الأزرار لاختيار عدد محدد من الأسئلة
   - أو أدخل عدداً مخصصاً في حقل الإدخال
   - Click a button to select a predefined number
   - Or enter a custom number in the input field

3. **أجب على الأسئلة / Answer Questions**
   - اقرأ السؤال بعناية
   - اختر الإجابة الصحيحة
   - استخدم أزرار التنقل للانتقال بين الأسئلة
   - Read each question carefully
   - Select the correct answer
   - Use navigation buttons to move between questions

4. **اعرض النتائج / View Results**
   - بعد الإجابة على جميع الأسئلة، انقر على "إنهاء"
   - ستظهر صفحة النتائج مع درجتك النهائية
   - After answering all questions, click "Finish"
   - Results page will show your final score

## 📁 هيكل الملفات / File Structure

```
exam/
├── index.html              # الملف الرئيسي / Main HTML file
├── styles.css              # ملف التصميم / Styling file
├── script.js               # ملف البرمجة / JavaScript functionality
├── question.json           # ملف الأسئلة مع الشروحات / Questions with explanations
├── EXPLANATION_GUIDE.md    # دليل نظام الشروحات / Explanation system guide
├── generate_explanations.py # سكريبت لإضافة الشروحات / Script for adding explanations
└── README.md               # هذا الملف / This file
```

## 🎨 التصميم / Design

التطبيق يستخدم نظام تصميم حديث مع:
- متغيرات CSS للألوان والأبعاد
- تصميم متجاوب لجميع أحجام الشاشات
- رسوم متحركة سلسة
- واجهة نظيفة وسهلة الاستخدام

The application uses a modern design system with:
- CSS variables for colors and dimensions
- Responsive design for all screen sizes
- Smooth animations
- Clean and easy-to-use interface

## 🔧 التخصيص / Customization

### إضافة أسئلة جديدة / Adding New Questions

يمكنك إضافة أسئلة جديدة بتحرير ملف `question.json`:
You can add new questions by editing the `question.json` file:

```json
{
  "question": "سؤالك هنا / Your question here",
  "answers": [
    { "text": "A) خيار 1 / Option 1" },
    { "text": "B) خيار 2 / Option 2", "correct": 1 },
    { "text": "C) خيار 3 / Option 3" },
    { "text": "D) خيار 4 / Option 4" }
  ],
  "explanation": {
    "rule": "القاعدة النحوية / Grammar Rule",
    "correct_answer": "B) خيار 2 / Option 2",
    "why_correct": "شرح لماذا هذه الإجابة صحيحة\n\nExplanation why this is correct",
    "why_others_wrong": {
      "A": "شرح لماذا A خاطئ\n\nWhy A is wrong",
      "C": "شرح لماذا C خاطئ\n\nWhy C is wrong",
      "D": "شرح لماذا D خاطئ\n\nWhy D is wrong"
    }
  }
}
```

**ملاحظة:** أضف `"correct": 1` للإجابة الصحيحة فقط
**Note:** Add `"correct": 1` only to the correct answer

**جديد:** أضف حقل `explanation` لكل سؤال لتوفير شروحات تفصيلية
**NEW:** Add `explanation` field for each question to provide detailed explanations

### تغيير الألوان / Changing Colors

يمكنك تخصيص الألوان بتعديل متغيرات CSS في ملف `styles.css`:
You can customize colors by modifying CSS variables in `styles.css`:

```css
:root {
    --color-primary: #4a90e2;
    --color-success: #27ae60;
    --color-error: #e74c3c;
    /* ... المزيد / more variables ... */
}
```

## 🌐 المتصفحات المدعومة / Browser Support

- ✅ Chrome / Edge (الإصدارات الحديثة / Modern versions)
- ✅ Firefox (الإصدارات الحديثة / Modern versions)
- ✅ Safari (الإصدارات الحديثة / Modern versions)
- ✅ Opera (الإصدارات الحديثة / Modern versions)

## 📱 التوافق مع الأجهزة / Device Compatibility

- ✅ أجهزة الكمبيوتر المكتبية / Desktop computers
- ✅ الأجهزة اللوحية / Tablets
- ✅ الهواتف الذكية / Smartphones

## 🎯 الاستخدامات / Use Cases

- اختبارات اللغة الإنجليزية / English language tests
- التدريب والممارسة / Practice and training
- التقييم الذاتي / Self-assessment
- الاختبارات التعليمية / Educational quizzes

## 💡 نصائح / Tips

1. **للحصول على أفضل النتائج:**
   - تأكد من قراءة كل سؤال بعناية
   - لا تستعجل في اختيار الإجابة
   - استخدم زر "السابق" لمراجعة أجوبتك

2. **For Best Results:**
   - Read each question carefully
   - Don't rush your answers
   - Use the "Previous" button to review your answers

## 🐛 استكشاف الأخطاء / Troubleshooting

**المشكلة:** لا تظهر الأسئلة
**الحل:** تأكد من وجود ملف `question.json` في نفس المجلد

**Problem:** Questions don't appear
**Solution:** Make sure `question.json` file exists in the same directory

**المشكلة:** لا يعمل التطبيق
**الحل:** تأكد من فتح الملف عبر بروتوكول HTTP (استخدم خادم محلي)

**Problem:** Application doesn't work
**Solution:** Make sure to open the file via HTTP protocol (use a local server)

## 📄 الترخيص / License

هذا المشروع مفتوح المصدر ومتاح للاستخدام الحر
This project is open source and free to use

---

**صُنع بـ ❤️ باستخدام HTML، CSS، و JavaScript**
**Made with ❤️ using HTML, CSS, and JavaScript**