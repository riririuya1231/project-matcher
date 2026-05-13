(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const money = (value) => value ? `¥${Number(value).toLocaleString('zh-CN')}` : '按实际报价确认';

  const oneOnOnePackages = [
    { hours: 10, unit: 800, label: '10H短冲刺', bestFor: '考前2-4周，单科问题明确，适合口语/写作快速纠偏。' },
    { hours: 20, unit: 550, label: '20H专项突破', bestFor: '班课后补写作/口语，或听阅刷题方法纠偏。' },
    { hours: 40, unit: 520, label: '40H系统定制', bestFor: '基础一般、目标提升0.5-1分，需要完整听说读写闭环。' },
    { hours: 60, unit: 480, label: '60H高保障规划', bestFor: '基础差距较大、目标6.5/7.0+，或家长希望强服务跟进。' },
    { hours: 80, unit: 440, label: '80H长期规划', bestFor: '低基础到6.5/7.0、备考周期较长，追求最低小时单价。' }
  ];

  const classPackages = {
    largeBasic: { name: '线上大班｜紫藤基础班', price: 6888, stage: '基础段', fit: '当前4.0-4.5，先建立雅思题型和基础方法' },
    largeSkill: { name: '线上大班｜紫藤技巧班', price: 6888, stage: '技巧段', fit: '当前5.0-5.5，预算友好，先系统学方法' },
    largeFull: { name: '线上大班｜6.5全程班', price: 12800, stage: '基础+技巧', fit: '基础偏弱但目标6.5，预算优先' },
    small55: { name: '线上小班｜5.5 VIP小班', price: 12600, stage: '4.5→5.5', fit: '当前4.5左右，目标5.5' },
    small65: { name: '线上小班｜6.5 VIP小班', price: 12600, stage: '5.5/6.0→6.5', fit: '当前5.5-6.0，目标6.5/7.0' },
    small70: { name: '线上小班｜7.0 VIP小班', price: 11800, stage: '6.5→7.0+', fit: '当前6.5左右，目标7.0+' },
    offline: { name: '线下班课｜面授强化班', price: 0, stage: '线下系统段', fit: '需要线下氛围、固定节奏和督学跟进' },
    flight: { name: '飞跃计划｜1V1主课+督导', price: 0, stage: '高保障段', fit: '目标高、周期紧、自律一般或家长期望强服务' }
  };

  const teacherAdvantages = [
    '授课老师强调雅思官方认证与单科高分，听、说、读、写可按强项分科匹配。',
    '部分老师具备海外名校硕士背景、10年+授课经验，熟悉不同基础学生的提分路径。',
    '宣传老师即授课老师，课后答疑也由授课老师承接，避免“前端包装和实际授课脱节”。',
    '写作/口语可做批改、点评、表达纠错和考前预测题训练，更适合解决输出项卡分。'
  ];

  const groupAdvantages = [
    '高顿集团2006年成立，财经与职业教育背景强，紫藤国际教育承接语言培训、留学申请、国际课程等产品线。',
    '服务不是只卖课时，而是从入学诊断、学习档案、课程规划、课堂跟进、作业批改、阶段测试、模考反馈到出分追踪形成闭环。',
    '总部教研会跟踪一线考情，结合1/5/9月口语换库、机经、高频题和自研讲义持续更新。',
    '可结合雅思、留学、国际课程多产品线做长期规划，不止解决一次考试，也能衔接后续申请。'
  ];

  const questionBank = {
    purpose: [
      '这次雅思主要是留学申请、研究生申请、能力提升，还是后面有移民/求职用途？',
      '目标分有没有学校或项目明确要求？总分和小分要求分别是多少？',
      '最晚什么时候需要出分？是要赶申请节点，还是希望尽早拿到一个安全分数？'
    ],
    level: [
      '之前考过雅思吗？如果没考过，四级/六级/高考英语/校内英语大概是什么水平？',
      '听说读写里面你自己感觉最卡的是哪一项？写作和口语有没有被老师批改/点评过？',
      '平时每天能投入多久？是适合固定跟班，还是时间更适合一对一定制？'
    ],
    decision: [
      '预算上是更想先控制成本，还是更看重一次性规划稳一点？',
      '你更接受先做入学测试定位，还是先约一次试听让老师直接看问题？',
      '如果测出来适合班课+1V1组合，是希望我给你拆开列清每一部分费用，方便你自己选择吗？'
    ]
  };

  const objectionScripts = {
    noTime: '我理解您最近比较忙，但雅思这个事情越往后拖，后面留给刷题、写作批改和口语调整的时间就越少。我们可以先不急着定大课包，先安排一次测评/试听，把孩子目前差在哪、要补多少小时先看清楚，这样后面选班课还是1V1都不会盲选。',
    expensive: '价格这块我建议不要只看单小时/单课包，因为雅思真正影响结果的是“系统课+反馈+督学+模考”的闭环。如果预算优先，可以先用班课把题型方法和基础框架搭起来，再把1V1只放在写作/口语短板上，这样总费用会比全程1V1更可控。',
    compare: '您可以再对比，但建议重点看三点：是不是实际授课老师、课后有没有批改答疑和督学、能不能根据小分短板拆方案。我们这边不是简单卖课时，会把班课和1V1拆开规划，费用也分开列，您可以更清楚地判断哪部分值得上。',
    notUrgent: '如果目标只是能力提升当然可以慢慢来，但如果希望尽早出分，前期越早定位越省时间。雅思不是背几套题就能稳定提分，尤其写作口语需要批改和纠错周期，建议先做测试/试听，把学习路径定下来。'
  };

  function getScore(formData, key) {
    const value = Number(formData.get(key));
    return Number.isFinite(value) ? value : 0;
  }

  function getShortSkills(formData) {
    const skills = [
      ['listeningScore', '听力'], ['readingScore', '阅读'], ['writingScore', '写作'], ['speakingScore', '口语']
    ];
    const target = getScore(formData, 'targetScore');
    return skills
      .map(([key, label]) => ({ key, label, score: Number(formData.get(key) || 0) }))
      .filter(item => item.score && target && item.score <= target - 0.5)
      .sort((a, b) => a.score - b.score);
  }

  function chooseClassPlan(current, target, delivery, preference) {
    if (preference === 'flight') return classPackages.flight;
    if (delivery === 'offline') return classPackages.offline;
    if (current <= 4.5 && target >= 6.0) return classPackages.largeFull;
    if (current <= 4.5 && target <= 5.5) return classPackages.small55;
    if (current <= 5.5 && target >= 6.5) return classPackages.small65;
    if (current >= 6.5 && target >= 7.0) return classPackages.small70;
    if (preference === 'large') return current < 5 ? classPackages.largeBasic : classPackages.largeSkill;
    return target >= 7 ? classPackages.small70 : classPackages.small65;
  }

  function chooseOneOnOne(current, target, shortSkills, examDate, budget) {
    const gap = Math.max(0, target - current);
    const urgent = examDate ? (new Date(examDate) - new Date()) / 86400000 <= 45 : false;
    let hours = 20;
    if (gap >= 1.5) hours = 60;
    else if (gap >= 1) hours = 40;
    else if (shortSkills.length >= 2) hours = 30;
    else if (urgent) hours = 20;
    else hours = budget === 'budget' ? 10 : 20;

    if (target >= 7 && (shortSkills.some(s => ['写作', '口语'].includes(s.label)) || current < 6.5)) hours = Math.max(hours, 30);
    if (budget === 'guarantee') hours = Math.max(hours, 40);

    const pkg = oneOnOnePackages.find(p => p.hours >= hours) || oneOnOnePackages[oneOnOnePackages.length - 1];
    return { ...pkg, price: pkg.hours * pkg.unit };
  }

  function buildHybridPlan(formData) {
    const current = getScore(formData, 'currentScore');
    const target = getScore(formData, 'targetScore');
    const delivery = formData.get('delivery');
    const preference = formData.get('classPreference');
    const budget = formData.get('budget');
    const examDate = formData.get('examDate');
    const shortSkills = getShortSkills(formData);
    const classPlan = chooseClassPlan(current, target, delivery, preference);
    const onePlan = chooseOneOnOne(current, target, shortSkills, examDate, budget);
    const hasClassPrice = Number(classPlan.price) > 0;
    const total = (Number(classPlan.price) || 0) + onePlan.price;

    const skillText = shortSkills.length ? shortSkills.map(s => `${s.label}${s.score}`).join('、') : '暂未填写明显短板，建议用入学测评确认';
    const route = `${classPlan.name} → ${onePlan.label}`;

    return { current, target, delivery, preference, budget, examDate, shortSkills, classPlan, onePlan, hasClassPrice, total, skillText, route };
  }

  function addAdvisorFields() {
    const form = $('#matcher-form');
    if (!form || $('#student-name')) return;
    const extra = document.createElement('div');
    extra.className = 'advisor-extra-fields';
    extra.innerHTML = `
      <div class="advisor-divider">补充学生情况｜用于生成更准的话术</div>
      <label>学生姓名/称呼<input id="student-name" name="studentName" type="text" placeholder="如：李同学 / 家长未透露可空" /></label>
      <label>考试/出分节点<input id="exam-date" name="examDate" type="date" /></label>
      <label>所在城市/上课城市<input name="city" type="text" placeholder="如：北京 / 上海 / 线上为主" /></label>
      <label>目标院校/申请方向<input name="targetSchool" type="text" placeholder="如：英国硕士、港新申请、单纯提升" /></label>
      <label>学生目前情况<textarea name="studentSituation" placeholder="例：四级450，没考过雅思；口语不敢说，写作没人批改；每天可学2小时"></textarea></label>
      <label>家长/学生主要顾虑<select name="objection"><option value="none">暂无明显顾虑</option><option value="noTime">最近忙/没时间安排</option><option value="expensive">觉得价格高</option><option value="compare">想再对比机构</option><option value="notUrgent">觉得不着急/想暑期再学</option></select></label>
      <label>预算范围/倾向<input name="budgetNote" type="text" placeholder="如：先控制在1万内 / 可接受班课+少量1V1" /></label>
      <label>顾问备注<textarea name="consultantNote" placeholder="可填：已沟通内容、家长态度、是否约试听、是否需要逼单"></textarea></label>
    `;
    const submitBtn = form.querySelector('button[type="submit"]');
    form.insertBefore(extra, submitBtn);
  }

  function renderAdvisorModule(plan, formData) {
    const container = $('#advisor-output') || document.createElement('section');
    container.id = 'advisor-output';
    container.className = 'advisor-output';

    const objection = formData.get('objection');
    const studentSituation = formData.get('studentSituation') || '未补充，建议先问清当前基础、考试时间、用途、小分要求。';
    const targetSchool = formData.get('targetSchool') || formData.get('purpose') || '待确认';
    const budgetNote = formData.get('budgetNote') || '未填写，可先按效果优先推荐，再给预算友好备选。';
    const classPrice = plan.hasClassPrice ? money(plan.classPlan.price) : '需按线下/飞跃实际方案报价';
    const totalText = plan.hasClassPrice ? money(plan.total) : `${classPrice} + 1V1 ${money(plan.onePlan.price)}`;

    container.innerHTML = `
      <div class="advisor-title-row">
        <div><p class="eyebrow">Advisor Upgrade</p><h2>顾问增强方案：组合拆价 + 咨询思路 + 成交话术</h2></div>
        <button type="button" class="secondary-btn" id="copy-advisor-summary">复制增强方案</button>
      </div>

      <div class="advisor-grid">
        <article class="advisor-card strong-card">
          <h3>① 推荐路径</h3>
          <p class="route-text">${plan.route}</p>
          <p class="muted">当前${plan.current || '待测'} → 目标${plan.target || '待定'}；短板：${plan.skillText}</p>
        </article>
        <article class="advisor-card">
          <h3>② 费用拆分</h3>
          <div class="price-breakdown">
            <div><span>班课部分</span><b>${classPrice}</b><small>${plan.classPlan.stage}｜${plan.classPlan.fit}</small></div>
            <div><span>1V1部分</span><b>${money(plan.onePlan.price)}</b><small>${plan.onePlan.hours}H × ${money(plan.onePlan.unit)}/H｜${plan.onePlan.bestFor}</small></div>
            <div class="total"><span>组合参考合计</span><b>${totalText}</b><small>分开列清，方便顾问按预算删减或替换。</small></div>
          </div>
        </article>
      </div>

      <div class="advisor-grid three">
        <article class="advisor-card"><h3>③ 学生情况判断</h3><p>${studentSituation}</p><p><b>申请/用途：</b>${targetSchool}</p><p><b>预算倾向：</b>${budgetNote}</p></article>
        <article class="advisor-card"><h3>④ 下一步探需问题</h3><ul>${[...questionBank.purpose, ...questionBank.level, ...questionBank.decision].slice(0, 7).map(q => `<li>${q}</li>`).join('')}</ul></article>
        <article class="advisor-card"><h3>⑤ 当前异议处理</h3><p>${objectionScripts[objection] || '当前没有明显异议，可以直接推进入学测评/试听，并把班课和1V1费用拆开给家长看，降低决策压力。'}</p></article>
      </div>

      <div class="advisor-grid two">
        <article class="advisor-card"><h3>师资优势可复制</h3><ul>${teacherAdvantages.map(i => `<li>${i}</li>`).join('')}</ul></article>
        <article class="advisor-card"><h3>集团/服务优势可复制</h3><ul>${groupAdvantages.map(i => `<li>${i}</li>`).join('')}</ul></article>
      </div>

      <article class="advisor-card script-card">
        <h3>发给家长/学生的一段话</h3>
        <textarea id="advisor-parent-script" readonly>${buildParentScript(plan, formData)}</textarea>
      </article>
    `;

    const resultPanel = $('.result-panel');
    if (resultPanel && !$('#advisor-output')) resultPanel.appendChild(container);

    const copyBtn = $('#copy-advisor-summary');
    if (copyBtn) {
      copyBtn.onclick = () => {
        const text = buildAdvisorSummary(plan, formData);
        navigator.clipboard?.writeText(text);
        const toast = $('#toast');
        if (toast) { toast.textContent = '已复制增强方案'; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 1600); }
      };
    }

    enhanceExistingScripts(plan, formData);
  }

  function buildAdvisorSummary(plan, formData) {
    const classPrice = plan.hasClassPrice ? money(plan.classPlan.price) : '需按实际班型报价';
    return `【学生情况】\n${formData.get('studentSituation') || '待补充'}\n\n【推荐路径】\n${plan.route}\n当前${plan.current || '待测'} → 目标${plan.target || '待定'}；短板：${plan.skillText}\n\n【费用拆分】\n1）班课：${plan.classPlan.name}，${classPrice}，作用：${plan.classPlan.fit}\n2）1V1：${plan.onePlan.label}，${plan.onePlan.hours}H × ${money(plan.onePlan.unit)}/H = ${money(plan.onePlan.price)}，作用：${plan.onePlan.bestFor}\n3）组合参考合计：${plan.hasClassPrice ? money(plan.total) : `${classPrice} + ${money(plan.onePlan.price)}`}\n\n【咨询推进】\n先确认用途/小分/出分时间，再建议入学测评或试听。预算敏感则保留班课，减少1V1小时；效果优先则班课+1V1组合更稳。\n\n【师资优势】\n${teacherAdvantages.join('\n')}\n\n【集团优势】\n${groupAdvantages.join('\n')}`;
  }

  function buildParentScript(plan, formData) {
    const name = formData.get('studentName') || '同学';
    const classPrice = plan.hasClassPrice ? money(plan.classPlan.price) : '按实际班型确认';
    const total = plan.hasClassPrice ? money(plan.total) : `${classPrice}+${money(plan.onePlan.price)}`;
    const objection = formData.get('objection');
    const objectionText = objectionScripts[objection] ? `\n\n另外关于您现在的顾虑：${objectionScripts[objection]}` : '';
    return `${name}目前更建议不要只看单一班型，而是按“班课打底 + 1V1补短板”的方式拆开规划。班课部分可以先用「${plan.classPlan.name}」，主要解决${plan.classPlan.fit}，参考费用${classPrice}；1V1部分建议先配${plan.onePlan.hours}小时，重点放在${plan.skillText}，参考费用${money(plan.onePlan.price)}。这样两部分费用是分开列清的，后续您可以根据预算选择：预算优先就先上班课，短板明显再加1V1；如果希望尽早出分，就建议组合一起推进，整体参考${total}。\n\n我们这边优势不是单纯卖课时，老师会根据入学测试和小分短板来拆学习重点，写作/口语这种输出项也会有批改、点评和课后答疑；同时高顿紫藤有学管督学、阶段测试、模考反馈和考前资料，学习闭环会更完整。建议先做一次测试/试听，把当前问题定位清楚，再最终确认选哪一版方案。${objectionText}`;
  }

  function enhanceExistingScripts(plan, formData) {
    const consultant = $('#consultant-script');
    const parent = $('#parent-script');
    const add = `\n\n【增强补充｜组合拆价】\n班课：${plan.classPlan.name}｜${plan.hasClassPrice ? money(plan.classPlan.price) : '需按实际报价'}｜${plan.classPlan.fit}\n1V1：${plan.onePlan.label}｜${plan.onePlan.hours}H × ${money(plan.onePlan.unit)}/H = ${money(plan.onePlan.price)}｜${plan.onePlan.bestFor}\n短板：${plan.skillText}\n推进：先测评/试听定位，再根据预算决定“先班课后1V1”或“班课+1V1同步”。`;
    if (consultant && !consultant.value.includes('【增强补充｜组合拆价】')) consultant.value += add;
    if (parent && !parent.value.includes('费用是分开列清')) parent.value += `\n\n补充说明：如果选择班课+1V1，我会把班课费用和1V1费用分开列清，您可以根据预算自由选择，不会让您盲目买一整个大课包。`;
  }

  function wireSubmitEnhancement() {
    const form = $('#matcher-form');
    if (!form) return;
    form.addEventListener('submit', () => {
      setTimeout(() => {
        const formData = new FormData(form);
        const plan = buildHybridPlan(formData);
        renderAdvisorModule(plan, formData);
      }, 80);
    });
  }

  function addStaticAdvisorLibrary() {
    const library = $('.library-section');
    if (!library || $('#advisor-library')) return;
    const section = document.createElement('section');
    section.id = 'advisor-library';
    section.className = 'advisor-library';
    section.innerHTML = `
      <div class="section-heading inline-heading"><div><p class="eyebrow">Consulting Library</p><h2>顾问常用咨询库</h2><p class="muted">用于你在沟通里快速补充探需、卖点和异议处理。</p></div></div>
      <div class="advisor-grid three">
        <article class="advisor-card"><h3>探需顺序</h3><ol><li>用途：留学/能力提升/移民/求职</li><li>目标：总分、小分、最晚出分时间</li><li>基础：雅思/四六级/高考英语/入班测</li><li>短板：听说读写哪项最弱</li><li>偏好：线上线下、班课1V1、预算</li><li>决策：是否试听/谁付款/何时能定</li></ol></article>
        <article class="advisor-card"><h3>推荐逻辑</h3><ol><li>预算优先：线上大班/小班打底</li><li>效果优先：小班 + 1V1短板</li><li>高保障：飞跃计划或40H+1V1</li><li>写作口语低：优先1V1批改点评</li><li>考试近：减少铺垫，直接专项冲刺</li></ol></article>
        <article class="advisor-card"><h3>收口话术</h3><p>“我先不建议您直接盲选大课包，我们先把班课和1V1拆开列清：哪部分负责系统学习，哪部分负责补短板，费用也分开看。这样您可以根据预算自由选择，同时不耽误出分节奏。”</p></article>
      </div>`;
    library.appendChild(section);
  }

  document.addEventListener('DOMContentLoaded', () => {
    addAdvisorFields();
    wireSubmitEnhancement();
    addStaticAdvisorLibrary();
  });
})();
