const BOARD_DATA = {
  modules: {
    instructions: { label: "👩‍🏫 教員指示", sub: "Teacher" },
    peerSupports: { label: "🤝 おたすけ", sub: "Peer Helper" },
    sharedCards:  { label: "🏫 みんなのボード", sub: "Shared" }
  },
  categories: {
    school: "🚸 がっこう",
    body: "🚑 からだ・きもち",
    ask: "🤝 おねがい"
  },
  instructions: [
    { id:"INST-01", icon:"🪑", ja:"すわりましょう", speechJa:"すわりましょう",
      translations:{ en:"Please sit down", tl:"Umupo tayo", vi:"Hãy ngồi xuống" } },
    { id:"INST-02", icon:"🤫", ja:"しずかに しましょう", speechJa:"しずかにしましょう",
      translations:{ en:"Quiet, please", tl:"Tahimik muna", vi:"Hãy giữ trật tự" } },
    { id:"INST-03", icon:"📖", ja:"ほん/のーと を だす", speechJa:"ほん、のーとをだす",
      translations:{ en:"Open your book/notebook", tl:"Ilabas ang libro/notebook", vi:"Mở sách/vở" } },
    { id:"INST-04", icon:"📐", ja:"さんすう の じかん", speechJa:"さんすうのじかん",
      translations:{ en:"Math time", tl:"Oras ng Math", vi:"Giờ toán" } },
    { id:"INST-05", icon:"⏳", ja:"すこし まってね", speechJa:"すこしまってね",
      translations:{ en:"Wait a moment", tl:"Maghintay sandali", vi:"Chờ một chút" } }
  ],
  peerSupports: [
    { id:"HELP-01", icon:"🏃", ja:"いっしょに いこう", speechJa:"いっしょにいこう", note:"いどう・トイレ・きゅうしょく",
      translations:{ en:"Let's go together!", tl:"Sabay tayo!", vi:"Cùng đi nào!" } },
    { id:"HELP-02", icon:"📍", ja:"ここだよ", speechJa:"ここだよ", note:"ページ・せき",
      translations:{ en:"Right here", tl:"Dito o", vi:"Ở đây này" } },
    { id:"HELP-03", icon:"🌸", ja:"だいじょうぶ？", speechJa:"だいじょうぶ？", note:"こえかけ",
      translations:{ en:"Are you okay?", tl:"Okay ka lang?", vi:"Bạn ổn không?" } },
    { id:"HELP-04", icon:"⭕", ja:"いいよ！", speechJa:"いいよ！", note:"おねがいへのへんじ",
      translations:{ en:"Sure!", tl:"Sige!", vi:"Được chứ!" } }
  ],
  sharedCards: [
    { id:"S-01", cat:"school", icon:"🚽", ja:"トイレに いきたいです", speechJa:"トイレにいきたいです",
      translations:{ en:"I want to go to the bathroom", tl:"Gusto kong pumunta sa kubeta", vi:"Tôi muốn đi vệ sinh" } },
    { id:"S-02", cat:"school", icon:"❓", ja:"わかりません", speechJa:"わかりません",
      translations:{ en:"I don't understand", tl:"Hindi ko maintindihan", vi:"Tôi không hiểu" } },
    { id:"S-03", cat:"school", icon:"🐢", ja:"ゆっくり はなして", speechJa:"ゆっくりはなして",
      translations:{ en:"Please speak slowly", tl:"Dahan-dahan po sa pagsasalita", vi:"Hãy nói chậm thôi" } },
    { id:"B-01", cat:"body", icon:"🤢", ja:"きぶんが わるいです", speechJa:"きぶんがわるいです",
      translations:{ en:"I feel sick", tl:"Masama ang pakiramdam ko", vi:"Tôi cảm thấy không khỏe" } },
    { id:"B-02", cat:"body", icon:"🤕", ja:"いたいです", speechJa:"いたいです",
      translations:{ en:"It hurts", tl:"Masakit", vi:"Tôi bị đau" } },
    { id:"B-03", cat:"body", icon:"🥺", ja:"こわいです", speechJa:"こわいです",
      translations:{ en:"I'm scared", tl:"Natatakot ako", vi:"Tôi sợ" } },
    { id:"A-01", cat:"ask", icon:"🤝", ja:"てつだって", speechJa:"てつだって",
      translations:{ en:"Please help me", tl:"Pakitulungan mo ako", vi:"Hãy giúp tôi với" } },
    { id:"A-02", cat:"ask", icon:"✏️", ja:"かして", speechJa:"かして",
      translations:{ en:"Can I borrow this?", tl:"Pahiram po", vi:"Cho tôi mượn với" } }
  ]
};
