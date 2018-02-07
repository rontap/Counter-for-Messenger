module.exports = {
  // 擴充套件資訊
  extName: { message: 'Messenger 計數器' },
  extDescription: { message: '統計你在 Messenger 中，與朋友們的訊息數量，並且排名！！' },

  // 路由
  indexPage: { message: '首頁' },
  messageChart: { message: '訊息數量圖表' },
  textChart: { message: '文字數量圖表' },

  // Loading 訊息
  interceptingToken: { message: '攔截權杖中...' },
  fetchingThreads: { message: '抓取訊息總數中...' },
  fetchingMessages: { message: '抓取訊息中...' },
  rendering: { message: '渲染中...' },
  waitingForLogin: { message: '等待登入中...' },

  // 提醒視窗
  openingAlertTitle: { message: '請保持耐心' },
  openingAlertContent: { message: '1. 從 FB 撈取資料可能會花費許多時間。2. 短時間內嘗試載入大量訊息，可能造成 Messenger 與部分 FB 功能暫時無法使用，請注意。' },
  iSee: { message: '我瞭解' },
  cancel: { message: '取消' },

  // 首頁
  threadName: { message: '名稱' },
  threadType: { message: '種類' },
  threadMessageCount: { message: '訊息數量' },
  threadTextCount: { message: '文字數量' },
  threadOperation: { message: '操作' },
  importMessageHistory: { message: '載入訊息記錄' },
  importedMessageHistory: { message: '已載入' },
  downloadMessageHistory: { message: '儲存/下載訊息記錄' },
  totalMessageCount: { message: '總計訊息數量' },
  user: { message: '用戶' },
  fanpage: { message: '粉絲專頁' },
  group: { message: '群組' },
  unknown: { message: '未知' },
  fetchDetailOfselected: { message: '載入所選訊息的記錄' },

  // 圖表
  drapToLookOtherUsers: { message: '滑動以查看其他排名' },
  showDetail: { message: '顯示詳細' },
  dontShowDetail: { message: '不顯示詳細' },
  total: { message: '總共' },
  me: { message: '我' },
  other: { message: '其他人' },

  // 錯誤訊息
  fetchError: { message: '啊！撈取資料時發生錯誤。' },
  contactDevelper: { message: '請聯絡開發者以解決問題。' },
  messengerIsDead: { message: '你的 Messenger 暫時無法使用，請稍後再試。' },

  // 符號
  comma: { message: '、' },

  // Thread 物件
  others: {
    message: '其他$otherCount$個人',
    placeholders: {
      otherCount: {
        content: '$1',
        example: '其他87個人'
      }
    }
  },

  // Content 腳本的提示訊息
  loginAlert: { message: '請登入 Messenger 網頁版以統計您的訊息。' }
}