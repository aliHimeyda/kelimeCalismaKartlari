// Kaynak: INTERMEDIATE UNIT 1 GRAMMAR (cevaplar: INTERMEDIATE UNIT 1 GRAMMAR - KEY)
const grammer = [
  {
    id: 1,
    soru: "Write a Yes/No question:\nShe's French.",
    cevap: "Is she French?",
    translate: {
      soru: "Evet/Hayır sorusu yaz:\nO Fransız.",
      cevap: "O Fransız mı?"
    }
  },
  {
    id: 2,
    soru: "Write a Yes/No question:\nIt's raining.",
    cevap: "Is it raining?",
    translate: {
      soru: "Evet/Hayır sorusu yaz:\nYağmur yağıyor.",
      cevap: "Yağmur yağıyor mu?"
    }
  },
  {
    id: 3,
    soru: "Write a Yes/No question:\nThey're at school.",
    cevap: "Are they at school?",
    translate: {
      soru: "Evet/Hayır sorusu yaz:\nOnlar okulda.",
      cevap: "Onlar okulda mı?"
    }
  },
  {
    id: 4,
    soru: "Write a Yes/No question:\nThey're learning English.",
    cevap: "Are they learning English?",
    translate: {
      soru: "Evet/Hayır sorusu yaz:\nOnlar İngilizce öğreniyor.",
      cevap: "Onlar İngilizce öğreniyor mu?"
    }
  },
  {
    id: 5,
    soru: "Write a Yes/No question:\nYou're tired.",
    cevap: "Are you tired?",
    translate: {
      soru: "Evet/Hayır sorusu yaz:\nYorgunsun.",
      cevap: "Yorgun musun?"
    }
  },
  {
    id: 6,
    soru: "Write a Yes/No question:\nShe was at home last night.",
    cevap: "Was she at home last night?",
    translate: {
      soru: "Evet/Hayır sorusu yaz:\nO dün gece evdeydi.",
      cevap: "O dün gece evde miydi?"
    }
  },
  {
    id: 7,
    soru: "Write a Yes/No question:\nI'm right.",
    cevap: "Am I right?",
    translate: {
      soru: "Evet/Hayır sorusu yaz:\nHaklıyım.",
      cevap: "Haklı mıyım?"
    }
  },
  {
    id: 8,
    soru: "Write a Yes/No question:\nHe was born in 1960.",
    cevap: "Was he born in 1960?",
    translate: {
      soru: "Evet/Hayır sorusu yaz:\nO 1960'ta doğdu.",
      cevap: "O 1960'ta mı doğdu?"
    }
  },
  {
    id: 9,
    soru: "Write a Yes/No question:\nYou can speak Danish.",
    cevap: "Can you speak Danish?",
    translate: {
      soru: "Evet/Hayır sorusu yaz:\nDanca konuşabilirsin.",
      cevap: "Danca konuşabilir misin?"
    }
  },
  {
    id: 10,
    soru: "Write a Yes/No question:\nYou like music.",
    cevap: "Do you like music?",
    translate: {
      soru: "Evet/Hayır sorusu yaz:\nMüziği seversin.",
      cevap: "Müziği sever misin?"
    }
  },
  {
    id: 11,
    soru: "Write a Yes/No question:\nShe comes from France.",
    cevap: "Does she come from France?",
    translate: {
      soru: "Evet/Hayır sorusu yaz:\nO Fransa'dan geliyor (Fransalı).",
      cevap: "O Fransalı mı?"
    }
  },
  {
    id: 12,
    soru: "Write a Yes/No question:\nThey live in a flat.",
    cevap: "Do they live in a flat?",
    translate: {
      soru: "Evet/Hayır sorusu yaz:\nOnlar bir dairede yaşıyor.",
      cevap: "Onlar bir dairede mi yaşıyor?"
    }
  },
  {
    id: 13,
    soru: "Write a Yes/No question:\nYou take sugar in tea.",
    cevap: "Do you take sugar in tea?",
    translate: {
      soru: "Evet/Hayır sorusu yaz:\nÇaya şeker koyarsın.",
      cevap: "Çaya şeker koyar mısın?"
    }
  },
  {
    id: 14,
    soru: "Write a Yes/No question:\nI speak English well.",
    cevap: "Do I speak English well?",
    translate: {
      soru: "Evet/Hayır sorusu yaz:\nİngilizceyi iyi konuşurum.",
      cevap: "İngilizceyi iyi konuşuyor muyum?"
    }
  },
  {
    id: 15,
    soru: "Write a Yes/No question:\nShe watched a film last night.",
    cevap: "Did she watch a film last night?",
    translate: {
      soru: "Evet/Hayır sorusu yaz:\nO dün gece bir film izledi.",
      cevap: "O dün gece bir film izledi mi?"
    }
  },
  {
    id: 16,
    soru: "Write a Yes/No question:\nIt started at 8.00.",
    cevap: "Did it start at 8.00?",
    translate: {
      soru: "Evet/Hayır sorusu yaz:\nSaat 8'de başladı.",
      cevap: "Saat 8'de mi başladı?"
    }
  },
  {
    id: 17,
    soru: "Write a Yes/No question:\nYou want to go home.",
    cevap: "Do you want to go home?",
    translate: {
      soru: "Evet/Hayır sorusu yaz:\nEve gitmek istiyorsun.",
      cevap: "Eve gitmek istiyor musun?"
    }
  },
  {
    id: 18,
    soru: "Write a Yes/No question:\nHe works hard.",
    cevap: "Does he work hard?",
    translate: {
      soru: "Evet/Hayır sorusu yaz:\nO çok çalışır.",
      cevap: "O çok çalışır mı?"
    }
  },
  {
    id: 19,
    soru: "Find the answer:\nWhat do you do?",
    cevap: "I'm a teacher. (e)",
    translate: {
      soru: "Cevabını bul:\nNe iş yapıyorsun?",
      cevap: "Öğretmenim."
    }
  },
  {
    id: 20,
    soru: "Find the answer:\nWho did you go out with last night?",
    cevap: "Maria and Pedro. (d)",
    translate: {
      soru: "Cevabını bul:\nDün gece kiminle dışarı çıktın?",
      cevap: "Maria ve Pedro ile."
    }
  },
  {
    id: 21,
    soru: "Find the answer:\nWhere do you live?",
    cevap: "In a flat in the center of town. (i)",
    translate: {
      soru: "Cevabını bul:\nNerede yaşıyorsun?",
      cevap: "Şehir merkezinde bir dairede."
    }
  },
  {
    id: 22,
    soru: "Find the answer:\nWhen's your birthday?",
    cevap: "It's today! (g)",
    translate: {
      soru: "Cevabını bul:\nDoğum günün ne zaman?",
      cevap: "Bugün!"
    }
  },
  {
    id: 23,
    soru: "Find the answer:\nWhy are you wearing a suit?",
    cevap: "Because I'm going to an expensive restaurant. (j)",
    translate: {
      soru: "Cevabını bul:\nNeden takım elbise giyiyorsun?",
      cevap: "Çünkü pahalı bir restorana gidiyorum."
    }
  },
  {
    id: 24,
    soru: "Find the answer:\nHow many students are there in the class?",
    cevap: "Twenty-five. (b)",
    translate: {
      soru: "Cevabını bul:\nSınıfta kaç öğrenci var?",
      cevap: "Yirmi beş."
    }
  },
  {
    id: 25,
    soru: "Find the answer:\nHow much did you pay for your shoes?",
    cevap: "Thirty dollars. (a)",
    translate: {
      soru: "Cevabını bul:\nAyakkabıların için ne kadar ödedin?",
      cevap: "Otuz dolar."
    }
  },
  {
    id: 26,
    soru: "Find the answer:\nHow are you?",
    cevap: "Fine. And you? (c)",
    translate: {
      soru: "Cevabını bul:\nNasılsın?",
      cevap: "İyiyim. Ya sen?"
    }
  },
  {
    id: 27,
    soru: "Find the answer:\nWhose is this money?",
    cevap: "I'm sure it's mine. (h)",
    translate: {
      soru: "Cevabını bul:\nBu para kimin?",
      cevap: "Eminim benimdir."
    }
  },
  {
    id: 28,
    soru: "Find the answer:\nWhich newspaper do you read?",
    cevap: "The Times. (f)",
    translate: {
      soru: "Cevabını bul:\nHangi gazeteyi okuyorsun?",
      cevap: "The Times'ı."
    }
  },
  {
    id: 29,
    soru: "Put the words in order:\nbuy / you / the / did / at / what / shops / ?",
    cevap: "What did you buy at the shops?",
    translate: {
      soru: "Kelimeleri doğru sıraya koy:",
      cevap: "Mağazalardan ne aldın?"
    }
  },
  {
    id: 30,
    soru: "Put the words in order:\nis / who / teacher / your / English / ?",
    cevap: "Who is your English teacher?",
    translate: {
      soru: "Kelimeleri doğru sıraya koy:",
      cevap: "İngilizce öğretmenin kim?"
    }
  },
  {
    id: 31,
    soru: "Put the words in order:\nparents / moment / where / your / the / at / are / ?",
    cevap: "Where are your parents at the moment?",
    translate: {
      soru: "Kelimeleri doğru sıraya koy:",
      cevap: "Ailen şu anda nerede?"
    }
  },
  {
    id: 32,
    soru: "Put the words in order:\ncinema / you / go / last / when / did / the / to / ?",
    cevap: "When did you last go to the cinema?",
    translate: {
      soru: "Kelimeleri doğru sıraya koy:",
      cevap: "En son ne zaman sinemaya gittin?"
    }
  },
  {
    id: 33,
    soru: "Put the words in order:\nlearning / you / why / English / are / ?",
    cevap: "Why are you learning English?",
    translate: {
      soru: "Kelimeleri doğru sıraya koy:",
      cevap: "Neden İngilizce öğreniyorsun?"
    }
  },
  {
    id: 34,
    soru: "Put the words in order:\nyou / how / to / come / school / do / ?",
    cevap: "How do you come to school?",
    translate: {
      soru: "Kelimeleri doğru sıraya koy:",
      cevap: "Okula nasıl geliyorsun?"
    }
  },
  {
    id: 35,
    soru: "Put the words in order:\nbrothers and sisters / you / many / have / how / do / ?",
    cevap: "How many brothers and sisters do you have?",
    translate: {
      soru: "Kelimeleri doğru sıraya koy:",
      cevap: "Kaç kardeşin var?"
    }
  },
  {
    id: 36,
    soru: "Complete with a question word:\nDad: Morning, Kate. ____ are you today?\nKate: Fine, thanks. A bit tired.",
    cevap: "How",
    translate: {
      soru: "Soru kelimesiyle tamamla:\nBabası: Günaydın Kate. Bugün ____ sın?\nKate: İyiyim, teşekkürler. Biraz yorgunum.",
      cevap: "How = Nasıl → Bugün nasılsın?"
    }
  },
  {
    id: 37,
    soru: "Complete with a question word:\nDad: I didn't hear you come home last night. ____ time did you get in?\nKate: About 11.00.",
    cevap: "What",
    translate: {
      soru: "Soru kelimesiyle tamamla:\nBabası: Dün gece eve geldiğini duymadım. Saat ____ geldin?\nKate: 11 civarı.",
      cevap: "What time = Saat kaçta → Saat kaçta geldin?"
    }
  },
  {
    id: 38,
    soru: "Complete with a question word:\nDad: ____ did you go?\nKate: Just round to Beth's house.",
    cevap: "Where",
    translate: {
      soru: "Soru kelimesiyle tamamla:\nBabası: ____ gittin?\nKate: Sadece Beth'in evine.",
      cevap: "Where = Nereye → Nereye gittin?"
    }
  },
  {
    id: 39,
    soru: "Complete with a question word:\nDad: There's a letter for you on the table.\nKate: Oh! ____ is it from?",
    cevap: "Who",
    translate: {
      soru: "Soru kelimesiyle tamamla:\nBabası: Masada sana bir mektup var.\nKate: Aa! ____ gelmiş?",
      cevap: "Who = Kim → Kimden gelmiş?"
    }
  },
  {
    id: 40,
    soru: "Complete with a question word:\nDad: ____'s the matter?\nKate: Nothing. It's from Luis in Spain.",
    cevap: "What",
    translate: {
      soru: "Soru kelimesiyle tamamla:\nBabası: ____ oldu?\nKate: Hiçbir şey. İspanya'daki Luis'den.",
      cevap: "What's the matter? = Ne oldu? / Sorun ne?"
    }
  },
  {
    id: 41,
    soru: "Complete with a question word:\nKate: He says he's coming to England soon.\nDad: ____?\nKate: Because he's going to study English.",
    cevap: "Why",
    translate: {
      soru: "Soru kelimesiyle tamamla:\nKate: Yakında İngiltere'ye geleceğini söylüyor.\nBabası: ____?\nKate: Çünkü İngilizce okuyacak.",
      cevap: "Why = Neden → Neden?"
    }
  },
  {
    id: 42,
    soru: "Complete with a question word:\nDad: ____ is he going to stay?\nKate: Here in London.",
    cevap: "Where",
    translate: {
      soru: "Soru kelimesiyle tamamla:\nBabası: ____ kalacak?\nKate: Burada, Londra'da.",
      cevap: "Where = Nerede → Nerede kalacak?"
    }
  },
  {
    id: 43,
    soru: "Complete with a question word:\nDad: ____ school is he going to?\nKate: He doesn't know yet.",
    cevap: "Which",
    translate: {
      soru: "Soru kelimesiyle tamamla:\nBabası: ____ okula gidecek?\nKate: Henüz bilmiyor.",
      cevap: "Which = Hangi → Hangi okula gidecek?"
    }
  },
  {
    id: 44,
    soru: "Complete with a question word:\nDad: ____ is he coming?\nKate: Next week.",
    cevap: "When",
    translate: {
      soru: "Soru kelimesiyle tamamla:\nBabası: ____ geliyor?\nKate: Gelecek hafta.",
      cevap: "When = Ne zaman → Ne zaman geliyor?"
    }
  },
  {
    id: 45,
    soru: "Complete with a question word:\nDad: You must invite him round. ____ don't you write back and invite him to Sunday lunch?\nKate: OK, I will.",
    cevap: "Why",
    translate: {
      soru: "Soru kelimesiyle tamamla:\nBabası: Onu eve davet etmelisin. ____ ona cevap yazıp pazar öğle yemeğine davet etmiyorsun?\nKate: Tamam, ederim.",
      cevap: "Why don't you…? = Neden …-mıyorsun? (öneri) → Neden ona yazıp davet etmiyorsun?"
    }
  },
  {
    id: 46,
    soru: "Complete with How / What + colour, far, tall, sort, much, often, size, long, newspaper, time:\n____ ____ shoes do you take?",
    cevap: "What size shoes do you take?",
    translate: {
      soru: "How / What + verilen kelimelerden biriyle tamamla:\nKaç ____ ayakkabı giyiyorsun?",
      cevap: "Kaç numara ayakkabı giyiyorsun?"
    }
  },
  {
    id: 47,
    soru: "Complete with How / What + colour, far, tall, sort, much, often, size, long, newspaper, time:\n____ ____ did you get up this morning?",
    cevap: "What time did you get up this morning?",
    translate: {
      soru: "How / What + verilen kelimelerden biriyle tamamla:\nBu sabah ____ kalktın?",
      cevap: "Bu sabah saat kaçta kalktın?"
    }
  },
  {
    id: 48,
    soru: "Complete with How / What + colour, far, tall, sort, much, often, size, long, newspaper, time:\n____ ____ do you read?",
    cevap: "What newspaper do you read?",
    translate: {
      soru: "How / What + verilen kelimelerden biriyle tamamla:\n____ okuyorsun?",
      cevap: "Hangi gazeteyi okuyorsun?"
    }
  },
  {
    id: 49,
    soru: "Complete with How / What + colour, far, tall, sort, much, often, size, long, newspaper, time:\n____ ____ is it from your house to the town center?",
    cevap: "How far is it from your house to the town center?",
    translate: {
      soru: "How / What + verilen kelimelerden biriyle tamamla:\nEvinden şehir merkezine ____?",
      cevap: "Evinden şehir merkezine ne kadar uzak?"
    }
  },
  {
    id: 50,
    soru: "Complete with How / What + colour, far, tall, sort, much, often, size, long, newspaper, time:\n____ ____ are you?",
    cevap: "How tall are you?",
    translate: {
      soru: "How / What + verilen kelimelerden biriyle tamamla:\nBoyun ____?",
      cevap: "Boyun kaç?"
    }
  },
  {
    id: 51,
    soru: "Complete with How / What + colour, far, tall, sort, much, often, size, long, newspaper, time:\n____ ____ is your hair?",
    cevap: "What colour is your hair?",
    translate: {
      soru: "How / What + verilen kelimelerden biriyle tamamla:\nSaçın ____?",
      cevap: "Saçın ne renk?"
    }
  },
  {
    id: 52,
    soru: "Complete with How / What + colour, far, tall, sort, much, often, size, long, newspaper, time:\n____ ____ do you go swimming?",
    cevap: "How often do you go swimming?",
    translate: {
      soru: "How / What + verilen kelimelerden biriyle tamamla:\n____ yüzmeye gidersin?",
      cevap: "Ne sıklıkla yüzmeye gidersin?"
    }
  },
  {
    id: 53,
    soru: "Complete with How / What + colour, far, tall, sort, much, often, size, long, newspaper, time:\n____ ____ does a hamburger cost in your town?",
    cevap: "How much does a hamburger cost in your town?",
    translate: {
      soru: "How / What + verilen kelimelerden biriyle tamamla:\nSenin şehrinde bir hamburger ____?",
      cevap: "Senin şehrinde bir hamburger ne kadar?"
    }
  },
  {
    id: 54,
    soru: "Complete with How / What + colour, far, tall, sort, much, often, size, long, newspaper, time:\n____ ____ of music do you like?",
    cevap: "What sort of music do you like?",
    translate: {
      soru: "How / What + verilen kelimelerden biriyle tamamla:\n____ müzik seversin?",
      cevap: "Ne tür müzik seversin?"
    }
  },
  {
    id: 55,
    soru: "Complete with How / What + colour, far, tall, sort, much, often, size, long, newspaper, time:\n____ ____ does your English lesson last?",
    cevap: "How long does your English lesson last?",
    translate: {
      soru: "How / What + verilen kelimelerden biriyle tamamla:\nİngilizce dersin ____ sürer?",
      cevap: "İngilizce dersin ne kadar sürer?"
    }
  },
  {
    id: 56,
    soru: "Write a question for this sentence:\nWe had a wonderful holiday.",
    cevap: "Where did you go?",
    translate: {
      soru: "Bu cümleye uygun bir soru yaz:\nHarika bir tatil geçirdik.",
      cevap: "Nereye gittiniz?"
    }
  },
  {
    id: 57,
    soru: "Write a question for this sentence:\nI'm reading a good book at the moment.",
    cevap: "What are you reading?",
    translate: {
      soru: "Bu cümleye uygun bir soru yaz:\nŞu anda güzel bir kitap okuyorum.",
      cevap: "Ne okuyorsun?"
    }
  },
  {
    id: 58,
    soru: "Write a question for this sentence:\nI bought a new car last week.",
    cevap: "What car did you buy? / How much did you pay?",
    translate: {
      soru: "Bu cümleye uygun bir soru yaz:\nGeçen hafta yeni bir araba aldım.",
      cevap: "Hangi arabayı aldın? / Ne kadar ödedin?"
    }
  },
  {
    id: 59,
    soru: "Write a question for this sentence:\nNick and I had a great night out on Saturday.",
    cevap: "Where did you go? / What did you do?",
    translate: {
      soru: "Bu cümleye uygun bir soru yaz:\nNick ile cumartesi akşamı dışarıda harika vakit geçirdik.",
      cevap: "Nereye gittiniz? / Ne yaptınız?"
    }
  },
  {
    id: 60,
    soru: "Write a question for this sentence:\nAnn's going to China next week.",
    cevap: "Why is she going there?",
    translate: {
      soru: "Bu cümleye uygun bir soru yaz:\nAnn gelecek hafta Çin'e gidiyor.",
      cevap: "Oraya neden gidiyor?"
    }
  },
  {
    id: 61,
    soru: "Write a question for this sentence:\nDavid earns more than 200,000 pounds a year.",
    cevap: "How much does he earn?",
    translate: {
      soru: "Bu cümleye uygun bir soru yaz:\nDavid yılda 200.000 sterlinden fazla kazanıyor.",
      cevap: "Ne kadar kazanıyor?"
    }
  },
  {
    id: 62,
    soru: "Write a question for this sentence:\nThey have so many children.",
    cevap: "How many children do they have?",
    translate: {
      soru: "Bu cümleye uygun bir soru yaz:\nOnların çok fazla çocuğu var.",
      cevap: "Kaç çocukları var?"
    }
  }
];
