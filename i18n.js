const LANGS = ["en", "ja", "zh-Hant", "zh-Hans"];

const TEXT = {
  en: {
    site: "LaneCam",
    welcome: "Welcome",
    welcomeLead: "Find support information and privacy details for LaneCam.",
    quickLinks: "Quick Links",
    supportLinkTitle: "LaneCam Support",
    supportLinkDesc: "Usage guide, FAQ, and contact details",
    privacyLinkTitle: "Privacy Policy",
    privacyLinkDesc: "How LaneCam handles data and permissions",
    supportTitle: "LaneCam Support",
    supportIntro:
      "LaneCam is a video-based race review tool designed for lane-based events such as track races and swimming competitions. It helps users record races, mark finish-line crossings, review footage frame by frame, and export race results.",
    mainFeatures: "Main Features",
    previewTitle: "Preview",
    previewIntro:
      "These screenshots show the main workflow in LaneCam, from setting the finish line to reviewing and exporting race results.",
    howToUse: "How to Use",
    faq: "FAQ",
    contact: "Contact",
    privacyPolicy: "Privacy Policy",
    currentVersion: "Current version: 1.0",
    supportContactIntro: "For support, feedback, or technical issues, please contact:",
    supportPrivacyIntro: "Please visit:",
    privacyTitle: "LaneCam Privacy Policy",
    privacyIntro: "We value your privacy. This Privacy Policy explains how LaneCam handles data.",
    privacySection1: "1. Information We May Access",
    privacySection1Body:
      "LaneCam is designed for race recording, finish-line marking, video review, and result export. While using the app, the following types of data may be involved:",
    privacySection2: "2. How We Use Information",
    privacySection2Body: "Information is used to:",
    privacySection3: "3. Data Storage",
    privacySection3Body:
      "Race videos and records in LaneCam are primarily stored on your device. Unless you choose to export, share, or use a third-party service, your video content is not actively uploaded to our servers.",
    privacySection4: "4. Third-Party Services",
    privacySection4Body:
      "LaneCam may use third-party services, including but not limited to:",
    privacySection5: "5. Your Choices",
    privacySection5Body: "You may:",
    privacySection6: "6. Children’s Privacy",
    privacySection6Body:
      "LaneCam is not intended as a dedicated data collection service for children. Users should use the app under appropriate supervision or authorization when necessary.",
    privacySection7: "7. Contact",
    privacySection7Body:
      "If you have any questions about this Privacy Policy, please contact:",
  },
  ja: {
    site: "LaneCam",
    welcome: "ようこそ",
    welcomeLead: "LaneCam のサポート情報とプライバシー情報をご覧いただけます。",
    quickLinks: "クイックリンク",
    supportLinkTitle: "LaneCam サポート",
    supportLinkDesc: "使い方、FAQ、お問い合わせ",
    privacyLinkTitle: "プライバシーポリシー",
    privacyLinkDesc: "LaneCam のデータと権限の扱い",
    supportTitle: "LaneCam サポート",
    supportIntro:
      "LaneCam は、陸上競技や水泳などのレーン制競技向けに設計された動画ベースのレース確認ツールです。レースの記録、ゴールライン通過の記録、映像のコマ送り確認、結果の PDF 出力を支援します。",
    mainFeatures: "主な機能",
    previewTitle: "プレビュー",
    previewIntro:
      "これらのスクリーンショットは、ゴールラインの設定からレース結果の確認・出力までの LaneCam の主な流れを示しています。",
    howToUse: "使い方",
    faq: "よくある質問",
    contact: "お問い合わせ",
    privacyPolicy: "プライバシーポリシー",
    currentVersion: "現在のバージョン: 1.0",
    supportContactIntro: "サポート、フィードバック、技術的な問題については、以下へお問い合わせください:",
    supportPrivacyIntro: "次をご覧ください:",
    privacyTitle: "LaneCam プライバシーポリシー",
    privacyIntro: "LaneCam はお客様のプライバシーを尊重します。本ポリシーはデータの取り扱いを説明します。",
    privacySection1: "1. 取得しうる情報",
    privacySection1Body:
      "LaneCam は、レースの記録、ゴールラインのマーキング、動画レビュー、結果出力のために設計されています。アプリ利用中に、次の種類のデータが関係する場合があります:",
    privacySection2: "2. 情報の利用方法",
    privacySection2Body: "情報は次の目的で使用されます:",
    privacySection3: "3. データの保存",
    privacySection3Body:
      "LaneCam のレース動画と記録は主にお使いの端末に保存されます。書き出し、共有、または第三者サービスの利用を選択しない限り、動画コンテンツが当社のサーバーへ積極的にアップロードされることはありません。",
    privacySection4: "4. 第三者サービス",
    privacySection4Body:
      "LaneCam は、以下を含む第三者サービスを利用する場合があります:",
    privacySection5: "5. お客様の選択",
    privacySection5Body: "お客様は次のことができます:",
    privacySection6: "6. 児童のプライバシー",
    privacySection6Body:
      "LaneCam は、児童向けの専用データ収集サービスとして設計されていません。必要に応じて、適切な監督または許可のもとでご利用ください。",
    privacySection7: "7. お問い合わせ",
    privacySection7Body:
      "本プライバシーポリシーについてご質問がある場合は、次の連絡先までお問い合わせください:",
  },
  "zh-Hant": {
    site: "LaneCam",
    welcome: "歡迎",
    welcomeLead: "在此查看 LaneCam 的支援資訊與隱私說明。",
    quickLinks: "快速連結",
    supportLinkTitle: "LaneCam 支援",
    supportLinkDesc: "使用說明、常見問題與聯絡方式",
    privacyLinkTitle: "隱私權政策",
    privacyLinkDesc: "LaneCam 如何處理資料與權限",
    supportTitle: "LaneCam 支援",
    supportIntro:
      "LaneCam 是一款以影片為基礎的賽事檢視工具，適用於跑道賽與游泳比賽等分道式項目。它可協助使用者錄製賽事、標記終點線通過點、逐格檢視影片，並匯出比賽結果。",
    mainFeatures: "主要功能",
    previewTitle: "預覽",
    previewIntro:
      "這些截圖展示了 LaneCam 的主要流程，從設定終點線到檢視與匯出比賽結果。",
    howToUse: "使用方式",
    faq: "常見問題",
    contact: "聯絡我們",
    privacyPolicy: "隱私權政策",
    currentVersion: "目前版本：1.0",
    supportContactIntro: "如需支援、回饋或技術問題，請聯絡：",
    supportPrivacyIntro: "請參閱：",
    privacyTitle: "LaneCam 隱私權政策",
    privacyIntro: "我們重視您的隱私。本隱私權政策說明 LaneCam 如何處理資料。",
    privacySection1: "1. 我們可能存取的資訊",
    privacySection1Body:
      "LaneCam 的設計用途是錄製賽事、標記終點線、影片檢視與結果匯出。使用本 App 時，可能涉及下列資料類型：",
    privacySection2: "2. 我們如何使用資訊",
    privacySection2Body: "資訊會用於：",
    privacySection3: "3. 資料儲存",
    privacySection3Body:
      "LaneCam 的賽事影片與紀錄主要儲存在您的裝置上。除非您選擇匯出、分享或使用第三方服務，您的影片內容不會主動上傳至我們的伺服器。",
    privacySection4: "4. 第三方服務",
    privacySection4Body:
      "LaneCam 可能使用下列第三方服務，包括但不限於：",
    privacySection5: "5. 您的選擇",
    privacySection5Body: "您可以：",
    privacySection6: "6. 兒童隱私",
    privacySection6Body:
      "LaneCam 並非專為兒童資料蒐集所設計的服務。必要時，請在適當監督或授權下使用本 App。",
    privacySection7: "7. 聯絡方式",
    privacySection7Body:
      "如果您對本隱私權政策有任何疑問，請聯絡：",
  },
  "zh-Hans": {
    site: "LaneCam",
    welcome: "欢迎",
    welcomeLead: "在这里查看 LaneCam 的支持信息与隐私说明。",
    quickLinks: "快速链接",
    supportLinkTitle: "LaneCam 支持",
    supportLinkDesc: "使用说明、常见问题与联系方式",
    privacyLinkTitle: "隐私政策",
    privacyLinkDesc: "LaneCam 如何处理数据与权限",
    supportTitle: "LaneCam 支持",
    supportIntro:
      "LaneCam 是一款基于视频的赛事情报查看工具，适用于跑道赛和游泳比赛等分道项目。它可帮助用户录制比赛、标记终点线穿越、逐帧查看视频，并导出比赛结果。",
    mainFeatures: "主要功能",
    previewTitle: "预览",
    previewIntro:
      "这些截图展示了 LaneCam 的主要流程，从设置终点线到查看和导出比赛结果。",
    howToUse: "使用方法",
    faq: "常见问题",
    contact: "联系我们",
    privacyPolicy: "隐私政策",
    currentVersion: "当前版本：1.0",
    supportContactIntro: "如需支持、反馈或技术问题，请联系：",
    supportPrivacyIntro: "请查看：",
    privacyTitle: "LaneCam 隐私政策",
    privacyIntro: "我们重视您的隐私。本隐私政策说明 LaneCam 如何处理数据。",
    privacySection1: "1. 我们可能访问的信息",
    privacySection1Body:
      "LaneCam 的用途是录制比赛、标记终点线、查看视频和导出结果。使用应用时，可能涉及以下类型的数据：",
    privacySection2: "2. 我们如何使用信息",
    privacySection2Body: "信息用于：",
    privacySection3: "3. 数据存储",
    privacySection3Body:
      "LaneCam 的比赛视频和记录主要存储在您的设备上。除非您选择导出、分享或使用第三方服务，否则您的视频内容不会主动上传到我们的服务器。",
    privacySection4: "4. 第三方服务",
    privacySection4Body:
      "LaneCam 可能使用以下第三方服务，包括但不限于：",
    privacySection5: "5. 您的选择",
    privacySection5Body: "您可以：",
    privacySection6: "6. 儿童隐私",
    privacySection6Body:
      "LaneCam 不属于专门面向儿童的数据收集服务。必要时，请在适当监督或授权下使用本应用。",
    privacySection7: "7. 联系方式",
    privacySection7Body:
      "如果您对本隐私政策有任何疑问，请联系：",
  },
};

