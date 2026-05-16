(() => {
  const offlineServices = [
    '课程期内全程答疑',
    '助教辅练：建立专属班级群/私教群，督促并检查作业完成情况',
    '学籍期内雅思考试免费代报名',
    '赠送智慧学习系统3个月：1:1还原机考刷题、背单词、检测单词、形成个性化学习报告',
    '紫藤雅思独家雅思必备电子词汇书',
    '课前导学计划：7天预习题打卡，一键切换雅思模式',
    '结课复习计划：结课后30天冲刺打卡复习题，复习节奏精确到每一天',
    '入学测试 / 阶段测 / 全真模考',
    '无限次AI口语智能陪练',
    '口语当季题库电子版一套'
  ];

  const offlineAdvantages = [
    '北京线下面授，小班3-6人，课堂互动和老师关注度更高。',
    '适合需要固定节奏、线下学习氛围、学管督学和阶段反馈的学生。',
    '从入门、基础、强化、冲刺到连报产品分层清晰，可按当前分和目标分匹配。',
    '写作和口语以作业形式进行批改/口测反馈，不额外承诺固定次数。',
    '可与1V1组合，班课负责系统框架，1V1负责短板突破和考前冲刺。'
  ];

  const offlineGifts = [
    '纸质版大礼包1人1份',
    '紫藤国际教育词汇书2000词/4000词或剑桥雅思官方真题集',
    '雅思核心词',
    '口语当季题库电子版一套',
    '写作范文',
    '高频题资料',
    '机考练习与模考资源'
  ];

  const offlineRisk = '线下小班适合需要学习氛围和老师关注的学生；若写作/口语明显低于目标，建议搭配1V1补短板；页面优先展示北京最优惠价，具体开班、优惠、重读/补偿规则以北京校区系统与合同为准。';
  const recordedDetail = '61H录播：学术口语16H；阅读+听力词汇12H+9H；基础语法+进阶语法+高级语法6H+10H+8H';

  function offlineProduct(base) {
    const original = base.originalPrice ?? base.price ?? 0;
    const best = base.bestPrice ?? base.price ?? original;
    return {
      category: base.category || '线下班课',
      deliveryMode: '线下',
      classType: base.classType || '线下班课',
      classSize: base.classSize || '3-6人',
      retake: base.retake || '按新版线下产品规则',
      retakeRule: base.retakeRule || '连报/指定产品满足入班基础与完课要求后，可按产品规则申请重读或补偿服务，具体以合同与校区规则为准。',
      supportPeriod: base.supportPeriod || '12个月',
      rating: base.rating || '北京线下新版',
      price: best,
      standardPrice: original,
      bestPrice: best,
      beijingBestPrice: best,
      originalPrice: original,
      dailyPrice: best,
      battlePrice: best,
      advantages: base.advantages || offlineAdvantages,
      services: base.services || offlineServices,
      gifts: base.gifts || offlineGifts,
      risk: base.risk || offlineRisk,
      notSuitable: base.notSuitable || '时间无法线下到校、完全不接受固定班课节奏，或目标/小分要求需要高度定制的学生。',
      cp: base.cp || '北京线下新版产品，CP码以系统为准',
      ...base,
      price: best,
      standardPrice: original,
      bestPrice: best,
      beijingBestPrice: best,
      originalPrice: original,
      dailyPrice: best,
      battlePrice: best
    };
  }

  const offlineSmallClassProducts2026 = [
    offlineProduct({
      id: 'offline-2026-entry', name: '雅思入门班', level: '0基础/基础薄弱', target: '冲4.5-5.0',
      suitable: '0基础或基础薄弱，先建立雅思题型认知、词汇基础和基本做题方法。',
      originalPrice: 7800, bestPrice: 5800, totalHours: '101H', mainHours: '24H面授课（6×4）', liveHours: '16H考前直播课（一阶）', recordedHours: recordedDetail,
      scoreMin: 0, scoreMax: 4.5, targetMin: 4.5, targetMax: 5.0, retake: '无', retakeRule: '无', supportPeriod: '12个月', gifts: ['紫藤国际教育词汇书2000词/4000词']
    }),
    offlineProduct({
      id: 'offline-2026-basic', name: '雅思基础班', level: '基础4.5分', target: '冲5.5',
      suitable: '有一定英语基础但雅思方法薄弱，需要从4.5左右系统提升到5.5。',
      originalPrice: 19800, bestPrice: 15800, totalHours: '145H', mainHours: '68H面授课（16×4+4H点评课）', liveHours: '16H考前直播课（一阶）', recordedHours: recordedDetail,
      scoreMin: 4.5, scoreMax: 5.0, targetMin: 5.5, targetMax: 5.5,
      retake: '无', retakeRule: '无', supportPeriod: '12个月', gifts: ['剑桥雅思官方真题集']
    }),
    offlineProduct({
      id: 'offline-2026-intensive', name: '雅思强化班', level: '基础5.5分', target: '冲6.5',
      suitable: '已有5.5左右基础，需要强化技巧、速度、写作口语输出稳定性，目标6.5。',
      originalPrice: 20800, bestPrice: 15800, totalHours: '161H', mainHours: '68H面授课（16×4+4H点评课）', liveHours: '32H考前直播课（一阶+二阶）', recordedHours: recordedDetail,
      scoreMin: 5.5, scoreMax: 6.0, targetMin: 6.5, targetMax: 6.5,
      retake: '有', retakeRule: '入班基础5.5；完课后三个月内实考未达6.5分，可重修“紫藤雅思6.5分线上大班”。要求100%上完全部课程（特殊请假不超过3次）且100%完成课后作业。', supportPeriod: '12个月', gifts: ['剑桥雅思官方真题集']
    }),
    offlineProduct({
      id: 'offline-2026-sprint', name: '雅思冲刺班', level: '基础6.5分', target: '冲7.0及以上',
      suitable: '6.5左右冲7.0+，重点解决高分段技巧、写作口语表达升级和考前稳定性。',
      originalPrice: 18800, bestPrice: 12800, totalHours: '145H', mainHours: '52H面授课（12×4+4H点评课）', liveHours: '32H考前直播课（一阶+二阶）', recordedHours: recordedDetail,
      scoreMin: 6.5, scoreMax: 7.5, targetMin: 7.0, targetMax: 7.5,
      retake: '有', retakeRule: '入班基础6.5；完课后三个月内实考未达7分，可重修线上“紫藤雅思6.5分线上大班”。要求100%上完全部课程（特殊请假不超过3次）且100%完成课后作业。', supportPeriod: '12个月', gifts: ['剑桥雅思官方真题集']
    }),
    offlineProduct({
      id: 'offline-2026-entry-basic', name: '雅思入门+基础班', level: '基础4.0及以下', target: '冲5.5',
      suitable: '低基础学生从入门到5.5，适合需要较长周期系统打底的学生。',
      originalPrice: 27600, bestPrice: 18800, totalHours: '169H', mainHours: '92H面授课', liveHours: '16H考前直播课（一阶）', recordedHours: recordedDetail, supportPeriod: '15个月',
      scoreMin: 0, scoreMax: 4.0, targetMin: 5.5, targetMax: 5.5,
      retake: '无', retakeRule: '无', gifts: ['剑桥雅思官方真题集']
    }),
    offlineProduct({
      id: 'offline-2026-basic-intensive', name: '雅思基础+强化班', level: '基础4.5分', target: '冲6.5',
      suitable: '4.5左右到6.5，基础段解决框架，强化段提升技巧和输出稳定性。',
      originalPrice: 40600, bestPrice: 26800, totalHours: '229H', mainHours: '136H面授课', liveHours: '32H考前直播课（一阶+二阶）', recordedHours: recordedDetail, supportPeriod: '15个月',
      scoreMin: 4.5, scoreMax: 5.0, targetMin: 6.5, targetMax: 6.5,
      retake: '有', retakeRule: '入班基础4.5；完课后三个月内实考未达6.5分，可重修“紫藤雅思6.5分线上大班”。要求100%上完全部课程（特殊请假不超过3次）且100%完成课后作业。', gifts: ['剑桥雅思官方真题集']
    }),
    offlineProduct({
      id: 'offline-2026-intensive-sprint', name: '雅思强化+冲刺班', level: '基础5.5分', target: '冲7.0及以上',
      suitable: '5.5/6.0基础冲7.0+，适合目标高、需要强化+冲刺连续推进的学生。',
      originalPrice: 39600, bestPrice: 23800, totalHours: '213H', mainHours: '120H面授课', liveHours: '32H考前直播课（一阶+二阶）', recordedHours: recordedDetail, supportPeriod: '15个月',
      scoreMin: 5.5, scoreMax: 6.0, targetMin: 7.0, targetMax: 7.5,
      retake: '有', retakeRule: '入班基础5.5；完课实考未达7分，可重修线上“紫藤雅思6.5分大班”。要求100%上完全部课程（特殊请假不超过3次）且100%完成课后作业。', gifts: ['剑桥雅思官方真题集']
    }),
    offlineProduct({
      id: 'offline-2026-entry-basic-intensive', name: '雅思入门+基础+强化班', level: '基础4.0及以下', target: '冲6.5',
      suitable: '低基础长线冲6.5，适合预算允许且希望线下系统陪跑的学生。',
      originalPrice: 48400, bestPrice: 30800, totalHours: '253H', mainHours: '160H面授课', liveHours: '32H考前直播课（一阶+二阶）', recordedHours: recordedDetail, supportPeriod: '18个月',
      scoreMin: 0, scoreMax: 4.0, targetMin: 6.5, targetMax: 6.5,
      retake: '有', retakeRule: '完课实考未达6.5分，可重修线上“紫藤雅思6.5分大班”。要求提供入学有效成绩，100%上完全部课程（特殊请假不超过3次）且100%完成课后作业。', gifts: ['剑桥雅思官方真题集']
    }),
    offlineProduct({
      id: 'offline-2026-basic-intensive-sprint', name: '雅思基础+强化+冲刺班', level: '基础4.5分', target: '冲7.0及以上',
      suitable: '4.5左右长线冲7.0+，适合目标高、需要完整线下体系和高频反馈的学生。',
      originalPrice: 59400, bestPrice: 36800, totalHours: '281H', mainHours: '188H面授课', liveHours: '32H考前直播课（一阶+二阶）', recordedHours: recordedDetail, supportPeriod: '18个月',
      scoreMin: 4.5, scoreMax: 5.0, targetMin: 7.0, targetMax: 7.5,
      retake: '有', retakeRule: '入班基础4.5；完课后三个月内实考未达7.0分，可重修“紫藤雅思6.5分线上大班”。要求100%上完全部课程（特殊请假不超过3次）且100%完成课后作业。', gifts: ['剑桥雅思官方真题集']
    }),
    offlineProduct({
      id: 'offline-2026-speed', category: '1V1', classType: '1V1', classSize: '私教', name: '紫藤雅思1V1速提计划', level: '提升1分；学生基础≤6.5分', target: '1V1私教48H',
      suitable: '适合基础≤6.5，需要通过私教课提升总分约1分的学生。',
      originalPrice: 48900, bestPrice: 35800, totalHours: '48H', mainHours: '48H面授/私教1V1', liveHours: '—', recordedHours: '—', supportPeriod: '12个月',
      scoreMin: 0, scoreMax: 6.5, targetMin: 5.0, targetMax: 7.0, rating: '北京1V1优惠',
      retake: '有', retakeRule: '完课后三个月内实考未达提升总分1分，可重修24小时1V1私教课。要求提供入学有效成绩作为起始分、100%上完全部课程、100%完成课后作业。', gifts: ['剑桥雅思官方真题集']
    }),
    offlineProduct({
      id: 'offline-2026-premium', category: '1V1', classType: '1V1', classSize: '私教', name: '紫藤雅思1V1尊享计划', level: '提升1.5分；学生基础≤6分', target: '1V1私教72H',
      suitable: '适合基础≤6，目标提升约1.5分，需要更完整私教规划和反馈的学生。',
      originalPrice: 68800, bestPrice: 46800, totalHours: '72H', mainHours: '72H面授/私教1V1', liveHours: '—', recordedHours: '—', supportPeriod: '12个月',
      scoreMin: 0, scoreMax: 6.0, targetMin: 5.5, targetMax: 7.5, rating: '北京1V1优惠',
      retake: '有', retakeRule: '完课后三个月内实考未达提升总分1.5分，可重修36小时1V1私教课。要求提供入学有效成绩作为起始分、100%上完全部课程、100%完成课后作业。', gifts: ['剑桥雅思官方真题集']
    }),
    offlineProduct({ id: 'offline-2026-1v1-lt20', category: '1V1', classType: '1V1', classSize: '私教', name: '紫藤雅思1V1-x小时（线下）＜20小时', level: '定制化', target: '短期补弱', suitable: '适合短期单项补弱或试听后少量追加。', originalPrice: 900, bestPrice: 680, totalHours: '＜20小时', mainHours: '定制化，每次课2小时', liveHours: '—', recordedHours: '—', supportPeriod: '12个月', scoreMin: 0, scoreMax: 7.5, targetMin: 4.5, targetMax: 7.5, retake: '无', retakeRule: '无', rating: '北京1V1优惠｜680/H', gifts: [] }),
    offlineProduct({ id: 'offline-2026-1v1-20-38', category: '1V1', classType: '1V1', classSize: '私教', name: '紫藤雅思1V1-x小时（线下）20-38小时', level: '定制化', target: '阶段补弱', suitable: '适合班课后追加写作/口语或阶段性短板突破。', originalPrice: 900, bestPrice: 650, totalHours: '20-38小时', mainHours: '定制化，每次课2小时', liveHours: '—', recordedHours: '—', supportPeriod: '12个月', scoreMin: 0, scoreMax: 7.5, targetMin: 4.5, targetMax: 7.5, retake: '无', retakeRule: '无', rating: '北京1V1优惠｜650/H', gifts: [] }),
    offlineProduct({ id: 'offline-2026-1v1-40-58', category: '1V1', classType: '1V1', classSize: '私教', name: '紫藤雅思1V1-x小时（线下）40-58小时', level: '定制化', target: '系统补弱', suitable: '适合较系统的1V1定制提升，尤其写作/口语输出项。', originalPrice: 900, bestPrice: 620, totalHours: '40-58小时', mainHours: '定制化，每次课2小时', liveHours: '—', recordedHours: '—', supportPeriod: '12个月', scoreMin: 0, scoreMax: 7.5, targetMin: 4.5, targetMax: 7.5, retake: '无', retakeRule: '无', rating: '北京1V1优惠｜620/H', gifts: [] }),
    offlineProduct({ id: 'offline-2026-1v1-60plus', category: '1V1', classType: '1V1', classSize: '私教', name: '紫藤雅思1V1-x小时（线下）≥60小时', level: '定制化', target: '长期系统提升', suitable: '适合目标跨度较大、需要长期私教陪跑或高保障冲刺的学生。', originalPrice: 900, bestPrice: 600, totalHours: '≥60小时', mainHours: '定制化，每次课2小时', liveHours: '—', recordedHours: '—', supportPeriod: '18个月', scoreMin: 0, scoreMax: 7.5, targetMin: 4.5, targetMax: 7.5, retake: '无', retakeRule: '无', rating: '北京1V1优惠｜600/H', gifts: [] }),
    offlineProduct({
      id: 'offline-2026-fa', category: '班课+1V1', classType: '班课+1V1', name: '紫藤雅思线下A计划', level: '目标总分+0.5分', target: '68H面授班课任选+32H 1V1',
      suitable: '适合目标提升0.5分，需要线下班课打底，并用1V1补写作/口语短板。',
      originalPrice: 49600, bestPrice: 32800, totalHours: '193H', mainHours: '68H面授班课任选', liveHours: '32H 1V1 + 32H考前直播课（一阶+二阶）', recordedHours: recordedDetail, supportPeriod: '12个月',
      scoreMin: 0, scoreMax: 5.0, targetMin: 5.5, targetMax: 5.5, rating: '高端组合｜北京优惠',
      retake: '无', retakeRule: '无', gifts: ['剑桥雅思官方真题集']
    }),
    offlineProduct({
      id: 'offline-2026-fb', category: '班课+1V1', classType: '班课+1V1', name: '紫藤雅思线下B计划', level: '目标总分+1分', target: '68H面授班课任选+64H 1V1',
      suitable: '目标提升1分，既要系统线下学习，也需要较充分1V1解决输出项和小分短板。',
      originalPrice: 78400, bestPrice: 52800, totalHours: '225H', mainHours: '68H面授班课任选', liveHours: '64H 1V1 + 32H考前直播课（一阶+二阶）', recordedHours: recordedDetail, supportPeriod: '12个月',
      scoreMin: 4.5, scoreMax: 5.5, targetMin: 6.5, targetMax: 6.5, rating: '高端组合｜北京优惠',
      retake: '有', retakeRule: '完课后三个月内实考未达提升总分1分，可重修12小时1V1或“紫藤雅思线上大班”。要求提供入学有效成绩作为起始分、100%上完全部课程、100%完成课后作业。', gifts: ['剑桥雅思官方真题集']
    }),
    offlineProduct({
      id: 'offline-2026-fc', category: '班课+1V1', classType: '班课+1V1', name: '紫藤雅思线下C计划', level: '目标总分+1.5分', target: '68H面授班课任选+108H 1V1',
      suitable: '目标提升1.5分或小分要求高，需要线下班课系统学习与较高强度1V1冲刺。',
      originalPrice: 118000, bestPrice: 76800, totalHours: '269H', mainHours: '68H面授班课任选', liveHours: '108H 1V1 + 32H考前直播课（一阶+二阶）', recordedHours: recordedDetail, supportPeriod: '12个月',
      scoreMin: 4.5, scoreMax: 6.0, targetMin: 7.0, targetMax: 7.5, rating: '高端组合｜北京优惠',
      retake: '有', retakeRule: '完课后三个月内实考未达提升总分1.5分，可重修20小时1V1或“紫藤雅思线上大班”。要求提供入学有效成绩作为起始分、100%上完全部课程、100%完成课后作业。', gifts: ['剑桥雅思官方真题集']
    })
  ];

  function applyOfflineProducts2026() {
    try {
      if (!Array.isArray(products)) return;
      for (let i = products.length - 1; i >= 0; i -= 1) {
        const item = products[i];
        const isOldOffline = item.deliveryMode === '线下' || item.classType === '线下班课' || /线下|面授/.test(item.name || '') || /^offline-/.test(item.id || '');
        const isOldOneOnOne = item.classType === '1V1' || item.category === '1V1' || /1V1|私教/.test(item.name || '');
        if (isOldOffline || isOldOneOnOne) products.splice(i, 1);
      }
      products.push(...offlineSmallClassProducts2026);

      if (Array.isArray(categoryOrder)) {
        ['线下班课', '1V1', '班课+1V1'].forEach(cat => {
          if (!categoryOrder.includes(cat)) categoryOrder.push(cat);
        });
      }
    } catch (error) {
      console.warn('Offline product override skipped:', error);
    }
  }

  function money(value) {
    return value ? `¥${Number(value).toLocaleString('zh-CN')}` : '按实际报价确认';
  }

  function chooseOfflinePlan(current, target, preference) {
    const pool = offlineSmallClassProducts2026.filter(p => {
      if (preference === 'hybridClass') return p.classType === '班课+1V1';
      if (preference === 'oneOnOne') return p.classType === '1V1';
      if (preference === 'small' || preference === 'any' || !preference) return p.classType === '线下班课';
      return p.classType === '线下班课' || p.classType === '班课+1V1' || p.classType === '1V1';
    });
    return pool.find(p => current >= p.scoreMin && current <= p.scoreMax && target >= p.targetMin && target <= p.targetMax)
      || pool.find(p => target <= p.targetMax)
      || pool[pool.length - 1];
  }

  function patchOfflineAdvisor() {
    const form = document.querySelector('#matcher-form');
    if (!form) return;
    form.addEventListener('submit', () => {
      setTimeout(() => {
        const fd = new FormData(form);
        if (fd.get('delivery') !== 'offline' && !['hybridClass', 'oneOnOne'].includes(fd.get('classPreference'))) return;
        const current = Number(fd.get('currentScore') || 0);
        const target = Number(fd.get('targetScore') || 0);
        const preference = fd.get('classPreference');
        const plan = chooseOfflinePlan(current, target, preference);
        if (!plan) return;

        const output = document.querySelector('#advisor-output');
        const oldCard = document.querySelector('#offline-2026-card');
        if (oldCard) oldCard.remove();
        if (output) {
          const card = document.createElement('article');
          card.id = 'offline-2026-card';
          card.className = 'advisor-card';
          card.innerHTML = `<h3>新版北京线下产品匹配</h3><p><b>${plan.name}</b>｜${plan.level}｜${plan.target}</p><p><b>原价：</b>${money(plan.standardPrice)}${plan.rating?.includes('/H') ? '/H' : ''}｜<b>北京最优惠价：</b>${money(plan.bestPrice)}${plan.rating?.includes('/H') ? '/H' : ''}｜<b>总课时：</b>${plan.totalHours}｜<b>班型：</b>${plan.classSize}</p><p><b>课时拆分：</b>${plan.mainHours || '—'}；${plan.liveHours || '—'}；${plan.recordedHours || '—'}</p><p>${plan.suitable}</p><p class="muted">说明：已按新版北京线下产品覆盖原线下课；匹配和话术优先展示北京最优惠价，具体开班、优惠、重读/补偿规则以校区系统与合同为准。</p>`;
          output.appendChild(card);
        }

        const consultant = document.querySelector('#consultant-script');
        const parent = document.querySelector('#parent-script');
        const unitSuffix = plan.rating?.includes('/H') ? '/H' : '';
        const text = `\n\n【新版线下产品匹配｜北京优惠价】\n推荐：${plan.name}\n适合：${plan.level}，${plan.target}\n原价：${money(plan.standardPrice)}${unitSuffix}\n北京最优惠价：${money(plan.bestPrice)}${unitSuffix}\n总课时：${plan.totalHours}\n课时拆分：${plan.mainHours || '—'}；${plan.liveHours || '—'}；${plan.recordedHours || '—'}\n重读：${plan.retake}\n重读规则：${plan.retakeRule}\n推荐理由：${plan.suitable}\n备注：新版北京线下小班为3-6人，适合需要线下氛围、老师关注和学管督学的学生。`;
        if (consultant && !consultant.value.includes('【新版线下产品匹配｜北京优惠价】')) consultant.value += text;
        if (parent && !parent.value.includes('新版北京线下小班')) {
          parent.value += `\n\n如果选择线下，我们现在新版北京线下产品更适合按阶段匹配：当前基础和目标分对应「${plan.name}」，原价${money(plan.standardPrice)}${unitSuffix}，北京最优惠价${money(plan.bestPrice)}${unitSuffix}，小班3-6人，课堂关注度和学管跟进会比普通大班更强。`;
        }
      }, 180);
    });
  }

  applyOfflineProducts2026();
  document.addEventListener('DOMContentLoaded', patchOfflineAdvisor);
})();
