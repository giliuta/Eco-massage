export const servicesData = {
  title: {
    ru: 'ПОКАЗАНИЯ К ПРОЦЕДУРАМ',
    en: 'TREATMENT AREAS',
    el: 'ΘΕΡΑΠΕΥΤΙΚΕΣ ΕΦΑΡΜΟΓΕΣ',
  },
  subtitle: {
    ru: 'Одна технология \u2014 десятки применений. ЭКЗОмассаж\u2122 эффективен при широком спектре проблем со здоровьем.',
    en: 'One technology \u2014 dozens of applications. EXOmassage\u2122 is effective for a wide range of health problems.',
    el: 'Μία τεχνολογία \u2014 δεκάδες εφαρμογές. Το EXOmassage\u2122 είναι αποτελεσματικό για ένα ευρύ φάσμα προβλημάτων υγείας.',
  },
  tabs: [
    {
      id: 'spine',
      icon: 'Activity',
      title: { ru: 'Боль в теле, проблемы с позвоночником', en: 'Spine & Body Pain', el: 'Πόνοι Σώματος & Σπονδυλικής Στήλης' },
      description: {
        ru: 'Боль в спине \u2014 одна из самых распространённых жалоб наших посетителей. ЭКЗОмассаж\u2122 быстро и эффективно избавляет тело от спазмов и хронических болей. 9 из 10 наших клиентов уже чувствуют облегчение после первого сеанса.',
        en: 'Back pain is one of the most common complaints from our visitors. EXOmassage\u2122 quickly and effectively relieves the body of spasms and chronic pain. 9 out of 10 of our clients feel relief after the first session.',
        el: 'Ο πόνος στην πλάτη είναι ένα από τα πιο συχνά παράπονα των επισκεπτών μας. Το EXOmassage\u2122 απαλλάσσει γρήγορα και αποτελεσματικά το σώμα από σπασμούς και χρόνιους πόνους.',
      },
      conditions: {
        ru: ['Боль в спине, плечах, шее, пояснице, лопатках, руках', 'Остеохондроз', 'Грыжи межпозвоночные', 'Протрузии позвоночника', 'Боль в груди и между лопаток', 'Защемление седалищного нерва', 'Онемение конечностей', 'Межрёберная невралгия', 'Жгучая боль в ягодице', 'Слабость в руках и ногах', 'Радикулит, в т.ч. грудной', 'Сутулость, "вдовий горбик"'],
        en: ['Back, shoulder, neck, lower back, shoulder blade, arm pain', 'Osteochondrosis', 'Herniated discs', 'Spinal protrusions', 'Chest and interscapular pain', 'Sciatic nerve pinching', 'Limb numbness', 'Intercostal neuralgia', 'Burning pain in the buttock', 'Weakness in arms and legs', 'Radiculitis', 'Poor posture, "dowager\'s hump"'],
        el: ['Πόνος στην πλάτη, ώμους, αυχένα, μέση', 'Οστεοχόνδρωση', 'Κήλη μεσοσπονδύλιου δίσκου', 'Προβολές σπονδυλικής στήλης', 'Πόνος στο στήθος', 'Πίεση ισχιακού νεύρου', 'Μούδιασμα άκρων', 'Μεσοπλεύρια νευραλγία', 'Καυστικός πόνος στον γλουτό', 'Αδυναμία χεριών και ποδιών', 'Ριζίτιδα', 'Κακή στάση'],
      },
    },
    {
      id: 'musculoskeletal',
      icon: 'Bone',
      title: { ru: 'Опорно-двигательный аппарат', en: 'Musculoskeletal System', el: 'Μυοσκελετικό Σύστημα' },
      description: {
        ru: 'ЭКЗОмассаж\u2122 может стать эффективным этапом в процессе реабилитации и в составе комплексной терапии после серьёзных травм, заболеваний опорно-двигательного аппарата, врождённых нарушений, ДЦП. ЭКЗОмассаж\u2122 возвращает возможность двигаться свободно и без боли!',
        en: 'EXOmassage\u2122 can be an effective stage in rehabilitation and complex therapy after serious injuries, musculoskeletal diseases, congenital disorders, and cerebral palsy. EXOmassage\u2122 restores the ability to move freely and without pain!',
        el: 'Το EXOmassage\u2122 μπορεί να αποτελέσει αποτελεσματικό στάδιο αποκατάστασης μετά από σοβαρούς τραυματισμούς και παθήσεις του μυοσκελετικού συστήματος.',
      },
      conditions: {
        ru: ['Артрит', 'Артроз', 'Остеопороз', 'Остеоартроз', 'Бурсит, миозит', 'Последствия переломов, вывихи, растяжения', 'ДЦП', 'Восстановление двигательных функций после перенесённого инсульта'],
        en: ['Arthritis', 'Arthrosis', 'Osteoporosis', 'Osteoarthritis', 'Bursitis, myositis', 'Fracture consequences, dislocations, sprains', 'Cerebral palsy', 'Motor function recovery after stroke'],
        el: ['Αρθρίτιδα', 'Αρθρίτιδα', 'Οστεοπόρωση', 'Οστεοαρθρίτιδα', 'Θυλακίτιδα, μυοσίτιδα', 'Κατάγματα, εξαρθρήματα', 'Εγκεφαλική παράλυση', 'Αποκατάσταση μετά από εγκεφαλικό'],
      },
    },
    {
      id: 'digestive',
      icon: 'Utensils',
      title: { ru: 'Проблемы ЖКТ', en: 'Digestive Health', el: 'Πεπτικό Σύστημα' },
      description: {
        ru: 'ЭКЗОмассаж\u2122 оказывает регулирующее влияние на перистальтику кишечника и ЖКТ. Нормализует отток желчи, снимает спазм и напряжение из-за стресса с внутренних органов. Ни одни руки массажиста не способны проработать эти участки.',
        en: 'EXOmassage\u2122 has a regulating effect on intestinal and GI tract peristalsis. Normalizes bile flow, relieves spasm and stress-related tension from internal organs. No massage therapist\'s hands can work these areas.',
        el: 'Το EXOmassage\u2122 ρυθμίζει την περισταλτική κίνηση του εντέρου. Ομαλοποιεί τη ροή χολής και ανακουφίζει από σπασμούς.',
      },
      conditions: {
        ru: ['Запоры и газообразование', 'Заболевания жёлчного пузыря', 'Нарушения работы поджелудочной железы', 'Нарушения микрофлоры кишечника, диарии', 'Синдром раздражённого кишечника', 'Хроническая изжога и отрыжка'],
        en: ['Constipation and bloating', 'Gallbladder diseases', 'Pancreatic dysfunction', 'Intestinal microflora disorders, diarrhea', 'Irritable bowel syndrome', 'Chronic heartburn and belching'],
        el: ['Δυσκοιλιότητα και φούσκωμα', 'Παθήσεις χοληδόχου κύστης', 'Δυσλειτουργία παγκρέατος', 'Διαταραχές εντερικής χλωρίδας', 'Σύνδρομο ευερέθιστου εντέρου', 'Χρόνια καούρα'],
      },
    },
    {
      id: 'urological',
      icon: 'Stethoscope',
      title: { ru: 'Урологические проблемы', en: 'Urological Health', el: 'Ουρολογικά Προβλήματα' },
      description: {
        ru: 'ЭКЗОмассаж\u2122 восстанавливает функции мочеполовой системы у мужчин и женщин. Под воздействием аппарата происходит обезболивающий и противовоспалительный эффект, улучшается отток мочи и предотвращается её застой, недержание. У мужчин \u2014 снятие воспалительных процессов при простатите и аденоме простаты.',
        en: 'EXOmassage\u2122 restores urogenital system functions in both men and women. The device provides analgesic and anti-inflammatory effects, improves urine flow and prevents stagnation and incontinence. In men \u2014 relieves inflammatory processes in prostatitis and prostate adenoma.',
        el: 'Το EXOmassage\u2122 αποκαθιστά τις λειτουργίες του ουρογεννητικού συστήματος σε άνδρες και γυναίκες.',
      },
      conditions: {
        ru: ['Воспаления почек', 'Мочеточника', 'Мочевого пузыря', 'Уретры', 'Простатит у мужчин', 'Цистит', 'Недержание', 'Слабость мышц таза'],
        en: ['Kidney inflammation', 'Ureter issues', 'Bladder issues', 'Urethral issues', 'Prostatitis in men', 'Cystitis', 'Incontinence', 'Pelvic floor weakness'],
        el: ['Φλεγμονή νεφρών', 'Ουρητήρα', 'Ουροδόχου κύστης', 'Ουρήθρας', 'Προστατίτιδα', 'Κυστίτιδα', 'Ακράτεια', 'Αδυναμία μυών πυελικού εδάφους'],
      },
    },
    {
      id: 'performance',
      icon: 'Zap',
      title: { ru: 'Повышение работоспособности', en: 'Stress & Performance', el: 'Στρες & Απόδοση' },
      description: {
        ru: 'Позволяет восстановиться после рабочих будней и стрессовых ситуаций. Обеспечивает прилив сил и повышение эмоционального состояния. Улучшает сон.',
        en: 'Allows recovery from workday fatigue and stressful situations. Provides an energy boost and improved emotional state. Improves sleep.',
        el: 'Επιτρέπει την ανάκαμψη από την κούραση της εργασίας. Παρέχει ενέργεια και βελτιωμένη συναισθηματική κατάσταση. Βελτιώνει τον ύπνο.',
      },
      conditions: {
        ru: ['Хроническая усталость и отсутствие энергии', 'Плохой сон', 'Головные боли', 'Синдром "менеджера" (неспособность переключиться и отдохнуть от работы)', 'Внутреннее волнение и переживание', 'Нервное напряжение', 'Стресс'],
        en: ['Chronic fatigue and lack of energy', 'Poor sleep', 'Headaches', '"Manager syndrome" (inability to switch off from work)', 'Internal anxiety and worry', 'Nervous tension', 'Stress'],
        el: ['Χρόνια κούραση και έλλειψη ενέργειας', 'Κακός ύπνος', 'Πονοκέφαλοι', 'Σύνδρομο "διευθυντή"', 'Εσωτερική ανησυχία', 'Νευρική ένταση', 'Στρες'],
      },
    },
    {
      id: 'beauty',
      icon: 'Sparkles',
      title: { ru: 'Красота \u2014 побочный эффект здоровья', en: 'Beauty & Body', el: 'Ομορφιά & Σώμα' },
      description: {
        ru: 'Подходит для людей с очень избыточным весом \u2014 тренажёр EXOwave выдерживает до 220 кг. После каждого сеанса, за счёт хорошего лимфодренажного эффекта, вы можете терять вес и объёмы. После курса ЭКЗОмассажа\u2122 нормализуется обмен веществ.',
        en: 'Suitable for people with excess weight \u2014 the EXOwave trainer supports up to 220 kg. After each session, due to excellent lymphatic drainage effect, you can lose weight and volume. After a course, metabolism normalizes.',
        el: 'Κατάλληλο για άτομα με υπερβολικό βάρος \u2014 ο εκπαιδευτής EXOwave αντέχει έως 220 κιλά. Μετά από κάθε συνεδρία, χάρη στο εξαιρετικό αποτέλεσμα λεμφικής αποστράγγισης.',
      },
      conditions: {
        ru: ['Ожирение, лишний вес', 'Нарушение обмена веществ', 'Дряблая кожа на теле', 'Отёки, целлюлит'],
        en: ['Obesity, excess weight', 'Metabolic disorders', 'Sagging skin', 'Edema, cellulite'],
        el: ['Παχυσαρκία, υπερβολικό βάρος', 'Διαταραχές μεταβολισμού', 'Χαλαρό δέρμα', 'Οίδημα, κυτταρίτιδα'],
      },
    },
    {
      id: 'antiaging',
      icon: 'Dna',
      title: { ru: 'Преждевременное старение', en: 'Anti-Aging', el: 'Αντιγήρανση' },
      description: {
        ru: 'Пройдя курс ЭКЗОмассажа\u2122 \u2014 вы не только устраняете спазмы и избавляетесь от боли, в организме начинается процесс обновления кровотока, микроциркуляция крови и улучшение функционирования нервных волокон органов. Уровень PH повышается, кислотность снижается, процесс регенерации восстанавливается.',
        en: 'After an EXOmassage\u2122 course, you don\'t just eliminate spasms and pain \u2014 your body begins renewing blood flow, improving microcirculation and nerve fiber function. pH level increases, acidity decreases, and the regeneration process is restored.',
        el: 'Μετά από ένα πρόγραμμα EXOmassage\u2122, δεν εξαλείφετε μόνο τους σπασμούς \u2014 το σώμα σας ξεκινά την ανανέωση της κυκλοφορίας του αίματος και τη βελτίωση της μικροκυκλοφορίας.',
      },
      conditions: {
        ru: ['Замедление процессов регенерации клеток', 'Ухудшение кровотока', 'Застойные явления венозной крови', 'Закисление организма'],
        en: ['Slowed cell regeneration', 'Deteriorated blood flow', 'Venous blood stagnation', 'Body acidification'],
        el: ['Επιβράδυνση αναγέννησης κυττάρων', 'Επιδείνωση ροής αίματος', 'Στασιμότητα φλεβικού αίματος', 'Οξίνιση οργανισμού'],
      },
    },
    {
      id: 'insomnia',
      icon: 'Moon',
      title: { ru: 'Бессонница', en: 'Insomnia & Sleep', el: 'Αϋπνία & Ύπνος' },
      description: {
        ru: 'ЭКЗОмассаж\u2122 способен вернуть очень уставшего человека к жизни. Расслабляются зажимы, восстанавливается нормальное кровообращение всех внутренних органов, человек расслабляется, успокаивается, нормализуется сон. Хороший сон обеспечен особенно в дни процедур.',
        en: 'EXOmassage\u2122 can bring an exhausted person back to life. Tension is released, normal blood circulation is restored, the person relaxes, calms down, and sleep normalizes. Good sleep is guaranteed especially on procedure days.',
        el: 'Το EXOmassage\u2122 μπορεί να φέρει ένα εξαντλημένο άτομο πίσω στη ζωή. Η ένταση απελευθερώνεται, η κυκλοφορία αποκαθίσταται, ο ύπνος ομαλοποιείται.',
      },
      conditions: {
        ru: ['Хроническая бессонница', 'Трудности с засыпанием', 'Частые пробуждения ночью', 'Нервное напряжение перед сном'],
        en: ['Chronic insomnia', 'Difficulty falling asleep', 'Frequent night awakenings', 'Pre-sleep nervous tension'],
        el: ['Χρόνια αϋπνία', 'Δυσκολία στον ύπνο', 'Συχνές νυχτερινές αφυπνίσεις', 'Νευρική ένταση πριν τον ύπνο'],
      },
    },
  ],
};