const SUPPORT_FEATURES = {
  en: [
    "Live camera preview",
    "Virtual finish line setup",
    "Race recording",
    "Lane crossing marks",
    "Frame-by-frame video review",
    "Quick jump bookmarks",
    "Project and record management",
    "PDF result export",
    "Video saving and sharing",
  ],
  ja: [
    "ライブカメラプレビュー",
    "仮想ゴールライン設定",
    "レース録画",
    "レーン通過マーク",
    "コマ送り動画レビュー",
    "クイックジャンプブックマーク",
    "プロジェクトと記録の管理",
    "PDF 結果の書き出し",
    "動画の保存と共有",
  ],
  "zh-Hant": [
    "即時相機預覽",
    "虛擬終點線設定",
    "賽事錄影",
    "分道通過標記",
    "逐格影片檢視",
    "快速跳轉書籤",
    "專案與紀錄管理",
    "PDF 結果匯出",
    "影片儲存與分享",
  ],
  "zh-Hans": [
    "实时相机预览",
    "虚拟终点线设置",
    "赛事录制",
    "分道穿越标记",
    "逐帧视频查看",
    "快速跳转书签",
    "项目与记录管理",
    "PDF 结果导出",
    "视频保存与分享",
  ],
};

const SUPPORT_HOW_TO = {
  en: [
    "Create or select a project.",
    "Adjust the finish line position and width in the camera preview.",
    "Start recording the race.",
    "Mark each athlete’s finish-line crossing.",
    "Stop recording and review the race frame by frame.",
    "Export a PDF report or share the video.",
  ],
  ja: [
    "プロジェクトを作成または選択します。",
    "カメラプレビューでゴールラインの位置と幅を調整します。",
    "レースの録画を開始します。",
    "各選手のゴール通過を記録します。",
    "録画を停止し、レースをコマ送りで確認します。",
    "PDF レポートを出力するか、動画を共有します。",
  ],
  "zh-Hant": [
    "建立或選擇一個專案。",
    "在相機預覽中調整終點線的位置與寬度。",
    "開始錄製賽事。",
    "標記每位選手的終點線通過點。",
    "停止錄製並逐格檢視賽事。",
    "匯出 PDF 報告或分享影片。",
  ],
  "zh-Hans": [
    "创建或选择一个项目。",
    "在相机预览中调整终点线的位置和宽度。",
    "开始录制赛事。",
    "标记每位运动员的终点线穿越点。",
    "停止录制并逐帧查看赛事。",
    "导出 PDF 报告或分享视频。",
  ],
};

