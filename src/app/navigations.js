export const navigations = [
  {
    name: 'ユーザー管理',
    icon: 'person',
    children: [
      { name: 'ユーザー一覧', iconText: 'SI', path: '/manageuser/userlist' },
      { name: 'グループ設定', iconText: 'SU', path: '/' },
      { name: 'ランク設定', iconText: 'SU', path: '/' },
      { name: 'ラベル設定', iconText: 'SU', path: '/' }
    ]
  },
  {
    name: '一括処理',
    icon: 'group_work',
    children: [
      { name: '検索一括処理', iconText: 'SI', path: '/' },
      { name: '検索ショートカット', iconText: 'SU', path: '/' }
    ]
  },
  {
    name: 'LINE管理',
    icon: 'settings_cell',
    children: [
      { name: 'LINE連携', iconText: 'SI', path: '/' },
      { name: 'LINE連携インポート', iconText: 'SU', path: '/' },
      { name: 'ユーザー分布', iconText: 'SU', path: '/' },
      { name: '配信数レポート', iconText: 'SU', path: '/' },
      { name: '切り替え履歴', iconText: 'SU', path: '/' },
      { name: 'リッチメニュー管理', iconText: 'SU', path: '/' }
    ]
  },
  {
    name: 'LINE通知管理',
    icon: 'notifications',
    children: [
      { name: 'LINE通知テンプレート', iconText: 'SI', path: '/' },
      { name: 'LINE通知用画像設定', iconText: 'SU', path: '/' }
    ]
  },
  {
    name: 'チャット配信管理',
    icon: 'chat_bubble',
    children: [
      { name: 'チャット応対', iconText: 'SI', path: '/' },
      { name: 'チャット受付管理', iconText: 'SU', path: '/' },
      { name: 'チャット応対履歴', iconText: 'SU', path: '/' },
      { name: '応対テンプレート', iconText: 'SU', path: '/' },
      { name: 'チャット自動シナリオ', iconText: 'SU', path: '/' },
      { name: 'チャット一斉配信', iconText: 'SU', path: '/' },
      { name: 'チャット定時配信', iconText: 'SU', path: '/' },
      { name: '検索ショートカット', iconText: 'SU', path: '/' },
      { name: '配信文テンプレート', iconText: 'SU', path: '/' }
    ]
  },
  {
    name: 'メッセージ配信管理',
    icon: 'mail',
    children: [
      { name: 'メッセージ自動シナリオ', iconText: 'SI', path: '/' },
      { name: 'メッセージ一斉配信', iconText: 'SU', path: '/' },
      { name: 'メッセージ定時配信', iconText: 'SU', path: '/' },
      { name: '検索ショートカット', iconText: 'SU', path: '/' },
      { name: '配信文テンプレート', iconText: 'SU', path: '/' },
      { name: 'メッセージ配信履歴', iconText: 'SU', path: '/' }
    ]
  },
  {
    name: 'ダイレクト配信管理',
    icon: 'mail_outline',
    children: [
      { name: 'ダイレクト自動シナリオ', iconText: 'SI', path: '/' },
      { name: 'ダイレクト一斉配信', iconText: 'SU', path: '/' },
      { name: 'ダイレクト定時配信', iconText: 'SU', path: '/' },
      { name: '検索ショートカット', iconText: 'SU', path: '/' },
      { name: 'ダイレクト配信履歴', iconText: 'SU', path: '/' }
    ]
  },
  {
    name: 'コンテンツ管理',
    icon: 'perm_media',
    children: [
      { name: 'カスタムアクション', iconText: 'SI', path: '/' },
      { name: '自由ウェブページ管理', iconText: 'SU', path: '/' },
      { name: '固定ウェブページ管理', iconText: 'SU', path: '/' },
      { name: 'カスタムCSS編集', iconText: 'SU', path: '/' },
      { name: '回答フォーム管理', iconText: 'SU', path: '/' },
      { name: 'ランディングページ管理', iconText: 'SU', path: '/' },
      { name: 'リダイレクトURL定義', iconText: 'SU', path: '/' },
      { name: 'バナーグループ管理', iconText: 'SU', path: '/' },
      { name: 'バナー管理', iconText: 'SU', path: '/' },
      { name: 'html参考スタイルまとめ', iconText: 'SU', path: '/' },
      { name: 'htmlリファレンス（外部サイト）', iconText: 'SU', path: '/' }
    ]
  },
  {
    name: 'メディアファイル管理',
    icon: 'filter_drama',
    children: [{ name: 'メディアファイル管理', iconText: 'SI', path: '/' }]
  },
  {
    name: '広告管理',
    icon: 'spa',
    children: [
      { name: '広告代理店管理', iconText: 'SI', path: '/' },
      { name: '広告メディア管理', iconText: 'SU', path: '/' },
      { name: '広告ジャンル管理', iconText: 'SU', path: '/' },
      { name: '広告コード管理', iconText: 'SU', path: '/' },
      { name: '広告コードインポート', iconText: 'SU', path: '/' },
      { name: '広告コード一括処理', iconText: 'SU', path: '/' },
      { name: '成果ポストバック履歴', iconText: 'SU', path: '/' },
      { name: '成果保留中一覧', iconText: 'SU', path: '/' }
    ]
  },
  {
    name: '集計管理',
    icon: 'settings_input_component',
    children: [
      { name: '全体集計', iconText: 'SI', path: '/' },
      { name: '広告効果集計', iconText: 'SU', path: '/' },
      { name: 'メッセージシナリオ配信効果集計', iconText: 'SU', path: '/' },
      { name: 'ダイレクトシナリオ配信効果集計', iconText: 'SU', path: '/' },
      { name: '自由ウェブページ集計', iconText: 'SU', path: '/' },
      { name: 'リダイレクトURL集計', iconText: 'SU', path: '/' }
    ]
  },
  {
    name: 'サービス設定',
    icon: 'tune',
    children: [
      { name: '運用サービス管理', iconText: 'SI', path: '/' },
      { name: 'ログインスタッフ管理', iconText: 'SU', path: '/' }
    ]
  },
  {
    name: '新しい要素',
    icon: 'security',
    children: [
      { name: 'テーブル', iconText: 'SI', path: '/fulltable' },
      { name: 'HTMLエディタ', iconText: 'SU', path: '/htmleditor' }
    ]
  },
  { name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },
  { label: 'PAGES', type: 'label' },
  {
    name: 'Session/Auth',
    icon: 'security',
    children: [
      { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
      { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
      { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
      { name: 'Error', iconText: '404', path: '/session/404' }
    ]
  },
  { label: 'Components', type: 'label' },
  {
    name: 'Components',
    icon: 'favorite',
    badge: { value: '30+', color: 'secondary' },
    children: [
      { name: 'Auto Complete', path: '/material/autocomplete', iconText: 'A' },
      { name: 'Buttons', path: '/material/buttons', iconText: 'B' },
      { name: 'Checkbox', path: '/material/checkbox', iconText: 'C' },
      { name: 'Dialog', path: '/material/dialog', iconText: 'D' },
      { name: 'Expansion Panel', path: '/material/expansion-panel', iconText: 'E' },
      { name: 'Form', path: '/material/form', iconText: 'F' },
      { name: 'Icons', path: '/material/icons', iconText: 'I' },
      { name: 'Menu', path: '/material/menu', iconText: 'M' },
      { name: 'Progress', path: '/material/progress', iconText: 'P' },
      { name: 'Radio', path: '/material/radio', iconText: 'R' },
      { name: 'Switch', path: '/material/switch', iconText: 'S' },
      { name: 'Slider', path: '/material/slider', iconText: 'S' },
      { name: 'Snackbar', path: '/material/snackbar', iconText: 'S' },
      { name: 'Table', path: '/material/table', iconText: 'T' }
    ]
  }
];