const SUPPORT_FAQ = {
  en: [
    ["Does LaneCam require an internet connection?", "Core functions such as recording, reviewing, and managing race records can work on-device. Some third-party services, including advertising, may require internet access."],
    ["Does LaneCam upload my videos?", "Race videos and records are primarily stored on your device. Data is only shared when you choose to export or share it."],
    ["Why does LaneCam need camera access?", "LaneCam requires camera access to record races and assist with finish-line review."],
    ["Why are ads shown in the app?", "LaneCam may use third-party advertising services to support app operation."],
  ],
  ja: [
    ["LaneCam にインターネット接続は必要ですか？", "録画、確認、記録管理などの主要機能は端末上で動作します。広告など一部の第三者サービスではインターネット接続が必要になる場合があります。"],
    ["LaneCam は動画をアップロードしますか？", "レース動画と記録は主にお使いの端末に保存されます。書き出しや共有を選択した場合のみ共有されます。"],
    ["なぜカメラ権限が必要ですか？", "LaneCam はレースを記録し、ゴールレビューを支援するためにカメラ権限を必要とします。"],
    ["なぜアプリに広告が表示されるのですか？", "LaneCam はアプリ運営を支えるために第三者の広告サービスを利用する場合があります。"],
  ],
  "zh-Hant": [
    ["LaneCam 需要網路連線嗎？", "錄製、檢視與管理賽事紀錄等核心功能可在裝置上運作。包含廣告在內的部分第三方服務可能需要網路連線。"],
    ["LaneCam 會上傳我的影片嗎？", "賽事影片與紀錄主要儲存在您的裝置中。只有在您選擇匯出或分享時，資料才會被分享。"],
    ["為什麼 LaneCam 需要相機權限？", "LaneCam 需要相機權限來錄製賽事並協助終點線檢視。"],
    ["為什麼 App 會顯示廣告？", "LaneCam 可能使用第三方廣告服務以支援應用程式營運。"],
  ],
  "zh-Hans": [
    ["LaneCam 需要网络连接吗？", "录制、查看和管理比赛记录等核心功能可在设备上运行。包括广告在内的部分第三方服务可能需要网络连接。"],
    ["LaneCam 会上传我的视频吗？", "比赛视频和记录主要存储在您的设备上。只有在您选择导出或分享时，数据才会被共享。"],
    ["为什么 LaneCam 需要相机权限？", "LaneCam 需要相机权限来录制比赛并协助终点线查看。"],
    ["为什么应用中会显示广告？", "LaneCam 可能使用第三方广告服务来支持应用运行。"],
  ],
};

const PRIVACY_LISTS = {
  en: {
    info: [
      "Camera access: used to record race footage.",
      "Photo/Video library access: used to save videos to your device or share them through other apps.",
      "User-created content: such as race videos, marked timestamps, project names, and race records.",
      "Diagnostic or technical data: limited technical data may be collected by third-party services to maintain app functionality.",
      "Advertising-related data: if ads are shown, third-party advertising services may process device identifiers or related information for ad delivery and measurement.",
    ],
    use: [
      "Provide race recording and replay features",
      "Save and manage race records",
      "Export PDF reports",
      "Save or share videos",
      "Maintain app stability and core functionality",
      "Display ads and manage consent settings where applicable",
    ],
    thirdParty: [
      "Google AdMob for advertising",
      "Google User Messaging Platform for consent management",
    ],
    choices: [
      "Manage permissions in your device settings",
      "Stop using the app at any time",
      "Delete videos and race records stored on your device",
    ],
  },
  ja: {
    info: [
      "カメラ権限: レース映像の記録に使用されます。",
      "写真/動画ライブラリ権限: 動画を端末に保存したり、他のアプリで共有したりするために使用されます。",
      "ユーザー作成コンテンツ: レース動画、記録したタイムスタンプ、プロジェクト名、レース記録など。",
      "診断または技術データ: アプリ機能の維持のために、第三者サービスが限定的な技術データを収集する場合があります。",
      "広告関連データ: 広告が表示される場合、第三者の広告サービスが端末識別子などを広告配信や計測のために処理することがあります。",
    ],
    use: [
      "レースの録画および再生機能を提供する",
      "レース記録を保存・管理する",
      "PDF レポートを出力する",
      "動画を保存または共有する",
      "アプリの安定性と基本機能を維持する",
      "必要に応じて広告表示と同意設定を管理する",
    ],
    thirdParty: [
      "広告のための Google AdMob",
      "同意管理のための Google User Messaging Platform",
    ],
    choices: [
      "端末設定で権限を管理する",
      "いつでもアプリの利用をやめる",
      "端末に保存された動画やレース記録を削除する",
    ],
  },
  "zh-Hant": {
    info: [
      "相機權限：用於錄製賽事影片。",
      "照片/影片資料庫權限：用於將影片儲存到您的裝置或透過其他 App 分享。",
      "使用者建立的內容：例如賽事影片、標記的時間戳記、專案名稱與賽事紀錄。",
      "診斷或技術資料：部分第三方服務可能會收集有限的技術資料以維持 App 功能。",
      "廣告相關資料：若顯示廣告，第三方廣告服務可能會處理裝置識別碼或相關資訊，用於廣告投放與成效衡量。",
    ],
    use: [
      "提供賽事錄影與回放功能",
      "儲存與管理賽事紀錄",
      "匯出 PDF 報告",
      "儲存或分享影片",
      "維持 App 穩定性與核心功能",
      "在適用時顯示廣告並管理同意設定",
    ],
    thirdParty: [
      "Google AdMob（廣告）",
      "Google User Messaging Platform（同意管理）",
    ],
    choices: [
      "在裝置設定中管理權限",
      "隨時停止使用 App",
      "刪除儲存在裝置上的影片與賽事紀錄",
    ],
  },
  "zh-Hans": {
    info: [
      "相机权限：用于录制赛事视频。",
      "照片/视频资料库权限：用于将视频保存到您的设备或通过其他应用分享。",
      "用户创建的内容：例如赛事视频、标记的时间戳、项目名称和赛事记录。",
      "诊断或技术数据：部分第三方服务可能会收集有限的技术数据，以维持应用功能。",
      "广告相关数据：如果显示广告，第三方广告服务可能会处理设备标识符或相关信息，用于广告投放和衡量。",
    ],
    use: [
      "提供赛事录制和回放功能",
      "保存和管理赛事记录",
      "导出 PDF 报告",
      "保存或分享视频",
      "维持应用稳定性和核心功能",
      "在适用时显示广告并管理同意设置",
    ],
    thirdParty: [
      "用于广告的 Google AdMob",
      "用于同意管理的 Google User Messaging Platform",
    ],
    choices: [
      "在设备设置中管理权限",
      "随时停止使用应用",
      "删除保存在设备上的视频和赛事记录",
    ],
  },
};

function byId(id) {
  return document.querySelector(`[data-i18n="${id}"]`);
}

function setText(key, value) {
  const el = byId(key);
  if (el) el.textContent = value;
}

function setList(key, items) {
  const el = byId(key);
  if (!el) return;
  el.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function setFaq(items) {
  const container = byId("faq-items");
  if (!container) return;
  container.innerHTML = items
    .map(
      ([q, a], index) => `
        <h3>${index + 1}. ${q}</h3>
        <p>${a}</p>
      `
    )
    .join("");
}

function setPreview(locale) {
  const captions = {
    en: [
      "Camera preview and finish-line setup",
      "Recording and lane marking workflow",
      "Frame-by-frame race review",
      "Project and record management",
      "PDF export and sharing",
    ],
    ja: [
      "カメラプレビューとゴールライン設定",
      "録画とレーン記録の操作",
      "コマ送りでのレース確認",
      "プロジェクトと記録の管理",
      "PDF 出力と共有",
    ],
    "zh-Hant": [
      "相機預覽與終點線設定",
      "錄製與分道標記流程",
      "逐格檢視賽事",
      "專案與紀錄管理",
      "PDF 匯出與分享",
    ],
    "zh-Hans": [
      "相机预览与终点线设置",
      "录制与分道标记流程",
      "逐帧查看赛事",
      "项目与记录管理",
      "PDF 导出与分享",
    ],
  };
  document.querySelectorAll("[data-preview-caption]").forEach((el, idx) => {
    el.textContent = captions[locale][idx];
  });
}

function updateLinks(lang) {
  document.querySelectorAll("[data-lang-link]").forEach((link) => {
    const base = link.getAttribute("data-base-href");
    const url = new URL(base, window.location.origin);
    if (lang && lang !== "en") url.searchParams.set("lang", lang);
    else url.searchParams.delete("lang");
    link.href = `${url.pathname}${url.search}${url.hash}`;
  });
}

function applyLang(lang) {
  const locale = LANGS.includes(lang) ? lang : "en";
  const t = TEXT[locale];
  document.documentElement.lang = locale === "zh-Hant" ? "zh-Hant" : locale === "zh-Hans" ? "zh-Hans" : locale;
  document.querySelectorAll("[data-lang-option]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.langOption === locale);
    btn.setAttribute("aria-pressed", String(btn.dataset.langOption === locale));
  });
  setText("site", t.site);
  setText("welcome", t.welcome);
  setText("welcomeLead", t.welcomeLead);
  setText("quickLinks", t.quickLinks);
  setText("supportLinkTitle", t.supportLinkTitle);
  setText("supportLinkDesc", t.supportLinkDesc);
  setText("privacyLinkTitle", t.privacyLinkTitle);
  setText("privacyLinkDesc", t.privacyLinkDesc);
  setText("supportTitle", t.supportTitle);
  setText("supportIntro", t.supportIntro);
  setText("mainFeatures", t.mainFeatures);
  setText("previewTitle", t.previewTitle);
  setText("previewIntro", t.previewIntro);
  setText("howToUse", t.howToUse);
  setText("faq", t.faq);
  setText("contact", t.contact);
  setText("privacyPolicy", t.privacyPolicy);
  setText("currentVersion", t.currentVersion);
  setText("supportContactIntro", t.supportContactIntro);
  setText("supportPrivacyIntro", t.supportPrivacyIntro);
  setText("privacyTitle", t.privacyTitle);
  setText("privacyIntro", t.privacyIntro);
  setText("privacySection1", t.privacySection1);
  setText("privacySection1Body", t.privacySection1Body);
  setText("privacySection2", t.privacySection2);
  setText("privacySection2Body", t.privacySection2Body);
  setText("privacySection3", t.privacySection3);
  setText("privacySection3Body", t.privacySection3Body);
  setText("privacySection4", t.privacySection4);
  setText("privacySection4Body", t.privacySection4Body);
  setText("privacySection5", t.privacySection5);
  setText("privacySection5Body", t.privacySection5Body);
  setText("privacySection6", t.privacySection6);
  setText("privacySection6Body", t.privacySection6Body);
  setText("privacySection7", t.privacySection7);
  setText("privacySection7Body", t.privacySection7Body);

  if (document.body.dataset.page === "home") {
    updateLinks(locale);
  } else if (document.body.dataset.page === "support") {
    setList("support-features", SUPPORT_FEATURES[locale]);
    setList("support-howto", SUPPORT_HOW_TO[locale]);
    setFaq(SUPPORT_FAQ[locale]);
    setPreview(locale);
    updateLinks(locale);
  } else if (document.body.dataset.page === "privacy") {
    const list = PRIVACY_LISTS[locale];
    setList("privacy-info", list.info);
    setList("privacy-use", list.use);
    setList("privacy-third-party", list.thirdParty);
    setList("privacy-choices", list.choices);
    updateLinks(locale);
  }
  const url = new URL(window.location.href);
  if (locale === "en") url.searchParams.delete("lang");
  else url.searchParams.set("lang", locale);
  window.history.replaceState({}, "", url);
}

function initLanguageSwitcher() {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang") || "en";
  document.querySelectorAll("[data-lang-option]").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.langOption));
  });
  applyLang(lang);
}

window.addEventListener("DOMContentLoaded", initLanguageSwitcher);
